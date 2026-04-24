// Modern Theme JavaScript - Advanced Effects & Animations
// Uses named references so cleanup works correctly

// ── Particles ──────────────────────────────────────────────────────────────
function createFloatingParticles() {
    for (let i = 0; i < 15; i++) {
        const p = document.createElement('div');
        p.className = 'modern-floating-particle';
        const size = Math.random() * 8 + 4;
        p.style.cssText = `
            position:fixed; width:${size}px; height:${size}px;
            background:linear-gradient(45deg,rgba(102,126,234,.6),rgba(118,75,162,.6));
            border-radius:50%; pointer-events:none; z-index:2;
            left:${Math.random()*100}vw; top:${Math.random()*100}vh;
            animation:modernFloatParticle ${15+Math.random()*10}s linear infinite;
            box-shadow:0 0 20px rgba(102,126,234,.4);`;
        document.body.appendChild(p);
    }
}

// ── Geometric shapes ────────────────────────────────────────────────────────
function createGeometricShapes() {
    for (let i = 0; i < 8; i++) {
        const s = document.createElement('div');
        const size = Math.random() * 60 + 20;
        s.className = 'modern-geometric-shape';
        s.style.cssText = `
            position:fixed; pointer-events:none; z-index:1;
            left:${Math.random()*100}vw; top:${Math.random()*100}vh;
            opacity:.1; animation:modernGeoFloat ${20+Math.random()*10}s ease-in-out infinite;`;
        const t = Math.floor(Math.random() * 3);
        if (t === 0) {
            s.style.width = s.style.height = size + 'px';
            s.style.background = 'linear-gradient(45deg,#667eea,#764ba2)';
            s.style.borderRadius = '50%';
        } else if (t === 1) {
            s.style.width = s.style.height = '0';
            s.style.borderLeft = `${size/2}px solid transparent`;
            s.style.borderRight = `${size/2}px solid transparent`;
            s.style.borderBottom = `${size}px solid rgba(102,126,234,.3)`;
        } else {
            s.style.width = s.style.height = size + 'px';
            s.style.background = 'linear-gradient(45deg,#f093fb,#f5576c)';
            s.style.borderRadius = '8px';
            s.style.transform = 'rotate(45deg)';
        }
        document.body.appendChild(s);
    }
}

// ── Inject keyframes once ───────────────────────────────────────────────────
(function injectStyles() {
    if (document.getElementById('modern-theme-keyframes')) return;
    const s = document.createElement('style');
    s.id = 'modern-theme-keyframes';
    s.textContent = `
        @keyframes modernFloatParticle {
            0%   { transform:translateY(100vh) rotate(0deg);   opacity:0; }
            10%  { opacity:1; }
            90%  { opacity:1; }
            100% { transform:translateY(-120px) rotate(360deg); opacity:0; }
        }
        @keyframes modernGeoFloat {
            0%,100% { transform:translateY(0)    rotate(0deg)   scale(1);   }
            25%     { transform:translateY(-20px) rotate(90deg)  scale(1.1); }
            50%     { transform:translateY(0)    rotate(180deg) scale(.9);  }
            75%     { transform:translateY(-10px) rotate(270deg) scale(1.05);}
        }
        @keyframes modernRipple {
            to { transform:scale(2.5); opacity:0; }
        }
        @keyframes modernTrailFade {
            0%   { opacity:.8; transform:scale(1);   }
            100% { opacity:0;  transform:scale(.2);  }
        }
        .modern-glow {
            box-shadow:0 0 0 3px rgba(102,126,234,.45),
                       0 6px 20px rgba(102,126,234,.3) !important;
        }
    `;
    document.head.appendChild(s);
})();

// ── Mouse trail ─────────────────────────────────────────────────────────────
// Store the handler on window so cleanup can remove the exact same reference
function _modernMouseTrailHandler(e) {
    const dot = document.createElement('div');
    dot.className = 'modern-mouse-trail';
    dot.style.cssText = `
        position:fixed; width:9px; height:9px;
        background:linear-gradient(45deg,rgba(102,126,234,.7),rgba(118,75,162,.7));
        border-radius:50%; pointer-events:none; z-index:9999;
        left:${e.clientX-4}px; top:${e.clientY-4}px;
        animation:modernTrailFade .9s ease-out forwards;
        box-shadow:0 0 10px rgba(102,126,234,.5);`;
    document.body.appendChild(dot);
    setTimeout(() => dot.remove(), 900);
}

function addMouseTrail() {
    // Remove any previous listener first
    document.removeEventListener('mousemove', _modernMouseTrailHandler);
    document.addEventListener('mousemove', _modernMouseTrailHandler);
}

// ── Button interactions ─────────────────────────────────────────────────────
function addModernInteractions() {
    // Glow on hover
    document.querySelectorAll(
        '.nav-btn, .part-btn, .nav-btn-arrow, .nav-btn-check, .drop-zone, input[type="text"]'
    ).forEach(el => {
        el.removeEventListener('mouseenter', el._mEnter);
        el.removeEventListener('mouseleave', el._mLeave);
        el._mEnter = () => el.classList.add('modern-glow');
        el._mLeave = () => el.classList.remove('modern-glow');
        el.addEventListener('mouseenter', el._mEnter);
        el.addEventListener('mouseleave', el._mLeave);
    });

    // Ripple on click
    document.querySelectorAll('.nav-btn, .part-btn, .nav-btn-arrow, .nav-btn-check').forEach(btn => {
        btn.removeEventListener('click', btn._mClick);
        btn._mClick = function(e) {
            this.querySelectorAll('.modern-ripple').forEach(r => r.remove());
            const rect = this.getBoundingClientRect();
            const size = Math.max(rect.width, rect.height);
            const r = document.createElement('span');
            r.className = 'modern-ripple';
            r.style.cssText = `
                position:absolute; border-radius:50%; pointer-events:none; z-index:1;
                width:${size}px; height:${size}px;
                left:${e.clientX - rect.left - size/2}px;
                top:${e.clientY  - rect.top  - size/2}px;
                background:rgba(255,255,255,.35);
                transform:scale(0); animation:modernRipple .55s ease-out;`;
            this.style.position = 'relative';
            this.style.overflow = 'hidden';
            this.appendChild(r);
            setTimeout(() => r.remove(), 600);
        };
        btn.addEventListener('click', btn._mClick);
    });
}

// ── Cleanup (called by changeVisualTheme when leaving Modern) ───────────────
function cleanupModernTheme() {
    document.querySelectorAll(
        '.modern-floating-particle, .modern-geometric-shape, .modern-mouse-trail, .modern-ripple'
    ).forEach(el => el.remove());

    document.removeEventListener('mousemove', _modernMouseTrailHandler);

    document.querySelectorAll(
        '.nav-btn, .part-btn, .nav-btn-arrow, .nav-btn-check, .drop-zone, input[type="text"]'
    ).forEach(el => {
        el.removeEventListener('mouseenter', el._mEnter);
        el.removeEventListener('mouseleave', el._mLeave);
        el.removeEventListener('click', el._mClick);
        el.classList.remove('modern-glow');
        delete el._mEnter; delete el._mLeave; delete el._mClick;
    });

    const kf = document.getElementById('modern-theme-keyframes');
    // Keep keyframes style tag – removing it mid-animation causes flicker.
    // Just leave it; it's harmless when the theme class is gone.

    console.log('🧹 Modern theme cleaned up');
}

// ── Init ────────────────────────────────────────────────────────────────────
function initModernTheme() {
    setTimeout(() => {
        createFloatingParticles();
        createGeometricShapes();
        addMouseTrail();
        addModernInteractions();
        document.body.classList.add('modern-enhanced');
        console.log('✨ Modern Theme initialised');
    }, 80);
}

// Expose globals
window.cleanupModernTheme    = cleanupModernTheme;
window.addModernInteractions = addModernInteractions;

// Re-attach interactions whenever the DOM changes (new nav buttons rendered)
const _modernObserver = new MutationObserver(() => {
    if (document.body.classList.contains('theme-modern')) {
        addModernInteractions();
    }
});
_modernObserver.observe(document.body, { childList: true, subtree: true });

initModernTheme();
