// cloud-sync.js — Firebase compat SDK helpers for all pages
// Loaded AFTER firebase-app-compat.js and firebase-firestore-compat.js

(function () {
    const firebaseConfig = {
        apiKey: "AIzaSyCznTkl5K8ffyCoBOeQNSBnSnPi3bqWOJE",
        authDomain: "ielts-thgb.firebaseapp.com",
        projectId: "ielts-thgb",
        storageBucket: "ielts-thgb.firebasestorage.app",
        messagingSenderId: "584662072452",
        appId: "1:584662072452:web:d815ca66bed404cf94d6d1"
    };

    // Init only once
    if (!firebase.apps.length) {
        firebase.initializeApp(firebaseConfig);
    }
    const db = firebase.firestore();

    window._cloudSaveUser = async (user) => {
        try { await db.collection('users').doc(user.id).set(user, { merge: true }); return true; }
        catch(e) { console.warn('cloudSave:', e); return false; }
    };

    window._cloudGetUser = async (id) => {
        try { const s = await db.collection('users').doc(id).get(); return s.exists ? s.data() : null; }
        catch(e) { return null; }
    };

    window._cloudGetAllUsers = async () => {
        try { const s = await db.collection('users').get(); return s.docs.map(d => d.data()); }
        catch(e) { return null; }
    };

    window._cloudFindByEmail = async (email) => {
        try {
            const s = await db.collection('users').where('email', '==', email).get();
            return s.empty ? null : s.docs[0].data();
        } catch(e) { return null; }
    };

    window._cloudDeleteUser = async (id) => {
        try { await db.collection('users').doc(id).delete(); return true; }
        catch(e) { return false; }
    };

    window._cloudUpdateUser = async (id, fields) => {
        try { await db.collection('users').doc(id).update(fields); return true; }
        catch(e) { return false; }
    };

    window._syncCurrentUser = async () => {
        const cu = JSON.parse(localStorage.getItem('currentUser'));
        if (!cu) return;
        const users = JSON.parse(localStorage.getItem('users')) || [];
        const user  = users.find(u => u.id === cu.id);
        if (user) await window._cloudSaveUser(user);
    };

    console.log('☁️ Cloud sync ready (compat)');
})();
