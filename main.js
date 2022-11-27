const menuBtn = document.getElementById("menuBtn");
const navBar = document.getElementById("menuNavigator");

navBar.style.display = "none";

menuIcon.addEventListener("click", () => {
    if (navBar.getAttribute("aria-hidden") === "true") {
        navBar.setAttribute("aria-hidden", "false");
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
    } else if (navBar.getAttribute("aria-hidden") === "false") {
        navBar.setAttribute("aria-hidden", "true");
        navBar.style.display = "none";
    }
});