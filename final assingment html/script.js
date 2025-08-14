function showAlert(message) {
  alert(message);
}

    // Example login credentials
    const validUsername = "admin";
    const validPassword = "12345";

    document.getElementById("loginForm").addEventListener("submit", function(event) {
      event.preventDefault(); // prevent form from submitting
      const username = document.getElementById("username").value.trim();
      const password = document.getElementById("password").value.trim();
      const errorMsg = document.getElementById("errorMsg");

      if(username === validUsername && password === validPassword) {
        alert("Login successful!");
        errorMsg.textContent = "";
        // Redirect to home page after login
        window.location.href = "index.html";
      } else {
        errorMsg.textContent = "Invalid username or password!";
      }
    });
  
