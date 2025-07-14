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

  // Betöltés HTML elemekből
  pageFlip.loadFromHTML(document.querySelectorAll(".page"));
});

const buttons = document.querySelectorAll("#filter-menu button");

buttons.forEach(btn => {
  btn.addEventListener("click", () => {
    const filter = btn.dataset.filter;
    document.querySelectorAll(".page").forEach(page => {
      if (filter === "all" || page.classList.contains(filter)) {
        page.style.display = "block";
      } else {
        page.style.display = "none";
      }
    });
  });
});

<div id="flipbook">
  <!-- Tartalomjegyzék -->
  ... (Tartalomjegyzék lap)

  <!-- Növény lapok -->
  ... (Levendula, Rozmaring, Szalmagyopár stb.)

  <!-- Térkő lapok -->
  ... (Prémium térkő, Modern burkolat, stb.)

  <!-- Referenciák -->
  ... (Előtte / Utána, projektleírások)
</div>

buttons.forEach(btn => {
  btn.addEventListener("click", () => {
    const filter = btn.dataset.filter;

    document.querySelectorAll(".page").forEach(page => {
      const pageClasses = page.classList;
      page.style.display = "none";

      if (
        filter === "all" ||
        pageClasses.contains(filter) ||
        (filter === "összes-növény" && pageClasses.contains("növény")) ||
        (filter === "összes-terko" && pageClasses.contains("terko"))
      ) {
        page.style.display = "block";
      }
    });
  });
});
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

  // Betölti az összes .page elemet
  pageFlip.loadFromHTML(document.querySelectorAll(".page"));

  // Szűrőgomb működés
  const buttons = document.querySelectorAll("#filter-menu button");

  buttons.forEach((button) => {
    button.addEventListener("click", () => {
      const filter = button.dataset.filter;
      const pages = document.querySelectorAll(".page");

      pages.forEach((page) => {
        const classes = page.classList;

        if (
          filter === "all" ||
          classes.contains(filter) ||
          (filter === "összes-növény" && classes.contains("növény")) ||
          (filter === "összes-terko" && classes.contains("terko"))
        ) {
          page.style.display = "block";
        } else {
          page.style.display = "none";
        }
      });

      // újralapozás, ha elrejtett lapokat módosítottunk
      pageFlip.updateFromHTML();
    });
  });
});