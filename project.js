document.addEventListener('DOMContentLoaded', function() {
  // Mobile Menu Toggle
  const burger = document.querySelector('.burger');
  const navLinks = document.querySelector('.nav-links');
  const navItems = document.querySelectorAll('.nav-links li');

  burger.addEventListener('click', function() {
    navLinks.classList.toggle('active');
    this.classList.toggle('active');
  });

  navItems.forEach(item => {
    item.addEventListener('click', function() {
      navLinks.classList.remove('active');
      burger.classList.remove('active');
    });
  });

  // Welcome Animation
  const welcomeOverlay = document.createElement('div');
  welcomeOverlay.className = 'welcome-overlay';
  welcomeOverlay.innerHTML = `
    <div class="welcome-content">
      <h1 class="welcome-title">Welcome to My Projects</h1>
      <p class="welcome-subtitle">Explore my collection of creative works and technical solutions</p>
      <div>
        <i class="fas fa-spa welcome-flower"></i>
        <i class="fas fa-leaf welcome-flower"></i>
        <i class="fas fa-seedling welcome-flower"></i>
      </div>
    </div>
  `;
  document.body.appendChild(welcomeOverlay);

  setTimeout(() => {
    welcomeOverlay.classList.add('hidden');
    setTimeout(() => {
      welcomeOverlay.remove();
    }, 500);
  }, 3000);

  // Floating Flowers Background
  const backgroundAnimation = document.querySelector('.background-animation');
  const flowerTypes = ['fa-spa', 'fa-leaf', 'fa-seedling', 'fa-feather-alt', 'fa-cloud'];
  const colors = ['#6c5ce7', '#00cec9', '#fd79a8', '#a29bfe', '#74b9ff'];

  function createFlower() {
    const flower = document.createElement('i');
    const randomFlower = flowerTypes[Math.floor(Math.random() * flowerTypes.length)];
    const randomColor = colors[Math.floor(Math.random() * colors.length)];
    const randomSize = Math.floor(Math.random() * 30) + 20;
    const randomLeft = Math.floor(Math.random() * 100);
    const randomDelay = Math.floor(Math.random() * 10);
    const randomDuration = Math.floor(Math.random() * 10) + 10;

    flower.className = `flower fas ${randomFlower}`;
    flower.style.color = randomColor;
    flower.style.fontSize = `${randomSize}px`;
    flower.style.left = `${randomLeft}%`;
    flower.style.animationDelay = `${randomDelay}s`;
    flower.style.animationDuration = `${randomDuration}s`;

    backgroundAnimation.appendChild(flower);

    // Remove flower after animation completes
    setTimeout(() => {
      flower.remove();
    }, randomDuration * 1000);
  }

  // Create initial flowers
  for (let i = 0; i < 15; i++) {
    createFlower();
  }

  // Add new flowers periodically
  setInterval(createFlower, 1000);

  // Sample Projects Data (Replace with your actual projects)
  const projects = [
    {
      id: 1,
      title: "E-commerce Platform",
      category: "web",
      description: "A full-featured online store with cart functionality, user authentication, and payment processing.",
      image: "https://images.unsplash.com/photo-1555529669-e69e7aa0ba9a?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
      demoUrl: "#",
      codeUrl: "#",
      fullDescription: "This e-commerce platform was built with React, Node.js, and MongoDB. It includes features like product search, filtering, user reviews, and an admin dashboard for managing products and orders. The payment system integrates with Stripe for secure transactions.",
      technologies: ["React", "Node.js", "MongoDB", "Express", "Stripe API"]
    },
    {
      id: 2,
      title: "Task Management App",
      category: "app",
      description: "A productivity app for organizing tasks with drag-and-drop functionality and team collaboration.",
      image: "https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
      demoUrl: "#",
      codeUrl: "#",
      fullDescription: "The Task Management App helps individuals and teams stay organized. Built with React Native for cross-platform compatibility, it features real-time updates, task categorization, deadline reminders, and progress tracking. The backend uses Firebase for authentication and data storage.",
      technologies: ["React Native", "Firebase", "Redux", "JavaScript"]
    },
    {
      id: 3,
      title: "Sentiment Analysis Tool",
      category: "data",
      description: "Machine learning model that analyzes text sentiment with 85% accuracy on product reviews.",
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
      demoUrl: "#",
      codeUrl: "#",
      fullDescription: "This NLP project uses Python's NLTK and scikit-learn libraries to classify text sentiment. Trained on a dataset of 50,000 product reviews, it can predict positive, negative, or neutral sentiment with 85% accuracy. The web interface was built with Flask.",
      technologies: ["Python", "NLTK", "scikit-learn", "Flask", "Pandas"]
    },
    {
      id: 4,
      title: "Weather Dashboard",
      category: "web",
      description: "Real-time weather information with 5-day forecast and interactive maps.",
      image: "https://images.unsplash.com/photo-1561484930-974554019ade?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
      demoUrl: "#",
      codeUrl: "#",
      fullDescription: "The Weather Dashboard provides current conditions and forecasts using data from the OpenWeather API. Features include location search, temperature unit conversion, and severe weather alerts. The responsive design works on all device sizes.",
      technologies: ["JavaScript", "React", "OpenWeather API", "CSS3", "HTML5"]
    },
    {
      id: 5,
      title: "Fitness Tracker",
      category: "app",
      description: "Mobile app for tracking workouts, nutrition, and health metrics with data visualization.",
      image: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
      demoUrl: "#",
      codeUrl: "#",
      fullDescription: "This fitness tracking app helps users monitor their exercise routines and nutritional intake. It includes features like workout logging, calorie tracking, progress charts, and integration with wearable devices. Built with Flutter for cross-platform compatibility.",
      technologies: ["Flutter", "Dart", "Firebase", "Health API", "Google Fit"]
    },
    {
      id: 6,
      title: "Portfolio Website",
      category: "web",
      description: "Personal portfolio showcasing my skills, projects, and professional experience.",
      image: "https://images.unsplash.com/photo-1499951360447-b19be8fe80f5?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
      demoUrl: "#",
      codeUrl: "#",
      fullDescription: "My personal portfolio website was designed to showcase my work and skills. It features a clean, modern design with smooth animations and responsive layout. The site is built with HTML5, CSS3, and JavaScript without any frameworks for optimal performance.",
      technologies: ["HTML5", "CSS3", "JavaScript", "GSAP", "Responsive Design"]
    }
  ];

  // Render Projects
  const projectsGrid = document.querySelector('.projects-grid');
  const filterButtons = document.querySelectorAll('.filter-btn');
  const projectModal = document.querySelector('.project-modal');
  const modalContent = document.querySelector('.modal-content');
  const modalBody = document.querySelector('.modal-body');
  const closeModal = document.querySelector('.close-modal');

  function renderProjects(filter = 'all') {
    projectsGrid.innerHTML = '';
    
    const filteredProjects = filter === 'all' 
      ? projects 
      : projects.filter(project => project.category === filter);
    
    filteredProjects.forEach((project, index) => {
      const projectCard = document.createElement('div');
      projectCard.className = 'project-card';
      projectCard.dataset.category = project.category;
      projectCard.innerHTML = `
        <div class="project-image">
          <img src="${project.image}" alt="${project.title}">
        </div>
        <div class="project-info">
          <span class="project-category">${project.category}</span>
          <h3 class="project-title">${project.title}</h3>
          <p class="project-description">${project.description}</p>
          <div class="project-links">
            <a href="${project.demoUrl}" class="project-link demo-link">Live Demo</a>
            <a href="${project.codeUrl}" class="project-link code-link">View Code</a>
          </div>
        </div>
      `;
      
      projectsGrid.appendChild(projectCard);
      
      // Add click event to open modal
      projectCard.addEventListener('click', () => {
        openProjectModal(project);
      });
      
      // Animate cards sequentially
      setTimeout(() => {
        projectCard.classList.add('animate');
      }, index * 100);
    });
  }

  // Open Project Modal
  function openProjectModal(project) {
    modalBody.innerHTML = `
      <img src="${project.image}" alt="${project.title}" class="modal-image">
      <h2 class="modal-title">${project.title}</h2>
      <span class="modal-category">${project.category}</span>
      <p class="modal-description">${project.fullDescription}</p>
      <div class="modal-tech">
        <h4>Technologies Used:</h4>
        <div class="tech-list">
          ${project.technologies.map(tech => `<span class="tech-item">${tech}</span>`).join('')}
        </div>
      </div>
      <div class="modal-links">
        <a href="${project.demoUrl}" class="project-link demo-link">Live Demo</a>
        <a href="${project.codeUrl}" class="project-link code-link">View Code</a>
      </div>
    `;
    
    projectModal.classList.add('active');
    document.body.style.overflow = 'hidden';
  }

  // Close Project Modal
  function closeProjectModal() {
    projectModal.classList.remove('active');
    document.body.style.overflow = 'auto';
  }

  // Event Listeners
  filterButtons.forEach(button => {
    button.addEventListener('click', function() {
      // Remove active class from all buttons
      filterButtons.forEach(btn => btn.classList.remove('active'));
      // Add active class to clicked button
      this.classList.add('active');
      // Filter projects
      renderProjects(this.dataset.filter);
    });
  });

  closeModal.addEventListener('click', closeProjectModal);
  projectModal.addEventListener('click', function(e) {
    if (e.target === this) {
      closeProjectModal();
    }
  });

  // Initialize
  renderProjects();

  // Scroll Animation
  function animateOnScroll() {
    const projectCards = document.querySelectorAll('.project-card:not(.animate)');
    
    projectCards.forEach((card, index) => {
      const cardTop = card.getBoundingClientRect().top;
      const windowHeight = window.innerHeight;
      
      if (cardTop < windowHeight * 0.85) {
        setTimeout(() => {
          card.classList.add('animate');
        }, index * 100);
      }
    });
  }

  // Initial check
  animateOnScroll();
  
  // Check on scroll
  window.addEventListener('scroll', animateOnScroll);
});