/**
 * Main JavaScript for Ferragens Paraíba website
 * Contains general functionality
 */

// Wait for DOM to be fully loaded
document.addEventListener('DOMContentLoaded', function() {
    // Mobile menu toggle
    const menuToggle = document.getElementById('menu-toggle');
    const mobileNav = document.getElementById('mobile-nav');
    
    if (menuToggle && mobileNav) {
        menuToggle.addEventListener('click', function() {
            // Toggle the mobile menu visibility
            mobileNav.classList.toggle('hidden');
            
            // Change the menu icon between bars and close icon
            const icon = menuToggle.querySelector('i');
            if (icon.classList.contains('fa-bars')) {
                icon.classList.remove('fa-bars');
                icon.classList.add('fa-times');
            } else {
                icon.classList.remove('fa-times');
                icon.classList.add('fa-bars');
            }
        });
    }
    
    // Close mobile menu when a link is clicked
    const mobileNavLinks = document.querySelectorAll('#mobile-nav .nav-link');
    mobileNavLinks.forEach(link => {
        link.addEventListener('click', function() {
            mobileNav.classList.add('hidden');
            
            // Reset the menu icon
            const icon = menuToggle.querySelector('i');
            icon.classList.remove('fa-times');
            icon.classList.add('fa-bars');
        });
    });
    
    // Contact form submission (example - needs backend to work fully)
    const contactForm = document.getElementById('contactForm');
    if (contactForm) {
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            // Get form values
            const name = document.getElementById('name').value;
            const email = document.getElementById('email').value;
            const phone = document.getElementById('phone').value;
            const message = document.getElementById('message').value;
            
            // Example validation
            if (!name || !email || !phone || !message) {
                alert('Por favor, preencha todos os campos do formulário.');
                return;
            }
            
            // Here you would typically send the data to a server
            // For this example, we'll just show a success message
            alert(`Obrigado por entrar em contato, ${name}! Responderemos o mais breve possível.`);
            
            // Reset the form
            contactForm.reset();
        });
    }
    
    // Initialize any elements that need animation on load
    initAnimations();
});

/**
 * Initialize animations for different elements
 */
function initAnimations() {
    // Add animation to service cards
    const serviceCards = document.querySelectorAll('#servicos .bg-white');
    serviceCards.forEach(card => {
        card.classList.add('service-card');
    });
    
    // Add animation to icons in contact section
    const contactIcons = document.querySelectorAll('#contato .fas');
    contactIcons.forEach(icon => {
        icon.classList.add('icon-pulse');
    });
}