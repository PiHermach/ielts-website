// auth.js — uses Firebase compat SDK (loaded via script tags in auth.html)
// No ES module imports needed

const firebaseConfig = {
    apiKey: "AIzaSyCznTkl5K8ffyCoBOeQNSBnSnPi3bqWOJE",
    authDomain: "ielts-thgb.firebaseapp.com",
    projectId: "ielts-thgb",
    storageBucket: "ielts-thgb.firebasestorage.app",
    messagingSenderId: "584662072452",
    appId: "1:584662072452:web:d815ca66bed404cf94d6d1"
};

// Init Firebase (compat mode — available as firebase.app(), firebase.firestore())
if (!firebase.apps.length) {
    firebase.initializeApp(firebaseConfig);
}
const db = firebase.firestore();

// ── Cloud helpers ──────────────────────────────────────────────────────────
async function cloudSaveUser(user) {
    try { await db.collection('users').doc(user.id).set(user, { merge: true }); }
    catch(e) { console.warn('cloudSave:', e); }
}

async function cloudFindByEmail(email) {
    try {
        const snap = await db.collection('users').where('email', '==', email).get();
        return snap.empty ? null : snap.docs[0].data();
    } catch(e) { return null; }
}

async function cloudGetUser(id) {
    try {
        const snap = await db.collection('users').doc(id).get();
        return snap.exists ? snap.data() : null;
    } catch(e) { return null; }
}

// Expose cloud helpers for other pages
window._cloudSaveUser = cloudSaveUser;
window._cloudGetUser  = cloudGetUser;

// ── OP account bootstrap ───────────────────────────────────────────────────
function initializeOPAccount() {
    const users = JSON.parse(localStorage.getItem('users')) || [];
    const opExists = users.find(u => u.email === 'tranhoanggiabao2009@gmail.com');
    if (!opExists) {
        const op = {
            id: 'op-admin', name: 'GiaBao',
            email: 'tranhoanggiabao2009@gmail.com', password: 'Bao08032009',
            bandScore: '9.0', description: 'Administrator Account',
            avatar: null, isOP: true, tokens: 10000,
            completedTests: [], ownedThemes: ['default'],
            equippedTheme: 'default', createdAt: new Date().toISOString()
        };
        users.push(op);
        localStorage.setItem('users', JSON.stringify(users));
        cloudSaveUser(op);
    }
}
initializeOPAccount();

// ── Session check ──────────────────────────────────────────────────────────
window.addEventListener('load', async () => {
    const currentUser = JSON.parse(localStorage.getItem('currentUser'));
    const rememberMe  = localStorage.getItem('rememberMe');
    if (currentUser && rememberMe === 'true') {
        // Pull fresh data from cloud
        const fresh = await cloudGetUser(currentUser.id);
        if (fresh) {
            const updated = { ...currentUser, ...fresh };
            const localEquipped = currentUser.equippedTheme;
            if (localEquipped) updated.equippedTheme = localEquipped;
            delete updated.password;
            localStorage.setItem('currentUser', JSON.stringify(updated));
        }
        window.location.href = 'index.html';
    } else if (currentUser && rememberMe !== 'true') {
        localStorage.removeItem('currentUser');
    }
});

// ── UI helpers ─────────────────────────────────────────────────────────────
function switchTab(tab) {
    document.querySelectorAll('.auth-tab').forEach(t  => t.classList.remove('active'));
    document.querySelectorAll('.auth-form').forEach(f => f.classList.remove('active'));
    if (tab === 'login') {
        document.querySelectorAll('.auth-tab')[0].classList.add('active');
        document.querySelectorAll('.auth-form')[0].classList.add('active');
    } else {
        document.querySelectorAll('.auth-tab')[1].classList.add('active');
        document.querySelectorAll('.auth-form')[1].classList.add('active');
    }
    hideError();
}

function showError(msg) {
    const d = document.getElementById('errorMessage');
    if (d) { d.textContent = msg; d.classList.add('show'); }
}
function hideError() {
    const d = document.getElementById('errorMessage');
    if (d) d.classList.remove('show');
}

function previewAvatar(event) {
    const file = event.target.files[0];
    if (!file) return;
    const reader = new FileReader();
    reader.onload = e => {
        const p = document.getElementById('avatarPreview');
        if (p) p.innerHTML = `<img src="${e.target.result}" alt="Avatar">`;
    };
    reader.readAsDataURL(file);
}

// ── Login ──────────────────────────────────────────────────────────────────
async function handleLogin(event) {
    event.preventDefault();
    hideError();

    const email      = document.getElementById('loginEmail').value.trim();
    const password   = document.getElementById('loginPassword').value;
    const rememberMe = document.getElementById('rememberMe').checked;

    const btn = event.target ? event.target.querySelector('button[type="submit"]') : null;
    if (btn) { btn.disabled = true; btn.textContent = 'Đang đăng nhập...'; }

    let user = null;

    // 1. Try cloud
    const cloudUser = await cloudFindByEmail(email);
    if (cloudUser && cloudUser.password === password) {
        user = cloudUser;
        // Sync to localStorage
        const users = JSON.parse(localStorage.getItem('users')) || [];
        const idx = users.findIndex(u => u.id === cloudUser.id);
        if (idx !== -1) users[idx] = { ...cloudUser, password: cloudUser.password };
        else users.push(cloudUser);
        localStorage.setItem('users', JSON.stringify(users));
    } else {
        // 2. Fallback localStorage
        const users = JSON.parse(localStorage.getItem('users')) || [];
        user = users.find(u => u.email === email && u.password === password) || null;
    }

    if (btn) { btn.disabled = false; btn.textContent = 'Đăng nhập'; }

    if (user) {
        const currentUser = {
            id: user.id, name: user.name, email: user.email,
            bandScore: user.bandScore, description: user.description,
            avatar: user.avatar, isOP: user.isOP || false,
            tokens: user.tokens || 0,
            ownedThemes: user.ownedThemes || ['default'],
            equippedTheme: user.equippedTheme || 'default'
        };
        localStorage.setItem('currentUser', JSON.stringify(currentUser));
        if (rememberMe) localStorage.setItem('rememberMe', 'true');
        else localStorage.removeItem('rememberMe');
        window.location.href = 'index.html';
    } else {
        showError('Email hoặc mật khẩu không đúng!');
    }
}

// ── Register ───────────────────────────────────────────────────────────────
async function handleRegister(event) {
    event.preventDefault();
    hideError();

    const name        = document.getElementById('registerName').value.trim();
    const email       = document.getElementById('registerEmail').value.trim();
    const password    = document.getElementById('registerPassword').value;
    const bandScore   = document.getElementById('registerBandScore').value;
    const description = document.getElementById('registerDescription').value.trim();

    if (password.length < 6) { showError('Mật khẩu phải có ít nhất 6 ký tự!'); return; }

    const btn = event.target ? event.target.querySelector('button[type="submit"]') : null;
    if (btn) { btn.disabled = true; btn.textContent = 'Đang đăng ký...'; }

    async function completeRegistration(avatar) {
        // Check cloud duplicate
        const existing = await cloudFindByEmail(email);
        if (existing) {
            if (btn) { btn.disabled = false; btn.textContent = 'Đăng ký'; }
            showError('Email này đã được đăng ký!'); return;
        }
        // Check localStorage duplicate
        const users = JSON.parse(localStorage.getItem('users')) || [];
        if (users.find(u => u.email === email)) {
            if (btn) { btn.disabled = false; btn.textContent = 'Đăng ký'; }
            showError('Email này đã được đăng ký!'); return;
        }

        const newUser = {
            id: 'user-' + Date.now(), name, email, password,
            bandScore, description, avatar: avatar || null,
            isOP: false, tokens: 0, completedTests: [],
            ownedThemes: ['default'], equippedTheme: 'default',
            createdAt: new Date().toISOString()
        };
        users.push(newUser);
        localStorage.setItem('users', JSON.stringify(users));
        await cloudSaveUser(newUser);

        const currentUser = {
            id: newUser.id, name: newUser.name, email: newUser.email,
            bandScore: newUser.bandScore, description: newUser.description,
            avatar: newUser.avatar, isOP: false, tokens: 0,
            ownedThemes: ['default'], equippedTheme: 'default'
        };
        localStorage.setItem('currentUser', JSON.stringify(currentUser));
        window.location.href = 'index.html';
    }

    const avatarInput = document.getElementById('avatarInput');
    if (avatarInput && avatarInput.files.length > 0) {
        const reader = new FileReader();
        reader.onload = e => completeRegistration(e.target.result);
        reader.readAsDataURL(avatarInput.files[0]);
    } else {
        completeRegistration(null);
    }
}

// ── Attach event listeners ─────────────────────────────────────────────────
document.addEventListener('DOMContentLoaded', () => {
    const loginForm    = document.getElementById('loginForm');
    const registerForm = document.getElementById('registerForm');
    const avatarInput  = document.getElementById('avatarInput');

    if (loginForm)    loginForm.addEventListener('submit', handleLogin);
    if (registerForm) registerForm.addEventListener('submit', handleRegister);
    if (avatarInput)  avatarInput.addEventListener('change', previewAvatar);
});

// Expose for onclick= in HTML
window.switchTab      = switchTab;
window.handleLogin    = handleLogin;
window.handleRegister = handleRegister;
window.previewAvatar  = previewAvatar;
