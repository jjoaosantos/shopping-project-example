const form = document.querySelector(".callout");
const nameInput = document.querySelector("#accountName");
const submitBtn = document.querySelector("#submitname");
const forgetBtn = document.querySelector("#forgetname");


const enterAccount = document.querySelector("#userInfo");

form.addEventListener("submit", (e) => e.preventDefault());

document.querySelector("#closeBtn").addEventListener("click", () => {
    form.setAttribute("aria-hidden", "true");
    form.style.display = "none";
})

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
    } else if (form.getAttribute("aria-hidden") === "false") {
        form.setAttribute("aria-hidden", "true");
        form.style.display = "none";
    }
});

function nameDisplayCheck() {
    if (localStorage.getItem("name")) {
        const name = localStorage.getItem("name");
        enterAccount.textContent = `Hello, ${name}`;
        submitBtn.style.display = "block";
        forgetBtn.style.display = "none";
        form.style.display = "none";
    } else {
        submitBtn.style.display = "block";
        forgetBtn.style.display = "none";
        form.style.display = "none";
    }
}

nameDisplayCheck();