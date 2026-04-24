// ── Firebase imports (ESM via CDN) ─────────────────────────────────────────
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.0/firebase-app.js";
import {
    getFirestore, doc, setDoc, getDoc, getDocs,
    collection, query, where, deleteDoc, updateDoc
} from "https://www.gstatic.com/firebasejs/10.12.0/firebase-firestore.js";

const firebaseConfig = {
    apiKey: "AIzaSyCznTkl5K8ffyCoBOeQNSBnSnPi3bqWOJE",
    authDomain: "ielts-thgb.firebaseapp.com",
    projectId: "ielts-thgb",
    storageBucket: "ielts-thgb.firebasestorage.app",
    messagingSenderId: "584662072452",
    appId: "1:584662072452:web:d815ca66bed404cf94d6d1"
};

const app = initializeApp(firebaseConfig);
const db  = getFirestore(app);

// ── Cloud helpers ──────────────────────────────────────────────────────────

async function cloudSaveUser(user) {
    try { await setDoc(doc(db, "users", user.id), user, { merge: true }); } catch(e) { console.warn("cloudSave:", e); }
}

async function cloudGetUser(id) {
    try { const s = await getDoc(doc(db, "users", id)); return s.exists() ? s.data() : null; } catch(e) { return null; }
}

async function cloudGetAllUsers() {
    try { const s = await getDocs(collection(db, "users")); return s.docs.map(d => d.data()); } catch(e) { return null; }
}

async function cloudFindByEmail(email) {
    try {
        const s = await getDocs(query(collection(db, "users"), where("email", "==", email)));
        return s.empty ? null : s.docs[0].data();
    } catch(e) { return null; }
}

async function cloudDeleteUser(id) {
    try { await deleteDoc(doc(db, "users", id)); return true; } catch(e) { return false; }
}

async function cloudUpdateUser(id, fields) {
    try { await updateDoc(doc(db, "users", id), fields); return true; } catch(e) { return false; }
}

// Expose for other pages (admin, profile, shop, reading-app)
window._db = db;
window._cloudSaveUser    = cloudSaveUser;
window._cloudGetUser     = cloudGetUser;
window._cloudGetAllUsers = cloudGetAllUsers;
window._cloudFindByEmail = cloudFindByEmail;
window._cloudDeleteUser  = cloudDeleteUser;
window._cloudUpdateUser  = cloudUpdateUser;

// ── Sync: cloud → localStorage ─────────────────────────────────────────────
// Called on login to pull latest data from cloud
async function pullUserFromCloud(userId) {
    const cloudUser = await cloudGetUser(userId);
    if (!cloudUser) return null;

    // Merge into localStorage users array
    const users = JSON.parse(localStorage.getItem('users')) || [];
    const idx = users.findIndex(u => u.id === userId);
    if (idx !== -1) {
        // Keep local password (not stored in cloud for security)
        const localPwd = users[idx].password;
        users[idx] = { ...cloudUser, password: localPwd };
    } else {
        users.push(cloudUser);
    }
    localStorage.setItem('users', JSON.stringify(users));
    return cloudUser;
}

// ── OP account bootstrap ───────────────────────────────────────────────────
async function initializeOPAccount() {
    const users = JSON.parse(localStorage.getItem('users')) || [];
    const opExists = users.find(u => u.email === 'tranhoanggiabao2009@gmail.com');

    if (!opExists) {
        const opAccount = {
            id: 'op-admin',
            name: 'GiaBao',
            email: 'tranhoanggiabao2009@gmail.com',
            password: 'Bao08032009',
            bandScore: '9.0',
            description: 'Administrator Account',
            avatar: null,
            isOP: true,
            tokens: 10000,
            completedTests: [],
            ownedThemes: ['default'],
            equippedTheme: 'default',
            createdAt: new Date().toISOString()
        };
        users.push(opAccount);
        localStorage.setItem('users', JSON.stringify(users));
        await cloudSaveUser(opAccount);
    } else {
        // Ensure tokens field exists
        const opIndex = users.findIndex(u => u.email === 'tranhoanggiabao2009@gmail.com');
        if (opIndex !== -1 && users[opIndex].tokens === undefined) {
            users[opIndex].tokens = 10000;
            users[opIndex].completedTests = users[opIndex].completedTests || [];
            localStorage.setItem('users', JSON.stringify(users));
            await cloudSaveUser(users[opIndex]);
        }
    }
}

initializeOPAccount();

// ── Session check ──────────────────────────────────────────────────────────
window.addEventListener('load', async () => {
    const currentUser = JSON.parse(localStorage.getItem('currentUser'));
    const rememberMe  = localStorage.getItem('rememberMe');

    if (currentUser && rememberMe === 'true') {
        // Pull latest data from cloud before redirecting
        const fresh = await pullUserFromCloud(currentUser.id);
        if (fresh) {
            const updated = { ...currentUser, ...fresh };
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
    const tabs  = document.querySelectorAll('.auth-tab');
    const forms = document.querySelectorAll('.auth-form');
    tabs.forEach(t  => t.classList.remove('active'));
    forms.forEach(f => f.classList.remove('active'));
    if (tab === 'login') { tabs[0].classList.add('active'); forms[0].classList.add('active'); }
    else                 { tabs[1].classList.add('active'); forms[1].classList.add('active'); }
    hideError();
}

function showError(message) {
    const d = document.getElementById('errorMessage');
    d.textContent = message;
    d.classList.add('show');
}

function hideError() {
    document.getElementById('errorMessage').classList.remove('show');
}

function previewAvatar(event) {
    const file = event.target.files[0];
    if (!file) return;
    const reader = new FileReader();
    reader.onload = e => {
        document.getElementById('avatarPreview').innerHTML = `<img src="${e.target.result}" alt="Avatar">`;
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

    // Show loading state
    const btn = event.target.querySelector('button[type="submit"]');
    if (btn) { btn.disabled = true; btn.textContent = 'Đang đăng nhập...'; }

    // 1. Try cloud first
    let user = null;
    const cloudUser = await cloudFindByEmail(email);
    if (cloudUser && cloudUser.password === password) {
        user = cloudUser;
        // Sync to localStorage
        const users = JSON.parse(localStorage.getItem('users')) || [];
        const idx = users.findIndex(u => u.id === cloudUser.id);
        if (idx !== -1) users[idx] = cloudUser;
        else users.push(cloudUser);
        localStorage.setItem('users', JSON.stringify(users));
    } else {
        // 2. Fallback to localStorage (offline)
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

    const btn = event.target.querySelector('button[type="submit"]');
    if (btn) { btn.disabled = true; btn.textContent = 'Đang đăng ký...'; }

    const avatarInput = document.getElementById('avatarInput');
    let avatar = null;

    async function completeRegistration() {
        // Check cloud for duplicate email
        const existing = await cloudFindByEmail(email);
        if (existing) {
            if (btn) { btn.disabled = false; btn.textContent = 'Đăng ký'; }
            showError('Email này đã được đăng ký!');
            return;
        }
        // Also check localStorage
        const users = JSON.parse(localStorage.getItem('users')) || [];
        if (users.find(u => u.email === email)) {
            if (btn) { btn.disabled = false; btn.textContent = 'Đăng ký'; }
            showError('Email này đã được đăng ký!');
            return;
        }

        const newUser = {
            id: 'user-' + Date.now(),
            name, email, password, bandScore, description, avatar,
            isOP: false, tokens: 0,
            completedTests: [],
            ownedThemes: ['default'],
            equippedTheme: 'default',
            createdAt: new Date().toISOString()
        };

        // Save to localStorage
        users.push(newUser);
        localStorage.setItem('users', JSON.stringify(users));

        // Save to cloud (without password for security — store hashed or keep for now)
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

    if (avatarInput.files.length > 0) {
        const reader = new FileReader();
        reader.onload = e => { avatar = e.target.result; completeRegistration(); };
        reader.readAsDataURL(avatarInput.files[0]);
    } else {
        completeRegistration();
    }
}
