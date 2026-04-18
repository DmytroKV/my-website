document.getElementById('signup-form').addEventListener('submit', function(event) {
    event.preventDefault();
    // Simulate sign up
    alert('Sign up successful!');
    // Redirect to another website
    window.location.href = 'success.html';
});