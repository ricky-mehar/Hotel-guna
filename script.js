document.getElementById('contactForm').addEventListener('submit', function (e) {
    e.preventDefault();

    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const message = document.getElementById('message').value;
    const formResponse = document.getElementById('formResponse');

    if (name && email && message) {
        formResponse.textContent = 'Thank you for your message! We will get back to you soon.';
        formResponse.style.color = 'green';
        this.reset();  // Reset the form fields
    } else {
        formResponse.textContent = 'Please fill out all fields.';
        formResponse.style.color = 'red';
    }
});
