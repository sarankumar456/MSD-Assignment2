// Toggle between login and signup forms
function showSignUp() {
    document.getElementById('loginForm').style.display = 'none';
    document.getElementById('signupForm').style.display = 'block';
    document.querySelector('.container').style.animation = 'fadeIn 0.5s ease-in-out';
}

function showLogin() {
    document.getElementById('signupForm').style.display = 'none';
    document.getElementById('loginForm').style.display = 'block';
    document.querySelector('.container').style.animation = 'fadeIn 0.5s ease-in-out';
}

// Login function
function login() {
    const username = document.getElementById('loginUsername').value;
    const password = document.getElementById('loginPassword').value;

    if (!username || !password) {
        showAlert('Please fill in all fields', 'error');
        return;
    }

    showAlert(`Welcome back, ${username}! Loading recommendations...`, 'success');
    
    // Simulate redirect
    setTimeout(() => {
        // window.location.href = 'dashboard.html';
    }, 1500);
}

// Signup function
function signUp() {
    const mobile = document.getElementById('signupMobile').value;
    const username = document.getElementById('signupUsername').value;
    const password = document.getElementById('signupPassword').value;
    const confirm = document.getElementById('signupConfirm').value;

    if (!mobile || !username || !password || !confirm) {
        showAlert('Please fill in all fields', 'error');
        return;
    }

    if (password !== confirm) {
        showAlert('Passwords do not match', 'error');
        return;
    }

    if (password.length < 6) {
        showAlert('Password must be at least 6 characters', 'error');
        return;
    }

    showAlert(`Account created for ${username}! Welcome to SuperMarketRecs.`, 'success');
    
    setTimeout(() => {
        showLogin();
        document.getElementById('signupForm').reset();
        document.querySelector('.strength-bar').style.width = '0%';
    }, 2000);
}

// Show alert message
function showAlert(message, type) {
    const existingAlert = document.querySelector('.alert');
    if (existingAlert) {
        existingAlert.remove();
    }

    const alert = document.createElement('div');
    alert.className = `alert alert-${type}`;
    alert.textContent = message;
    
    const formContainer = document.querySelector('.form-container');
    formContainer.prepend(alert);
    
    setTimeout(() => {
        alert.remove();
    }, 3000);
}

// Password strength indicator
document.getElementById('signupPassword')?.addEventListener('input', function(e) {
    const password = e.target.value;
    const strengthBar = document.querySelector('.strength-bar');
    
    if (!strengthBar) return;
    
    let strength = 0;
    if (password.length > 0) strength += 20;
    if (password.length >= 6) strength += 20;
    if (/[A-Z]/.test(password)) strength += 20;
    if (/[0-9]/.test(password)) strength += 20;
    if (/[^A-Za-z0-9]/.test(password)) strength += 20;
    
    strengthBar.style.width = `${strength}%`;
    
    if (strength < 40) {
        strengthBar.style.backgroundColor = 'red';
    } else if (strength < 80) {
        strengthBar.style.backgroundColor = 'orange';
    } else {
        strengthBar.style.backgroundColor = 'green';
    }
});

// Initialize - show login form by default
document.addEventListener('DOMContentLoaded', function() {
    showLogin();
});