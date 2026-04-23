// Ocean Theme Effects - Bubbles and Ripples

// Create bubbles
function createBubbles() {
    const bubbleCount = 20;
    
    for (let i = 0; i < bubbleCount; i++) {
        const bubble = document.createElement('div');
        bubble.className = 'bubble';
        
        // Random size between 10px and 40px
        const size = Math.random() * 30 + 10;
        bubble.style.width = `${size}px`;
        bubble.style.height = `${size}px`;
        
        // Random horizontal position
        bubble.style.left = `${Math.random() * 100}%`;
        
        // Random animation duration between 8s and 15s
        const duration = Math.random() * 7 + 8;
        bubble.style.animationDuration = `${duration}s`;
        
        // Random delay
        const delay = Math.random() * 5;
        bubble.style.animationDelay = `${delay}s`;
        
        // Random horizontal drift
        const drift = (Math.random() - 0.5) * 100;
        bubble.style.setProperty('--drift', `${drift}px`);
        
        document.body.appendChild(bubble);
    }
}

// Create ripple effect on mouse move
let lastRippleTime = 0;
const rippleThrottle = 150; // Minimum time between ripples in ms

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
    
    const ripple = document.createElement('div');
    ripple.className = 'ripple';
    ripple.style.left = `${x}px`;
    ripple.style.top = `${y}px`;
    ripple.style.marginLeft = '-150px';
    ripple.style.marginTop = '-150px';
    
    rippleContainer.appendChild(ripple);
    
    // Remove ripple after animation
    setTimeout(() => {
        ripple.remove();
    }, 1500);
}

// Mouse move handler
function handleMouseMove(e) {
    if (document.body.classList.contains('theme-ocean')) {
        createRipple(e.clientX, e.clientY);
    }
}

// Initialize ocean theme effects
function initOceanTheme() {
    if (document.body.classList.contains('theme-ocean')) {
        // Create bubbles
        createBubbles();
        
        // Add mouse move listener for ripples
        document.addEventListener('mousemove', handleMouseMove);
    }
}

// Clean up ocean theme effects
function cleanupOceanTheme() {
    // Remove bubbles
    document.querySelectorAll('.bubble').forEach(bubble => bubble.remove());
    
    // Remove ripple container
    const rippleContainer = document.querySelector('.ripple-container');
    if (rippleContainer) {
        rippleContainer.remove();
    }
    
    // Remove mouse move listener
    document.removeEventListener('mousemove', handleMouseMove);
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
