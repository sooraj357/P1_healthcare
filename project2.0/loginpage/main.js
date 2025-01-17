document.addEventListener('DOMContentLoaded', function() {
    const loginForm = document.querySelector('.login-box');
    const emailInput = document.querySelector('input[placeholder="Email"]');
    const passwordInput = document.querySelector('input[placeholder="Password"]');
    const submitButton = document.querySelector('.submit-btn');

    submitButton.addEventListener('click', function(e) {
        e.preventDefault();

        // Basic validation
        if (!emailInput.value || !passwordInput.value) {
            alert('Please enter both email and password');
            return;
        }

        // Email format validation
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(emailInput.value)) {
            alert('Please enter a valid email address');
            return;
        }

        // Simulating login process
        console.log('Attempting login...');
        setTimeout(() => {
            // This is where you would typically send a request to your server
            console.log('Login successful!');
            alert('Login successful!');
            // Clear the form
            emailInput.value = '';
            passwordInput.value = '';
        }, 1500);
    });

    // Handle "Forgot Password" link
    const forgotPasswordLink = document.querySelector('.forgot-pass a');
    forgotPasswordLink.addEventListener('click', function(e) {
        e.preventDefault();
        alert('Password reset functionality not implemented yet.');
    });

    // Handle "Sign Up" link
    const signUpLink = document.querySelector('.sign-up-link a');
    signUpLink.addEventListener('click', function(e) {
        e.preventDefault();
        alert('Sign up functionality not implemented yet.');
    });
});