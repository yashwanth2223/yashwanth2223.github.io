// Intersection Observer for scroll animations
const observerOptions = {
    threshold: 0.2
  };
  
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('animate-slide-in');
        observer.unobserve(entry.target);
      }
    });
  }, observerOptions);
  
  // Animate sections on scroll
  document.querySelectorAll('section').forEach(section => {
    observer.observe(section);
  });
  
  // Smooth scroll for navigation
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
      e.preventDefault();
      document.querySelector(this.getAttribute('href')).scrollIntoView({
        behavior: 'smooth'
      });
    });
  });
  
  // Dynamic year in footer
  document.getElementById('current-year').textContent = new Date().getFullYear();
  
  // Navbar scroll effect
  const nav = document.querySelector('nav');
  window.addEventListener('scroll', () => {
    if (window.scrollY > 100) {
      nav.classList.add('sticky');
    } else {
      nav.classList.remove('sticky');
    }
  });