function valid() {
    var pass = document.getElementById("password").value;
    var conpass = document.getElementById("confirm-password").value;
    var message = "";
    if (pass !== conpass) {
      message = "Password does not match";
    } else if (pass.length < 8) {
      message = "Enter a password with a minimum of 8 characters";
    } else {
      var upp = /[a-z]/.test(pass);
      var low = /[A-Z]/.test(pass);
      var digit = /[0-9]/.test(pass);
      var spec = /[@!#$%^&*~.;:]/.test(pass);
      if (!upp || !low || !digit || !spec) {
        message = "Password must include uppercase, lowercase, digit, and special character";
      } else {
        message = "Password is valid";
      }
    }
    alert(message);
  }