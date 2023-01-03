const chat = document.querySelector(".chatBtn");
const main = document.querySelector("main");

chat.addEventListener("click", nameDisplayCheck);

function nameDisplayCheck() {
    const personalGreeting = document.createElement("p");
    const d = new Date();
    let hour = d.getHours();
    
    if (localStorage.getItem("name")) {
        const name = localStorage.getItem("name");
        if (hour > 0 && hour <= 12) {
            personalGreeting.textContent = `Good morning, ${name}. How can I help you?`;
        } else if (hour > 12 && hour <= 22) {
            personalGreeting.textContent = `Good afternoon, ${name}. How can I help you?`;
        } else if (hour > 22 && hour <= 0) {
            personalGreeting.textContent = `Good night, ${name}. How can I help you?`;
        }
        
    } else {
        if (hour > 0 && hour <= 12) {
            personalGreeting.textContent = "Good morning. How can I help you?";
        } else if (hour > 12 && hour <= 22) {
            personalGreeting.textContent = "Good afternoon. How can I help you?";
        } else if (hour > 22 && hour <= 0) {
            personalGreeting.textContent = "Good night. How can I help you?";
        }
    }

    chat.style.display = "none";
    main.appendChild(personalGreeting);
}