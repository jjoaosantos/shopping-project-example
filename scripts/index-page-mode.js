const lightModeBtn = document.querySelector("#lightModeBtn");
const darkModeBtn = document.querySelector("#darkModeBtn");
const darkStyleLink = document.querySelector("#darkStyle");

darkModeBtn.addEventListener("click", () => {
    localStorage.setItem("dark-mode", true);
    darkModeDisplayCheck();
});

lightModeBtn.addEventListener("click", () => {
    localStorage.removeItem("dark-mode");
    darkModeDisplayCheck();
})

function darkModeDisplayCheck() {

    if (localStorage.getItem("dark-mode")) {
        darkStyleLink.setAttribute("href", "/shopping-project-example/style/dark-style.css");
        darkStyleLink.style.display = "block";
        darkModeBtn.style.display = "none";
        lightModeBtn.style.display = "block";
    } else {
        darkStyleLink.setAttribute("href", "#");
        darkStyleLink.style.display = "none";
        darkModeBtn.style.display = "block";
        lightModeBtn.style.display = "none";
    }
}

darkModeDisplayCheck();