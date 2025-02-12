/* script.js */

// 1. Update the current year in the footer
document.getElementById('year').textContent = new Date().getFullYear();

// 2. Mobile Menu Toggle
const hamburger = document.querySelector('.hamburger');
const navMenu = document.querySelector('.nav-menu');

hamburger.addEventListener('click', () => {
  const expanded = hamburger.getAttribute('aria-expanded') === 'true';
  hamburger.setAttribute('aria-expanded', !expanded);
  navMenu.classList.toggle('active');
});

// Close mobile menu when a nav link is clicked
document.querySelectorAll('.nav-link').forEach(link => {
  link.addEventListener('click', () => {
    if (navMenu.classList.contains('active')) {
      navMenu.classList.remove('active');
      hamburger.setAttribute('aria-expanded', false);
    }
  });
});

// 3. Intersection Observer for Fade-In Animations
const observerOptions = {
  threshold: 0.2
};

const observer = new IntersectionObserver((entries, obs) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible');
      obs.unobserve(entry.target);
    }
  });
}, observerOptions);

// Observe all elements with class 'content-block' and 'timeline-item'
document.querySelectorAll('.content-block, .timeline-item').forEach(el => {
  observer.observe(el);
});
