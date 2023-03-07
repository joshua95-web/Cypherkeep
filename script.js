function validateForm() {
    const email = document.forms["signUpForm"]["email"].value;
    const password = document.forms["signUpForm"]["password"].value;
    const repeatPassword = document.forms ["signUpForm"]["repeatPassword"].value;
    if (email == "") {
      alert("Email must be filled out");
      return false;
    }
    if (password == "") {
      alert("Password must be filled out");
      return false;
    }
    if (repeatPassword !== password) {
        alert("Passwords don't match")
        return false;
    }
}

function updatePasswordStrengthMeter() {
  
}