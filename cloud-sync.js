// cloud-sync.js — loaded as type="module" on every page that modifies user data
// Provides window._cloudSaveUser, window._cloudUpdateUser, etc.

import { initializeApp, getApps } from "https://www.gstatic.com/firebasejs/10.12.0/firebase-app.js";
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

// Avoid duplicate app init
const app = getApps().length ? getApps()[0] : initializeApp(firebaseConfig);
const db  = getFirestore(app);

window._cloudSaveUser = async (user) => {
    try { await setDoc(doc(db, "users", user.id), user, { merge: true }); return true; }
    catch(e) { console.warn("cloudSave:", e); return false; }
};

window._cloudGetUser = async (id) => {
    try { const s = await getDoc(doc(db, "users", id)); return s.exists() ? s.data() : null; }
    catch(e) { return null; }
};

window._cloudGetAllUsers = async () => {
    try { const s = await getDocs(collection(db, "users")); return s.docs.map(d => d.data()); }
    catch(e) { return null; }
};

window._cloudFindByEmail = async (email) => {
    try {
        const s = await getDocs(query(collection(db, "users"), where("email", "==", email)));
        return s.empty ? null : s.docs[0].data();
    } catch(e) { return null; }
};

window._cloudDeleteUser = async (id) => {
    try { await deleteDoc(doc(db, "users", id)); return true; }
    catch(e) { return false; }
};

window._cloudUpdateUser = async (id, fields) => {
    try { await updateDoc(doc(db, "users", id), fields); return true; }
    catch(e) { return false; }
};

// Helper: save current user state to cloud after any local change
window._syncCurrentUser = async () => {
    const currentUser = JSON.parse(localStorage.getItem('currentUser'));
    if (!currentUser) return;
    const users = JSON.parse(localStorage.getItem('users')) || [];
    const user  = users.find(u => u.id === currentUser.id);
    if (user) await window._cloudSaveUser(user);
};

console.log("☁️ Cloud sync ready");
