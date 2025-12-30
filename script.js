/* TYPING EFFECT */
const texts = [
    "Abhijeet Verma",
    "Full-Stack Developer",
    "UI/UX Focused Engineer"
];

let i = 0, j = 0;
const typing = document.getElementById("typing");

function type() {
    if (j < texts[i].length) {
        typing.textContent += texts[i][j++];
        setTimeout(type, 90);
    } else {
        setTimeout(erase, 1500);
    }
}

function erase() {
    if (j > 0) {
        typing.textContent = texts[i].substring(0, --j);
        setTimeout(erase, 50);
    } else {
        i = (i + 1) % texts.length;
        setTimeout(type, 400);
    }
}

document.addEventListener("DOMContentLoaded", type);

/* SCROLL REVEAL */
const reveals = document.querySelectorAll(".reveal");

window.addEventListener("scroll", () => {
    reveals.forEach(el => {
        if (el.getBoundingClientRect().top < window.innerHeight - 100) {
            el.classList.add("active");
        }
    });
});
