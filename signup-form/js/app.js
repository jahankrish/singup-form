
$(document).ready(function() {
    $(".submitBtn").click(function(event) {

        event.preventDefault();

    var name = $("#username").val();
    var email = $("#email").val();
    var password = $("#password").val();
    var cpassword = $("#cpassword").val();
     
    const regExp = /^[A-Z0-9._%+-]+@([A-Z0-9-]+\.)+[A-Z]{2,4}$/i;

    if (name == '' || email == '' || password == '' || cpassword == '') {

            alert("Please fill all fields...!!!!!!");
            return false;

    }else if(!regExp.test(email)){

        alert('Enter the value email');

    }else if ((password.length) < 6){

        alert("Password should at least 6 character in length...!!!!!!");
    
    }else if (!(password).match(cpassword)) {

        alert("Your passwords don't match. Try again?");
    }else{

              alert('successful sing up thank you'); 
    }

    });
    
    });