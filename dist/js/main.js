// Navbar Mobile
const navMobileBtn = document.getElementById("nav-mobile-btn"),
  navMenu = document.getElementById("nav-menu"),
  navMobileIcon = document.getElementById("nav-mobile-icon");

const openedClass = "nav-open",
  closedClass = "h-0",
  openClassIcon = "ri-arrow-down-s-line",
  closeClassIcon = "ri-close-fill";

navMobileBtn.addEventListener("click", () => {
  if (navMenu.classList.contains(closedClass)) {
    navMenu.classList.remove(closedClass);
    navMenu.classList.add(openedClass);
    navMobileIcon.classList.remove(openClassIcon);
    navMobileIcon.classList.add(closeClassIcon);
  } else {
    navMenu.classList.remove(openedClass);
    navMenu.classList.add(closedClass);
    navMobileIcon.classList.remove(closeClassIcon);
    navMobileIcon.classList.add(openClassIcon);
  }
});

// Swiper
const swiper = new Swiper(".swiper", {
  loop: true,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  slidesPerView: 3,
  spaceBetween: 20,
  breakpoints: {
    320: {
      slidesPerView: 1,
    },
    960: {
      slidesPerView: 2,
    },
    1200: {
      slidesPerView: 3,
    },
  },
});
