const rememberDiv = document.querySelector(".remember");
const forgetDiv = document.querySelector(".forget");
const form = document.querySelector(".callout");
const h2 = document.querySelector("#calloutHeading");
const nameInput = document.querySelector("#accountName");
const submitBtn = document.querySelector("#submitname");
const forgetBtn = document.querySelector("#forgetname");

const enterAccount = document.querySelector("#userInfo");

form.addEventListener("submit", (e) => e.preventDefault());

document.querySelector("#closeBtn").addEventListener("click", () => {
    form.setAttribute("aria-hidden", "true");
    form.style.display = "none";
    enterAccount.focus();
});

submitBtn.addEventListener("click", () => {
    localStorage.setItem("name", nameInput.value);
    nameDisplayCheck();
});

forgetBtn.addEventListener("click", () => {
    localStorage.removeItem("name");
    nameDisplayCheck();
});

enterAccount.addEventListener("click", () => {
    if (form.getAttribute("aria-hidden") === "true") {
        form.setAttribute("aria-hidden", "false");
        form.style.display = "block";
    } else if (profileIcon.getAttribute("aria-expanded") === "true") {
        profileIcon.setAttribute("aria-expanded", "false")
        form.style.display = "none";
    }

    forgetBtn.focus();
    nameInput.focus();
});

function nameDisplayCheck() {
    if (localStorage.getItem("name")) {
        const name = localStorage.getItem("name");
        enterAccount.textContent = `Hello, ${name}`;
        h2.textContent = "Are you leaving?";
        forgetDiv.style.display = "block";
        rememberDiv.style.display = "none";
        form.style.display = "none";
    } else {
        enterAccount.textContent = "Sign In";
        h2.textContent = "Want to join us?";
        forgetDiv.style.display = "none";
        rememberDiv.style.display = "block";
    }
    enterAccount.focus();
    nameInput.focus();
}

nameDisplayCheck();
