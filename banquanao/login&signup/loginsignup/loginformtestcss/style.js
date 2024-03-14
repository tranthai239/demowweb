document.addEventListener("DOMContentLoaded", function() {
  document.querySelectorAll(".toggle-password").forEach(function(element) {
    element.addEventListener("click", function() {
      var passwordInput = this.previousElementSibling;
      if (passwordInput.type === "password") {
        passwordInput.type = "text";
        
      } else {
        passwordInput.type = "password";
        
      }
    });
  });

  document.getElementById("signup-form").addEventListener("submit", function(event) {
    var password = document.getElementById("password").value;
    var confirm_password = document.getElementById("confirm_password").value;
    if (password !== confirm_password) {
      alert("mật khẩu không khớp, vui lòng xác nhập lại");
     
    
      event.preventDefault();
    }
  });
});
