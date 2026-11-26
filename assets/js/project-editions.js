(function () {
  const page = document.querySelector(".projects-page, .student-panels");
  if (!page) return;
  const editionLink = document.querySelector("header .edition-link");

  function setEditionTarget(target) {
    if (!editionLink) return;
    const anchor = target && (target.closest("[data-edition-anchor]") || target);
    editionLink.hash = anchor ? anchor.id : "";
  }

  function openLinkedSection() {
    const target = document.getElementById(window.location.hash.slice(1));
    const section = target && target.closest("details.project-section");
    setEditionTarget(section ? target : null);
    if (section) {
      section.open = true;
      target.scrollIntoView();
    }
  }

  page.addEventListener("click", function (event) {
    const link = event.target.closest('a[href^="#"]');
    if (link && link.hash === window.location.hash) openLinkedSection();
  });

  page.addEventListener("toggle", function (event) {
    const section = event.target;
    if (!section.matches("details.project-section")) return;

    if (!section.open && section.contains(document.activeElement)) {
      section.querySelector("summary").scrollIntoView({ block: "nearest" });
    }
    if (!editionLink) return;
    const target = document.getElementById(window.location.hash.slice(1));
    if (section.open) {
      setEditionTarget(section.contains(target) ? target : section);
    } else if (section.contains(document.getElementById(editionLink.hash.slice(1)))) {
      const remaining = target && target.closest(".project-section[open]")
        ? target
        : page.querySelector(".project-section[open]");
      setEditionTarget(remaining);
    }
  }, true);

  openLinkedSection();
  window.addEventListener("hashchange", openLinkedSection);
})();
