(function () {
  const link = document.querySelector("header .edition-link");
  if (!link) return;

  function keepSection() {
    const id = window.location.hash.slice(1);
    link.hash = document.getElementById(id) ? id : "";
  }

  keepSection();
  window.addEventListener("hashchange", keepSection);
})();
