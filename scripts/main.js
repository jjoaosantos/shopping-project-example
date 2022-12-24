const html = document.querySelector("html");
const menuBtn = document.getElementById("menuBtn");
const navBar = document.getElementById("menuNavigator");
const list = document.querySelector("#list");
const ul = document.getElementById("list");
const container = document.querySelector(".container");
const img = document.querySelector(".image");

navBar.style.left = "-100vw";
list.style.display = "none";

menuBtn.addEventListener("click", () => {
    if (menuBtn.getAttribute("aria-expanded") === "false") {
        menuBtn.setAttribute("aria-expanded", "true");
        menuBtn.style.backgroundImage = "url('../images/x-icon.svg')";
        menuBtn.style.backgroundSize = "80%";
        navBar.style.left = "0px";
        html.style.overflow = "hidden";
        navBar.style.overflow = "auto";
        list.style.display = "block";
    } else if (menuBtn.getAttribute("aria-expanded") === "true") {
        menuBtn.setAttribute("aria-expanded", "false");
        menuBtn.style.backgroundImage = "url('../images/menu-bar.svg')";
        menuBtn.style.backgroundSize = "contain";
        navBar.style.left = "-100vw";
        html.style.overflow = "auto";
        list.style.display = "none";
    }
});