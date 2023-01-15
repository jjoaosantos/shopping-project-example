const rememberDiv = document.querySelector(".remember");
const forgetDiv = document.querySelector(".forget");
const form = document.querySelector(".callout");
const personalGreeting = document.querySelector(".personal-greeting");
const nameInput = document.querySelector("#entername");
const submitBtn = document.querySelector("#submitname");
const forgetBtn = document.querySelector("#forgetname");
const profileImgLink = document.querySelector("#profile-img-link");

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
    imgDisplayCheck();
});

function nameDisplayCheck() {
    if (localStorage.getItem("name")) {
        const name = localStorage.getItem("name");
        personalGreeting.textContent = `Hello, ${name}!`;
        personalGreeting.style.display = "block";
        forgetDiv.style.display = "block";
        rememberDiv.style.display = "none";
        profileImgLink.setAttribute("href", "profile.html");

        if (document.querySelector("a").getAttribute("class") === "profile-disabled") {
            document.querySelector("a").setAttribute("class", "profile-active");
            document.querySelector("a").setAttribute("href", "profile.html");
        }
    } else {
        personalGreeting.style.display = "none";
        forgetDiv.style.display = "none";
        rememberDiv.style.display = "block";
        profileImgLink.setAttribute("href", "#");

        document.querySelector("a").setAttribute("class", "profile-disabled");
        document.querySelector("a").setAttribute("href", "#");

        document.querySelector("a").addEventListener("click", () => {
            nameInput.focus();
        });
    }
}

function imgDisplayCheck() {
    if (localStorage.getItem("image")) {
        const currentImage = localStorage.getItem("image");
        const currentAlt = localStorage.getItem("alt");
        profileImgLink.style.backgroundImage = `url('${currentImage}')`;
        profileImgLink.setAttribute("alt", `${currentAlt}`);
        profileImgLink.setAttribute("href", "profile.html");
    } else {
        profileImgLink.style.backgroundImage = "url('/images/profile-icon.png')";
        profileImgLink.setAttribute("href", "#");
        profileImgLink.setAttribute("alt", "Profile Icon");
    }
}

imgDisplayCheck();
nameDisplayCheck();