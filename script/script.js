// Hamburger Menu
const hamburger = document.querySelector('.hamburger');
const navMenu = document.querySelector('.nav-menu');

if (hamburger && navMenu) {
  hamburger.addEventListener('click', () => {
    hamburger.classList.toggle('active');
    navMenu.classList.toggle('active');
  });

  document.querySelectorAll('.nav-menu a').forEach(link => {
    link.addEventListener('click', () => {
      hamburger.classList.remove('active');
      navMenu.classList.remove('active');
    });
  });
}

// Newsletter Subscription
function subscribeNewsletter() {
  const emailInput = document.getElementById('emailSub');
  if (emailInput) {
    const email = emailInput.value;
    if (email && validateEmail(email)) {
      localStorage.setItem('newsletterEmail', email);
      alert('Thank you for subscribing to GreenBite!');
      emailInput.value = '';
    } else {
      alert('Please enter a valid email.');
    }
  }
}

// Reusable Email Validation
function validateEmail(email) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}

// PWA Service Worker
if ('serviceWorker' in navigator) {
  window.addEventListener('load', () => {
    navigator.serviceWorker.register('sw.js')
      .then(reg => console.log('SW registered'))
      .catch(err => console.log('SW registration failed'));
  });
}