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
      codeUrl: "https://github.com/Imrankhancoder917/Com.git",
      fullDescription: "This e-commerce platform was built with HTML, CSS,js and mysql. It includes features like product search, filtering, and an admin dashboard for managing products and orders and user can add product in cart section.",
      technologies: ["HTML", "CSS", "JS", "JAVA", "MYSQL"]
    },
    {
      
      id: 2,
      title: "Netflix Data Analyzer",
      category: "app",
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ03xLtWNOg3RqePdpdMIxSM869KqeHYbj6Tg&s",
     description: "A Python-based tool for analyzing Netflix viewership trends using Jupyter Notebook.",
     demoUrl: "#",
     codeUrl: "https://github.com/Imrankhancoder917/pro.git",
     fullDescription: "Netflix Data Analyzer is a Python project that processes and visualizes Netflix viewership data. Built to run in Jupyter Notebook, it leverages Pandas, Matplotlib, and Seaborn for data cleaning, analysis, and visualization. Users can explore top shows, popular genres, viewing trends, and generate insightful charts. This project showcases practical skills in data wrangling, EDA, and reporting.",
     technologies: ["Python", "Pandas", "Matplotlib", "Seaborn", "Jupyter Notebook"]



    },
    {
      
    id: 3,
    title: "Carbon Footprint Monitor",
    category: "web",
    description: "A web application that tracks and visualizes personal or organizational carbon emissions.",
    image: "https://images.unsplash.com/photo-1466629437334-b4f6603563c5?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1478&q=80",
    demoUrl: "#",
    codeUrl: "https://github.com/Imrankhancoder917/carbonfootprint.git",
    fullDescription: "An interactive dashboard that calculates carbon footprint based on user inputs like transportation, energy usage, and consumption habits. Features data visualization of emission trends, sustainability tips, and comparison tools. Built with a Java backend and MySQL database for secure data storage.",
    technologies: ["HTML5", "CSS3", "JavaScript", "Java", "MySQL", "Chart.js"]

    },
    
    {
      
     id: 5,
     title: "Temperature Converter",
     category: "Semester project",
     description: "A desktop GUI application to convert between Celsius, Fahrenheit, and Kelvin.",
     image: "https://images.unsplash.com/photo-1635070041078-e363dbe005cb?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
     demoUrl: "#",
     codeUrl: "https://github.com/Imrankhancoder917/Temparature.git",
     fullDescription: "A lightweight Python application with a Tkinter-based GUI for quick temperature conversions. Supports Celsius, Fahrenheit, and Kelvin units with real-time updates. Ideal for learning basic GUI development and unit conversion logic in Python.",
     technologies: ["Python", "Tkinter", "Pillow (for icons)"]

    },
    {
      id: 6,
      title: "Portfolio Website",
      category: "web",
      description: "Personal portfolio showcasing my skills, projects, and professional experience.",
      image: "https://images.unsplash.com/photo-1499951360447-b19be8fe80f5?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
      demoUrl: "https://imran-khan-portfolio.netlify.app/",
      codeUrl: "https://github.com/Imrankhancoder917/Imrankhanportpholio.git",
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