// Ocean Theme Effects - Immersive underwater experience

// Create bubbles with wobble effect
function createBubbles() {
    const bubbleCount = 25; // Increased bubble count
    
    for (let i = 0; i < bubbleCount; i++) {
        const bubble = document.createElement('div');
        bubble.className = 'bubble';
        
        // Random size between 8px and 50px
        const size = Math.random() * 42 + 8;
        bubble.style.width = `${size}px`;
        bubble.style.height = `${size}px`;
        
        // Random horizontal position
        bubble.style.left = `${Math.random() * 100}%`;
        
        // Random animation duration between 10s and 20s (slower for more realism)
        const duration = Math.random() * 10 + 10;
        bubble.style.animationDuration = `${duration}s, ${Math.random() * 2 + 2}s`;
        
        // Random delay
        const delay = Math.random() * 8;
        bubble.style.animationDelay = `${delay}s`;
        
        // Random horizontal drift
        const drift = (Math.random() - 0.5) * 150;
        bubble.style.setProperty('--drift', `${drift}px`);
        
        document.body.appendChild(bubble);
    }
}

// Create floating particles
function createParticles() {
    const particleCount = 30;
    
    for (let i = 0; i < particleCount; i++) {
        const particle = document.createElement('div');
        particle.className = 'particle';
        
        // Random size between 1px and 3px
        const size = Math.random() * 2 + 1;
        particle.style.width = `${size}px`;
        particle.style.height = `${size}px`;
        
        // Random horizontal position
        particle.style.left = `${Math.random() * 100}%`;
        
        // Random animation duration
        const duration = Math.random() * 15 + 15;
        particle.style.animationDuration = `${duration}s`;
        
        // Random delay
        const delay = Math.random() * 10;
        particle.style.animationDelay = `${delay}s`;
        
        // Random drift
        const drift = (Math.random() - 0.5) * 100;
        particle.style.setProperty('--drift', `${drift}px`);
        
        document.body.appendChild(particle);
    }
}

// Create light rays
function createLightRays() {
    const lightRays = document.createElement('div');
    lightRays.className = 'light-rays';
    document.body.appendChild(lightRays);
}

// Initialize ocean theme effects
function initOceanTheme() {
    if (document.body.classList.contains('theme-ocean')) {
        // Create all effects
        createBubbles();
        createParticles();
        createLightRays();
    }
}

// Clean up ocean theme effects
function cleanupOceanTheme() {
    // Remove bubbles
    document.querySelectorAll('.bubble').forEach(bubble => bubble.remove());
    
    // Remove particles
    document.querySelectorAll('.particle').forEach(particle => particle.remove());
    
    // Remove light rays
    document.querySelectorAll('.light-rays').forEach(rays => rays.remove());
}

// Watch for theme changes
const observer = new MutationObserver((mutations) => {
    mutations.forEach((mutation) => {
        if (mutation.attributeName === 'class') {
            if (document.body.classList.contains('theme-ocean')) {
                initOceanTheme();
            } else {
                cleanupOceanTheme();
            }
        }
    });
});

// Start observing
observer.observe(document.body, {
    attributes: true,
    attributeFilter: ['class']
});

// Initialize on page load if ocean theme is active
if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', () => {
        if (document.body.classList.contains('theme-ocean')) {
            initOceanTheme();
        }
    });
} else {
    if (document.body.classList.contains('theme-ocean')) {
        initOceanTheme();
    }
}
