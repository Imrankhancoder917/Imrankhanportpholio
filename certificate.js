document.addEventListener('DOMContentLoaded', function() {
  // Welcome Animation
  const welcomeOverlay = document.createElement('div');
  welcomeOverlay.className = 'welcome-overlay';
  welcomeOverlay.innerHTML = `
    <div class="welcome-content">
      <h1 class="welcome-title">My Certificates</h1>
      <p class="welcome-subtitle">Proof of my continuous learning and professional development</p>
      <div>
        <i class="fas fa-certificate welcome-flower"></i>
        <i class="fas fa-award welcome-flower"></i>
        <i class="fas fa-medal welcome-flower"></i>
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

  // Custom Cursor
  const cursor = document.querySelector('.cursor');
  const cursorFollower = document.querySelector('.cursor-follower');

  document.addEventListener('mousemove', (e) => {
    cursor.style.left = e.clientX + 'px';
    cursor.style.top = e.clientY + 'px';
    
    setTimeout(() => {
      cursorFollower.style.left = e.clientX + 'px';
      cursorFollower.style.top = e.clientY + 'px';
    }, 100);
  });

  document.addEventListener('mouseenter', () => {
    cursor.style.opacity = '1';
    cursorFollower.style.opacity = '1';
  });

  document.addEventListener('mouseleave', () => {
    cursor.style.opacity = '0';
    cursorFollower.style.opacity = '0';
  });

  // Hover effects for interactive elements
  const interactiveElements = document.querySelectorAll('a, button, .certificate-card');
  
  interactiveElements.forEach(el => {
    el.addEventListener('mouseenter', () => {
      cursorFollower.style.width = '20px';
      cursorFollower.style.height = '20px';
      cursorFollower.style.backgroundColor = 'rgba(108, 92, 231, 0.5)';
    });
    
    el.addEventListener('mouseleave', () => {
      cursorFollower.style.width = '40px';
      cursorFollower.style.height = '40px';
      cursorFollower.style.backgroundColor = 'transparent';
    });
  });

  // Particles.js Configuration
  particlesJS('particles-js', {
    "particles": {
      "number": {
        "value": 80,
        "density": {
          "enable": true,
          "value_area": 800
        }
      },
      "color": {
        "value": "#6c5ce7"
      },
      "shape": {
        "type": "circle",
        "stroke": {
          "width": 0,
          "color": "#000000"
        },
        "polygon": {
          "nb_sides": 5
        }
      },
      "opacity": {
        "value": 0.3,
        "random": true,
        "anim": {
          "enable": false,
          "speed": 1,
          "opacity_min": 0.1,
          "sync": false
        }
      },
      "size": {
        "value": 3,
        "random": true,
        "anim": {
          "enable": false,
          "speed": 40,
          "size_min": 0.1,
          "sync": false
        }
      },
      "line_linked": {
        "enable": true,
        "distance": 150,
        "color": "#6c5ce7",
        "opacity": 0.2,
        "width": 1
      },
      "move": {
        "enable": true,
        "speed": 2,
        "direction": "none",
        "random": true,
        "straight": false,
        "out_mode": "out",
        "bounce": false,
        "attract": {
          "enable": false,
          "rotateX": 600,
          "rotateY": 1200
        }
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
            "opacity": 1
          }
        },
        "bubble": {
          "distance": 400,
          "size": 40,
          "duration": 2,
          "opacity": 8,
          "speed": 3
        },
        "repulse": {
          "distance": 200,
          "duration": 0.4
        },
        "push": {
          "particles_nb": 4
        },
        "remove": {
          "particles_nb": 2
        }
      }
    },
    "retina_detect": true
  });

  // Sample Certificates Data (Replace with your actual certificates)
  const certificates = [
    {
      id: 1,
      title: "Java Full Stack Certificate",
      issuer: "Edu Skill Academy",
      issuerLogo: "https://via.placeholder.com/30",
      date: "December 2024",
      image: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
      pdfUrl: "certificate/java full stack internship certificate.pdf",
      badge: "Professional"
    },
    {
      id: 2,
      title: "Oracle certificate",
      issuer: "Oracle Academy",
      issuerLogo: "https://via.placeholder.com/30",
      date: "December 2024",
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
      pdfUrl: "certificate/oracle.pdf",
      badge: "Advanced"
    },
    {
      id: 3,
      title: "Google Ai/Ml",
      issuer: "Google Academy",
      issuerLogo: "https://via.placeholder.com/30",
      date: "June 2025",
      image: "https://images.unsplash.com/photo-1633356122544-f134324a6cee?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
      pdfUrl: "certificate/ai ml google.pdf",
      badge: "Expert"
    },
    {
      id: 4,
      title: "Participant certificate ",
      issuer: "Naukari.com",
      issuerLogo: "https://via.placeholder.com/30",
      date: "May  2025",
      image: "https://images.unsplash.com/photo-1547658719-da2b51169166?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
      pdfUrl: "certificate/naukari.pdf",
      badge: "Professional"
    },
    {
      id: 5,
      title: "Python",
      issuer: "Guvi",
      issuerLogo: "https://via.placeholder.com/30",
      date: "May  2024",
      image: "https://images.unsplash.com/photo-1526379095098-d400fd0bf935?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
      pdfUrl: "certificate/python.pdf",
      badge: "Fundamentals"
    },
    {
      id: 6,
      title: "Cloud Computing Fundamentals",
      issuer: "AWS Academy",
      issuerLogo: "https://via.placeholder.com/30",
      date: "January to march 2025",
      image: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
      pdfUrl: "certificate/Cloud certificate.pdf",
      badge: "Fundamentals"
    }
    
  ];

  // Render Certificates
  const certificatesGrid = document.querySelector('.certificates-grid');
  const pdfModal = document.querySelector('.pdf-modal');
  const closeModal = document.querySelector('.close-modal');
  const pdfCanvas = document.getElementById('pdf-canvas');
  const pageCount = document.getElementById('page-count');
  const prevPageBtn = document.getElementById('prev-page');
  const nextPageBtn = document.getElementById('next-page');
  
  let pdfDoc = null;
  let pageNum = 1;
  let pageRendering = false;
  let pageNumPending = null;
  let scale = 1.5;

  function renderCertificates() {
    certificatesGrid.innerHTML = '';
    
    certificates.forEach((certificate, index) => {
      const certificateCard = document.createElement('div');
      certificateCard.className = 'certificate-card';
      certificateCard.innerHTML = `
        <div class="certificate-image">
          <img src="${certificate.image}" alt="${certificate.title}">
          <span class="certificate-badge">${certificate.badge}</span>
        </div>
        <div class="certificate-info">
          <h3 class="certificate-title">${certificate.title}</h3>
          <div class="certificate-issuer">
            <img src="${certificate.issuerLogo}" alt="${certificate.issuer}" class="issuer-logo">
            <span class="issuer-name">${certificate.issuer}</span>
          </div>
          <span class="certificate-date">Issued: ${certificate.date}</span>
          <a href="#" class="view-certificate" data-pdf="${certificate.pdfUrl}">View Certificate</a>
        </div>
      `;
      
      certificatesGrid.appendChild(certificateCard);
      
      // Animate cards sequentially
      setTimeout(() => {
        certificateCard.classList.add('animate');
      }, index * 100);
      
      // Add click event to view certificate
      certificateCard.querySelector('.view-certificate').addEventListener('click', (e) => {
        e.preventDefault();
        openPdfModal(certificate.pdfUrl);
      });
    });
  }

  // PDF Viewer Functions
  function renderPage(num) {
    pageRendering = true;
    
    pdfDoc.getPage(num).then(function(page) {
      const viewport = page.getViewport({ scale: scale });
      
      // Adjust canvas dimensions while maintaining aspect ratio
      const containerWidth = document.querySelector('.pdf-viewer-container').clientWidth - 40;
      const adjustedScale = containerWidth / viewport.width;
      const adjustedViewport = page.getViewport({ scale: adjustedScale });
      
      pdfCanvas.height = adjustedViewport.height;
      pdfCanvas.width = adjustedViewport.width;
      
      const renderContext = {
        canvasContext: pdfCanvas.getContext('2d'),
        viewport: adjustedViewport
      };
      
      const renderTask = page.render(renderContext);
      
      renderTask.promise.then(function() {
        pageRendering = false;
        
        if (pageNumPending !== null) {
          renderPage(pageNumPending);
          pageNumPending = null;
        }
        
        // Scroll to top when new page renders
        document.querySelector('.pdf-viewer-container').scrollTo(0, 0);
      });
    });
    
    pageCount.textContent = `Page ${num} of ${pdfDoc.numPages}`;
    pageNum = num;
    
    // Update button states
    prevPageBtn.disabled = (num <= 1);
    nextPageBtn.disabled = (num >= pdfDoc.numPages);
  }

  function queueRenderPage(num) {
    if (pageRendering) {
      pageNumPending = num;
    } else {
      renderPage(num);
    }
  }

  function openPdfModal(pdfUrl) {
    pdfModal.classList.add('active');
    document.body.style.overflow = 'hidden';
    
    // Initialize PDF.js
    pdfjsLib.getDocument(pdfUrl).promise.then(function(pdfDoc_) {
      pdfDoc = pdfDoc_;
      pageCount.textContent = `Page 1 of ${pdfDoc.numPages}`;
      
      // Render the first page with adjusted scaling
      renderPage(1);
    }).catch(function(error) {
      alert('Error loading PDF: ' + error.message);
      pdfModal.classList.remove('active');
      document.body.style.overflow = 'auto';
    });
  }

  // Event Listeners for PDF Viewer
  prevPageBtn.addEventListener('click', function() {
    if (pageNum <= 1) return;
    queueRenderPage(pageNum - 1);
  });

  nextPageBtn.addEventListener('click', function() {
    if (pageNum >= pdfDoc.numPages) return;
    queueRenderPage(pageNum + 1);
  });

  closeModal.addEventListener('click', function() {
    pdfModal.classList.remove('active');
    document.body.style.overflow = 'auto';
  });

  pdfModal.addEventListener('click', function(e) {
    if (e.target === this) {
      pdfModal.classList.remove('active');
      document.body.style.overflow = 'auto';
    }
  });

  // Scroll to Top Button
  const scrollTopBtn = document.querySelector('.scroll-top');
  
  window.addEventListener('scroll', function() {
    if (window.pageYOffset > 300) {
      scrollTopBtn.classList.add('active');
    } else {
      scrollTopBtn.classList.remove('active');
    }
  });
  
  scrollTopBtn.addEventListener('click', function() {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  });

  // Handle window resize for PDF viewer
  window.addEventListener('resize', function() {
    if (pdfModal.classList.contains('active') && pdfDoc) {
      renderPage(pageNum);
    }
  });

  // Set current year in footer
  document.getElementById('current-year').textContent = new Date().getFullYear();

  // Initialize
  renderCertificates();
});