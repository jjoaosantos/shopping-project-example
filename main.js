const menuBtn = document.getElementById("menuBtn");
const navBar = document.getElementById("navigator-list");
const ul = document.getElementById("list");

const listItems = ["Products", "Contact", "About Us"];
navBar.style.display = "none";

menuBtn.addEventListener("click", () => {
    if (menuBtn.getAttribute("aria-expanded") === "true") {
        menuBtn.setAttribute("aria-expanded", "false");
        navBar.style.display = "block";
        for (const item of listItems) {
            const li = document.createElement("li");
            const a = document.createElement("a");
            if (item === "Products") {
                a.href = "#products";
                a.textContent = item;
            } else if (item === "Contact") {
                a.href = "#products";
                a.textContent = item;
            } else if (item === "About Us") {
                a.href = "#aboutus";
                a.textContent = item;
            } else {
                const para = document.createElement("p");
                para.textContent = "No Shit!";
                navBar.appendChild(para);
            }
            li.appendChild(a);
            ul.appendChild(li);
        }
    } else if (menuBtn.getAttribute("aria-expanded") === "false") {
        menuBtn.setAttribute("aria-expanded", "true");
        navBar.style.display = "none";
        while (ul.firstChild) {
            ul.removeChild(ul.firstChild);
        }
    }
});