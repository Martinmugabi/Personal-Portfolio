/* javascript code */
function oncheck(){
    alert("Please check graphics")
}


function gocheck(){
    alert("WOULD YOU LOVE TO CHECK")
}

function goto(){
    alert("WOULD YOU LOVE TO CHECK")
}
document.addEventListener('DOMContentLoaded', function() {
    // Set current year in footer
    document.getElementById('current-year').textContent = new Date().getFullYear();
    
    // Smooth scrolling for navigation links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            const targetId = this.getAttribute('href');
            if (targetId === '#') return;
            
            const targetElement = document.querySelector(targetId);
            if (targetElement) {
                targetElement.scrollIntoView({
                    behavior: 'smooth'
                });
                
                // Update URL without page jump
                history.pushState(null, null, targetId);
            }
        });
    });
    
    // Project buttons functionality
    document.querySelectorAll('.project-btn').forEach(button => {
        button.addEventListener('click', function() {
            const project = this.getAttribute('data-project');
            alert(`You clicked on the ${project} project!`);
            // Here you could redirect to a project page or show a modal
        });
    });
    
    // Contact form submission
    const contactForm = document.getElementById('contact-form');
    if (contactForm) {
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            const formMessage = document.getElementById('form-message');
            const name = document.getElementById('name').value.trim();
            const email = document.getElementById('email').value.trim();
            const message = document.getElementById('message').value.trim();
            
            // Simple validation
            if (!name || !email || !message) {
                showFormMessage(formMessage, 'Please fill in all fields', 'error');
                return;
            }
            
            if (!validateEmail(email)) {
                showFormMessage(formMessage, 'Please enter a valid email address', 'error');
                return;
            }
            
            // Here you would typically send the form data to a server
            // For now, we'll just show a success message
            showFormMessage(formMessage, 'Thank you for your message! I will get back to you soon.', 'success');
            contactForm.reset();
            
            // In a real implementation, you would use fetch() or AJAX to send the data
            console.log('Form submitted:', { name, email, message });
        });
    }
    
    // Function to validate email
    function validateEmail(email) {
        const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return re.test(email);
    }
    
     
    // Function to show form messages
    function showFormMessage(element, message, type) {
        element.textContent = message;
        element.style.display = 'block';
        element.style.backgroundColor = type === 'error' ? '#ffebee' : '#e8f5e9';
        element.style.color = type === 'error' ? '#c62828' : '#2e7d32';
        
        // Hide message after 5 seconds
        setTimeout(() => {
            element.style.display = 'none';
        }, 5000);
    }

     // Mobile menu toggle (if needed)
    const mobileMenuToggle = document.createElement('div');
    mobileMenuToggle.className = 'mobile-menu-toggle';
    mobileMenuToggle.innerHTML = '<i class="fa fa-bars"></i>';
    
    const header = document.querySelector('.header');
    if (window.innerWidth <= 768) {
        header.appendChild(mobileMenuToggle);
        
        const navLinks = document.querySelector('.nav-links');
        mobileMenuToggle.addEventListener('click', function() {
            navLinks.style.display = navLinks.style.display === 'flex' ? 'none' : 'flex';
        });
    }
    // Responsive adjustments
    window.addEventListener('resize', function() {
        const navLinks = document.querySelector('.nav-links');
        if (window.innerWidth > 768) {
            navLinks.style.display = 'flex';
        } else {
            navLinks.style.display = 'none';
        }
    });
    


    