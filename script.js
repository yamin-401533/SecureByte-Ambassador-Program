document.addEventListener('DOMContentLoaded', () => {
    // Countdown Timer
    const countdown = document.getElementById('countdown');
    const targetDate = new Date('2024-12-31T23:59:59').getTime();

    function updateCountdown() {
        const now = new Date().getTime();
        const timeLeft = targetDate - now;

        if (timeLeft <= 0) {
            countdown.innerHTML = `<div class="countdown-item"><h3>Program Closed</h3></div>`;
            clearInterval(timerInterval);
            return;
        }

        const days = Math.floor(timeLeft / (1000 * 60 * 60 * 24));
        const hours = Math.floor((timeLeft % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((timeLeft % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((timeLeft % (1000 * 60)) / 1000);

        countdown.innerHTML = `
            <div class="countdown-item glass-card">
                <h3>${days}</h3>
                <p>Days</p>
            </div>
            <div class="countdown-item glass-card">
                <h3>${hours}</h3>
                <p>Hours</p>
            </div>
            <div class="countdown-item glass-card">
                <h3>${minutes}</h3>
                <p>Minutes</p>
            </div>
            <div class="countdown-item glass-card">
                <h3>${seconds}</h3>
                <p>Seconds</p>
            </div>
        `;
    }

    const timerInterval = setInterval(updateCountdown, 1000);
    updateCountdown();

    // Enhanced FAQ Functionality
    const faqItems = document.querySelectorAll('.faq');
    
    faqItems.forEach(item => {
        const question = item.querySelector('.question');
        const answer = item.querySelector('.answer');
        
        // Add icon to questions
        const icon = document.createElement('span');
        icon.innerHTML = '&#x25BE;'; // Unicode down arrow
        icon.className = 'faq-icon';
        question.appendChild(icon);
        
        // Set initial state
        answer.style.maxHeight = '0px';
        answer.style.transition = 'max-height 0.3s ease-out';
        answer.style.overflow = 'hidden';
        
        question.addEventListener('click', () => {
            // Close all other answers first
            faqItems.forEach(otherItem => {
                if (otherItem !== item) {
                    const otherAnswer = otherItem.querySelector('.answer');
                    const otherQuestion = otherItem.querySelector('.question');
                    otherAnswer.style.maxHeight = '0px';
                    otherQuestion.classList.remove('active');
                }
            });
            
            // Toggle current answer
            const isOpen = question.classList.contains('active');
            if (!isOpen) {
                answer.style.maxHeight = answer.scrollHeight + 'px';
                question.classList.add('active');
            } else {
                answer.style.maxHeight = '0px';
                question.classList.remove('active');
            }
        });
    });

    // Mobile Menu Toggle
    const menuBtn = document.querySelector('.menu-btn');
    const navLinks = document.querySelector('.nav-links');

    menuBtn.addEventListener('click', () => {
        navLinks.classList.toggle('active');
    });

    // Scroll Animation
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('show');
            }
        });
    });

    const hiddenElements = document.querySelectorAll('.glass-card');
    hiddenElements.forEach((el) => observer.observe(el));

    // Smooth Scroll
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            document.querySelector(this.getAttribute('href')).scrollIntoView({
                behavior: 'smooth'
            });
        });
    });

    // Parallax Effect
    window.addEventListener('scroll', () => {
        const scrolled = window.pageYOffset;
        document.querySelector('.background-animation').style.transform = 
            `translate3d(0, ${scrolled * 0.5}px, 0)`;
    });

    // Star Background
    function createStars() {
        const starContainer = document.createElement('div');
        starContainer.classList.add('star-container');
        document.body.appendChild(starContainer);

        for (let i = 0; i < 100; i++) {
            const star = document.createElement('div');
            star.classList.add('star');
            star.style.left = `${Math.random() * 100}vw`;
            star.style.top = `${Math.random() * 100}vh`;
            star.style.animationDuration = `${Math.random() * 3 + 2}s`;
            starContainer.appendChild(star);
        }
    }

    createStars();
});

// Navbar Toggle
document.getElementById('navbar-toggle').addEventListener('click', function() {
    document.getElementById('navbar-menu').classList.toggle('active');
});
