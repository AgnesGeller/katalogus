document.addEventListener("DOMContentLoaded", () => {
  const pageFlip = new St.PageFlip(document.getElementById("flipbook"), {
    width: 600,
    height: 800,
    size: "stretch",
    minWidth: 300,
    maxWidth: 1000,
    minHeight: 400,
    maxHeight: 1200,
    drawShadow: true,
    flippingTime: 1000,
    usePortrait: true,
    startPage: 0,
    autoSize: true,
    showCover: true,
    mobileScrollSupport: true
  });

  // Betölti az összes lapot
  pageFlip.loadFromHTML(document.querySelectorAll(".page"));

  // Szűrőgombok kezelése
  const buttons = document.querySelectorAll("#filter-menu button");

  buttons.forEach(button => {
    button.addEventListener("click", () => {
      const filterValue = button.dataset.filter;
      const allPages = document.querySelectorAll(".page");

      allPages.forEach(page => {
        const pageClasses = Array.from(page.classList);
        let showPage = false;

        if (filterValue === "all") {
          showPage = true;
        } else if (filterValue === "összes-növény" && pageClasses.includes("növény")) {
          showPage = true;
        } else if (filterValue === "összes-terko" && pageClasses.includes("terko")) {
          showPage = true;
        } else if (filterValue.startsWith(".")) {
          const required = filterValue.replace(/^\./, "").split(".");
          showPage = required.every(cls => pageClasses.includes(cls));
        }

        page.style.display = showPage ? "block" : "none";
      });

      // Átlapozás az első látható oldalra
      const visiblePages = Array.from(document.querySelectorAll(".page")).filter(p => p.style.display !== "none");
      if (visiblePages.length > 0) {
        const firstIndex = Array.from(document.querySelectorAll(".page")).indexOf(visiblePages[0]);
        pageFlip.turnToPage(firstIndex);
      }
    });
  });
});