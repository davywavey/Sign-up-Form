document.getElementById('registrationForm').addEventListener('submit', function(event) {
    event.preventDefault();

    // Clear previous errors
    document.getElementById('nameError').textContent = '';
    document.getElementById('emailError').textContent = '';
    document.getElementById('phoneError').textContent = '';
    document.getElementById('passwordError').textContent = '';
    document.getElementById('confirmPasswordError').textContent = '';

    // Get form values
    const fullName = document.getElementById('fullName').value;
    const email = document.getElementById('email').value;
    const phoneNumber = document.getElementById('phoneNumber').value;
    const password = document.getElementById('password').value;
    const confirmPassword = document.getElementById('confirmPassword').value;

    // Validation flags
    let isValid = true;

    // Validate Full Name
    if (fullName.length < 5) {
        document.getElementById('nameError').textContent = 'Name must be at least 5 characters long.';
        isValid = false;
    }

    // Validate Email ID
    if (!email.includes('@')) {
        document.getElementById('emailError').textContent = 'Enter a valid email.';
        isValid = false;
    }

    // Validate Phone Number
    if (phoneNumber === '1234567890' || phoneNumber.length !== 10 || isNaN(phoneNumber)) {
        document.getElementById('phoneError').textContent = 'Enter a valid 10-digit phone number.';
        isValid = false;
    }

    // Validate Password
    if (password.trim() === '') {
        document.getElementById('passwordError').textContent = 'Password is required.';
        isValid = false;
    } else if (password.toLowerCase() === 'password' || password.length < 8 || password.includes(fullName)) {
        document.getElementById('passwordError').textContent = 'Password should be of 8 characters.';
        isValid = false;
    } 

    // Validate Confirm Password
    if (password !== confirmPassword) {
        document.getElementById('confirmPasswordError').textContent = 'Passwords do not match.';
        isValid = false;
    }

    // If form is valid, submit the form and clear fields
    if (isValid) {
        alert('Form submitted successfully!');
        // Clear form fields
        document.getElementById('fullName').value = '';
        document.getElementById('email').value = '';
        document.getElementById('phoneNumber').value = '';
        document.getElementById('password').value = '';
        document.getElementById('confirmPassword').value = '';
    }
});
