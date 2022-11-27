const menuBtn = document.getElementById("menuBtn");
const navBar = document.getElementById("menuNavigator");

navBar.style.display = "none";

menuBtn.addEventListener("click", () => {
    if (menuBtn.getAttribute("aria-expanded") === "false") {
        menuBtn.setAttribute("aria-expanded", "true");
        navBar.style.display = "block";
    } else if (menuBtn.getAttribute("aria-expanded") === "true") {
        menuBtn.setAttribute("aria-expanded", "false");
        navBar.style.display = "none";
    }
});