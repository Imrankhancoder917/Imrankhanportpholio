document.addEventListener('DOMContentLoaded', function() {
  // Mobile Menu Toggle
  const mobileMenuBtn = document.querySelector('.mobile-menu-btn');
  const nav = document.querySelector('.nav');
  
  mobileMenuBtn.addEventListener('click', function() {
    nav.classList.toggle('active');
    this.querySelector('i').classList.toggle('fa-times');
  });
  
  // Header Scroll Effect
  const header = document.querySelector('.header');
  
  window.addEventListener('scroll', function() {
    if (window.scrollY > 50) {
      header.classList.add('scrolled');
    } else {
      header.classList.remove('scrolled');
    }
  });
  
  // Welcome Message
  const welcomeMessage = document.createElement('div');
  welcomeMessage.className = 'welcome-message';
  welcomeMessage.innerHTML = `
    <h2>Welcome to My About Page!</h2>
    <p>I'm Imran Khan, a Software engineer exploring new thinks .</p>
    <a href="#about" class="btn primary-btn">Explore</a>
  `;
  document.body.appendChild(welcomeMessage);
  
  setTimeout(() => {
    welcomeMessage.classList.add('active');
  }, 500);
  
  setTimeout(() => {
    welcomeMessage.classList.remove('active');
    setTimeout(() => {
      welcomeMessage.remove();
    }, 500);
  }, 3500);
  
  // Light Effect
  const lightEffect = document.createElement('div');
  lightEffect.className = 'light-effect';
  document.body.appendChild(lightEffect);
  
  document.addEventListener('mousemove', (e) => {
    lightEffect.style.setProperty('--x', e.clientX + 'px');
    lightEffect.style.setProperty('--y', e.clientY + 'px');
    lightEffect.style.opacity = '1';
  });
  
  document.addEventListener('mouseleave', () => {
    lightEffect.style.opacity = '0';
  });
  
  // Floating Particles
  const particlesContainer = document.createElement('div');
  particlesContainer.className = 'particles';
  document.body.appendChild(particlesContainer);
  
  function createParticle() {
    const particle = document.createElement('div');
    particle.className = 'particle';
    
    const size = Math.random() * 10 + 5;
    const posX = Math.random() * window.innerWidth;
    const posY = Math.random() * window.innerHeight;
    const duration = Math.random() * 20 + 10;
    const delay = Math.random() * 5;
    const opacity = Math.random() * 0.5 + 0.1;
    
    particle.style.width = `${size}px`;
    particle.style.height = `${size}px`;
    particle.style.left = `${posX}px`;
    particle.style.top = `${posY}px`;
    particle.style.animationDuration = `${duration}s`;
    particle.style.animationDelay = `${delay}s`;
    particle.style.opacity = opacity;
    
    particlesContainer.appendChild(particle);
    
    // Remove particle after animation completes
    setTimeout(() => {
      particle.remove();
    }, duration * 1000);
  }
  
  // Create initial particles
  for (let i = 0; i < 20; i++) {
    createParticle();
  }
  
  // Add new particles periodically
  setInterval(createParticle, 1000);
  
  // Scroll Animation
  function animateOnScroll() {
    const sections = document.querySelectorAll('.about-section, .education-section, .footer');
    
    sections.forEach(section => {
      const sectionTop = section.getBoundingClientRect().top;
      const windowHeight = window.innerHeight;
      
      if (sectionTop < windowHeight * 0.75) {
        section.classList.add('animate');
      }
    });
    
    const timelineItems = document.querySelectorAll('.timeline-item');
    
    timelineItems.forEach((item, index) => {
      const itemTop = item.getBoundingClientRect().top;
      const windowHeight = window.innerHeight;
      
      if (itemTop < windowHeight * 0.85) {
        setTimeout(() => {
          item.classList.add('animate');
        }, index * 200);
      }
    });
    
    const aboutElements = document.querySelectorAll('.about-image, .about-content');
    
    aboutElements.forEach(element => {
      const elementTop = element.getBoundingClientRect().top;
      const windowHeight = window.innerHeight;
      
      if (elementTop < windowHeight * 0.85) {
        element.classList.add('animate');
      }
    });
  }
  
  // Initial check
  animateOnScroll();
  
  // Check on scroll
  window.addEventListener('scroll', animateOnScroll);
  
  // Smooth scrolling for anchor links
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
      e.preventDefault();
      
      const targetId = this.getAttribute('href');
      if (targetId === '#') return;
      
      const targetElement = document.querySelector(targetId);
      if (targetElement) {
        window.scrollTo({
          top: targetElement.offsetTop - 70,
          behavior: 'smooth'
        });
        
        // Close mobile menu if open
        if (nav.classList.contains('active')) {
          nav.classList.remove('active');
          mobileMenuBtn.querySelector('i').classList.remove('fa-times');
        }
      }
    });
  });
  
  // Add animation to particles
  const style = document.createElement('style');
  style.innerHTML = `
    @keyframes float {
      0% {
        transform: translateY(0) rotate(0deg);
      }
      50% {
        transform: translateY(-50px) rotate(180deg);
      }
      100% {
        transform: translateY(0) rotate(360deg);
      }
    }
    
    .particle {
      animation: float linear infinite;
    }
  `;
  document.head.appendChild(style);
});