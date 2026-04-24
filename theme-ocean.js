// theme-ocean.js — Immersive underwater effects

(function () {
    'use strict';

    // ── SVG filter for water distortion ──────────────────────────────────
    function injectSVGFilter() {
        if (document.getElementById('ocean-svg-filter')) return;
        const svg = document.createElementNS('http://www.w3.org/2000/svg', 'svg');
        svg.id = 'ocean-svg-filter';
        svg.setAttribute('style', 'position:fixed;width:0;height:0;pointer-events:none;');
        svg.innerHTML = `
            <defs>
                <filter id="ocean-distort" x="-5%" y="-5%" width="110%" height="110%">
                    <feTurbulence
                        id="ocean-turbulence"
                        type="fractalNoise"
                        baseFrequency="0.012 0.008"
                        numOctaves="3"
                        seed="2"
                        result="noise"/>
                    <feDisplacementMap
                        in="SourceGraphic"
                        in2="noise"
                        scale="1.5"
                        xChannelSelector="R"
                        yChannelSelector="G"/>
                </filter>
            </defs>`;
        document.body.appendChild(svg);

        // Animate turbulence seed for living water effect
        let seed = 2;
        let baseFreqX = 0.012;
        let baseFreqY = 0.008;
        let direction = 1;

        function animateTurbulence() {
            seed += 0.002;
            baseFreqX = 0.012 + Math.sin(seed * 0.15) * 0.002;
            baseFreqY = 0.008 + Math.cos(seed * 0.1) * 0.0015;
            const turb = document.getElementById('ocean-turbulence');
            if (turb) {
                turb.setAttribute('baseFrequency', `${baseFreqX.toFixed(4)} ${baseFreqY.toFixed(4)}`);
                turb.setAttribute('seed', Math.floor(seed * 10) % 100);
            }
            if (document.body.classList.contains('theme-ocean')) {
                requestAnimationFrame(animateTurbulence);
            }
        }
        requestAnimationFrame(animateTurbulence);
    }

    // ── Water surface ─────────────────────────────────────────────────────
    function createWaterSurface() {
        const el = document.createElement('div');
        el.className = 'water-surface';
        document.body.appendChild(el);
    }

    // ── Light rays ────────────────────────────────────────────────────────
    function createLightRays() {
        const rayConfigs = [
            { left: '8%',  angle: '-8deg',  delay: '0s',   dur: '7s',  opacity: .7 },
            { left: '22%', angle: '-3deg',  delay: '1.5s', dur: '9s',  opacity: .5 },
            { left: '38%', angle: '2deg',   delay: '0.8s', dur: '8s',  opacity: .6 },
            { left: '55%', angle: '-5deg',  delay: '2.2s', dur: '10s', opacity: .4 },
            { left: '70%', angle: '4deg',   delay: '0.3s', dur: '7.5s',opacity: .65},
            { left: '85%', angle: '-2deg',  delay: '1.8s', dur: '9.5s',opacity: .5 },
        ];

        rayConfigs.forEach(cfg => {
            const ray = document.createElement('div');
            ray.className = 'light-ray';
            ray.style.cssText = `
                left: ${cfg.left};
                --ray-angle: ${cfg.angle};
                animation-delay: ${cfg.delay};
                animation-duration: ${cfg.dur};
                opacity: ${cfg.opacity};
                width: ${2 + Math.random() * 4}px;
            `;
            document.body.appendChild(ray);
        });
    }

    // ── Bubbles ───────────────────────────────────────────────────────────
    function createBubbles() {
        const count = 28;
        for (let i = 0; i < count; i++) {
            setTimeout(() => {
                if (!document.body.classList.contains('theme-ocean')) return;
                spawnBubble();
            }, i * 400);
        }
    }

    function spawnBubble() {
        const b = document.createElement('div');
        b.className = 'bubble';
        const size = 4 + Math.random() * 18;
        const left = Math.random() * 100;
        const drift = (Math.random() - 0.5) * 80;
        const dur   = 7 + Math.random() * 12;
        const delay = Math.random() * 6;
        const wobbleDur = 2 + Math.random() * 2;

        b.style.cssText = `
            width: ${size}px;
            height: ${size}px;
            left: ${left}vw;
            --drift: ${drift}px;
            --rise-dur: ${dur}s;
            --rise-delay: ${delay}s;
            --wobble-dur: ${wobbleDur}s;
        `;
        document.body.appendChild(b);

        // Remove and respawn after animation
        const totalTime = (dur + delay) * 1000;
        setTimeout(() => {
            b.remove();
            if (document.body.classList.contains('theme-ocean')) spawnBubble();
        }, totalTime + 500);
    }

    // ── Plankton particles ────────────────────────────────────────────────
    function createPlankton() {
        for (let i = 0; i < 20; i++) {
            const p = document.createElement('div');
            p.className = 'plankton';
            const size = 2 + Math.random() * 5;
            p.style.cssText = `
                width: ${size}px;
                height: ${size}px;
                left: ${Math.random() * 100}vw;
                top: ${Math.random() * 100}vh;
                --p-dur: ${15 + Math.random() * 20}s;
                --p-delay: ${Math.random() * 15}s;
                opacity: ${0.2 + Math.random() * 0.4};
            `;
            document.body.appendChild(p);
        }
    }

    // ── Caustics canvas (dynamic light patterns) ──────────────────────────
    function createCausticsCanvas() {
        const canvas = document.createElement('canvas');
        canvas.id = 'ocean-caustics';
        canvas.style.cssText = `
            position: fixed; top: 0; left: 0;
            width: 100%; height: 100%;
            pointer-events: none; z-index: 1;
            opacity: 0.06; mix-blend-mode: screen;
        `;
        document.body.appendChild(canvas);

        const ctx = canvas.getContext('2d');
        let t = 0;

        function resize() {
            canvas.width  = window.innerWidth;
            canvas.height = window.innerHeight;
        }
        resize();
        window.addEventListener('resize', resize);

        function drawCaustics() {
            if (!document.body.classList.contains('theme-ocean')) {
                canvas.remove();
                return;
            }
            ctx.clearRect(0, 0, canvas.width, canvas.height);
            t += 0.002;

            // Draw 12 caustic blobs
            for (let i = 0; i < 12; i++) {
                const x = canvas.width  * (0.1 + 0.8 * ((Math.sin(t * 0.7 + i * 1.3) + 1) / 2));
                const y = canvas.height * (0.1 + 0.8 * ((Math.cos(t * 0.5 + i * 0.9) + 1) / 2));
                const r = 40 + 60 * Math.abs(Math.sin(t * 0.3 + i));

                const grad = ctx.createRadialGradient(x, y, 0, x, y, r);
                grad.addColorStop(0,   'rgba(150,230,255,0.8)');
                grad.addColorStop(0.4, 'rgba(100,200,255,0.3)');
                grad.addColorStop(1,   'transparent');

                ctx.beginPath();
                ctx.arc(x, y, r, 0, Math.PI * 2);
                ctx.fillStyle = grad;
                ctx.fill();
            }

            requestAnimationFrame(drawCaustics);
        }
        requestAnimationFrame(drawCaustics);
    }

    // ── Cleanup ───────────────────────────────────────────────────────────
    function cleanupOceanTheme() {
        document.querySelectorAll(
            '.water-surface, .light-ray, .bubble, .plankton, #ocean-svg-filter, #ocean-caustics'
        ).forEach(el => el.remove());
        console.log('🌊 Ocean theme cleaned up');
    }

    // -- Init --
    function initOceanTheme() {
        setTimeout(() => {
            const isReading = window.location.pathname.includes('reading');
            createWaterSurface();
            createLightRays();
            createBubbles();
            createPlankton();
            createCausticsCanvas();
            console.log('Ocean Theme initialised');
        }, 60);
    }

    window.cleanupOceanTheme = cleanupOceanTheme;
    initOceanTheme();

})();

