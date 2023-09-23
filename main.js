let nav = document.querySelector("header nav");
let menu = document.getElementById("menu");
let closeMenu = document.getElementById("close-menu");

let features = document.getElementById("features");
let featuresUl = document.querySelector("header nav .nav-left li .features-ul");
let featuresUpDown = document.querySelector(
  "header nav .nav-left #features img"
);

let company = document.getElementById("company");
let companyUl = document.querySelector("header nav .nav-left li .company-ul");
let companyUpDown = document.querySelector("header nav .nav-left #company img");

menu.onclick = () => (nav.style.right = "0");

closeMenu.onclick = () => (nav.style.right = "-150%");

features.onclick = () => setImage(featuresUl, featuresUpDown);

company.onclick = () => setImage(companyUl, companyUpDown);

function setImage(elt, img) {
  elt.classList.toggle("active");
  if (elt.classList.contains("active")) {
    img.setAttribute("src", "images/icon-arrow-up.svg");
  } else {
    img.setAttribute("src", "images/icon-arrow-down.svg");
  }
}
