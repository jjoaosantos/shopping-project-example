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
const ptLang = document.querySelector("#ptLang");
const enLang = document.querySelector("#enLang");

select.addEventListener("change", updateLang);

function updateLang() {
    let collection = select.selectedOptions;

    for (let i = 0; i < collection.length; i++) {
        if (collection[i].label === 'EN (US)') {
            localStorage.setItem("lang", "en-us");
            window.location = enLang.value;
        } else if (collection[i].label === 'PT (BR)') {
            localStorage.setItem("lang", "pt-br");
            window.location = ptLang.value;
        }
    }
    selectDisplayCheck();
}

function selectDisplayCheck() {
    if (localStorage.getItem("lang") === "en-us" && window.location.pathname === enLang.value) {
        enLang.defaultSelected = true;
        ptLang.defaultSelected = false;
        
    } else if (localStorage.getItem("lang") === "pt-br" && window.location.pathname === ptLang.value) {
        ptLang.defaultSelected = true;
        enLang.defaultSelected = false;
    } else {
        if (window.location.pathname === enLang.value) {
            enLang.defaultSelected = true;
            ptLang.defaultSelected = false;
            localStorage.setItem("lang", "en-us");
        } else if (window.location.pathname === ptLang.value) {
            ptLang.defaultSelected = true;
            enLang.defaultSelected = false;
            localStorage.setItem("lang", "pt-br");
        }
    }
}

selectDisplayCheck();