// Initialize EmailJS with your public key
(function() {
    // Check if EmailJS is loaded
    if (typeof emailjs === 'undefined') {
        console.error('EmailJS is not loaded. Please check your internet connection.');
        return;
    }

    emailjs.init("oZvlJg5ksdGUwAo3l");
})();

document.addEventListener('DOMContentLoaded', function() {
    const contactForm = document.getElementById('contactForm');
    
    if (!contactForm) {
        console.error('Contact form not found!');
        return;
    }

    const submitBtn = contactForm.querySelector('.submit-btn');

    contactForm.addEventListener('submit', async function(e) {
        e.preventDefault();
        
        // Disable submit button and show loading state
        submitBtn.disabled = true;
        submitBtn.textContent = 'Sending...';

        try {
            // Get form data
            const email = document.getElementById('email').value;
            const message = document.getElementById('message').value;

            // Validate email and message
            if (!email || !message) {
                throw new Error('Please fill in all fields');
            }

            // Prepare template parameters
            const templateParams = {
                from_email: email,
                to_email: 'yashwanthreddy582@gmail.com',
                message: message
            };

            // Send email using EmailJS
            const response = await emailjs.send(
                'service_eamdm9m',    // Replace with your EmailJS service ID
                'template_p5s5bid',   // Replace with your EmailJS template ID
                templateParams
            );

            console.log('SUCCESS!', response.status, response.text);
            alert('Message sent successfully!');
            contactForm.reset();

        } catch (error) {
            console.error('FAILED...', error);
            alert(`Failed to send message: ${error.message || 'Please try again'}`);
        } finally {
            // Re-enable submit button and restore text
            submitBtn.disabled = false;
            submitBtn.textContent = 'Send Message';
        }
    });
}); 