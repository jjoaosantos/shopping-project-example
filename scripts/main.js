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
        menuBtn.style.backgroundImage = "url('../images/menu-bar.svg')";
        menuBtn.style.backgroundSize = "contain";
        navBar.style.left = "-100vw";
        html.style.overflow = "auto";
        list.style.display = "none";
        body.removeChild(blur)
    }
});

const footerSec = document.querySelector("footer section");
const heartBtn = document.querySelector("#heartBtn");
heartBtn.addEventListener("click", () => {
    if (heartBtn.getAttribute("aria-expanded") === "false") {
        heartBtn.setAttribute("aria-expanded", "true");
        const para = document.createElement("p");
        para.textContent = "1";
        footerSec.appendChild(para);
        
    } else {
        heartBtn.setAttribute("aria-expanded", "false");
        const para = document.querySelector("footer section p");
        footerSec.removeChild(para);
    }
})