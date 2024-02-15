AOS.init({
  duration: 1000,
});

const mobileMenu = document.querySelector(".header__menu-mobile");
const dropdown = document.querySelector(".header__menu-mobile-dropdown");
const dropdownLinks = dropdown.querySelectorAll("a");
const closeDropdownBtn = dropdown.querySelector("button");
const searchBtn = document.querySelector("#search-icon");
const searchForm = document.querySelector(".header__menu-search");
const searchClose = document.querySelector(".close-search");

searchBtn.addEventListener("click", () => {
  searchForm.classList.remove("hide-search");
  searchForm.classList.add("show-search");
});
searchClose.addEventListener("click", () => {
  searchForm.classList.remove("show-search");
  searchForm.classList.add("hide-search");
});
mobileMenu.addEventListener("click", () => {
  dropdown.classList.remove("hide-dropdown");
  dropdown.classList.add("show-dropdown");
});

dropdownLinks.forEach((link) => {
  link.addEventListener("click", () => {
    dropdown.classList.remove("show-dropdown");
    dropdown.classList.add("hide-dropdown");
  });
});

closeDropdownBtn.addEventListener("click", () => {
  dropdown.classList.remove("show-dropdown");
  dropdown.classList.add("hide-dropdown");
});
