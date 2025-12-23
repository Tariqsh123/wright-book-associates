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


document.addEventListener("DOMContentLoaded", function () {

    const tracks = document.querySelectorAll(".marquee-track");

    tracks.forEach(track => {

        // Duplicate content for seamless loop
        track.innerHTML += track.innerHTML;

        let speed = 3;   // same speed for all
        let position = 0;

        function animate() {
            position -= speed;

            if (Math.abs(position) >= track.scrollWidth / 2) {
                // Reset position seamlessly
                position = 0;
            }

            track.style.transform = `translateX(${position}px)`;
            requestAnimationFrame(animate);
        }

        animate();
    });

});
