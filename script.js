function validateForm() {
    const email = document.forms["signUpForm"]["email"].value;
    const password = document.forms["signUpForm"]["password"].value;

    if (name == "") {
      alert("Name must be filled out");
      return false;
    }
    if (email == "") {
      alert("Email must be filled out");
      return false;
    }
    if (password == "") {
      alert("Password must be filled out");
      return false;
    }
}