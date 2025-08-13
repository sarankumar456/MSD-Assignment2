function showSignUp() {
    document.getElementById('loginForm').style.display = 'none';
    document.getElementById('signupForm').style.display = 'block';
}

function showLogin() {
    document.getElementById('signupForm').style.display = 'none';
    document.getElementById('loginForm').style.display = 'block';
}

function login() {
    let username = document.getElementById('loginUsername').value;
    let password = document.getElementById('loginPassword').value;

    if (username && password) {
        alert(`Welcome back, ${username}! Redirecting to recommendations...`);
        // Here you would typically redirect or make an API call
        // window.location.href = 'recommendations.html';
    } else {
        alert('Please fill in all fields');
    }
}

function signUp() {
    let mobile = document.getElementById('signupMobile').value;
    let username = document.getElementById('signupUsername').value;
    let email = document.getElementById('signupEmail').value;
    let password = document.getElementById('signupPassword').value;
    let confirm = document.getElementById('signupConfirm').value;

    if (!mobile || !username || !email || !password || !confirm) {
        alert('Please fill in all fields');
        return;
    }

    if (password !== confirm) {
        alert('Passwords do not match');
        return;
    }

    if (password.length < 6) {
        alert('Password must be at least 6 characters');
        return;
    }

    alert(`Account created for ${username}! Welcome to our Supermarket Recommendation System.`);
    showLogin();
}
