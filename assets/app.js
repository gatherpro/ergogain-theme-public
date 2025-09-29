// ERGOGAIN Theme JavaScript
// Minimal functionality for future enhancements

document.addEventListener('DOMContentLoaded', function() {
  // Cart functionality placeholder
  const cartLinks = document.querySelectorAll('.cart-link');

  // Mobile menu placeholder
  const mobileMenuButton = document.querySelector('.mobile-menu-button');

  // Newsletter form enhancement
  const newsletterForms = document.querySelectorAll('.newsletter-form');

  newsletterForms.forEach(form => {
    form.addEventListener('submit', function(e) {
      const submitButton = form.querySelector('.newsletter-submit, .newsletter-submit');
      if (submitButton) {
        submitButton.textContent = 'Subscribing...';
        submitButton.disabled = true;
      }
    });
  });

  // Smooth scroll for anchor links
  const anchorLinks = document.querySelectorAll('a[href^="#"]');

  anchorLinks.forEach(link => {
    link.addEventListener('click', function(e) {
      const targetId = this.getAttribute('href');
      const targetElement = document.querySelector(targetId);

      if (targetElement) {
        e.preventDefault();
        targetElement.scrollIntoView({
          behavior: 'smooth',
          block: 'start'
        });
      }
    });
  });

  // Product carousel scroll functionality
  const carousels = document.querySelectorAll('.product-carousel');

  carousels.forEach(carousel => {
    const track = carousel.querySelector('.carousel-track');
    if (track) {
      // Add scroll indicators or navigation if needed
      // This is a placeholder for future carousel enhancements
    }
  });

  console.log('ERGOGAIN theme loaded successfully');
});