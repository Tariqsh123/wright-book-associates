$(document).ready(function () {

  /* WOW Animation */
  if (typeof WOW !== "undefined") {
    new WOW().init();
  }

  /* Navbar Services Hover */
  const services = document.querySelector(".navbar ul li.services_dropdown");
  if (services) {
    services.addEventListener("mouseenter", () => {
      services.classList.add("active");
    });

    services.addEventListener("mouseleave", () => {
      services.classList.remove("active");
    });
  }

  /* Mobile Menu Toggle */
  const menuToggle = document.querySelector(".menu-toggle");
  const mainMenu = document.querySelector(".navbar .main_menu");

  if (menuToggle && mainMenu) {
    menuToggle.addEventListener("click", () => {
      mainMenu.classList.toggle("show");
      menuToggle.classList.toggle("active");
    });
  }

});
