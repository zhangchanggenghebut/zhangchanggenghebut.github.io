// Old category bookmarks pointed to headings inside the English archive.
(function () {
  const archive = document.querySelector('[data-news-archive="all"]');
  const all = archive.querySelector('[data-filter="all"]');
  const papers = archive.querySelector('[data-filter="papers"]');
  const edition = document.querySelector('.language-switch .edition-link');

  function applyBookmark() {
    if (location.hash === '#papers_cap') {
      location.replace(papers.href);
      return;
    }
    const activity = location.hash === '#activity_cap';
    archive.querySelector('.archive-legacy-heading').hidden = !activity;
    archive.querySelectorAll('[data-news-category="papers"]').forEach(function (row) {
      row.hidden = activity;
    });
    if (activity) {
      all.removeAttribute('aria-current');
    } else {
      all.setAttribute('aria-current', 'page');
    }
    edition.hash = activity ? '#activity_cap' : '';
  }

  applyBookmark();
  window.addEventListener('hashchange', applyBookmark);
})();
