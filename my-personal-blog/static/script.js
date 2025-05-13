// Make slider functions globally available for onclick handlers
let slideIndex = 1; // Global for slider state

function plusSlides(n) {
  showSlides(slideIndex += n);
}

function showSlides(n) {
  let i;
  // Corrected selector to match CSS/HTML
  let slides = document.getElementsByClassName("image-slide");
  if (!slides || slides.length === 0) return; // Exit if no slides found

  // Wrap around logic
  if (n > slides.length) { slideIndex = 1 }
  if (n < 1) { slideIndex = slides.length }

  // Hide all slides first
  for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";
  }

  // Display the current slide and add fade class (optional, depends on CSS)
  slides[slideIndex - 1].style.display = "block";
  // Optional: remove/re-add fade class if needed for animation replay
  // slides[slideIndex-1].classList.add('fade');
}


// Wait for the DOM to be fully loaded before running scripts
document.addEventListener('DOMContentLoaded', () => {

    // --- Initialize Image Slider (only if on a page with the slider) ---
    if (document.querySelector('.image-slider-container')) {
        showSlides(slideIndex); // Display the first slide
    }

    // --- Mobile Navigation Toggle ---
    const navToggle = document.querySelector('.nav-toggle');
    const mainNav = document.querySelector('.main-nav');

    if (navToggle && mainNav) {
        navToggle.addEventListener('click', () => {
            mainNav.classList.toggle('active');
            // Add class to button for 'X' state styling if needed (matches CSS)
            navToggle.classList.toggle('is-active');
        });
    }

    // --- Contact Form Handling (Basic Validation) ---
    const contactForm = document.getElementById('contact-form');
    const formMessage = document.getElementById('form-message');

    if (contactForm && formMessage) {
        contactForm.addEventListener('submit', (event) => {
            event.preventDefault(); // Prevent default form submission

            formMessage.textContent = ''; // Clear previous messages
            formMessage.className = 'form-message'; // Reset classes

            const nameInput = document.getElementById('name');
            const emailInput = document.getElementById('email');
            const messageInput = document.getElementById('message');

            let isValid = true;
            let errors = [];

            // Reset border styles
            nameInput.style.borderColor = '#ccc';
            emailInput.style.borderColor = '#ccc';
            messageInput.style.borderColor = '#ccc';

            // Validation checks
            if (nameInput.value.trim() === '') {
                isValid = false;
                errors.push('Name is required.');
                nameInput.style.borderColor = '#e74c3c'; // Use a consistent error color
            }

            if (emailInput.value.trim() === '') {
                isValid = false;
                errors.push('Email is required.');
                emailInput.style.borderColor = '#e74c3c';
            } else if (!/\S+@\S+\.\S+/.test(emailInput.value)) { // Basic email format check
                isValid = false;
                errors.push('Please enter a valid email address.');
                emailInput.style.borderColor = '#e74c3c';
            }

            if (messageInput.value.trim() === '') {
                isValid = false;
                errors.push('Message is required.');
                messageInput.style.borderColor = '#e74c3c';
            }

            // Display feedback
            if (isValid) {
                formMessage.textContent = 'Thank you for your message! (Demo - no email sent)';
                formMessage.classList.add('success');
                contactForm.reset(); // Clear form on success
            } else {
                formMessage.textContent = 'Please correct the errors: ' + errors.join(' ');
                formMessage.classList.add('error');
            }
        });
    }
}); // End of DOMContentLoaded listener