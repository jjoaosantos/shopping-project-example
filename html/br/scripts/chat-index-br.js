const chat = document.querySelector(".chatBtn");

chat.addEventListener("click", nameDisplayCheck);

function nameDisplayCheck() {
    const personalGreeting = document.querySelector(".personalGreeting");
    const d = new Date();
    let hour = d.getHours();
    
    if (localStorage.getItem("name")) {
        const name = localStorage.getItem("name");
        if (hour > 23 && hour <= 12) {
            personalGreeting.textContent = `Bom dia, ${name}. Como posso ajudá-lo?`;
        } else if (hour > 12 && hour <= 17) {
            personalGreeting.textContent = `Boa tarde, ${name}. Como posso ajudá-lo?`;
        } else if (hour > 17 && hour <= 23) {
            personalGreeting.textContent = `Boa noite, ${name}. Como posso ajudá-lo?`;
        }
    } else {
        if (hour > 23 && hour <= 12) {
            personalGreeting.textContent = "Bom dia. Como posso ajudá-lo?";
        } else if (hour > 12 && hour <= 17) {
            personalGreeting.textContent = "Boa tarde. Como posso ajudá-lo?";
        } else if (hour > 17 && hour <= 23) {
            personalGreeting.textContent = "Boa noite. Como posso ajudá-lo?";
        }
    }

    chat.style.display = "none";
}