// Sahifadagi elementni tekis siljitib ko‘rsatish uchun funksiya
function scrolltoElement(elementSelector, instance = 0) {
    const elements = document.querySelectorAll(elementSelector);
    if (elements.length > instance) {
        elements[instance].scrollIntoView({ behavior: "smooth" });
    }
}

// Tugmalarni olish
const link1 = document.getElementById("link1");
const link2 = document.getElementById("link2");
const link3 = document.getElementById("link3");

// Tugmalarga hodisalar qo‘shish
if (link1) {
    link1.addEventListener("click", (event) => {
        event.preventDefault(); // Sahifa qayta yuklanishini oldini olish
        scrolltoElement("header");
    });
}

if (link2) {
    link2.addEventListener("click", (event) => {
        event.preventDefault();
        scrolltoElement(".container", 1); // 1-chi `.container` qismiga borish
    });
}

if (link3) {
    link3.addEventListener("click", (event) => {
        event.preventDefault();
        scrolltoElement("footer"); // Sahifaning footer qismiga borish
    });
}

// "Hire me" tugmasini bosganda alert chiqish
const hireMeButton = document.querySelector(".btn");
if (hireMeButton) {
    hireMeButton.addEventListener("click", () => {
        alert("Thank you for your interest! Please contact us for more details.");
    });
}
