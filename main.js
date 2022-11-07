const searchInput = document.getElementById("searchInput");
const searchLabel = document.getElementById("searchLabel");
const menuIcon = document.getElementById("menuIcon");
const navBar = document.getElementById("navigator-list");
const ul = document.getElementById("list");

searchInput.addEventListener("focusin", () => {
    searchLabel.style.backgroundColor = "#f9e6e6";
    searchInput.placeholder = "";
});

searchInput.addEventListener("focusout", () => {
    searchLabel.style.backgroundColor = "#f9e6e652";
    searchInput.placeholder = "Search for";
    if (searchInput.value !== "") {
        searchInput.style.color = "rgba(0, 0, 0, 0.795)";
    }
});

const listItems = ["Products", "Contact", "About Us"];
navBar.style.display = "none";

menuIcon.addEventListener("click", () => {
    if (navBar.getAttribute("aria-hidden") === "true") {
        navBar.setAttribute("aria-hidden", "false");
        navBar.style.display = "block";
        for (const item of listItems) {
            const li = document.createElement("li");
            const a = document.createElement("a");
            a.href = "#";
            a.textContent = item;
            li.appendChild(a);
            ul.appendChild(li);
        }
    } else if (navBar.getAttribute("aria-hidden") === "false") {
        navBar.setAttribute("aria-hidden", "true");
        navBar.style.display = "none";
        while (ul.firstChild) {
            ul.removeChild(ul.firstChild);
        }
    }
});