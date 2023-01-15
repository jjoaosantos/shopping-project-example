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
        p.textContent = "Nenhum resultado para exibir!";
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
    "user-dave-icon.png" : "Homem barbudo com óculos sorrindo",
    "user-josh-icon.png" : "Menino nerd de cabelo verde sorrindo",
    "user-john-icon.png" : "Homem de cabelo laranja com óculos sorrindo",
    "user-jeff-icon.png" : "Homem de cabelo castanho vestindo um jaleco sorrindo",
    "user-gina-icon.png" : "Garota nerd com óculos sorrindo.",
    "user-anne-icon.png" : "Mulher de cabelo comprido laranja sorrindo",
    "user-jenn-icon.png" : "Garota com longos cabelos escuros sorrindo",
    "user-gaby-icon.png" : "Menina com cabelo rabo de cavalo rosa sorrindo"
}

const info = {
    "user-dave-icon.png" : "Tenho 23 anos, trabalho como vendedor em uma loja de violões e tenho um canal no YouTube que utilizo para fazer avaliações de celulares.",
    "user-josh-icon.png" : "Estou estudando TI na faculdade e geralmente busco por eletrônicos na internet com bom custo-benefício para melhorar minhas lives da Twitch.",
    "user-john-icon.png" : "Sou programador e estou continuamente aprendendo mais sobre conteúdo digital para manter meu conhecimento de recursos e acessibilidade.",
    "user-jeff-icon.png" : "Sou fã de celulares, meu pai vendia quando eu era criança e agora sempre tenho o mais novo em minha clínica como forma de lembrar do trabalho de meu pai para me ajudar a concluir meus estudos.",
    "user-gina-icon.png" : "Estou estudando fotografia e costumo procurar saber do desempenho das novas câmeras.",
    "user-anne-icon.png" : "Sou uma programadora que gosta de saber sobre novos eletrônicos e como eles irão contribuir para o nosso mundo maravilhoso!",
    "user-jenn-icon.png" : "Estou estudando música e já tenho minhas próprias músicas postadas no YouTube. A internet está cada vez mais rápida e preciso saber os melhores preços para manter meu home studio em dia.",
    "user-gaby-icon.png" : "Sou estudante de jornalismo e sempre assisto as avaliações de novos aparelhos e estudo conteúdos de tecnologia para aprimorar meus conhecimentos profissionais. Na verdade, estou trabalhando em um site especializado em tecnologia."
}

for (const image of images) {
    const newImage = document.createElement("img");
    const section = document.createElement("section");
    newImage.setAttribute("src", `/shopping-project-example/images/${image}`);
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
    
            displayedImage.setAttribute("src", `/shopping-project-example${currentImage}`);
            displayedImage.setAttribute("alt", currentAlt);
            textArea.textContent = currentInfo;

           
            profileImgLink.setAttribute("alt", `${currentAlt}`);
            profileImgLink.setAttribute("href", "perfil.html");
            profileImgLink.style.backgroundImage = `url('/shopping-project-example${currentImage}')`;
    
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
            displayedImage.setAttribute("src", "/shopping-project-example/images/profile-icon.png")
            displayedImage.setAttribute("alt", "Perfil ícone");
            
            profileImgLink.setAttribute("alt", "Perfil ícone");
            profileImgLink.setAttribute("href", "#");
            profileImgLink.style.backgroundImage = "url('/shopping-project-example/images/profile-icon.png')";
            
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