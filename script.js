//text typing animation efect
const textElement = document.getElementById("typed-text");
const texts = ["UI UX Designer", "Front-end Developer"];
let textIndex = 0;
let charIndex = 0;
let isDeleting = false;
const typingSpeed = 35; // Speed of typing
const deletingSpeed = .50; // Speed of deleting
const delayBetweenTexts = 1000; // Delay before switching texts

function typeEffect() {
    const currentText = texts[textIndex];
    if (isDeleting) {
        textElement.textContent = currentText.substring(0, charIndex - 1);
        charIndex--;
        setTimeout(typeEffect, deletingSpeed);
    } else {
        textElement.textContent = currentText.substring(0, charIndex + 1);
        charIndex++;
        setTimeout(typeEffect, typingSpeed);
    }

    if (!isDeleting && charIndex === currentText.length) {
        setTimeout(() => (isDeleting = true), delayBetweenTexts);
    } else if (isDeleting && charIndex === 0) {
        isDeleting = false;
        textIndex = (textIndex + 1) % texts.length;
    }
}

// Start the typing effect when the page loads
window.onload = () => {
    textElement.textContent = "";  // Clear any initial text
    typeEffect();
};



// Hamburger menu toggle with animation
const hamburger = document.getElementById('hamburger-menu');
const feld = document.querySelector('.feld');

// Function to show the element with animation
function showFeld() {
    feld.style.display = 'block';
    feld.style.opacity = 0;
    feld.style.transform = 'translateY(-100%)';
    feld.style.transition = 'opacity 0.5s ease, transform 0.5s ease';
    setTimeout(() => {
        feld.style.opacity = 1;
        feld.style.transform = 'translateY(0)';
    }, 10); // Small delay to trigger transition
}

// Function to hide the element with animation
function hideFeld() {
    feld.style.opacity = 0;
    feld.style.transform = 'translateY(-100%)';
    setTimeout(() => {
        feld.style.display = 'none';
    }, 500); // Match this duration with the transition duration
}

hamburger.addEventListener('click', () => {
    hamburger.classList.toggle('active');
    if (feld.style.display === 'block') {
        hideFeld();
    } else {
        showFeld();
    }
});