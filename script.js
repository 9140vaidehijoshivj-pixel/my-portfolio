// Typing effect
const words = ["Web Developer", "Frontend Designer", "Coder", "Learner"];
let i = 0, j = 0;

function type() {
    let word = words[i];
    document.querySelector(".typing").innerText = word.slice(0, j++);
    if (j <= word.length) setTimeout(type, 120);
    else setTimeout(erase, 800);
}
function erase() {
    let word = words[i];
    document.querySelector(".typing").innerText = word.slice(0, j--);
    if (j >= 0) setTimeout(erase, 80);
    else { i = (i + 1) % words.length; setTimeout(type, 300); }
}
type();

// Success popup on submit
document.getElementById("contactForm").addEventListener("submit", (e) => {
    e.preventDefault();
    document.getElementById("popup").style.display = "block";
});