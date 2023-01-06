const head = document.querySelector("head");
const lightModeBtn = document.querySelector("#lightModeBtn");
const darkModeBtn = document.querySelector("#darkModeBtn");

darkModeBtn.addEventListener("click", () => {
    localStorage.setItem("dark mode", true);
    darkModeDisplayCheck();
});

lightModeBtn.addEventListener("click", () => {
    localStorage.removeItem("dark mode");
    darkModeDisplayCheck();
})

function darkModeDisplayCheck() {

    if (localStorage.getItem("dark mode")) {
        const link = document.createElement("link");
        link.setAttribute("id", "darkStyle");
        head.appendChild(link);
        darkModeBtn.style.display = "none";
        lightModeBtn.style.display = "block";
        link.setAttribute("rel", "stylesheet");
        link.setAttribute("href", "../style/dark-style.css");
    } else {
        darkModeBtn.style.display = "block";
        lightModeBtn.style.display = "none";
        const link = document.querySelector("#darkStyle");
        head.removeChild(link);
    }
}

darkModeDisplayCheck();