document.addEventListener('DOMContentLoaded', () => {

    // --- Mobile Navigation Toggle ---
    const navToggle = document.querySelector('.nav-toggle');
    const mainNav = document.querySelector('.main-nav');

    if (navToggle && mainNav) {
        navToggle.addEventListener('click', () => {
            mainNav.classList.toggle('active');
            // Optional: Add class to button for 'X' state styling
            navToggle.classList.toggle('is-active');
        });
    }

    // --- Contact Form Handling (Basic Validation) ---
    const contactForm = document.getElementById('contact-form');
    const formMessage = document.getElementById('form-message');

    if (contactForm && formMessage) {
        contactForm.addEventListener('submit', (event) => {
            // Prevent the default form submission behavior
            event.preventDefault();

            // Clear previous messages
            formMessage.textContent = '';
            formMessage.className = 'form-message'; // Reset classes

            // Get form fields
            const nameInput = document.getElementById('name');
            const emailInput = document.getElementById('email');
            const messageInput = document.getElementById('message');

            // Basic Validation: Check if fields are empty
            let isValid = true;
            let errors = [];

            if (nameInput.value.trim() === '') {
                isValid = false;
                errors.push('Name is required.');
                nameInput.style.borderColor = 'red'; // Highlight error field
            } else {
                nameInput.style.borderColor = '#ccc'; // Reset border
            }

            if (emailInput.value.trim() === '') {
                isValid = false;
                errors.push('Email is required.');
                 emailInput.style.borderColor = 'red';
            } else if (!/\S+@\S+\.\S+/.test(emailInput.value)) { // Simple email format check
                 isValid = false;
                 errors.push('Please enter a valid email address.');
                 emailInput.style.borderColor = 'red';
            } else {
                 emailInput.style.borderColor = '#ccc';
            }


            if (messageInput.value.trim() === '') {
                isValid = false;
                errors.push('Message is required.');
                 messageInput.style.borderColor = 'red';
            } else {
                messageInput.style.borderColor = '#ccc';
            }

            // Display messages
            if (isValid) {
                // Simulate successful submission (in a real app, you'd send data here)
                formMessage.textContent = 'Thank you for your message! (This is a demo - no email was sent.)';
                formMessage.classList.add('success');

                // Optionally clear the form
                contactForm.reset();
                // Reset border colors on success too
                nameInput.style.borderColor = '#ccc';
                emailInput.style.borderColor = '#ccc';
                messageInput.style.borderColor = '#ccc';

            } else {
                // Display error messages
                formMessage.textContent = 'Please fix the following errors: ' + errors.join(' ');
                formMessage.classList.add('error');
            }
        });
    }

});