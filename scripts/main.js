document.addEventListener("DOMContentLoaded", function() {
    const navbar = document.getElementById('mainNavbar');
    const toggler = document.querySelector('.navbar-toggler');
    
    toggler.addEventListener('click', function() {
        this.classList.toggle('collapsed');
    });

    window.onscroll = function() {
        if (window.scrollY > 50) {
            navbar.classList.add('dark-mode');
        } else {
            navbar.classList.remove('dark-mode');
        }
    };
});

  

// script.js
const phrases = ["Our Consulting Website", "Our Design Agency", "My Freelance Portfolio"];
let phraseIndex = 0;
let letterIndex = 0;
const typingSpeed = 150;
const erasingSpeed = 100;
const pauseBetweenPhrases = 2000; // Pause for 2 seconds between phrases
const typewriter = document.getElementById('typewriter');

function typePhrase() {
    if (letterIndex < phrases[phraseIndex].length) {
        typewriter.textContent += phrases[phraseIndex].charAt(letterIndex);
        letterIndex++;
        setTimeout(typePhrase, typingSpeed);
    } else {
        setTimeout(erasePhrase, pauseBetweenPhrases);
    }
}

function erasePhrase() {
    if (letterIndex > 0) {
        typewriter.textContent = phrases[phraseIndex].substring(0, letterIndex - 1);
        letterIndex--;
        setTimeout(erasePhrase, erasingSpeed);
    } else {
        phraseIndex = (phraseIndex + 1) % phrases.length;
        setTimeout(typePhrase, typingSpeed);
    }
}

// Start the typewriter effect
window.onload = typePhrase;