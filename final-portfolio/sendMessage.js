
(function() {
    // https://dashboard.emailjs.com/admin/account
    emailjs.init('5ZkPng1POqqWhI9ZL');
})();
window.onload = function() {
    document.getElementById('contact-form').addEventListener('submit', function(event) {
        event.preventDefault();

        const senderName = document.getElementById('name').value;
        const senderEmail = document.getElementById('email').value;
        const subject = document.getElementById('subject').value;
        const message = document.getElementById('message').value;
        
        let params = {
            from_name: senderName,
            reply_to: senderEmail,
            subject,
            message,
        };

        // these IDs from the previous steps
        emailjs.send('contact_service', 'contact_form', params)
            .then(function() {
                console.log('SUCCESS!');
                console.log(this.contact_number.value)
            }, function(error) {
                console.log('FAILED...', error);
            });
    });
}