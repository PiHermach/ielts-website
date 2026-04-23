// Modern Theme JavaScript - Advanced Effects & Animations

// Create floating particles
function createFloatingParticles() {
    const particleCount = 15;
    
    for (let i = 0; i < particleCount; i++) {
        const particle = document.createElement('div');
        particle.className = 'floating-particle';
        particle.style.cssText = `
            position: fixed;
            width: ${Math.random() * 8 + 4}px;
            height: ${Math.random() * 8 + 4}px;
            background: linear-gradient(45deg, rgba(102, 126, 234, 0.6), rgba(118, 75, 162, 0.6));
            border-radius: 50%;
            pointer-events: none;
            z-index: 2;
            left: ${Math.random() * 100}vw;
            top: ${Math.random() * 100}vh;
            animation: floatParticle ${15 + Math.random() * 10}s linear infinite;
            box-shadow: 0 0 20px rgba(102, 126, 234, 0.4);
        `;
        
        document.body.appendChild(particle);
    }
}

// Create geometric shapes
function createGeometricShapes() {
    const shapes = ['circle', 'triangle', 'square'];
    const shapeCount = 8;
    
    for (let i = 0; i < shapeCount; i++) {
        const shape = document.createElement('div');
        const shapeType = shapes[Math.floor(Math.random() * shapes.length)];
        const size = Math.random() * 60 + 20;
        
        shape.className = `geometric-shape ${shapeType}`;
        shape.style.cssText = `
            position: fixed;
            width: ${size}px;
            height: ${size}px;
            pointer-events: none;
            z-index: 1;
            left: ${Math.random() * 100}vw;
            top: ${Math.random() * 100}vh;
            opacity: 0.1;
            animation: geometricFloat ${20 + Math.random() * 10}s ease-in-out infinite;
        `;
        
        if (shapeType === 'circle') {
            shape.style.background = 'linear-gradient(45deg, #667eea, #764ba2)';
            shape.style.borderRadius = '50%';
        } else if (shapeType === 'triangle') {
            shape.style.width = '0';
            shape.style.height = '0';
            shape.style.borderLeft = `${size/2}px solid transparent`;
            shape.style.borderRight = `${size/2}px solid transparent`;
            shape.style.borderBottom = `${size}px solid rgba(102, 126, 234, 0.3)`;
        } else {
            shape.style.background = 'linear-gradient(45deg, #f093fb, #f5576c)';
            shape.style.borderRadius = '8px';
            shape.style.transform = 'rotate(45deg)';
        }
        
        document.body.appendChild(shape);
    }
}

// Add CSS animations
const modernAnimations = document.createElement('style');
modernAnimations.textContent = `
    @keyframes floatParticle {
        0% {
            transform: translateY(100vh) translateX(0) rotate(0deg);
            opacity: 0;
        }
        10% {
            opacity: 1;
        }
        90% {
            opacity: 1;
        }
        100% {
            transform: translateY(-100px) translateX(${Math.random() * 200 - 100}px) rotate(360deg);
            opacity: 0;
        }
    }
    
    @keyframes geometricFloat {
        0%, 100% {
            transform: translateY(0) rotate(0deg) scale(1);
        }
        25% {
            transform: translateY(-20px) rotate(90deg) scale(1.1);
        }
        50% {
            transform: translateY(0) rotate(180deg) scale(0.9);
        }
        75% {
            transform: translateY(-10px) rotate(270deg) scale(1.05);
        }
    }
    
    .modern-glow {
        box-shadow: 0 0 20px rgba(102, 126, 234, 0.4) !important;
        transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1) !important;
    }
    
    .modern-pulse {
        animation: modernPulse 2s ease-in-out infinite;
    }
    
    @keyframes modernPulse {
        0%, 100% {
            transform: scale(1);
            box-shadow: 0 0 0 0 rgba(102, 126, 234, 0.4);
        }
        50% {
            transform: scale(1.02);
            box-shadow: 0 0 0 10px rgba(102, 126, 234, 0);
        }
    }
`;
document.head.appendChild(modernAnimations);

// Enhanced interactions with proper re-initialization
function addModernInteractions() {
    // Remove old event listeners first
    document.querySelectorAll('.modern-glow, .modern-pulse').forEach(el => {
        el.classList.remove('modern-glow', 'modern-pulse');
    });
    
    // Add glow effect to interactive elements
    const interactiveElements = document.querySelectorAll('.nav-btn, .part-btn, input[type="text"], .drop-zone, .nav-btn-arrow, .nav-btn-check');
    
    interactiveElements.forEach(element => {
        // Remove old listeners
        element.removeEventListener('mouseenter', element._modernMouseEnter);
        element.removeEventListener('mouseleave', element._modernMouseLeave);
        element.removeEventListener('focus', element._modernFocus);
        element.removeEventListener('blur', element._modernBlur);
        
        // Create new listeners
        element._modernMouseEnter = () => {
            element.classList.add('modern-glow');
        };
        element._modernMouseLeave = () => {
            element.classList.remove('modern-glow');
        };
        element._modernFocus = () => {
            element.classList.add('modern-pulse');
        };
        element._modernBlur = () => {
            element.classList.remove('modern-pulse');
        };
        
        // Add new listeners
        element.addEventListener('mouseenter', element._modernMouseEnter);
        element.addEventListener('mouseleave', element._modernMouseLeave);
        element.addEventListener('focus', element._modernFocus);
        element.addEventListener('blur', element._modernBlur);
    });
    
    // Add ripple effect to buttons
    const buttons = document.querySelectorAll('.nav-btn, .part-btn, .nav-btn-arrow, .nav-btn-check');
    
    buttons.forEach(button => {
        // Remove old click listener
        button.removeEventListener('click', button._modernClick);
        
        // Create new click listener
        button._modernClick = function(e) {
            // Remove old ripples
            this.querySelectorAll('.ripple-effect').forEach(ripple => ripple.remove());
            
            const ripple = document.createElement('span');
            ripple.className = 'ripple-effect';
            const rect = this.getBoundingClientRect();
            const size = Math.max(rect.width, rect.height);
            const x = e.clientX - rect.left - size / 2;
            const y = e.clientY - rect.top - size / 2;
            
            ripple.style.cssText = `
                position: absolute;
                width: ${size}px;
                height: ${size}px;
                left: ${x}px;
                top: ${y}px;
                background: rgba(255, 255, 255, 0.4);
                border-radius: 50%;
                transform: scale(0);
                animation: ripple 0.6s ease-out;
                pointer-events: none;
                z-index: 1;
            `;
            
            this.style.position = 'relative';
            this.style.overflow = 'hidden';
            this.appendChild(ripple);
            
            setTimeout(() => {
                ripple.remove();
            }, 600);
        };
        
        // Add new click listener
        button.addEventListener('click', button._modernClick);
    });
    
    console.log('🎨 Modern interactions re-initialized!');
}

// Add ripple animation
const rippleStyle = document.createElement('style');
rippleStyle.textContent = `
    @keyframes ripple {
        to {
            transform: scale(2);
            opacity: 0;
        }
    }
`;
document.head.appendChild(rippleStyle);

// Parallax effect for background elements
function addParallaxEffect() {
    let ticking = false;
    
    function updateParallax() {
        const scrolled = window.pageYOffset;
        const parallaxElements = document.querySelectorAll('.floating-particle, .geometric-shape');
        
        parallaxElements.forEach((element, index) => {
            const speed = 0.5 + (index % 3) * 0.2;
            const yPos = -(scrolled * speed);
            element.style.transform = `translateY(${yPos}px)`;
        });
        
        ticking = false;
    }
    
    function requestTick() {
        if (!ticking) {
            requestAnimationFrame(updateParallax);
            ticking = true;
        }
    }
    
    window.addEventListener('scroll', requestTick);
}

// Mouse trail effect
function addMouseTrail() {
    const trail = [];
    const trailLength = 10;
    
    document.addEventListener('mousemove', (e) => {
        trail.push({ x: e.clientX, y: e.clientY, time: Date.now() });
        
        if (trail.length > trailLength) {
            trail.shift();
        }
        
        // Remove old trail elements
        document.querySelectorAll('.mouse-trail').forEach(el => {
            if (Date.now() - parseInt(el.dataset.time) > 1000) {
                el.remove();
            }
        });
        
        // Create new trail element
        const trailElement = document.createElement('div');
        trailElement.className = 'mouse-trail';
        trailElement.dataset.time = Date.now();
        trailElement.style.cssText = `
            position: fixed;
            width: 8px;
            height: 8px;
            background: linear-gradient(45deg, rgba(102, 126, 234, 0.6), rgba(118, 75, 162, 0.6));
            border-radius: 50%;
            pointer-events: none;
            z-index: 9999;
            left: ${e.clientX - 4}px;
            top: ${e.clientY - 4}px;
            animation: trailFade 1s ease-out forwards;
            box-shadow: 0 0 10px rgba(102, 126, 234, 0.4);
        `;
        
        document.body.appendChild(trailElement);
    });
}

// Add trail fade animation
const trailStyle = document.createElement('style');
trailStyle.textContent = `
    @keyframes trailFade {
        0% {
            opacity: 1;
            transform: scale(1);
        }
        100% {
            opacity: 0;
            transform: scale(0.3);
        }
    }
`;
document.head.appendChild(trailStyle);

// Force apply modern styles to drop zones
function forceApplyModernStyles() {
    const dropZones = document.querySelectorAll('.drop-zone');
    
    dropZones.forEach(zone => {
        // Force remove any inline styles that might override
        zone.style.background = '';
        zone.style.border = '';
        zone.style.color = '';
        
        // Add modern class for additional targeting
        zone.classList.add('modern-drop-zone');
        
        // Force CSS recalculation
        zone.offsetHeight;
        
        // Apply styles directly as backup
        if (document.body.classList.contains('theme-modern')) {
            zone.style.setProperty('background', 'rgba(255, 255, 255, 0.4)', 'important');
            zone.style.setProperty('backdrop-filter', 'blur(15px) saturate(180%)', 'important');
            zone.style.setProperty('border', '2px dashed rgba(102, 126, 234, 0.5)', 'important');
            zone.style.setProperty('color', '#1a202c', 'important');
            zone.style.setProperty('border-radius', '12px', 'important');
            zone.style.setProperty('box-shadow', '0 4px 12px rgba(0, 0, 0, 0.1), inset 0 1px 0 rgba(255, 255, 255, 0.5)', 'important');
        }
    });
    
    console.log('🎨 Modern styles force applied to', dropZones.length, 'drop zones');
}

// Initialize all modern effects
function initModernTheme() {
    // Small delay to ensure DOM is ready
    setTimeout(() => {
        createFloatingParticles();
        createGeometricShapes();
        addModernInteractions();
        addParallaxEffect();
        addMouseTrail();
        
        // Force apply modern styles to existing drop zones
        forceApplyModernStyles();
        
        // Add modern class to body for additional styling
        document.body.classList.add('modern-enhanced');
        
        console.log('🎨 Modern Theme activated with advanced effects!');
        
        // Re-apply styles periodically to ensure they stick
        setInterval(() => {
            if (document.body.classList.contains('theme-modern')) {
                forceApplyModernStyles();
            }
        }, 2000);
    }, 100);
}

// Auto-initialize when script loads
initModernTheme();

// Cleanup function for when switching away from modern theme
function cleanupModernTheme() {
    // Remove all modern effects
    document.querySelectorAll('.floating-particle').forEach(el => el.remove());
    document.querySelectorAll('.geometric-shape').forEach(el => el.remove());
    document.querySelectorAll('.mouse-trail').forEach(el => el.remove());
    document.querySelectorAll('.ripple-effect').forEach(el => el.remove());
    
    // Remove modern classes
    document.querySelectorAll('.modern-glow, .modern-pulse, .modern-enhanced').forEach(el => {
        el.classList.remove('modern-glow', 'modern-pulse', 'modern-enhanced');
    });
    
    // Remove event listeners
    document.querySelectorAll('.nav-btn, .part-btn, input[type="text"], .drop-zone, .nav-btn-arrow, .nav-btn-check').forEach(element => {
        element.removeEventListener('mouseenter', element._modernMouseEnter);
        element.removeEventListener('mouseleave', element._modernMouseLeave);
        element.removeEventListener('focus', element._modernFocus);
        element.removeEventListener('blur', element._modernBlur);
        element.removeEventListener('click', element._modernClick);
    });
    
    console.log('🧹 Modern theme cleaned up!');
}

// Make functions globally available
window.cleanupModernTheme = cleanupModernTheme;
window.forceApplyModernStyles = forceApplyModernStyles;

// Re-initialize interactions when content changes
const observer = new MutationObserver(() => {
    if (document.body.classList.contains('theme-modern')) {
        addModernInteractions();
        forceApplyModernStyles();
    }
});

observer.observe(document.body, {
    childList: true,
    subtree: true
});