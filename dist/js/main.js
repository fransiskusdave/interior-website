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

// Scroll Reveal Animations
const sr = ScrollReveal({
  origin: "bottom",
  duration: 3000,
  delay: 600,
  distance: "60px",
});

sr.reveal(".hero__text", { origin: "top" });
sr.reveal(".steps__step, .stats__item, .footer__item", {
  distance: "100px",
  interval: 100,
});
sr.reveal(".about__text", { origin: "left" });
sr.reveal(".about__img", {
  origin: "right",
  delay: 800,
});
sr.reveal(
  ".testimonial__bg, .work__subtitle, .news__subtitle, .contact__text",
  { delay: 800 }
);
sr.reveal(
  ".testimonial__title, .work__title, .stats, .news__title, .contact__container, .footer__copyright"
);
sr.reveal(".testimonial__slider, .work__grid", { delay: 1000 });
sr.reveal(".brands__img", {
  delay: 600,
  interval: 100,
  distance: "100px",
});
sr.reveal(".news__item", {
  delay: 1000,
  interval: 100,
  distance: "100px",
});
