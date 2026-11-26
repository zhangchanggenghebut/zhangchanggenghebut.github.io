(function () {
  const page = document.querySelector(".projects-page");
  if (!page) return;
  const editionLink = document.querySelector("header .edition-link");

  function openLinkedSection() {
    const target = document.getElementById(window.location.hash.slice(1));
    if (editionLink) editionLink.hash = target ? target.id : "";
    const section = target && target.closest("details.project-section");
    if (section) {
      section.open = true;
      target.scrollIntoView();
    }
  }

  page.addEventListener("toggle", function (event) {
    const section = event.target;
    if (!section.matches("details.project-section")) return;

    if (!section.open && section.contains(document.activeElement)) {
      section.querySelector("summary").scrollIntoView({ block: "nearest" });
    }
    if (!editionLink) return;
    const target = document.getElementById(window.location.hash.slice(1));
    if (section.open) {
      editionLink.hash = section.contains(target) ? target.id : section.id;
    } else if (section.contains(document.getElementById(editionLink.hash.slice(1)))) {
      const remaining = target && target.closest(".project-section[open]")
        ? target
        : page.querySelector(".project-section[open]");
      editionLink.hash = remaining ? remaining.id : "";
    }
  }, true);

  openLinkedSection();
  window.addEventListener("hashchange", openLinkedSection);
})();
