// Mobile menu toggle
document.addEventListener('DOMContentLoaded', function() {
    const menuButton = document.getElementById('menuButton');
    const mobileMenu = document.getElementById('mobileMenu');

    if (menuButton && mobileMenu) {
        menuButton.addEventListener('click', () => {
            mobileMenu.classList.toggle('hidden');
        });
    }

    // Sign-up form handling
    const signupForm = document.getElementById('signupForm');
    const successMessage = document.getElementById('successMessage');

    if (signupForm && successMessage) {
        signupForm.addEventListener('submit', (e) => {
            e.preventDefault();

            const formData = {
                name: signupForm.name.value,
                email: signupForm.email.value,
                timestamp: new Date().toISOString()
            };

            // Store in localStorage
            const subscribers = JSON.parse(localStorage.getItem('subscribers') || '[]');
            subscribers.push(formData);
            localStorage.setItem('subscribers', JSON.stringify(subscribers));

            // Show success message
            successMessage.classList.remove('hidden');
            signupForm.reset();

            // Hide success message after 3 seconds
            setTimeout(() => {
                successMessage.classList.add('hidden');
            }, 3000);
        });
    }
});