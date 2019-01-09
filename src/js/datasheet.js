function dataCollect(){
	var name= document.getElementById("name");
		/*var name= document.getElementById("email");
	var name= document.getElementById("phone");
	var name= document.getElementById("msg");*/
   var person=
   {name:name.value,
  /*email:email.value,
phone:phone.value,
msg:msg.value */ };
//document.getElementById("dout").innerHTML= (person.name+"<br/>"+person.email+"<br/>"+person.phone+"<br/>"+person.msg);
   document.getElementById("dout").innerHTML=(person.name);
		
}
