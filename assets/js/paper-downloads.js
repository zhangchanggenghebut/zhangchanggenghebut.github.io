(() => {
  'use strict';

  const endpoint = document.currentScript.dataset.endpoint;
  const prefix = '/assets/papers/';
  const chinese = document.documentElement.lang.toLowerCase().startsWith('zh');
  const numerals = new Intl.NumberFormat(chinese ? 'zh-CN' : 'en');
  const fields = new Map();
  const totals = new Map();

  function render(file, total) {
    if (!Number.isSafeInteger(total) || total < 0) return;
    const current = Math.max(totals.get(file) || 0, total);
    totals.set(file, current);
    for (const field of fields.get(file) || []) {
      const number = numerals.format(current);
      field.textContent = chinese ? '论文下载次数 ' + number : 'Downloads ' + number;
    }
  }

  async function refresh() {
    try {
      const response = await fetch(endpoint, { credentials: 'omit', referrerPolicy: 'no-referrer', cache: 'no-store' });
      if (!response.ok) throw new Error();
      const data = await response.json();
      if (!data.counts || typeof data.counts !== 'object' || Array.isArray(data.counts)) throw new Error();
      for (const file of fields.keys()) render(file, data.counts[file] ?? 0);
    } catch {
      for (const [file, labels] of fields) {
        if (!totals.has(file)) {
          for (const label of labels) label.textContent = chinese ? '下载次数暂不可用' : 'Download count unavailable';
        }
      }
    }
  }

  function makeEventId() {
    if (typeof crypto.randomUUID === 'function') return crypto.randomUUID();
    const bytes = crypto.getRandomValues(new Uint8Array(16));
    bytes[6] = (bytes[6] & 15) | 64;
    bytes[8] = (bytes[8] & 63) | 128;
    const hex = Array.from(bytes, value => value.toString(16).padStart(2, '0')).join('');
    return [hex.slice(0, 8), hex.slice(8, 12), hex.slice(12, 16), hex.slice(16, 20), hex.slice(20)].join('-');
  }

  async function record(file) {
    const body = new URLSearchParams({ attachment: file, event: makeEventId() });
    for (let attempt = 0; attempt < 2; attempt += 1) {
      try {
        const response = await fetch(endpoint, {
          method: 'POST', body, credentials: 'omit', referrerPolicy: 'no-referrer', keepalive: true
        });
        if (response.ok) {
          const data = await response.json();
          if (data.attachment === file) render(file, data.total);
          return;
        }
        if (response.status < 500) return;
      } catch { /* A lost reply can be retried with the same event ID. */ }
      if (attempt === 0) await new Promise(resolve => setTimeout(resolve, 500));
    }
  }

  for (const link of document.querySelectorAll('a[download][href]')) {
    const url = new URL(link.href);
    if (url.origin !== location.origin || !url.pathname.startsWith(prefix) || !url.pathname.endsWith('.pdf')) continue;
    const file = url.pathname.slice(prefix.length);
    const wrapper = document.createElement('span');
    wrapper.className = 'paper-download-stat';
    const field = document.createElement('span');
    field.className = 'paper-download-number';
    field.textContent = chinese ? '论文下载次数 …' : 'Downloads …';
    field.title = chinese ? '从本站点击下载此附件的累计次数，中英文页面共用。' : 'Download clicks for this file across both language editions.';
    link.before(wrapper);
    wrapper.append(link, field);
    if (!fields.has(file)) fields.set(file, []);
    fields.get(file).push(field);
    // The original same-site link always performs the download, even if statistics are offline.
    link.addEventListener('click', event => {
      if (!event.defaultPrevented && event.button === 0) void record(file);
    });
    link.addEventListener('auxclick', event => {
      if (!event.defaultPrevented && event.button === 1) void record(file);
    });
  }
  if (fields.size > 0) {
    void refresh();
    window.addEventListener('pageshow', event => { if (event.persisted) void refresh(); });
  }
})();
