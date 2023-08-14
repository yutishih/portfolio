var script = document.createElement('script');
script.type = 'text/javascript';
script.src = 'https://cdn.jsdelivr.net/npm/@emailjs/browser@3/dist/email.min.js';

document.head.appendChild(script);

script.onload = function () {
    // Initialize emailjs
    emailjs.init('MjOJ9QTvpJOiURsJq');
};

window.onload = function () {
    document.getElementById('contact-form').addEventListener('submit', function (event) {
        event.preventDefault();

        // these IDs from the previous steps
        emailjs.sendForm('service_c1eoeqj', 'template_anr4lxt', this)
            .then(function () {
                console.log('SUCCESS!');
                alert('Email sent successfully!');
            }, function (error) {
                console.log('FAILED...', error);
                alert('Failed to send email. Please try again later.');
            });
    });
}