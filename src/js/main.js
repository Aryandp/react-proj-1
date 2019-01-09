function myfunction(x)
{
//document.write(x);
document.getElementById("demo").innerHTML=x;
}
function myFunction1(a)
 {

    var x = document.getElementById("view1");
    if(a===0){
    if (x.style.visibility === "hidden") {
        x.style.visibility = "visible";
    }
    }
    
    if(a===1){
        x.style.visibility = "hidden";
    }
}

function myFunction2(b)
 {

    var x = document.getElementById("view2");
    if(b===0){
    if (x.style.display === "none") {
        x.style.display = "block";
    }
    }
    
    if(b===1){
        x.style.display = "none";
    }
}
function myFunction3(c)
 {

    var x = document.getElementById("view3");
   // if(c===0){
    if (x.style.display === "none") {
        x.style.display = "block";
    }
	else {
    //}
    
    //if(c===1){
        x.style.display = "none";
   // }
}
}

/*function linkColor1()
{
    document.getElementById("link1").style.color = "#ff0000";
}
function linkColor2()
{
    document.getElementById("link2").style.color = "#ff0000";
}
function linkColor3()
{
    document.getElementById("link3").style.color = "#ff0000";
}*/