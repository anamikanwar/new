function validateForm() {
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;
  
    if (username === "" || password === "") {
      alert("Please fill in all fields");
      return false;
    }
  
    // Placeholder validation (you can replace this with actual server-side validation)
    if (username === "test" && password === "1234") {
      alert("Login successful");
    } else {
      alert("Invalid username or password");
    }
    return false; // Prevent form submission for demo purposes
  }
  