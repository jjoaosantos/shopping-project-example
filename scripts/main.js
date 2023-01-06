const html = document.querySelector("html");
const body = document.querySelector("body");
const menuBtn = document.getElementById("menuBtn");
const navBar = document.getElementById("menuNavigator");
const list = document.querySelector("#list");
const ul = document.getElementById("list");

navBar.style.left = "-100vw";
list.style.display = "none";

menuBtn.addEventListener("click", () => {
    if (menuBtn.getAttribute("aria-expanded") === "false") {
        const blur = document.createElement("div");
        blur.setAttribute("class", "menu-expanded");
        blur.style.backgroundColor = "rgba(0, 0, 0, 0.808)";
        menuBtn.setAttribute("aria-expanded", "true");
        menuBtn.setAttribute("title", "Close menu");
        menuBtn.style.backgroundImage = "url('../images/x-icon.svg')";
        menuBtn.style.backgroundSize = "80%";
        navBar.style.left = "0px";
        html.style.overflow = "hidden";
        navBar.style.overflow = "auto";
        list.style.display = "block";
        body.appendChild(blur)
    } else {
        const blur = document.querySelector(".menu-expanded");
        menuBtn.setAttribute("aria-expanded", "false");
        menuBtn.setAttribute("title", "Open menu");
        menuBtn.style.backgroundImage = "url('../images/bars-icon.svg')";
        menuBtn.style.backgroundSize = "contain";
        navBar.style.left = "-100vw";
        html.style.overflow = "auto";
        list.style.display = "none";
        body.removeChild(blur)
    }
});