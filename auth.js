// Initialize OP account if not exists
function initializeOPAccount() {
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
            tokens: 10000, // Admin starts with 10000 tokens for testing
            completedTests: [], // Track completed tests to prevent duplicate token rewards
            createdAt: new Date().toISOString()
        };
        users.push(opAccount);
        localStorage.setItem('users', JSON.stringify(users));
    } else {
        // Update existing OP account to have tokens if not present
        const opIndex = users.findIndex(u => u.email === 'tranhoanggiabao2009@gmail.com');
        if (opIndex !== -1 && users[opIndex].tokens === undefined) {
            users[opIndex].tokens = 10000;
            users[opIndex].completedTests = users[opIndex].completedTests || [];
            localStorage.setItem('users', JSON.stringify(users));
        }
    }
}

// Initialize on page load
initializeOPAccount();

// Check if user is already logged in with remember me
window.addEventListener('load', () => {
    const currentUser = JSON.parse(localStorage.getItem('currentUser'));
    const rememberMe = localStorage.getItem('rememberMe');
    
    if (currentUser && rememberMe === 'true') {
        // User is logged in with remember me, redirect to home
        window.location.href = 'index.html';
    } else if (currentUser && rememberMe !== 'true') {
        // User was logged in but didn't check remember me, clear session
        localStorage.removeItem('currentUser');
    }
});

// Switch between login and register tabs
function switchTab(tab) {
    const tabs = document.querySelectorAll('.auth-tab');
    const forms = document.querySelectorAll('.auth-form');
    
    tabs.forEach(t => t.classList.remove('active'));
    forms.forEach(f => f.classList.remove('active'));
    
    if (tab === 'login') {
        tabs[0].classList.add('active');
        forms[0].classList.add('active');
    } else {
        tabs[1].classList.add('active');
        forms[1].classList.add('active');
    }
    
    hideError();
}

// Show error message
function showError(message) {
    const errorDiv = document.getElementById('errorMessage');
    errorDiv.textContent = message;
    errorDiv.classList.add('show');
}

// Hide error message
function hideError() {
    const errorDiv = document.getElementById('errorMessage');
    errorDiv.classList.remove('show');
}

// Preview avatar
function previewAvatar(event) {
    const file = event.target.files[0];
    if (file) {
        const reader = new FileReader();
        reader.onload = function(e) {
            const preview = document.getElementById('avatarPreview');
            preview.innerHTML = `<img src="${e.target.result}" alt="Avatar">`;
        };
        reader.readAsDataURL(file);
    }
}

// Handle login
function handleLogin(event) {
    event.preventDefault();
    hideError();
    
    const email = document.getElementById('loginEmail').value.trim();
    const password = document.getElementById('loginPassword').value;
    const rememberMe = document.getElementById('rememberMe').checked;
    
    const users = JSON.parse(localStorage.getItem('users')) || [];
    const user = users.find(u => u.email === email && u.password === password);
    
    if (user) {
        // Login successful
        const currentUser = {
            id: user.id,
            name: user.name,
            email: user.email,
            bandScore: user.bandScore,
            description: user.description,
            avatar: user.avatar,
            isOP: user.isOP || false,
            tokens: user.tokens || 0
        };
        
        localStorage.setItem('currentUser', JSON.stringify(currentUser));
        
        if (rememberMe) {
            localStorage.setItem('rememberMe', 'true');
        } else {
            localStorage.removeItem('rememberMe');
        }
        
        // Redirect to home
        window.location.href = 'index.html';
    } else {
        showError('Email hoặc mật khẩu không đúng!');
    }
}

// Handle register
function handleRegister(event) {
    event.preventDefault();
    hideError();
    
    const name = document.getElementById('registerName').value.trim();
    const email = document.getElementById('registerEmail').value.trim();
    const password = document.getElementById('registerPassword').value;
    const bandScore = document.getElementById('registerBandScore').value;
    const description = document.getElementById('registerDescription').value.trim();
    
    // Validate password length
    if (password.length < 6) {
        showError('Mật khẩu phải có ít nhất 6 ký tự!');
        return;
    }
    
    // Get avatar
    const avatarInput = document.getElementById('avatarInput');
    let avatar = null;
    
    if (avatarInput.files.length > 0) {
        const reader = new FileReader();
        reader.onload = function(e) {
            avatar = e.target.result;
            completeRegistration();
        };
        reader.readAsDataURL(avatarInput.files[0]);
    } else {
        completeRegistration();
    }
    
    function completeRegistration() {
        const users = JSON.parse(localStorage.getItem('users')) || [];
        
        // Check if email already exists
        if (users.find(u => u.email === email)) {
            showError('Email này đã được đăng ký!');
            return;
        }
        
        // Create new user
        const newUser = {
            id: 'user-' + Date.now(),
            name: name,
            email: email,
            password: password,
            bandScore: bandScore,
            description: description,
            avatar: avatar,
            isOP: false,
            tokens: 0, // New users start with 0 tokens
            completedTests: [], // Track completed tests
            createdAt: new Date().toISOString()
        };
        
        users.push(newUser);
        localStorage.setItem('users', JSON.stringify(users));
        
        // Auto login
        const currentUser = {
            id: newUser.id,
            name: newUser.name,
            email: newUser.email,
            bandScore: newUser.bandScore,
            description: newUser.description,
            avatar: newUser.avatar,
            isOP: false,
            tokens: newUser.tokens
        };
        
        localStorage.setItem('currentUser', JSON.stringify(currentUser));
        
        // Redirect to home
        window.location.href = 'index.html';
    }
}
