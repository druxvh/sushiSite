AOS.init({
  duration: 1000,
});

const mobileMenu = document.querySelector(".header__menu-mobile");
const dropdown = document.querySelector(".header__menu-mobile-dropdown");
const dropdownLinks = dropdown.querySelectorAll("a");
const closeDropdownBtn = dropdown.querySelector("button");

console.log(mobileMenu);
console.log(dropdown);
console.log(dropdownLinks);
console.log(closeDropdownBtn);

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
