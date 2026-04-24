// Modern Theme JavaScript - Interactions only (no particles, no shapes, no mouse trail)

// ── Inject keyframes once ───────────────────────────────────────────────────
(function injectStyles() {
    if (document.getElementById('modern-theme-keyframes')) return;
    const s = document.createElement('style');
    s.id = 'modern-theme-keyframes';
    s.textContent = `
        @keyframes modernRipple {
            to { transform:scale(2.5); opacity:0; }
        }
        .modern-glow {
            box-shadow:0 0 0 3px rgba(102,126,234,.45),
                       0 6px 20px rgba(102,126,234,.3) !important;
        }
    `;
    document.head.appendChild(s);
})();

// ── Button interactions (glow + ripple only) ────────────────────────────────
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

// ── Cleanup ─────────────────────────────────────────────────────────────────
function cleanupModernTheme() {
    document.querySelectorAll('.modern-ripple').forEach(el => el.remove());

    document.querySelectorAll(
        '.nav-btn, .part-btn, .nav-btn-arrow, .nav-btn-check, .drop-zone, input[type="text"]'
    ).forEach(el => {
        el.removeEventListener('mouseenter', el._mEnter);
        el.removeEventListener('mouseleave', el._mLeave);
        el.removeEventListener('click', el._mClick);
        el.classList.remove('modern-glow');
        delete el._mEnter; delete el._mLeave; delete el._mClick;
    });

    console.log('🧹 Modern theme cleaned up');
}

// ── Init ────────────────────────────────────────────────────────────────────
function initModernTheme() {
    setTimeout(() => {
        addModernInteractions();
        document.body.classList.add('modern-enhanced');
        console.log('✨ Modern Theme initialised');
    }, 80);
}

window.cleanupModernTheme    = cleanupModernTheme;
window.addModernInteractions = addModernInteractions;

// Re-attach interactions when DOM changes (new nav buttons rendered)
const _modernObserver = new MutationObserver(() => {
    if (document.body.classList.contains('theme-modern')) {
        addModernInteractions();
    }
});
_modernObserver.observe(document.body, { childList: true, subtree: true });

initModernTheme();
