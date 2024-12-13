$(document).ready(function(){
    $("#loginForm").submit(function (e) {
        e.preventDefault();
    
        let email = $("#mail").val().trim();
        let password = $("#passs").val();
        let nonExisting = $("#nonExisting");
        let ee_err = $("#login_email_err");
        let pp_err = $("#login_password_err");
        let users = JSON.parse(localStorage.getItem("users")) || [];
        let user = users.find( (user) => user.email === email && user.password === password);

        const regEx = /^[a-zA-Z0-9_.±]+@[a-zA-Z0-9-]+.[a-zA-Z0-9-.]+$/

    

        if(!email){
          ee_err.text('Your email address is required');
        }else if(!regEx.test(email)){
          ee_err.text('invalid email format')
        }else if (email !== ''){
          ee_err.text('');
          nonExisting.text('')
        }
    
        if(password === ''){
          pp_err.text('Your password is required');
          nonExisting.text('')
          return
        }else if(password !== ''){
          pp_err.text('');
          nonExisting.text('')
        }
    
        if (user) {
            localStorage.setItem("currentUser", JSON.stringify(user));
            location.href = "main.html";
          }else if (users.email !== email || users.password !== password && email !=='' && password !=='') {
            nonExisting.text("Invalid email or password");
          }else if (users.email !== email || users.password !== password  && password !==''  && email !=='') {
            nonExisting.text("Invalid email or password");
          } else if(email !== users.email && users.password !== password){
            $("#nonExisting").text("This account does not exist");
          }
        });
      
        if (location.pathname.endsWith("main.html")) {
          // const welcomeText
          const currentUser = JSON.parse(localStorage.getItem("currentUser"));
          if (currentUser) {
            $("#welcome_text")("username");
          } else {
            alert("No user is logged in!");
            location.href = "login.html";
          }
        }

        // Handle Logout
        window.logout = function () {
        localStorage.removeItem("currentUser");
        location.href = "login.html";
        };
    })





      
    
    



    

   


