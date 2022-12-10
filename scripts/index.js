const rememberDiv = document.querySelector(".remember");
const forgetDiv = document.querySelector(".forget");
const form = document.querySelector(".callout");
const personalGreeting = document.querySelector(".personal-greeting");
const nameInput = document.querySelector("#entername");
const submitBtn = document.querySelector("#submitname");
const forgetBtn = document.querySelector("#forgetname");

form.addEventListener("submit", (e) => e.preventDefault());

submitBtn.addEventListener("click", () => {
    localStorage.setItem("name", nameInput.value);
    nameDisplayCheck();
});

forgetBtn.addEventListener("click", () => {
    localStorage.removeItem("name");
    nameDisplayCheck();
});

function nameDisplayCheck() {
    if (localStorage.getItem("name")) {
        const name = localStorage.getItem("name");
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

        document.querySelector("a").setAttribute("class", "profile-disabled");
        document.querySelector("a").setAttribute("href", "#");

        document.querySelector("a").addEventListener("click", () => {
            nameInput.focus();
        });
    }
}

nameDisplayCheck();