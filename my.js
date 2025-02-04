document.getElementById("userForm").addEventListener("submit", function(event) {
    event.preventDefault();
    
    let name = document.getElementById("name").value.trim();
    let email = document.getElementById("email").value.trim();
    let message = document.getElementById("message").value.trim();
    
    let successMessage = document.querySelector(".success-message");
    let errorMessage = document.querySelector(".error-message");

    if (name && email && message) {
        successMessage.style.display = "block";
        errorMessage.style.display = "none";
        this.reset(); // Clear form after submission
    } else {
        successMessage.style.display = "none";
        errorMessage.style.display = "block";
    }
});
