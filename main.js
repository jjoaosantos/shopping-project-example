const menuBtn = document.getElementById("menuBtn");
const navBar = document.getElementById("menuNavigator");

navBar.style.display = "none";

menuBtn.addEventListener("click", () => {
    if (menuBtn.getAttribute("aria-expanded") === "false") {
        menuBtn.setAttribute("aria-expanded", "true");
        menuBtn.style.backgroundImage = "url('../images/x-icon.svg')";
        menuBtn.style.backgroundSize = "80%";
        navBar.style.display = "block";
    } else if (menuBtn.getAttribute("aria-expanded") === "true") {
        menuBtn.setAttribute("aria-expanded", "false");
        menuBtn.style.backgroundImage = "url('../images/menu-bar.svg')";
        menuBtn.style.backgroundSize = "contain";
        navBar.style.display = "none";
    }
});