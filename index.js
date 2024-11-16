function submitForm() {
    var firstName = document.getElementById('firstName').value;
    var lastName = document.getElementById('lastName').value;
    var email = document.getElementById('email').value;
    var password = document.getElementById('password').value;

    var emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    var passwordRegex = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/;


     

    if (firstName) {
       
        let firstnameLen = firstName.length;
        if (firstnameLen< 5) {
            document.getElementById('firstNameLengthError').style.display = 'block';
           
        } else {
            document.getElementById('firstNameLengthError').style.display = 'none';
            
            console.log('First Name:', firstName);
        }
        document.getElementById('firstNameError').style.display = 'none';

      
    } else {
        document.getElementById('firstNameError').style.display = 'block';
        document.getElementById('firstNameLengthError').style.display = 'none';
        
    }

    

    if (lastName) {
        if (lastName.length < 5) {
            document.getElementById('lastNameLengthError').style.display = 'block';
        
        } else {
            document.getElementById('lastNameLengthError').style.display = 'none';
            console.log('Last Name:', lastName);
        }
    
        document.getElementById('lastNameError').style.display = 'none';
       
    } else {
        document.getElementById('lastNameError').style.display = 'block';
        document.getElementById('lastNameLengthError').style.display = 'none';
    }

   
    if (email) {
        if (!emailRegex.test(email)) {
            document.getElementById('emailFormatError').style.display = 'block';
        }else{
            document.getElementById('emailFormatError').style.display = 'none';
            console.log('Email:', email); 
          
        }
    
        document.getElementById('emailError').style.display = 'none';
       
    } else {
        document.getElementById('emailError').style.display = 'block';
        document.getElementById('emailFormatError').style.display = 'none';
    }

   
    if (password) {
        if (!passwordRegex.test(password)) {
            document.getElementById('passwordFormatError').style.display = 'block';
            
        } else {
            document.getElementById('passwordFormatError').style.display = 'none';
            
            console.log('Password:', password);
        }
        document.getElementById('passwordError').style.display = 'none';
        
    } else {
        document.getElementById('passwordError').style.display = 'block';
        document.getElementById('passwordFormatError').style.display = 'none';
    }

   
   
}
