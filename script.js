/**
 * COREVO — Fluid & Immersive Experience
 * Inspired by mont-fort.com
 */

// ========== Preloader ==========
const preloader = document.getElementById('preloader');

if (preloader) {
    window.addEventListener('load', () => {
        setTimeout(() => {
            preloader.classList.add('hidden');
        }, 1200);
    });
    setTimeout(() => {
        if (!preloader.classList.contains('hidden')) {
            preloader.classList.add('hidden');
        }
    }, 2500);
}

// ========== Navbar Scroll ==========
const nav = document.getElementById('nav');

window.addEventListener('scroll', () => {
    if (window.scrollY > 80) {
        nav.classList.add('scrolled');
    } else {
        nav.classList.remove('scrolled');
    }
}, { passive: true });

// ========== Mobile Menu ==========
const navToggle = document.getElementById('nav-toggle');
const navMenu = document.querySelector('.nav-menu');

navToggle?.addEventListener('click', () => {
    navMenu.classList.toggle('active');
    navToggle.classList.toggle('active');
});

// Close menu on link click
document.querySelectorAll('.nav-menu a').forEach(link => {
    link.addEventListener('click', () => {
        navMenu.classList.remove('active');
        navToggle.classList.remove('active');
    });
});

// ========== Smooth Scroll ==========
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        const href = this.getAttribute('href');
        if (href === '#') return;
        
        e.preventDefault();
        const target = document.querySelector(href);
        if (target) {
            const navHeight = nav?.offsetHeight || 0;
            const targetTop = target.getBoundingClientRect().top + window.scrollY - navHeight;
            
            window.scrollTo({
                top: targetTop,
                behavior: 'smooth'
            });
        }
    });
});

// ========== Scroll Reveal ==========
const revealElements = document.querySelectorAll('.apps-intro, .app-division, .about-inner, .contact-inner');

const revealObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('visible');
        }
    });
}, {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
});

revealElements.forEach(el => {
    el.classList.add('reveal');
    revealObserver.observe(el);
});

// Stagger app divisions
document.querySelectorAll('.app-division').forEach((el, i) => {
    el.style.transitionDelay = `${i * 0.08}s`;
});

// ========== Animated Counter ==========
const statNumbers = document.querySelectorAll('.about-stat-num');

const counterObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            const counter = entry.target;
            const target = parseInt(counter.getAttribute('data-target'));
            const duration = 1500;
            const start = performance.now();

            const updateCounter = (currentTime) => {
                const elapsed = currentTime - start;
                const progress = Math.min(elapsed / duration, 1);
                const easeOut = 1 - Math.pow(1 - progress, 3);
                counter.textContent = Math.floor(easeOut * target);

                if (progress < 1) {
                    requestAnimationFrame(updateCounter);
                } else {
                    counter.textContent = target;
                }
            };

            requestAnimationFrame(updateCounter);
            counterObserver.unobserve(counter);
        }
    });
}, { threshold: 0.5 });

statNumbers.forEach(num => counterObserver.observe(num));

// ========== Parallax Hero Glows ==========
const heroGlows = document.querySelectorAll('.hero-glow');

window.addEventListener('scroll', () => {
    const scrolled = window.scrollY;
    const rate = scrolled * 0.3;
    
    heroGlows.forEach((glow, i) => {
        const speed = (i + 1) * 0.1;
        glow.style.transform = `translateY(${rate * speed}px)`;
    });
}, { passive: true });

// ========== App Division Hover Effects ==========
document.querySelectorAll('.app-division').forEach(division => {
    division.addEventListener('mouseenter', function() {
        this.style.transform = 'translateX(8px)';
    });
    division.addEventListener('mouseleave', function() {
        this.style.transform = 'translateX(0)';
    });
});

// ========== Scroll Progress Bar ==========
const progressBar = document.createElement('div');
progressBar.className = 'scroll-progress';
progressBar.style.cssText = `
    position: fixed;
    top: 0;
    left: 0;
    height: 2px;
    background: linear-gradient(90deg, #22d3ee, #8b5cf6);
    z-index: 9998;
    transform-origin: left;
    transition: transform 0.1s ease-out;
`;
document.body.appendChild(progressBar);

window.addEventListener('scroll', () => {
    const scrollTop = window.scrollY;
    const docHeight = document.documentElement.scrollHeight - window.innerHeight;
    const progress = docHeight > 0 ? (scrollTop / docHeight) * 100 : 0;
    progressBar.style.transform = `scaleX(${progress / 100})`;
    progressBar.style.width = '100%';
}, { passive: true });
