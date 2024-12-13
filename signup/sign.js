$(document).ready(function(){
    $('#signupForm').submit(function(event){
        event.preventDefault();
    

    

    
        let name = $('#name').val().trim();                  
        let email = $('#email').val().trim();
        let pass = $('#pass').val().trim();
        let con = $('#con').val().trim();

        const regEx = /^[a-zA-Z0-9_.±]+@[a-zA-Z0-9-]+.[a-zA-Z0-9-.]+$/


        let n_err = $('#n_err')    
        let c_err = $('#c_err')
        let e_err = $('#e_err')
        let p_err = $('#p_err')
        let sub_err = $('#sub_err')

        n_err.text()
        c_err.text()
        e_err.text()
        p_err.text()
        sub_err.text()

        isValid = true

        if (pass != "&& con ===" && name!="&& email !="){
            $('#c_err').text('Please confirm your password').css('color','red');
            isValid = false
        }else{
            $('#c_err').text('')
            isValid = true
        }

        if (!name){
            n_err.text('Your name is required').css('color','red');
            isValid = false;
        }else if(name.length < 3){
            n_err.text('Name must contain at least three letter words')
            isValid = false;
        }else{
            n_err.text('')
            isValid = true;
        }

        if (!email){
            e_err.text('Your email is required').css('color','red');
            isValid = false;
        }else if (!regEx(email)){
            e_err.text('Invalid email').css('color','red');
            isValid = false;
        }else{   
            e_err.text('')
            isValid = true;
        }

        if(!pass){
            p_err.text('Password is needed').css('color','red');    
            isValid = false
        }else{
            p_err.text('')
            isValid = true
        }

        if (pass != '' && pass.length < 6) {
            // alert("password is to short");
            $('#sub_err').text('password must contain at least six characters')
            isValid = false
            return
          } else if (pass != '' && con !='' && pass !== con) {
            $('#sub_err').text('Passwords mismatch');
            isValid = false
            return
          }else{
            isValid = true
          }
      

          if(isValid = true && name !== '' && email !== '' && pass !== '' && con !== ''){
            sub_err.text('Signup successful')
            location.href = "login.html";
          }else{
            return
          }
      

          let users = JSON.parse(localStorage.getItem('users')) || [];
          if (users.some((user) => user.email === email)) {
            $('#sub_err').text('Email registered previously');
            return;
          }
          
          users.push({ name, email, pass });
          localStorage.setItem('users', JSON.stringify(users));
      
          // alert('Registration successful! Please log in.');
          $("#signupForm")[0].reset();
          location.href = "login.html";
      
    });
})
