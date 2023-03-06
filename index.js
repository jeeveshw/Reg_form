function validation (){
    if (document.Formfill.Username.value==""){
        document.getElementById("result").innerHTML="Enter Username";
        return false;

    }
    else if (document.Formfill.Username.value.length<6){
            document.getElementById("result").innerHTML="At least six letters required";
            return false;
    
    }
    else if (document.Formfill.Email.value == ""){
        document.getElementById("result").innerHTML="Enter email ID ";
        return false;

            }
    else if (document.Formfill.Password.value == ""){
                document.getElementById("result").innerHTML="Enter Password ";
                return false;
    }
}