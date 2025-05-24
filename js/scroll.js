/**
 * Smooth scrolling functionality
 * Handles smooth scrolling to anchors and highlights active section in navigation
 */

document.addEventListener('DOMContentLoaded', function() {
    // Get all navigation links with hash links
    const navLinks = document.querySelectorAll('a[href^="#"]');
    
    // Add click event listener to each link
    navLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            // Prevent default anchor behavior
            e.preventDefault();
            
            // Get the target element ID from the href
            const targetId = this.getAttribute('href');
            
            // Only proceed if target exists
            if (targetId !== '#') {
                const targetElement = document.querySelector(targetId);
                
                if (targetElement) {
                    // Calculate position to scroll to (accounting for header height)
                    const headerHeight = document.querySelector('header').offsetHeight;
                    const targetPosition = targetElement.getBoundingClientRect().top + window.pageYOffset - headerHeight;
                    
                    // Scroll to the target
                    window.scrollTo({
                        top: targetPosition,
                        behavior: 'smooth'
                    });
                }
            }
        });
    });
    
    // Set active navigation link based on scroll position
    window.addEventListener('scroll', highlightActiveSection);
    
    // Call immediately to set initial state
    highlightActiveSection();
});

/**
 * Highlight the active section in the navigation
 */
function highlightActiveSection() {
    // Get all sections
    const sections = document.querySelectorAll('section');
    const navLinks = document.querySelectorAll('.nav-link');
    
    // Get current scroll position
    const scrollPosition = window.scrollY;
    
    // Determine which section is currently in view
    // Add some offset to account for the header
    const headerHeight = document.querySelector('header').offsetHeight;
    const offset = headerHeight + 100;
    
    // Check each section to see if it's in view
    sections.forEach(section => {
        const sectionTop = section.offsetTop - offset;
        const sectionBottom = sectionTop + section.offsetHeight;
        
        if (scrollPosition >= sectionTop && scrollPosition < sectionBottom) {
            // Get the ID of the section
            const sectionId = section.getAttribute('id');
            
            // Remove active class from all nav links
            navLinks.forEach(link => {
                link.classList.remove('active');
            });
            
            // Add active class to the corresponding nav link
            const activeLink = document.querySelector(`.nav-link[href="#${sectionId}"]`);
            if (activeLink) {
                activeLink.classList.add('active');
            }
        }
    });
}