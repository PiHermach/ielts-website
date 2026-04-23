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

// Create ripple effect on mouse move with continuous waves
let lastRippleTime = 0;
const rippleThrottle = 100; // Reduced throttle for more responsive ripples
let mouseX = 0;
let mouseY = 0;
let isMouseMoving = false;
let mouseMoveTimeout;

function createRipple(x, y) {
    const now = Date.now();
    if (now - lastRippleTime < rippleThrottle) return;
    lastRippleTime = now;
    
    let rippleContainer = document.querySelector('.ripple-container');
    if (!rippleContainer) {
        rippleContainer = document.createElement('div');
        rippleContainer.className = 'ripple-container';
        document.body.appendChild(rippleContainer);
    }
    
    // Create main ripple
    const ripple = document.createElement('div');
    ripple.className = 'ripple';
    ripple.style.left = `${x}px`;
    ripple.style.top = `${y}px`;
    ripple.style.marginLeft = '-200px';
    ripple.style.marginTop = '-200px';
    
    rippleContainer.appendChild(ripple);
    
    // Remove ripple after animation
    setTimeout(() => {
        ripple.remove();
    }, 2000);
}

// Continuous ripple generation while mouse is moving
function generateContinuousRipples() {
    if (isMouseMoving && document.body.classList.contains('theme-ocean')) {
        createRipple(mouseX, mouseY);
        requestAnimationFrame(generateContinuousRipples);
    }
}

// Mouse move handler with smooth tracking
function handleMouseMove(e) {
    if (document.body.classList.contains('theme-ocean')) {
        mouseX = e.clientX;
        mouseY = e.clientY;
        
        if (!isMouseMoving) {
            isMouseMoving = true;
            generateContinuousRipples();
        }
        
        // Clear existing timeout
        clearTimeout(mouseMoveTimeout);
        
        // Set new timeout to stop ripples when mouse stops
        mouseMoveTimeout = setTimeout(() => {
            isMouseMoving = false;
        }, 200);
    }
}

// Initialize ocean theme effects
function initOceanTheme() {
    if (document.body.classList.contains('theme-ocean')) {
        // Create all effects
        createBubbles();
        createParticles();
        createLightRays();
        
        // Add mouse move listener for ripples
        document.addEventListener('mousemove', handleMouseMove);
        
        // Add subtle screen shake on click for immersion
        document.addEventListener('click', (e) => {
            if (document.body.classList.contains('theme-ocean')) {
                createRipple(e.clientX, e.clientY);
            }
        });
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
    
    // Remove ripple container
    const rippleContainer = document.querySelector('.ripple-container');
    if (rippleContainer) {
        rippleContainer.remove();
    }
    
    // Remove mouse move listener
    document.removeEventListener('mousemove', handleMouseMove);
    
    // Reset mouse tracking
    isMouseMoving = false;
    clearTimeout(mouseMoveTimeout);
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
