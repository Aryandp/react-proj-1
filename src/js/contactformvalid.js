function validateForm()
 {
	 var name = document.forms["myForm"]["name"].value;
	/*var email= document.forms["myForm"]["email"].value;
	var phone = document.forms["myForm"]["phone"].value;
	var phoneformat =/^\d{10}$/ ;
	var mailformat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;*/
   if (name == ""){
        document.getElementById("err1").innerHTML = "(Name must be filled out)"

        return false;
    }
	else{
		document.getElementById("err1").innerHTML = "(Input ok!)"

	}
	/*
	if (email == "") {
        document.getElementById("err2").innerHTML = "(Email must be filled out)";
				email.focus(); 

        return false;
    }
	else{
		document.getElementById("err2").innerHTML = "(Input ok!)";

	}
	
	if(email.match(mailformat)){
				document.getElementById("err2").innerHTML = "(Input ok!)";

		return true;
	}
	else{
        document.getElementById("err2").innerHTML = "(Email is not valid)";
				email.focus(); 

     return false;

	}
	if(phone == "") {
        document.getElementById("err3").innerHTML = "(Phone no. must be filled out)";
		phone.focus();
		return false;
	}
	else{
		document.getElementById("err1").innerHTML = "(Input ok!)";

	}
	
	if(phone.match(phoneformat)){
		return true;
	}
	else{
        document.getElementById("err3").innerHTML = "(no is not valid)";
				phone.focus();

     return false;
	}*/
}
