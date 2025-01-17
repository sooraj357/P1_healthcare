function valid(){
    var pass = document.getElementById("password").value;
    var conpass = document.getElementById("confirmPassword").value;
    var message="";
    if(pass !== conpass){
        message="Not match";
        
    }
    else if(pass.length<8){
        message="enter password minimum 8 character";
        
    }
    else{
        var upp=/[a-z]/.test(pass);
        var low=/[A-Z]/.test(pass);
        var digit=/[0-9]/.test(pass);
        var spec=/[@!#$%^&*~.;:]/.test(pass);
        if( !upp  || !low || !digit || !spec ){
         message="Enter pssword mixed like digit upper leter lower letter specil character";
        }
        else{
            message="password is valid";
        }
    }
   document.getElementById("messageid").innerText=message;
    }