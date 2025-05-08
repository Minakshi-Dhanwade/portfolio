const menuIcon = document.getElementById('menuIcon');
    const navList = document.getElementById('navList');
    
    menuIcon.addEventListener('click', () => {
      navList.classList.toggle('active');
      menuIcon.innerHTML = navList.classList.contains('active') ? 
        '<i class="fas fa-times"></i>' : '<i class="fas fa-bars"></i>';
    });
    
    // Close menu when clicking on a link
    document.querySelectorAll('.navlist a').forEach(link => {
      link.addEventListener('click', () => {
        navList.classList.remove('active');
        menuIcon.innerHTML = '<i class="fas fa-bars"></i>';
      });
    });
    
    // Form submission
    const contactForm = document.getElementById('contactForm');
    
    contactForm.addEventListener('submit', (e) => {
      e.preventDefault();
      
      const formData = {
        name: document.getElementById('name').value,
        email: document.getElementById('email').value,
        message: document.getElementById('message').value,
        timestamp: new Date().toISOString()
      };
      
      // Save to localStorage (in a real app, you would send this to a server)
      let submissions = JSON.parse(localStorage.getItem('contactSubmissions')) || [];
      submissions.push(formData);
      localStorage.setItem('contactSubmissions', JSON.stringify(submissions));
      
      // Show success message
      alert('Thank you for your message! I will get back to you soon.');
      
      // Reset form
      contactForm.reset();
    });
    
    // Smooth scrolling for anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
      anchor.addEventListener('click', function (e) {
        e.preventDefault();
        
        document.querySelector(this.getAttribute('href')).scrollIntoView({
          behavior: 'smooth'
        });
      });
    });