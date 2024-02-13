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
