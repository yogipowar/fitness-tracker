document.getElementById('loginForm').addEventListener('submit', function(event) {
    event.preventDefault();

    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;

    const usernameError = document.getElementById('usernameError');
    const passwordError = document.getElementById('passwordError');

    let isValid = true;

    // Clear previous error messages
    usernameError.textContent = '';
    passwordError.textContent = '';

    // Dummy valid credentials
    const validUsername = 'yogi';
    const validPassword = 'pass123';

    // Validate username
    if (username === '') {
        usernameError.textContent = 'Username cannot be empty';
        isValid = false;
    } else if (username !== validUsername) {
        usernameError.textContent = 'Invalid username';
        isValid = false;
    }

    // Validate password
    if (password === '') {
        passwordError.textContent = 'Password cannot be empty';
        isValid = false;
    } else if (password !== validPassword) {
        passwordError.textContent = 'Invalid password';
        isValid = false;
    }

    // If valid, proceed with login
    if (isValid) {
        // Redirect to the dashboard page
        window.location.href = './components/dashboard.html';
    }
});
