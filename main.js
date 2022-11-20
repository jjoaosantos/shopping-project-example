const searchInput = document.getElementById("searchInput");
const searchLabel = document.getElementById("searchLabel");
const priceRange = document.getElementById("price");
const priceValue = document.getElementById("priceValue");
const menuIcon = document.getElementById("menuIcon");
const navBar = document.getElementById("navigator-list");
const ul = document.getElementById("list");

priceValue.textContent = "$200,00 - $1000,00";

priceRange.addEventListener("change", () => {
    if (priceRange.value === "1000") {
        priceValue.textContent = `$${priceRange.value},00`;
    } else {
        priceValue.textContent = `$${priceRange.value},00 - $1000,00`;
    }
});

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
    } else if (navBar.getAttribute("aria-hidden") === "false") {
        navBar.setAttribute("aria-hidden", "true");
        navBar.style.display = "none";
        while (ul.firstChild) {
            ul.removeChild(ul.firstChild);
        }
    }
});