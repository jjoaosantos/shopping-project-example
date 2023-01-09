const html = document.querySelector("html");
const body = document.querySelector("body");
const barsBtn = document.querySelector(".barsBtn");
const xBtn = document.querySelector(".xBtn");

const navBar = document.getElementById("menuNavigator");
const list = document.querySelector("#list");
const ul = document.getElementById("list");

barsBtn.style.display = "block";
xBtn.style.display = "none";
navBar.style.left = "-100vw";
list.style.display = "none";

barsBtn.addEventListener("click", () => {
    barsBtn.style.display = "none";
    xBtn.style.display = "block";

    const blur = document.createElement("div");
    blur.setAttribute("class", "menu-expanded");
    blur.style.backgroundColor = "rgba(0, 0, 0, 0.808)";
    navBar.style.left = "0px";
    html.style.overflow = "hidden";
    navBar.style.overflow = "auto";
    list.style.display = "block";
    body.appendChild(blur);
});

xBtn.addEventListener("click", () => {
    barsBtn.style.display = "block";
    xBtn.style.display = "none";

    const blur = document.querySelector(".menu-expanded");
    navBar.style.left = "-100vw";
    html.style.overflow = "auto";
    list.style.display = "none";
    body.removeChild(blur);
});

const select = document.querySelector("#changeLang");
select.addEventListener("change", () => {
    if (select.value === '/html/index.html') {
        localStorage.setItem("lang", "en-us");
        selectDisplayCheck();
        // console.log();
    } else if (select.value === '/html/br/index.html') {
        localStorage.setItem("lang", "pt-br");
        selectDisplayCheck();
    }
});

function selectDisplayCheck() {
    if (localStorage.getItem("en-us")) {
        document.getElementById("enLang").selected = true;
    } else if (localStorage.getItem("pt-br")) {
        document.getElementById("ptLang").selected = true;
    }
}

selectDisplayCheck();