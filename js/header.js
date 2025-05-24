/**
 * Header scroll effect
 * Changes header appearance when scrolling down the page
 */

document.addEventListener('DOMContentLoaded', function() {
    // Get the header element
    const header = document.getElementById('header');
    
    // Function to update header appearance based on scroll position
    function updateHeaderOnScroll() {
        // Get current scroll position
        const scrollPosition = window.scrollY;
        
        // Add or remove 'header-scrolled' class based on scroll position
        if (scrollPosition > 50) {
            header.classList.add('header-scrolled');
            
            // Also update text color for better contrast
            const navLinks = document.querySelectorAll('.nav-link');
            navLinks.forEach(link => {
                link.classList.remove('text-white');
                link.classList.add('text-white'); // Keep text white but with increased contrast
            });
        } else {
            header.classList.remove('header-scrolled');
            
            // Reset text color
            const navLinks = document.querySelectorAll('.nav-link');
            navLinks.forEach(link => {
                link.classList.add('text-white');
            });
        }
    }
    
    // Add scroll event listener
    window.addEventListener('scroll', updateHeaderOnScroll);
    
    // Call immediately to set initial state
    updateHeaderOnScroll();
});