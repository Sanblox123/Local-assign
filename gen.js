$(document).ready(function(){
    $('#signupForm').on('submit', function(e){
        e.preventDefault()

        let name = $('#name').val()                  
        let email = $('#email').val()
        let pass = $('#pass').val()
        let con = $('#con').val()

        localStorage.setItem('myemail', email)
        localStorage.setItem('mypassword', pass)

        let n_err = $('#n_err')    
        let e_err = $('#c_err')
        let p_err = $('#c_err')
        let c_err = $('#c_err')

        let isValid = true;

        if (con !== pass){
            c_err.text('password does not match').css('color','red');
            isValid = false;
        }else if (!con){
            c_err.text('confirm your password').css('color','red');
            isValid = false;
        }else{
            c_err('')
            isValid = true
        }

        if (!name){
            n_err.text('Your name is required').css('color','red');
            isValid = false;
        }else if(name.length < 3){
            n_err.text('Name must contain at least three letter words')
            isValid = false
        }else{
            n_err.text('')
            isValid = true
        }


        if (!email){
            e_err.text('Your email is required').css('color','red');
            isValid = false
        }else if (!/^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/.text(email)){
            e_err.text('Invalid email').css('color','red');
            isValid = false
            
        }else{
            e_err('')
            isValid = true
        }

        if (!pass){
            p_err.text('Your password is required').css('color','red');
            isValid = false;
        }else if(!/^(?=.*[a-z])(?=.*[A-Z])(?=.*[!@#$%^&*(),.?":{}|<>])[A-Za-z\d!@#$%^&*(),.?":{}|<>]{8,}$/.text(pass)){
            p_err.text('Password must contain at least an uppercase, a lowercase, a symbol and a number').css('color','red');
            isValid = false;
        }else if(pass.length < 6){
            p_err.text('Password must contain at least 6 inputs').css('color','red');
            isValid = false;
        }else{
            p_err.text('')
            isValid = true;
        }

        if (isValid = true){
            console.log(isValid)
            location.href = './login.html';
        }
        
    })

    // LOGIN

    $('#loginForm').on('submit',function(event){
        event.preventDefault();     
       })
       
    
       $('#enter').click(function(){
    
            let mail = $('#mail').val()
            let passs = $('#passs').val()
   
            let ee_err = $('#ee_err')
            let pp_err = $('#pp_err')
    
            let myemail = localStorage.getItem('myemail')
            let mypassword = localStorage.getItem('mypassword')
    
            let isValid = true;
    
            if (!mail){
                ee_err.text('Your email is required').css('color','red');
                isValid = false;
            }else if (mail !== mail){
                ee_err.text('Incorrect email').css('color','red');
                isValid = false;
            }else{
                ee_err.text('')
                isValid = true
            }
    
            if (!passs){
                pp_err.text('Your password is required').css('color','red');
                isValid = false;
            }else if(passs !== pass){
                pp_err.text('Incorrect password').css('color','red');
                isValid = false;
            }else{
                pp_err.text('')
                isValid = true
            }
    
            if (myemail === myemail){
                alert('Login successful!')
            }else{
                ee_err.text ('email does not match')
            }
        
            if (mypassword === mypassword){
            alert('Login successful!')
            }else{
                pp_err.text ('password does not match').css('color','red');
        
            }
    
       })
   

    
})




    