document.addEventListener('DOMContentLoaded', function() {
    const form = document.getElementById('pilot-form');
    
    form.addEventListener('submit', function(e) {
        e.preventDefault();
        
        const name = form.elements.name.value;
        const email = form.elements.email.value;
        const role = form.elements.role.value;
        
        // Here you would typically send this data to a server
        // For now, we'll just log it to the console and show an alert
        console.log('Form submitted:', { name, email, role });
        
        const roleText = role === 'creator' ? 'Content Creator' : 'Brand Representative';
        
        alert(`Thank you, ${name}, for your interest in Creator Central. We've received your request to join as a ${roleText}. We'll contact you at ${email} with further information about how we can optimize your influence and maximize your revenue.`);
        
        form.reset();
    });
});
