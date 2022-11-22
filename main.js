const menuIcon = document.getElementById("menuIcon");
const navBar = document.getElementById("navigator-list");
const ul = document.getElementById("list");

const listItems = ["Products", "Contact", "About Us"];

menuIcon.addEventListener("click", () => {
    if (menuIcon.getAttribute("aria-expanded") === "false") {
        menuIcon.setAttribute("aria-expanded", "true");
        navBar.style.display = "block";
        for (const item of listItems) {
            const li = document.createElement("li");
            const a = document.createElement("a");
            if (item === "Products") {
                a.href = "products.html";
                a.textContent = item;
            } else if (item === "Contact") {
                a.href = "contact.html";
                a.textContent = item;
            } else if (item === "About Us") {
                a.href = "aboutus.html";
                a.textContent = item;
            } else {
                const para = document.createElement("p");
                para.textContent = "No Shit!";
                navBar.appendChild(para);
            }
            li.appendChild(a);
            ul.appendChild(li);
        }
    } else if (menuIcon.getAttribute("aria-expanded") === "true") {
        menuIcon.setAttribute("aria-expanded", "false");
        navBar.style.display = "none";
        while (ul.firstChild) {
            ul.removeChild(ul.firstChild);
        }
    }
});