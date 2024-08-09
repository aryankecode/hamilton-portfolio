document.addEventListener('DOMContentLoaded', () => {
    const form = document.getElementById('contact-form');
    const errorMessage = document.querySelector('.error-message');

    if (form) {
        form.addEventListener('submit', (e) => {
            const name = form.name.value.trim();
            const phone = form.phone.value.trim();
            const email = form.email.value.trim();
            const comments = form.comments.value.trim();

            if (!name || !phone.match(/^\d{10}$/) || !email || !comments) {
                e.preventDefault();
                errorMessage.style.display = 'block';
            } else {
                errorMessage.style.display = 'none';
                alert('Form submitted successfully!');
            }
        });
    }
});
