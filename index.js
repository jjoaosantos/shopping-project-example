const rememberDiv = document.querySelector(".remember");
const forgetDiv = document.querySelector(".forget");
const form = document.querySelector("#user-log");
const nameInput = document.querySelector("#entername");
const submitBtn = document.querySelector("#submitname");
const forgetBtn = document.querySelector("#forgetname");

const profileIcon = document.querySelector("#profileIcon");

const personalGreeting = document.querySelector(".personal-greeting");

form.addEventListener("submit", (e) => e.preventDefault());

submitBtn.addEventListener("click", () => {
    localStorage.setItem("name", nameInput.value);
    nameDisplayCheck();
});

forgetBtn.addEventListener("click", () => {
    localStorage.removeItem("name");
    nameDisplayCheck();
});

profileIcon.addEventListener("click", () => {
    if (profileIcon.getAttribute("aria-expanded") === "false") {
        profileIcon.setAttribute("aria-expanded", "true");
        form.style.display = "block";
    } else if (profileIcon.getAttribute("aria-expanded") === "true") {
        profileIcon.setAttribute("aria-expanded", "false")
        form.style.display = "none";
    }
});

function nameDisplayCheck() {
    if (localStorage.getItem("name")) {
        const name = localStorage.getItem("name");
        personalGreeting.textContent = name;
        forgetDiv.style.display = "block";
        rememberDiv.style.display = "none";
        form.style.display = "none";
    } else {
        personalGreeting.textContent = "";
        forgetDiv.style.display = "none";
        rememberDiv.style.display = "block";
        form.style.display = "none";
    }
}

nameDisplayCheck();