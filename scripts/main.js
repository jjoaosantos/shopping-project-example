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
    "david-profile-icon.png" : "Bearded man with glasses smiling.",
    "josh-profile-icon.png" : "Green haired nerdy boy smiling.",
    "john-profile-icon.png" : "Orange hair man with glasses smiling.",
    "steve-profile-icon.png" : "Brown haired man wearing a lab coat smiling.",
    "rebeca-profile-icon.png" : "Nerdy girl with glasses smiling.",
    "miranda-profile-icon.png" : "Orange long hair woman smiling.",
    "jennifer-profile-icon.png" : "Girl with long dark hair smiling.",
    "julia-profile-icon.png" : "Girl with pink ponytail hair smiling."
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

    if (!localStorage.getItem("image")) {
        displayedImage.setAttribute("src", "../images/profile-icon.png")
        displayedImage.setAttribute("alt", "Profile Icon");
    } else {
        const currentImage = localStorage.getItem("image");
        displayedImage.setAttribute("src", currentImage);

        newImage.addEventListener("click", () => {
            localStorage.setItem("image", `../images/${image}`);
            displayedImage.setAttribute("src", `../images/${image}`);
            displayedImage.setAttribute("alt", `${alts[image]}`);
            textArea.textContent = info[image]
        });

        newImage.addEventListener("keypress", () => {
            localStorage.setItem("image", `../images/${image}`);
            displayedImage.setAttribute("src", `../images/${image}`);
            displayedImage.setAttribute("alt", `${alts[image]}`);
            textArea.textContent = info[image];
        })
    }
}