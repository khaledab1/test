// Mobile Menu Toggle
document.addEventListener('DOMContentLoaded', function() {
    const mobileMenuToggle = document.querySelector('.mobile-menu-toggle');
    const mobileMenu = document.querySelector('.mobile-menu');
    const mobileMenuOverlay = document.querySelector('.mobile-menu-overlay');
    const mobileMenuClose = document.querySelector('.mobile-menu-close');

    mobileMenuToggle.addEventListener('click', function() {
        mobileMenu.classList.add('active');
        mobileMenuOverlay.style.display = 'block';
        document.body.style.overflow = 'hidden';
    });

    mobileMenuClose.addEventListener('click', function() {
        mobileMenu.classList.remove('active');
        mobileMenuOverlay.style.display = 'none';
        document.body.style.overflow = 'auto';
    });

    mobileMenuOverlay.addEventListener('click', function() {
        mobileMenu.classList.remove('active');
        mobileMenuOverlay.style.display = 'none';
        document.body.style.overflow = 'auto';
    });

    // Scroll Effects
    window.addEventListener('scroll', function() {
        // Header Scroll Effect
        const header = document.querySelector('.site-header');
        if (window.scrollY > 50) {
            header.classList.add('scrolled');
        } else {
            header.classList.remove('scrolled');
        }

        // Fade In Elements
        const fadeElements = document.querySelectorAll('.fade-in-element');
        fadeElements.forEach(function(element) {
            const elementTop = element.getBoundingClientRect().top;
            const elementHeight = element.offsetHeight;
            const windowHeight = window.innerHeight;

            if (elementTop < windowHeight - elementHeight / 2) {
                element.classList.add('visible');
            }
        });
    });

    // Stats Counter Animation
    const statNumbers = document.querySelectorAll('.stat-number');
    
    function animateStats() {
        statNumbers.forEach(function(stat) {
            const target = parseInt(stat.getAttribute('data-target'));
            const text = stat.textContent;
            const suffix = text.replace(/[0-9]/g, '');
            const current = parseInt(text);
            
            if (current < target) {
                stat.textContent = Math.ceil(current + target/100) + suffix;
                setTimeout(animateStats, 50);
            }
        });
    }

    // Check if element is in viewport
    function isInViewport(element) {
        const rect = element.getBoundingClientRect();
        return (
            rect.top >= 0 &&
            rect.left >= 0 &&
            rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
            rect.right <= (window.innerWidth || document.documentElement.clientWidth)
        );
    }

    // Start animation when stats section is in viewport
    window.addEventListener('scroll', function() {
        const statsSection = document.querySelector('.stats-section');
        if (statsSection && isInViewport(statsSection)) {
            animateStats();
        }
    });

    // Form Validation
    const contactForm = document.querySelector('.contact-form form');
    if (contactForm) {
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            // Simple validation
            let isValid = true;
            const formInputs = contactForm.querySelectorAll('.form-control');
            
            formInputs.forEach(function(input) {
                if (!input.value.trim()) {
                    isValid = false;
                    input.classList.add('error');
                } else {
                    input.classList.remove('error');
                }
            });
            
            if (isValid) {
                // In a real implementation, you would send the form data to a server
                alert('شكراً لتواصلك معنا! سنرد عليك في أقرب وقت ممكن.');
                contactForm.reset();
            } else {
                alert('يرجى ملء جميع الحقول المطلوبة.');
            }
        });
    }
});
