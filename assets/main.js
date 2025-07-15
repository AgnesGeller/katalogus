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

  // Betölti a lapokat
  pageFlip.loadFromHTML(document.querySelectorAll(".page"));

  // Szűrőgomb működés
  const buttons = document.querySelectorAll("#filter-menu button");

  buttons.forEach(button => {
    button.addEventListener("click", () => {
      const filter = button.dataset.filter.replace(/^\./, "");
      const pages = document.querySelectorAll(".page");

      pages.forEach(page => {
        const classList = Array.from(page.classList);
        const filterClasses = filter.split(".");
        const isMatch =
          filter === "all" ||
          (filter === "összes-növény" && classList.includes("növény")) ||
          (filter === "összes-terko" && classList.includes("terko")) ||
          filterClasses.every(cls => classList.includes(cls));

        // Display beállítása (nem újralapozás!)
        page.style.display = isMatch ? "block" : "none";
      });
    });
  });
});