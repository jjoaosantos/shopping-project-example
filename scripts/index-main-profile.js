const rememberDiv = document.querySelector(".remember");
const forgetDiv = document.querySelector(".forget");
const form = document.querySelector(".callout");
const personalGreeting = document.querySelector(".personal-greeting");
const userName = document.querySelector(".user-name");
const nameInput = document.querySelector("#entername");
const submitBtn = document.querySelector("#submitname");
const forgetBtn = document.querySelector("#forgetname");
const main = document.querySelector("main");
const section = document.querySelector("#profile-section");

form.addEventListener("submit", (e) => e.preventDefault());

submitBtn.addEventListener("click", () => {
    localStorage.setItem("name", nameInput.value);
    nameDisplayCheck();
});

forgetBtn.addEventListener("click", () => {
    localStorage.removeItem("name");
    localStorage.removeItem("image");
    localStorage.removeItem("alt");
    localStorage.removeItem("info");
    nameDisplayCheck();
});

function nameDisplayCheck() {
    if (localStorage.getItem("name")) {
        const name = localStorage.getItem("name");
        userName.textContent = name;
        personalGreeting.textContent = `Hello, ${name}!`;
        personalGreeting.style.display = "block";
        forgetDiv.style.display = "block";
        rememberDiv.style.display = "none";

        if (document.querySelector("a").getAttribute("class") === "profile-disabled") {
            document.querySelector("a").setAttribute("class", "profile-active");
            document.querySelector("a").setAttribute("href", "profile.html");
        }
    } else {
        personalGreeting.style.display = "none";
        forgetDiv.style.display = "none";
        rememberDiv.style.display = "block";

        if (document.querySelector("a").getAttribute("class") === "profile-disabled") {
            document.querySelector("a").setAttribute("href", "#");
            
            document.querySelector("a").addEventListener("click", () => {
                nameInput.focus();
            })
        } else {
            document.querySelector("a").setAttribute("class", "profile-disabled");

            document.querySelector("a").setAttribute("href", "#");
            
            document.querySelector("a").addEventListener("click", () => {
                nameInput.focus();
            })

            document.querySelector("#profilePage").style.display = "none";
            const p = document.createElement("p");
            p.textContent = "No results to display!";
            main.appendChild(p);
        }
    }
}

nameDisplayCheck();

const displayedImage = document.querySelector(".displayed-img");
const thumbBar = document.querySelector(".thumb-bar");
const formProfile = document.querySelector("#profilePage");
const textArea = document.querySelector("#textarea");
const editingTool = document.querySelector("#editingTool");
const rememberCheck = document.querySelector("#rememberCheck");
const editDiv = document.querySelector(".edit");
const rememberinfo = document.querySelector(".rememberInfo");

formProfile.addEventListener("submit", (e) => e.preventDefault());

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

        editingTool.disabled = false;
        textArea.disabled = true;
        editingTool.style.opacity = "1";
        editingTool.style.cursor = "pointer";
        rememberCheck.style.display = "none";

        editingTool.addEventListener("click", () => {
            editingTool.style.display = "none";
            rememberCheck.style.display = "block";
            textArea.disabled = false;
        });

        rememberCheck.addEventListener("click", () => {
            if (localStorage.getItem("info") !== textArea.textContent) {
                localStorage.setItem("info", textArea.value)
                editingTool.style.display = "block";
                rememberCheck.style.display = "none";
                textArea.disabled = true;
            } else {
                editingTool.style.display = "block";
                rememberCheck.style.display = "none";
                textArea.disabled = true;
            }
        });

    } else {
        displayedImage.setAttribute("src", "../images/profile-icon.png")
        displayedImage.setAttribute("alt", "Profile Icon");

        textArea.disabled = true;
        editingTool.disabled = true;
        editingTool.style.opacity = "0.6";
        editingTool.style.cursor = "auto";
        editingTool.style.display = "block";
        rememberCheck.style.display = "none";
    }

    // function userInfoDisplayCheck() {
        

        // if (localStorage.getItem("info") === info[image]) {
        //     const userInfo = localStorage.getItem("info");
        //     textArea.textContent = userInfo;
        //     editingTool.style.display = "block";
        //     rememberCheck.style.display = "none";
        //     textArea.disabled = true;
        // } else if (localStorage.getItem("info") !== info[image]) {
        //     const userInfo = localStorage.setItem("info", textArea.value);
        //     textArea.textContent = userInfo;
        //     editingTool.style.display = "block";
        //     rememberCheck.style.display = "none";
        //     textArea.disabled = true;
        // }
    // }

    // if (localStorage.getItem("info")) {
    //     editingTool.style.display = "none"
    //     rememberCheck.style.display = "block";
    // } else {
    //     editingTool.style.display = "block"
    //     rememberCheck.style.display = "none";
    //     textArea.disabled = true;

    //     editingTool.addEventListener("click", () => {
    //         if (localStorage.getItem("userInfo")) {
    //             localStorage.removeItem("userInfo");
    //             userInfoDisplayCheck();
    //         } else {
    //             editingTool.style.display = "none"
    //             rememberCheck.style.display = "block";
    //             textArea.disabled = false;
    //         }
    //     });

    //     rememberCheck.addEventListener("click", () => {
    //         localStorage.setItem("userInfo", textArea.value);
    //         userInfoDisplayCheck();
    //     })

    //     function userInfoDisplayCheck() {
    //         if (localStorage.getItem("userInfo")) {
    //             const userInfo = localStorage.getItem("userInfo");
    //             textArea.textContent = userInfo;
    //             editingTool.style.display = "block"
    //             rememberCheck.style.display = "none";
    //             textArea.disabled = true;
    //         } else {
    //             editingTool.style.display = "none"
    //             rememberCheck.style.display = "block";
    //             textArea.disabled = false;
    //         }
    //     }
    // }
}