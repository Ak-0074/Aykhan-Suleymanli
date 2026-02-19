// Smooth Scrolling Navigation
const scrollLinks = document.querySelectorAll('a[href^="#"]');

scrollLinks.forEach(link => {
    link.addEventListener('click', function(e) {
        e.preventDefault();
        const targetId = this.getAttribute('href');
        const targetSection = document.querySelector(targetId);
        targetSection.scrollIntoView({ behavior: 'smooth' });
    });
});

// Form Validation
const form = document.querySelector('#contact-form');
form.addEventListener('submit', function(e) {
    e.preventDefault();
    const name = document.querySelector('#name').value;
    const email = document.querySelector('#email').value;
    const message = document.querySelector('#message').value;

    if(name === '' || email === '' || message === '') {
        alert('Please fill in all fields.');
    } else if (!validateEmail(email)) {
        alert('Please enter a valid email address.');
    } else {
        alert('Form submitted successfully!');
        // Here you can handle form submission, e.g. send it to a server.
    }
});

function validateEmail(email) {
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return regex.test(email);
}

// Interactive Features
const toggleButton = document.querySelector('#toggle-theme');
toggleButton.addEventListener('click', function() {
    document.body.classList.toggle('dark-theme');
});
