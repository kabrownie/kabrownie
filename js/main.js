// Smooth scroll for anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            e.preventDefault();
            target.scrollIntoView({ behavior: 'smooth' });
        }
    });
});
// ... existing scroll/spy/header code ...


// Navbar background change on scroll
const header = document.getElementById('header');
window.addEventListener('scroll', () => {
    header.classList.toggle('scrolled', window.scrollY > 50);
});

// Add subtle class for styling (optional)
const style = document.createElement('style');
style.textContent = `.site-header.scrolled { background: rgba(11, 12, 14, 0.95); }`;
document.head.appendChild(style);

// Scroll-to-top button
const scrollBtn = document.getElementById('scrollBtn');
window.addEventListener('scroll', () => {
    scrollBtn.classList.toggle('visible', window.scrollY > 500);
});

scrollBtn.addEventListener('click', (e) => {
    e.preventDefault();
    window.scrollTo({ top: 0, behavior: 'smooth' });
});

// Typing effect for hero

let phraseIndex = 0;
let charIndex = 0;
let isDeleting = false;
