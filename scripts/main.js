const html = document.querySelector("html");
const menuBtn = document.getElementById("menuBtn");
const navBar = document.getElementById("menuNavigator");
const ul = document.getElementById("list");
const container = document.querySelector(".container");
const img = document.querySelector(".image");
const cart = document.querySelector(".cart");

navBar.style.left = "-100vw";

menuBtn.addEventListener("click", () => {
    if (menuBtn.getAttribute("aria-expanded") === "false") {
        menuBtn.setAttribute("aria-expanded", "true");
        menuBtn.style.backgroundImage = "url('../images/x-icon.svg')";
        menuBtn.style.backgroundSize = "80%";
        navBar.style.left = "0px";
        html.style.overflow = "hidden";
        navBar.style.overflow = "auto";
    } else if (menuBtn.getAttribute("aria-expanded") === "true") {
        menuBtn.setAttribute("aria-expanded", "false");
        menuBtn.style.backgroundImage = "url('../images/menu-bar.svg')";
        menuBtn.style.backgroundSize = "contain";
        navBar.style.left = "-100vw";
        html.style.overflow = "auto";
    }
});


img.style.opacity = "1";
cart.style.opacity = "0";

container.addEventListener("click", () => {
    if (img.style.opacity === "1") {
        img.style.opacity = "0.3";
        cart.style.opacity = "1";
    } else if (img.style.opacity === "0.3") {
        img.style.opacity = "1";
        cart.style.opacity = "0";
    }
});