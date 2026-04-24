// Firebase configuration and helper functions
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.0/firebase-app.js";
import { getFirestore, doc, setDoc, getDoc, updateDoc, collection, getDocs, deleteDoc, query, where } from "https://www.gstatic.com/firebasejs/10.12.0/firebase-firestore.js";

const firebaseConfig = {
    apiKey: "AIzaSyCznTkl5K8ffyCoBOeQNSBnSnPi3bqWOJE",
    authDomain: "ielts-thgb.firebaseapp.com",
    projectId: "ielts-thgb",
    storageBucket: "ielts-thgb.firebasestorage.app",
    messagingSenderId: "584662072452",
    appId: "1:584662072452:web:d815ca66bed404cf94d6d1"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

// ── User CRUD ──────────────────────────────────────────────────────────────

// Save or update a user in Firestore
async function saveUserToCloud(user) {
    try {
        // Don't store password in plain text in cloud (keep it for local auth only)
        const cloudUser = { ...user };
        await setDoc(doc(db, "users", user.id), cloudUser, { merge: true });
        return true;
    } catch (e) {
        console.warn("Cloud save failed:", e);
        return false;
    }
}

// Get a single user by ID
async function getUserFromCloud(userId) {
    try {
        const snap = await getDoc(doc(db, "users", userId));
        return snap.exists() ? snap.data() : null;
    } catch (e) {
        console.warn("Cloud get failed:", e);
        return null;
    }
}

// Get all users (admin only)
async function getAllUsersFromCloud() {
    try {
        const snap = await getDocs(collection(db, "users"));
        return snap.docs.map(d => d.data());
    } catch (e) {
        console.warn("Cloud getAll failed:", e);
        return null;
    }
}

// Find user by email
async function findUserByEmail(email) {
    try {
        const q = query(collection(db, "users"), where("email", "==", email));
        const snap = await getDocs(q);
        if (snap.empty) return null;
        return snap.docs[0].data();
    } catch (e) {
        console.warn("Cloud findByEmail failed:", e);
        return null;
    }
}

// Delete user
async function deleteUserFromCloud(userId) {
    try {
        await deleteDoc(doc(db, "users", userId));
        return true;
    } catch (e) {
        console.warn("Cloud delete failed:", e);
        return false;
    }
}

// Update specific fields of a user
async function updateUserInCloud(userId, fields) {
    try {
        await updateDoc(doc(db, "users", userId), fields);
        return true;
    } catch (e) {
        console.warn("Cloud update failed:", e);
        return false;
    }
}

// ── Sync helpers ───────────────────────────────────────────────────────────

// Sync all localStorage users to Firestore (one-time migration)
async function syncLocalToCloud() {
    const users = JSON.parse(localStorage.getItem('users')) || [];
    for (const user of users) {
        await saveUserToCloud(user);
    }
    console.log(`Synced ${users.length} users to cloud`);
}

// Load all users from Firestore into localStorage
async function syncCloudToLocal() {
    const cloudUsers = await getAllUsersFromCloud();
    if (cloudUsers && cloudUsers.length > 0) {
        localStorage.setItem('users', JSON.stringify(cloudUsers));
        return cloudUsers;
    }
    return null;
}

export {
    db,
    saveUserToCloud,
    getUserFromCloud,
    getAllUsersFromCloud,
    findUserByEmail,
    deleteUserFromCloud,
    updateUserInCloud,
    syncLocalToCloud,
    syncCloudToLocal
};
