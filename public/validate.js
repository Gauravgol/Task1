 
    function clearErrors(){

errors = document.getElementsByClassName('formerror');
for(let item of errors)
{
    item.innerHTML = "";
}


}
function seterror(id, error){
//sets error inside tag of id 
element = document.getElementById(id);
element.getElementsByClassName('formerror')[0].innerHTML = error;

}

function validateForm(){
    
var returnval = true;
clearErrors();

//perform validation and if validation fails, set the value of returnval to false
var mobilenumber = document.forms['myForm']["mobileNumber"].value;
if(mobilenumber.length!=10){
returnval=false;
}
 
var pass = document.forms['myForm']["password"].value;
    var lowercase = /[a-z]/g;
    var uppercase =/[A-Z]/g; 
    var specialChars = /[!@#$%^&*()_+{}\[\]:;<>,.?~\\\/]/g;

    if(pass.match(lowercase) && pass.match(uppercase)  &&pass.match(specialChars)&&pass.length==6){
        returnval = true; 
    }else{
     seterror("password","*pls enter ur password with including lowercase, uppercase,number or atlest 6 ch long.");
       returnval = false; 
    }

return returnval;
}

 