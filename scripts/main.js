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

// img.style.opacity = "1";
// cart.style.opacity = "0";

// container.addEventListener("click", () => {
//     if (img.style.opacity === "1") {
//         img.style.opacity = "0.3";
//         cart.style.opacity = "1";
//     } else if (img.style.opacity === "0.3") {
//         img.style.opacity = "1";
//         cart.style.opacity = "0";
//     }
// });

const displayedImage = document.querySelector(".displayed-img");
const thumbBar = document.querySelector(".thumb-bar");
const textArea = document.querySelector("#textarea");

const images = ["david-profile-icon.png", "josh-profile-icon.png", "john-profile-icon.png", "steve-profile-icon.png", "rebeca-profile-icon.png", "miranda-profile-icon.png", "jennifer-profile-icon.png", "julia-profile-icon.png"];

const alts = {
    "david-profile-icon.png" : "Bearded man with glasses smiling",
    "josh-profile-icon.png" : "Green haired nerdy boy smiling",
    "john-profile-icon.png" : "Orange hair man with glasses smiling",
    "steve-profile-icon.png" : "Brown haired man wearing a lab coat smiling",
    "rebeca-profile-icon.png" : "Nerdy girl with glasses smiling",
    "miranda-profile-icon.png" : "Orange long hair woman smiling",
    "jennifer-profile-icon.png" : "Girl with long dark hair smiling",
    "julia-profile-icon.png" : "Girl with pink ponytail hair smiling"
}

const info = {
    "david-profile-icon.png" : "I'm 23 years old. I work as a salesman at a guitar shop and have a YouTube channel that I use for cellphone reviews.",
    "josh-profile-icon.png" : "I'm studying IT in college and I'm usually looking for good priced electronics to update my twitch live setup.",
    "john-profile-icon.png" : "I'm a programmer and I'm continually learning more about digital content to maintain my knowledge of features and accessibility.",
    "steve-profile-icon.png" : "I'm a fan of cell phones, my father used to sell them when I was a child and now I always have the newest one in my clinic as a way of remembering my father's work to help me complete my studies.",
    "rebeca-profile-icon.png" : "I'm studying photography and I usually see how the new cameras are performing.",
    "miranda-profile-icon.png" : "I'm a programmer who likes to know about new electronics and how they will contribute to our wonderful world!",
    "jennifer-profile-icon.png" : "I'm studying music and I already have my own songs posted on YouTube. The internet is getting faster and faster and I need to know the best prices to keep my home studio up to date.",
    "julia-profile-icon.png" : "I am a journalism student and I always watch reviews and study technology content to improve my professional knowledge. I'm actually working on a site specializing in technology."
}

for (const image of images) {
    const newImage = document.createElement("img");
    const section = document.createElement("section");
    newImage.setAttribute("src", `../images/${image}`);
    newImage.setAttribute("alt", alts[image]);
    newImage.setAttribute("role", "button");
    newImage.setAttribute("tabindex", "0");
    thumbBar.appendChild(section);
    section.appendChild(newImage);

    newImage.addEventListener("click", () => {
        localStorage.setItem("image", `../images/${image}`);
        localStorage.setItem("alt", alts[image]);
        localStorage.setItem("info", info[image]);

        displayedImage.setAttribute("src", `../images/${image}`);
        displayedImage.setAttribute("alt", `${alts[image]}`);
        textArea.textContent = info[image];
    });

    newImage.addEventListener("keypress", () => {
        localStorage.setItem("image", `../images/${image}`);
        localStorage.setItem("alt", alts[image]);
        localStorage.setItem("info", info[image]);

        displayedImage.setAttribute("src", `../images/${image}`);
        displayedImage.setAttribute("alt", `${alts[image]}`);
        textArea.textContent = info[image];
    });

    if (localStorage.getItem("image")) {
        const currentImage = localStorage.getItem("image");
        const currentAlt = localStorage.getItem("alt");
        const currentInfo = localStorage.getItem("info");

        displayedImage.setAttribute("src", currentImage);
        displayedImage.setAttribute("alt", currentAlt);
        textArea.textContent = currentInfo;
    } else {
        displayedImage.setAttribute("src", "../images/profile-icon.png")
        displayedImage.setAttribute("alt", "Profile Icon");
    }
}