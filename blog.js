document.addEventListener('DOMContentLoaded', function() {
    // Make body visible
    document.body.style.opacity = '1';
    
    // Mobile Navigation
    const burger = document.querySelector('.burger');
    const navLinks = document.querySelector('.nav-links');
    
    burger.addEventListener('click', function() {
        this.classList.toggle('active');
        navLinks.classList.toggle('active');
        
        // Toggle body overflow
        if (navLinks.classList.contains('active')) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = '';
        }
    });
    
    // Close mobile menu when clicking on a link
    const navItems = document.querySelectorAll('.nav-links a');
    navItems.forEach(item => {
        item.addEventListener('click', () => {
            navLinks.classList.remove('active');
            burger.classList.remove('active');
            document.body.style.overflow = '';
        });
    });
    
    // Category filter functionality
    const filterButtons = document.querySelectorAll('.category-filter button');
    const blogCards = document.querySelectorAll('.blog-card');
    
    filterButtons.forEach(button => {
        button.addEventListener('click', () => {
            // Remove active class from all buttons
            filterButtons.forEach(btn => {
                btn.classList.remove('active');
                btn.style.transform = 'scale(1)';
            });
            
            // Add active class to clicked button with animation
            button.classList.add('active');
            button.style.transform = 'scale(1.05)';
            setTimeout(() => {
                button.style.transform = 'scale(1)';
            }, 300);
            
            const filterValue = button.textContent.toLowerCase();
            
            // Animate cards out before filtering
            blogCards.forEach(card => {
                card.style.transition = 'transform 0.3s ease, opacity 0.3s ease';
                card.style.transform = 'translateY(20px)';
                card.style.opacity = '0';
            });
            
            // After animation completes, filter and animate back in
            setTimeout(() => {
                blogCards.forEach((card, index) => {
                    const cardCategory = card.querySelector('.category-tag').textContent.toLowerCase();
                    
                    if (filterValue === 'all' || cardCategory === filterValue) {
                        card.style.display = 'flex';
                        setTimeout(() => {
                            card.style.transform = 'translateY(0)';
                            card.style.opacity = '1';
                        }, index * 50); // Staggered animation
                    } else {
                        card.style.display = 'none';
                    }
                });
            }, 300);
        });
    });
    
    // Search functionality with debounce
    const searchInput = document.querySelector('.search-bar input');
    const searchButton = document.querySelector('.search-bar button');
    
    let searchTimeout;
    function performSearch() {
        clearTimeout(searchTimeout);
        searchTimeout = setTimeout(() => {
            const searchTerm = searchInput.value.toLowerCase().trim();
            
            blogCards.forEach((card, index) => {
                const title = card.querySelector('h2').textContent.toLowerCase();
                const excerpt = card.querySelector('p').textContent.toLowerCase();
                
                card.style.transition = 'transform 0.3s ease, opacity 0.3s ease';
                
                if (searchTerm === '' || title.includes(searchTerm) || excerpt.includes(searchTerm)) {
                    card.style.display = 'flex';
                    setTimeout(() => {
                        card.style.transform = 'translateY(0)';
                        card.style.opacity = '1';
                    }, index * 50); // Staggered animation
                } else {
                    card.style.transform = 'translateY(20px)';
                    card.style.opacity = '0';
                    setTimeout(() => {
                        card.style.display = 'none';
                    }, 300);
                }
            });
        }, 300);
    }
    
    searchButton.addEventListener('click', performSearch);
    searchInput.addEventListener('input', performSearch);
    
    // Newsletter form submission
    const newsletterForm = document.querySelector('.newsletter-form');
    
    newsletterForm.addEventListener('submit', function(e) {
        e.preventDefault();
        const emailInput = this.querySelector('input[type="email"]');
        const submitButton = this.querySelector('button');
        
        if (emailInput.value && emailInput.value.includes('@')) {
            // Add loading state
            submitButton.innerHTML = '<i class="fas fa-spinner fa-spin"></i>';
            submitButton.disabled = true;
            
            // Simulate API call
            setTimeout(() => {
                submitButton.innerHTML = '<i class="fas fa-check"></i> Subscribed!';
                
                // Reset after animation
                setTimeout(() => {
                    submitButton.innerHTML = 'Subscribe';
                    submitButton.disabled = false;
                    emailInput.value = '';
                    
                    // Show notification
                    showNotification('Thank you for subscribing!');
                }, 1500);
            }, 1000);
        } else {
            emailInput.style.borderColor = 'red';
            setTimeout(() => {
                emailInput.style.borderColor = '';
            }, 1000);
            showNotification('Please enter a valid email');
        }
    });
    
    // Show notification function
    function showNotification(message) {
        const notification = document.createElement('div');
        notification.className = 'notification';
        notification.textContent = message;
        document.body.appendChild(notification);
        
        setTimeout(() => {
            notification.classList.add('show');
        }, 10);
        
        setTimeout(() => {
            notification.classList.remove('show');
            setTimeout(() => {
                document.body.removeChild(notification);
            }, 300);
        }, 3000);
    }
    
    // Intersection Observer for scroll animations
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -100px 0px'
    };
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
                observer.unobserve(entry.target);
            }
        });
    }, observerOptions);
    
    // Observe elements
    const elementsToObserve = [
        document.querySelector('.newsletter-section'),
        document.querySelector('.pagination')
    ];
    
    elementsToObserve.forEach(el => {
        if (el) observer.observe(el);
    });
    
    // Initialize card animations
    blogCards.forEach(card => {
        card.style.animationPlayState = 'running';
    });
});