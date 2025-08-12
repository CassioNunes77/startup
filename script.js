// Loading Screen
window.addEventListener('load', () => {
    const loading = document.getElementById('loading');
    setTimeout(() => {
        loading.classList.add('hidden');
    }, 1000);
});

// Navbar scroll effect
window.addEventListener('scroll', () => {
    const navbar = document.getElementById('navbar');
    if (window.scrollY > 100) {
        navbar.classList.add('scrolled');
    } else {
        navbar.classList.remove('scrolled');
    }
});

// Smooth scrolling for navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

// Scroll animations
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('visible');
        }
    });
}, observerOptions);

document.querySelectorAll('.fade-in, .slide-in-left, .slide-in-right').forEach(el => {
    observer.observe(el);
});

// Animated counter for stats
const counters = document.querySelectorAll('.stat-number');
const animateCounters = () => {
    counters.forEach(counter => {
        const target = parseInt(counter.getAttribute('data-target'));
        const duration = 2000;
        const increment = target / (duration / 16);
        let current = 0;

        const updateCounter = () => {
            current += increment;
            if (current < target) {
                counter.textContent = Math.floor(current);
                requestAnimationFrame(updateCounter);
            } else {
                counter.textContent = target;
            }
        };

        updateCounter();
    });
};

// Trigger counter animation when about section is visible
const aboutSection = document.querySelector('#about');
const aboutObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            animateCounters();
            aboutObserver.unobserve(entry.target);
        }
    });
}, { threshold: 0.5 });

aboutObserver.observe(aboutSection);

// Form submission
const contactForm = document.querySelector('.contact-form');
contactForm.addEventListener('submit', (e) => {
    e.preventDefault();
    
    // Simulate form submission
    const submitBtn = contactForm.querySelector('button[type="submit"]');
    const originalText = submitBtn.innerHTML;
    
    submitBtn.innerHTML = '<i class="fas fa-spinner fa-spin"></i> Enviando...';
    submitBtn.disabled = true;
    
    setTimeout(() => {
        alert('Mensagem enviada com sucesso! Entraremos em contato em breve.');
        contactForm.reset();
        submitBtn.innerHTML = originalText;
        submitBtn.disabled = false;
    }, 2000);
});

// Mobile menu toggle
const mobileMenu = document.getElementById('mobile-menu');
const navLinks = document.querySelector('.nav-links');

mobileMenu.addEventListener('click', () => {
    navLinks.classList.toggle('active');
    mobileMenu.classList.toggle('active');
});

// Parallax effect for floating elements
window.addEventListener('scroll', () => {
    const scrolled = window.pageYOffset;
    const parallaxElements = document.querySelectorAll('.floating-element');
    
    parallaxElements.forEach((element, index) => {
        const speed = 0.5 + (index * 0.1);
        element.style.transform = `translateY(${scrolled * speed}px)`;
    });
});

// Add hover effects to service cards
document.querySelectorAll('.service-card').forEach(card => {
    card.addEventListener('mouseenter', () => {
        card.style.transform = 'translateY(-10px) scale(1.02)';
    });
    
    card.addEventListener('mouseleave', () => {
        card.style.transform = 'translateY(0) scale(1)';
    });
});

// Add typing effect to hero title
const heroTitle = document.querySelector('.hero h1');
const originalText = heroTitle.textContent;
heroTitle.textContent = '';

let charIndex = 0;
const typeWriter = () => {
    if (charIndex < originalText.length) {
        heroTitle.textContent += originalText.charAt(charIndex);
        charIndex++;
        setTimeout(typeWriter, 100);
    }
};

// Start typing effect after loading
setTimeout(typeWriter, 1500);

// Add scroll progress indicator
const progressBar = document.createElement('div');
progressBar.style.cssText = `
    position: fixed;
    top: 0;
    left: 0;
    width: 0%;
    height: 3px;
    background: var(--gradient-primary);
    z-index: 1001;
    transition: width 0.1s ease;
`;
document.body.appendChild(progressBar);

window.addEventListener('scroll', () => {
    const scrolled = (window.scrollY / (document.documentElement.scrollHeight - window.innerHeight)) * 100;
    progressBar.style.width = scrolled + '%';
});

// Add particle effect to hero section
const createParticle = () => {
    const particle = document.createElement('div');
    particle.style.cssText = `
        position: absolute;
        width: 4px;
        height: 4px;
        background: rgba(255, 255, 255, 0.6);
        border-radius: 50%;
        pointer-events: none;
        animation: particleFloat 3s linear infinite;
    `;
    
    particle.style.left = Math.random() * 100 + '%';
    particle.style.top = '100%';
    
    document.querySelector('.hero').appendChild(particle);
    
    setTimeout(() => {
        particle.remove();
    }, 3000);
};

// Create particles periodically
setInterval(createParticle, 300);

// Add CSS for particle animation
const style = document.createElement('style');
style.textContent = `
    @keyframes particleFloat {
        0% {
            transform: translateY(0) rotate(0deg);
            opacity: 1;
        }
        100% {
            transform: translateY(-100vh) rotate(360deg);
            opacity: 0;
        }
    }
`;
document.head.appendChild(style);

// Add smooth reveal animations for portfolio items
const portfolioItems = document.querySelectorAll('.portfolio-item');
portfolioItems.forEach((item, index) => {
    item.style.animationDelay = `${index * 0.2}s`;
});



// Add scroll-triggered animations for sections
const sections = document.querySelectorAll('.section');
const sectionObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
        }
    });
}, { threshold: 0.3 });

sections.forEach(section => {
    section.style.opacity = '0';
    section.style.transform = 'translateY(50px)';
    section.style.transition = 'all 0.8s ease';
    sectionObserver.observe(section);
});

// Add dynamic background color change on scroll
window.addEventListener('scroll', () => {
    const scrolled = window.scrollY;
    const maxScroll = document.documentElement.scrollHeight - window.innerHeight;
    const scrollProgress = scrolled / maxScroll;
    
    // Change navbar background based on scroll position
    const navbar = document.getElementById('navbar');
    if (scrollProgress > 0.5) {
        navbar.style.background = 'rgba(15, 23, 42, 0.95)';
        navbar.style.color = 'white';
    } else {
        navbar.style.background = 'rgba(255, 255, 255, 0.95)';
        navbar.style.color = 'var(--text-primary)';
    }
});

// Add loading animation for images
const images = document.querySelectorAll('img');
images.forEach(img => {
    img.addEventListener('load', () => {
        img.style.opacity = '1';
        img.style.transform = 'scale(1)';
    });
    
    img.style.opacity = '0';
    img.style.transform = 'scale(0.8)';
    img.style.transition = 'all 0.5s ease';
});

// Add interactive form validation
const formInputs = document.querySelectorAll('.form-input');
formInputs.forEach(input => {
    input.addEventListener('blur', () => {
        if (input.value.trim() === '') {
            input.style.borderColor = '#ef4444';
        } else {
            input.style.borderColor = '#10b981';
        }
    });
    
    input.addEventListener('focus', () => {
        input.style.borderColor = 'var(--primary-color)';
    });
});

// Add smooth reveal for service cards
const serviceCards = document.querySelectorAll('.service-card');
serviceCards.forEach((card, index) => {
    card.style.animationDelay = `${index * 0.1}s`;
});

// Add floating action button
const fab = document.createElement('div');
fab.innerHTML = '<i class="fas fa-arrow-up"></i>';
fab.style.cssText = `
    position: fixed;
    bottom: 30px;
    right: 30px;
    width: 60px;
    height: 60px;
    background: var(--gradient-primary);
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    color: white;
    cursor: pointer;
    z-index: 1000;
    opacity: 0;
    transform: translateY(100px);
    transition: all 0.3s ease;
    box-shadow: var(--shadow-lg);
`;
document.body.appendChild(fab);

// Show/hide FAB based on scroll position
window.addEventListener('scroll', () => {
    if (window.scrollY > 500) {
        fab.style.opacity = '1';
        fab.style.transform = 'translateY(0)';
    } else {
        fab.style.opacity = '0';
        fab.style.transform = 'translateY(100px)';
    }
});

// FAB click to scroll to top
fab.addEventListener('click', () => {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
});

// Add hover effect to FAB
fab.addEventListener('mouseenter', () => {
    fab.style.transform = 'translateY(0) scale(1.1)';
});

fab.addEventListener('mouseleave', () => {
    fab.style.transform = 'translateY(0) scale(1)';
});

// Add dynamic text rotation in hero section
const dynamicTexts = [
    'Transformando Ideias em Realidade Digital',
    'Criando Soluções Inovadoras',
    'Desenvolvimento de Software de Qualidade',
    'Tecnologia que Impulsiona Negócios'
];

let currentTextIndex = 0;
const heroTitleElement = document.querySelector('.hero h1');

const rotateText = () => {
    heroTitleElement.style.opacity = '0';
    setTimeout(() => {
        heroTitleElement.textContent = dynamicTexts[currentTextIndex];
        heroTitleElement.style.opacity = '1';
        currentTextIndex = (currentTextIndex + 1) % dynamicTexts.length;
    }, 500);
};

// Start text rotation after initial typing effect
setTimeout(() => {
    setInterval(rotateText, 4000);
}, 5000);

// Add smooth reveal for stats
const statItems = document.querySelectorAll('.stat-item');
statItems.forEach((item, index) => {
    item.style.animationDelay = `${index * 0.2}s`;
});

// Add interactive portfolio hover effects
portfolioItems.forEach(item => {
    const imageContainer = item.querySelector('.portfolio-image');
    const image = item.querySelector('.portfolio-image img');
    const content = item.querySelector('.portfolio-content');
    
    item.addEventListener('mouseenter', () => {
        if (image) {
            image.style.transform = 'scale(1.1)';
        }
        content.style.transform = 'translateY(-10px)';
    });
    
    item.addEventListener('mouseleave', () => {
        if (image) {
            image.style.transform = 'scale(1)';
        }
        content.style.transform = 'translateY(0)';
    });
});

// Add CSS transitions for portfolio effects
const portfolioStyle = document.createElement('style');
portfolioStyle.textContent = `
    .portfolio-image img {
        transition: transform 0.3s ease;
    }
    
    .portfolio-content {
        transition: transform 0.3s ease;
    }
`;
document.head.appendChild(portfolioStyle);

// Add dynamic color change for service icons
serviceCards.forEach(card => {
    const icon = card.querySelector('.service-icon');
    
    card.addEventListener('mouseenter', () => {
        icon.style.background = 'var(--gradient-secondary)';
        icon.style.transform = 'rotate(360deg) scale(1.1)';
    });
    
    card.addEventListener('mouseleave', () => {
        icon.style.background = 'var(--gradient-primary)';
        icon.style.transform = 'rotate(0deg) scale(1)';
    });
});

// Add CSS for service icon transitions
const serviceIconStyle = document.createElement('style');
serviceIconStyle.textContent = `
    .service-icon {
        transition: all 0.3s ease;
    }
`;
document.head.appendChild(serviceIconStyle);

// Add smooth scroll behavior for all internal links
document.querySelectorAll('a[href^="#"]').forEach(link => {
    link.addEventListener('click', (e) => {
        e.preventDefault();
        const targetId = link.getAttribute('href');
        const targetSection = document.querySelector(targetId);
        
        if (targetSection) {
            const offsetTop = targetSection.offsetTop - 80; // Account for fixed navbar
            window.scrollTo({
                top: offsetTop,
                behavior: 'smooth'
            });
        }
    });
});

// Add loading animation for the entire page
document.addEventListener('DOMContentLoaded', () => {
    document.body.style.opacity = '0';
    document.body.style.transition = 'opacity 0.5s ease';
    
    setTimeout(() => {
        document.body.style.opacity = '1';
    }, 100);
});

// Add dynamic background pattern animation
const heroSection = document.querySelector('.hero');
let patternOffset = 0;

const animatePattern = () => {
    patternOffset += 0.5;
    heroSection.style.backgroundPosition = `${patternOffset}px ${patternOffset}px`;
    requestAnimationFrame(animatePattern);
};

animatePattern();

// Add interactive form field animations
formInputs.forEach(input => {
    const label = input.previousElementSibling;
    
    input.addEventListener('focus', () => {
        label.style.color = 'var(--primary-color)';
        label.style.transform = 'translateY(-5px) scale(0.9)';
    });
    
    input.addEventListener('blur', () => {
        if (input.value.trim() === '') {
            label.style.color = 'var(--text-secondary)';
            label.style.transform = 'translateY(0) scale(1)';
        }
    });
});

// Add CSS for form label animations
const formLabelStyle = document.createElement('style');
formLabelStyle.textContent = `
    .form-label {
        transition: all 0.3s ease;
        transform-origin: left top;
    }
`;
document.head.appendChild(formLabelStyle);

// Add interactive effects for tech cards in about section
const techCards = document.querySelectorAll('.tech-card');
techCards.forEach(card => {
    card.addEventListener('mouseenter', () => {
        card.style.transform = 'scale(1.1) rotate(10deg)';
        card.style.boxShadow = '0 20px 40px rgba(37, 99, 235, 0.3)';
    });
    
    card.addEventListener('mouseleave', () => {
        card.style.transform = 'scale(1) rotate(0deg)';
        card.style.boxShadow = 'none';
    });
});

// Add parallax effect for tech background elements
window.addEventListener('scroll', () => {
    const scrolled = window.pageYOffset;
    const techCircles = document.querySelectorAll('.tech-circle');
    const aboutSection = document.querySelector('.about-section');
    
    if (aboutSection) {
        const rect = aboutSection.getBoundingClientRect();
        const isVisible = rect.top < window.innerHeight && rect.bottom > 0;
        
        if (isVisible) {
            techCircles.forEach((circle, index) => {
                const speed = 0.5 + (index * 0.1);
                circle.style.transform = `translateY(${scrolled * speed * 0.1}px) rotate(${scrolled * 0.02}deg)`;
            });
        }
    }
});
