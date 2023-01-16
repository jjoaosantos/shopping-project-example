const chat = document.querySelector(".chatBtn");
const main = document.querySelector("main");

chat.addEventListener("click", nameDisplayCheck);

function nameDisplayCheck() {
    const personalGreeting = document.querySelector("#personalGreeting");
    const d = new Date();
    let hour = d.getHours();
    
    if (localStorage.getItem("name")) {
        const name = localStorage.getItem("name");
        if (hour > 0 && hour <= 12) {
            personalGreeting.textContent = `Good morning, ${name}. How can I help you?`;
        } else if (hour > 12 && hour <= 4) {
            personalGreeting.textContent = `Good afternoon, ${name}. How can I help you?`;
        } else if (hour > 4 && hour <= 21) {
            personalGreeting.textContent = `Good evening, ${name}. How can I help you?`;
        } else if (hour > 21 && hour <= 0) {
            personalGreeting.textContent = `Good night, ${name}. How can I help you?`;
        }
        
    } else {
        if (hour > 0 && hour <= 12) {
            personalGreeting.textContent = "Good morning. How can I help you?";
        } else if (hour > 12 && hour <= 4) {
            personalGreeting.textContent = "Good afternoon. How can I help you?";
        } else if (hour > 4 && hour <= 21) {
            personalGreeting.textContent = `Good evening. How can I help you?`;
        } else if (hour > 21 && hour <= 0) {
            personalGreeting.textContent = "Good night. How can I help you?";
        }
    }

    chat.style.display = "none";
}