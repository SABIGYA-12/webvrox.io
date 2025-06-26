// Particle Background
        function createParticles() {
            const container = document.getElementById('particles');
            const particleCount = 30;
            
            for (let i = 0; i < particleCount; i++) {
                const particle = document.createElement('div');
                particle.classList.add('particle');
                
                // Random properties
                const size = Math.random() * 8 + 2;
                const posX = Math.random() * 100;
                const posY = Math.random() * 100;
                const animationDuration = Math.random() * 20 + 10;
                const color = `rgba(${Math.floor(Math.random() * 100)}, ${Math.floor(Math.random() * 200)}, 241, ${Math.random() * 0.4 + 0.1})`;
                
                particle.style.width = `${size}px`;
                particle.style.height = `${size}px`;
                particle.style.left = `${posX}%`;
                particle.style.top = `${posY}%`;
                particle.style.background = color;
                particle.style.animationDuration = `${animationDuration}s`;
                
                container.appendChild(particle);
            }
        }
        
        // Scroll Animation
        function initScrollAnimation() {
            const elements = document.querySelectorAll('.animate-on-scroll');
            
            const observer = new IntersectionObserver((entries) => {
                entries.forEach(entry => {
                    if (entry.isIntersecting) {
                        entry.target.classList.add('visible');
                    }
                });
            }, {
                threshold: 0.1
            });
            
            elements.forEach(element => {
                observer.observe(element);
            });
        }
        
        // Initialize
        document.addEventListener('DOMContentLoaded', () => {
            createParticles();
            initScrollAnimation();
        });