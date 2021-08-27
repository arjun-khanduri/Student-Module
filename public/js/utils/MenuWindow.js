const overlay = document.querySelector(".overlay");
const alertMessage = document.getElementById("alert");
const megaMenu = document.querySelector(".nav__menu--mega");
const menu = document.querySelector(".nav__menu--submenu");

if (alertMessage) {
  // console.log("Hiding Alert Message!");
  alertMessage.style.display = "none";
}

const closeMegaMenu = function () {
  menu.classList.remove("submenu--active");
  overlay.classList.add("nav__hidden");
};

if (menu) {
  document.addEventListener("keydown", function (e) {
    if (e.key === "Escape" && menu.classList.contains("submenu--active")) {
      closeMegaMenu();
    }
  });
}

const openMegaMenu = function () {
  if (menu) {
    menu.classList.toggle("submenu--active");
    overlay.classList.toggle("nav__hidden");
  }
};

overlay?.addEventListener("click", closeMegaMenu);
megaMenu?.addEventListener("click", openMegaMenu);
