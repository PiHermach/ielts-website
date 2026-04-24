// apply-theme.js — apply equipped theme on every page

(function () {
    const READING_PAGES = ['reading.html', 'reading-basic.html'];

    function isReadingPage() {
        return READING_PAGES.some(p => window.location.pathname.includes(p));
    }

    function cleanupEffects() {
        // Remove lobby-specific elements
        document.querySelectorAll(
            '.lobby-bubble,.lobby-rays,.lobby-orb,' +
            '.water-surface,.light-ray,.bubble,.plankton,' +
            '#ocean-svg-filter,#ocean-caustics,' +
            '.modern-floating-particle,.modern-geometric-shape,.modern-mouse-trail'
        ).forEach(el => el.remove());

        // Call theme-specific cleanup if available
        if (typeof window.cleanupModernTheme === 'function') window.cleanupModernTheme();
        if (typeof window.cleanupOceanTheme  === 'function') window.cleanupOceanTheme();
    }

    function applyTheme(themeId) {
        if (!themeId || themeId === 'default') return;

        // Add body class
        document.body.classList.add('theme-' + themeId);

        // Load CSS (for all pages — styles.css has lobby styles, theme-*.css has reading styles)
        if (isReadingPage()) {
            // Reading pages: load dedicated CSS
            if (!document.querySelector('link[href="theme-' + themeId + '.css"]')) {
                const css = document.createElement('link');
                css.rel = 'stylesheet';
                css.href = 'theme-' + themeId + '.css';
                document.head.appendChild(css);
            }
        }

        // Load JS effects for ALL pages (theme-ocean.js and theme-modern.js
        // handle both reading and lobby contexts)
        if (!document.querySelector('script[src="theme-' + themeId + '.js"]')) {
            const js = document.createElement('script');
            js.src = 'theme-' + themeId + '.js';
            document.head.appendChild(js);
        }
    }

    function loadTheme() {
        const currentUser = JSON.parse(localStorage.getItem('currentUser'));
        if (!currentUser) return;

        let theme = currentUser.equippedTheme;
        if (!theme) {
            const users = JSON.parse(localStorage.getItem('users')) || [];
            const user  = users.find(u => u.id === currentUser.id);
            theme = (user && user.equippedTheme) || 'default';
            if (theme !== 'default') {
                currentUser.equippedTheme = theme;
                localStorage.setItem('currentUser', JSON.stringify(currentUser));
            }
        }

        applyTheme(theme);
    }

    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', loadTheme);
    } else {
        loadTheme();
    }

    window._applyTheme    = applyTheme;
    window._cleanupEffects = cleanupEffects;
    // Keep old name for compatibility
    window._cleanupLobbyEffects = cleanupEffects;
})();
