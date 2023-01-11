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
const forgetProfile = document.querySelector(".forgetBtn");
const profileImgLink = document.querySelector("#profile-img-link");

form.addEventListener("submit", (e) => e.preventDefault());

submitBtn.addEventListener("click", () => {
    localStorage.setItem("name", nameInput.value);
    nameDisplayCheck();
});

forgetProfile.addEventListener("click", () => {
    if (localStorage.getItem("image")) {
        localStorage.removeItem("name");
        localStorage.removeItem("image");
        localStorage.removeItem("alt");
        localStorage.removeItem("info");
    } else {
        localStorage.removeItem("name");
    }

    nameDisplayCheck();
    imgDisplayCheck();
});

forgetBtn.addEventListener("click", () => {
    localStorage.removeItem("name");
    localStorage.removeItem("image");
    localStorage.removeItem("alt");
    localStorage.removeItem("info");
    nameDisplayCheck();
    imgDisplayCheck();
});

function nameDisplayCheck() {
    if (localStorage.getItem("name")) {
        const name = localStorage.getItem("name");
        userName.textContent = name;
        personalGreeting.textContent = `Olá, ${name}!`;
        personalGreeting.style.display = "block";
        forgetDiv.style.display = "block";
        rememberDiv.style.display = "none";

        forgetProfile.disabled = false;
        forgetProfile.style.display = "block";

        if (document.querySelector("a").getAttribute("class") === "profile-disabled") {
            document.querySelector("a").setAttribute("class", "profile-active");
            document.querySelector("a").setAttribute("href", "perfil.html");
        }
    } else {
        personalGreeting.style.display = "none";
        forgetDiv.style.display = "none";
        rememberDiv.style.display = "block";
        forgetProfile.style.display = "none";
        forgetProfile.disabled = true;

        document.querySelector("#profilePage").style.display = "none";
        const p = document.createElement("p");
        p.textContent = "nenhum resultado para exibir!";
        main.appendChild(p);

        document.querySelector("a").setAttribute("class", "profile-disabled");
        document.querySelector("a").setAttribute("href", "#");

        document.querySelector("a").addEventListener("click", () => {
            nameInput.focus();
        });
    }
}

nameDisplayCheck();

const displayedImage = document.querySelector(".displayed-img");
const thumbBar = document.querySelector(".thumb-bar");
const formProfile = document.querySelector("#profilePage");
const textArea = document.querySelector("#textarea");
const editingTool = document.querySelector("#editingTool");
const rememberCheck = document.querySelector("#rememberCheck");
const resetBtn = document.querySelector("#resetinfo");
const editDiv = document.querySelector(".edit");
const rememberinfo = document.querySelector(".rememberInfo");
const reset = document.querySelector(".reset");

formProfile.addEventListener("submit", (e) => e.preventDefault());

const images = ["user-dave-icon.png", "user-josh-icon.png", "user-john-icon.png", "user-jeff-icon.png", "user-gina-icon.png", "user-anne-icon.png", "user-jenn-icon.png", "user-gaby-icon.png"];

const alts = {
    "user-dave-icon.png.png" : "Bearded man with glasses smiling",
    "user-josh-icon.png" : "Green haired nerdy boy smiling",
    "user-john-icon.png" : "Orange hair man with glasses smiling",
    "user-jeff-icon.png" : "Brown haired man wearing a lab coat smiling",
    "user-gina-icon.png" : "Nerdy girl with glasses smiling",
    "user-anne-icon.png" : "Orange long hair woman smiling",
    "user-jenn-icon.png" : "Girl with long dark hair smiling",
    "user-gaby-icon.png" : "Girl with pink ponytail hair smiling"
}

const info = {
    "user-dave-icon.png" : "I'm 23 years old. I work as a salesman at a guitar shop and have a YouTube channel that I use for cellphone reviews.",
    "user-josh-icon.png" : "I'm studying IT in college and I'm usually looking for good priced electronics to update my twitch live setup.",
    "user-john-icon.png" : "I'm a programmer and I'm continually learning more about digital content to maintain my knowledge of features and accessibility.",
    "user-jeff-icon.png.png" : "I'm a fan of cell phones, my father used to sell them when I was a child and now I always have the newest one in my clinic as a way of remembering my father's work to help me complete my studies.",
    "user-geni-icon.png" : "I'm studying photography and I usually see how the new cameras are performing.",
    "user-anne-icon.png" : "I'm a programmer who likes to know about new electronics and how they will contribute to our wonderful world!",
    "user-jenn-icon.png" : "I'm studying music and I already have my own songs posted on YouTube. The internet is getting faster and faster and I need to know the best prices to keep my home studio up to date.",
    "user-gaby-icon.png" : "I am a journalism student and I always watch reviews and study technology content to improve my professional knowledge. I'm actually working on a site specializing in technology."
}

for (const image of images) {
    const newImage = document.createElement("img");
    const section = document.createElement("section");
    newImage.setAttribute("src", `/images/${image}`);
    newImage.setAttribute("alt", alts[image]);
    newImage.setAttribute("role", "button");
    newImage.setAttribute("tabindex", "0");
    thumbBar.appendChild(section);
    section.appendChild(newImage);

    newImage.addEventListener("click", () => {
        localStorage.setItem("image", `/images/${image}`);
        localStorage.setItem("alt", alts[image]);
        
        if (resetBtn.disabled === false) {
            localStorage.setItem("info", textArea.value);
        } else {
            localStorage.setItem("info", info[image]);
        }

        imgDisplayCheck();
    });

    newImage.addEventListener("keypress", () => {
        localStorage.setItem("image", `/images/${image}`);
        localStorage.setItem("alt", alts[image]);
        
        if (resetBtn.disabled === false) {
            localStorage.setItem("info", textArea.value);
        } else {
            localStorage.setItem("info", info[image]);
        }

        imgDisplayCheck();
    });

    resetBtn.addEventListener("click", () => {
        localStorage.removeItem("image");
        localStorage.removeItem("alt");
        localStorage.removeItem("info");
        textArea.value = "";

        imgDisplayCheck();
    })

    editingTool.addEventListener("click", () => {
        editingTool.style.display = "none";
        rememberCheck.style.display = "block";

        textArea.disabled = false;
    });

    rememberCheck.addEventListener("click", () => {
        localStorage.setItem("info", textArea.value);
        resetBtn.disabled = false;
        imgDisplayCheck();
    });

    function imgDisplayCheck() {
        if (localStorage.getItem("image")) {
            const currentImage = localStorage.getItem("image");
            const currentAlt = localStorage.getItem("alt");
            const currentInfo = localStorage.getItem("info");
    
            displayedImage.setAttribute("src", currentImage);
            displayedImage.setAttribute("alt", currentAlt);
            textArea.textContent = currentInfo;

           
            profileImgLink.setAttribute("alt", `${currentAlt}`);
            profileImgLink.setAttribute("href", "perfil.html");
            profileImgLink.style.backgroundImage = `url('${currentImage}')`;
    
            editingTool.style.opacity = "1";
            editingTool.style.cursor = "pointer";
            editingTool.style.display = "block";
            rememberCheck.style.display = "none";
    
            textArea.disabled = true;
            editingTool.disabled = false;

            if (resetBtn.disabled === false && localStorage.getItem("info") !== info[currentImage.slice(8)]) {
                reset.style.display = "block";
            } else {
                resetBtn.disabled = true;
                reset.style.display = "none";
            }
        } else {
            displayedImage.setAttribute("src", "/images/profile-icon.png")
            displayedImage.setAttribute("alt", "Perfil ícone");
            
            profileImgLink.setAttribute("alt", "Perfil ícone");
            profileImgLink.setAttribute("href", "#");
            profileImgLink.style.backgroundImage = "url('/images/profile-icon.png')";
            
            editingTool.style.opacity = "0.6";
            editingTool.style.cursor = "auto";
            editingTool.style.display = "block";
            rememberCheck.style.display = "none";
            reset.style.display = "none";
    
            textArea.disabled = true;
            editingTool.disabled = true;
            resetBtn.disabled = true;
        }
    }
}

imgDisplayCheck();