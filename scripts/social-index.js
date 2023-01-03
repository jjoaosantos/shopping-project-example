const socialBtn = document.querySelector(".socialBtn");
const main = document.querySelector("main");

socialBtn.addEventListener("click", () => {
    if (socialBtn.textContent === "Continue to Chat") {
        socialBtn.style.display = "none";

        const para = document.createElement("p");
        para.textContent = `Good morning, João. How can I help you?`
        main.appendChild(para);
    } else if (socialBtn.textContent === "Follow") {
        socialBtn.textContent = "Following";
    } else {
        socialBtn.textContent = "Follow";
    }
});