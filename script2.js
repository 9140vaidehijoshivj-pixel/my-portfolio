const words = ["Web Developer", "Frontend Designer", "Coder", "Learner"];
let i = 0, j = 0;
let isDeleting = false;

function typingEffect() {
    const text = document.querySelector(".typing");
    let word = words[i];

    if (!isDeleting) {
        text.innerHTML = word.substring(0, j++);
        if (j > word.length) {
            isDeleting = true;
            setTimeout(typingEffect, 1000);
            return;
        }
    } else {
        text.innerHTML = word.substring(0, j--);
        if (j < 0) {
            isDeleting = false;
            i = (i + 1) % words.length;
        }
    }
    setTimeout(typingEffect, isDeleting ? 80 : 120);
}

typingEffect();
