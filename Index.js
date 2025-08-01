document.addEventListener('DOMContentLoaded', function() {
    // Preloader
    const preloader = document.querySelector('.preloader');
    
    window.addEventListener('load', function() {
        setTimeout(function() {
            preloader.style.opacity = '0';
            setTimeout(function() {
                preloader.style.display = 'none';
            }, 500);
        }, 1000);
    });

    // Mobile Menu Toggle
    const menuToggle = document.querySelector('.menu-toggle');
    const navLinks = document.querySelector('.nav-links');
    const bars = document.querySelectorAll('.bar');
    
    menuToggle.addEventListener('click', function() {
        this.classList.toggle('active');
        navLinks.classList.toggle('active');
        document.body.classList.toggle('no-scroll');
    });

    // Close menu when clicking outside or on a link
    document.addEventListener('click', function(e) {
        if (!navLinks.contains(e.target) && !menuToggle.contains(e.target)) {
            menuToggle.classList.remove('active');
            navLinks.classList.remove('active');
            document.body.classList.remove('no-scroll');
        }
    });

    // Navbar scroll effect
    const navbar = document.querySelector('.navbar');
    
    window.addEventListener('scroll', function() {
        if (window.scrollY > 50) {
            navbar.classList.add('scrolled');
        } else {
            navbar.classList.remove('scrolled');
        }
    });

    // Typewriter effect
    const typewriterText = document.querySelector('.typewriter-text');
    const professions = ['Computer Science Student', 'Web Developer', 'Problem Solver', 'Tech Enthusiast'];
    let i = 0;
    let j = 0;
    let currentProfession = '';
    let isDeleting = false;
    let isEnd = false;
    
    function typeWriter() {
        isEnd = false;
        typewriterText.innerHTML = currentProfession.substring(0, j) + '<span class="blinking-cursor">|</span>';
        
        if (!isDeleting && j === currentProfession.length) {
            isEnd = true;
            isDeleting = true;
            setTimeout(typeWriter, 2000);
            return;
        }
        
        if (isDeleting && j === 0) {
            isDeleting = false;
            i = (i + 1) % professions.length;
            currentProfession = professions[i];
            setTimeout(typeWriter, 500);
            return;
        }
        
        if (isDeleting) {
            j--;
        } else {
            j++;
        }
        
        const speed = isDeleting ? 100 : isEnd ? 2000 : 100;
        setTimeout(typeWriter, speed);
    }
    
    // Initialize typewriter
    currentProfession = professions[i];
    setTimeout(typeWriter, 1500);

    // Initialize particles.js
    particlesJS('particles-js', {
        "particles": {
            "number": {
                "value": 60,
                "density": {
                    "enable": true,
                    "value_area": 800
                }
            },
            "color": {
                "value": "#6c63ff"
            },
            "shape": {
                "type": "circle",
                "stroke": {
                    "width": 0,
                    "color": "#000000"
                }
            },
            "opacity": {
                "value": 0.3,
                "random": false
            },
            "size": {
                "value": 3,
                "random": true
            },
            "line_linked": {
                "enable": true,
                "distance": 150,
                "color": "#6c63ff",
                "opacity": 0.2,
                "width": 1
            },
            "move": {
                "enable": true,
                "speed": 1.5,
                "direction": "none",
                "random": false,
                "straight": false,
                "out_mode": "out",
                "bounce": false
            }
        },
        "interactivity": {
            "detect_on": "canvas",
            "events": {
                "onhover": {
                    "enable": true,
                    "mode": "grab"
                },
                "onclick": {
                    "enable": true,
                    "mode": "push"
                },
                "resize": true
            },
            "modes": {
                "grab": {
                    "distance": 140,
                    "line_linked": {
                        "opacity": 0.5
                    }
                },
                "push": {
                    "particles_nb": 4
                }
            }
        },
        "retina_detect": true
    });

    // Smooth scrolling for anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            
            const targetId = this.getAttribute('href');
            if (targetId === '#') return;
            
            const targetElement = document.querySelector(targetId);
            if (targetElement) {
                window.scrollTo({
                    top: targetElement.offsetTop - 80,
                    behavior: 'smooth'
                });
            }
        });
    });

    // Animate sections when they come into view
    const animateOnScroll = function() {
        const elements = document.querySelectorAll('.skills-preview, .achievement-banner, .projects-preview');
        
        elements.forEach(element => {
            const elementPosition = element.getBoundingClientRect().top;
            const windowHeight = window.innerHeight;
            
            if (elementPosition < windowHeight - 100) {
                element.style.opacity = '1';
                element.style.transform = 'translateY(0)';
            }
        });
    };
    
    window.addEventListener('scroll', animateOnScroll);
    animateOnScroll(); // Run once on page load

    // Set active nav link based on scroll position
    const sections = document.querySelectorAll('section');
    const navItems = document.querySelectorAll('.nav-link');
    
    window.addEventListener('scroll', function() {
        let current = '';
        
        sections.forEach(section => {
            const sectionTop = section.offsetTop;
            const sectionHeight = section.clientHeight;
            
            if (pageYOffset >= (sectionTop - 200)) {
                current = section.getAttribute('id');
            }
        });
        
        navItems.forEach(item => {
            item.classList.remove('active');
            if (item.getAttribute('href').includes(current)) {
                item.classList.add('active');
            }
        });
    });

    // Floating nav active state
    const floatingNavLinks = document.querySelectorAll('.floating-nav-link');
    
    floatingNavLinks.forEach(link => {
        link.addEventListener('click', function() {
            floatingNavLinks.forEach(l => l.classList.remove('active'));
            this.classList.add('active');
        });
    });
});