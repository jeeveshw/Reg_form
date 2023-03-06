function validation (){
    if (document.Formfill.Username.value==""){
        document.getElementById("result").innerHTML="Enter Username";
        return false;

    }
    else{
        (document.Formfill.Username.value.length <6){
            document.getElementById("result").innerHTML="At least six letters required";
            return false;
    
    }
}