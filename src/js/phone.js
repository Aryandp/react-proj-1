function phoneValidate(){
		var email= document.forms["myForm"]["email"].value;
	var phone = document.forms["myForm"]["phone"].value;
		var mailformat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;

	var phoneformat =/^\d{10}$/ ;
if ((email == "")&&(phone =="")) {
        document.getElementById("err2").innerHTML = "(valid Email must be filled out)"
		        document.getElementById("err3").innerHTML = "(10 digit Phone no. must be filled out)"

        return false;
    }
	else{
		document.getElementById("err2").innerHTML = "(Input ok!)"

	}
	
	if((email.match(mailformat))&&(phone.match(phoneformat))){
				document.getElementById("err2").innerHTML = "(Input ok!)"
				document.getElementById("err3").innerHTML = "(Input ok!)"


		return true;
	}
	else{
        document.getElementById("err2").innerHTML = "(valid Email must be filled out)"

     return false;
	}
	
	
	/*if(phone == "") {
        document.getElementById("err3").innerHTML = "(Phone no. must be filled out)"
		return false;
	}
	else{
		document.getElementById("err1").innerHTML = "(Input ok!)"

	}
	
	if(phone.match(phoneformat)){
		return true;
	}
	else{
        document.getElementById("err3").innerHTML = "(no is not valid)"
     return false;
	}*/
		}