function ValidateExample()
{
    var username=document.getElementById("un").value;
    var regusername=/^[A-Z]{10}$/i;
    var email=document.getElementById("em").value;
    var regemail=/^([A-Za-z0-9\.-]+)@([A-Za-z0-9-]+).([a-z]{2,10})(.[a-z]{2,8})?$/;
    var mobile=document.getElementById("mn").value;
    var regmobile=/^[7-9][0-9]{9}$/;
    var password=document.getElementById("ps").value;
    var passwordc=document.getElementById("psc").value;
    var regpassword=/(?=.*[a-z])(?=.*[A-Z])(?=.*[@$&%]).{5,8}$/;


    

    if(username.trim()=="")
    {
        un.style.border="solid 1.5px red";
        document.getElementById("user").innerHTML="Reqiured";
        return false;
    }
    else if(regusername.test(username)==false)
    {
        un.style.border="solid 1.5px red";
        document.getElementById("user").innerHTML="Must be Alphabets and Length of 10 character";
        return false;
    }
    else if(email.trim()=="")
    {
        em.style.border="solid 1.5px red";
        document.getElementById("email").innerHTML="Reqiured";
        return false;
    }
    else if(regemail.test(email)==false)
    {
        em.style.border="solid 1.5px red";
        document.getElementById("email").innerHTML="Invalid Format";
        return false;
    }
    else if(mobile.trim()=="")
    {
        mn.style.border="solid 1.5px red";
        document.getElementById("mobile").innerHTML="Required";
        return false;   
    }
    else if(regmobile.test(mobile)==false)
    {
        mn.style.border="solid 1.5px red";
        document.getElementById("mobile").innerHTML="Invalid Format and Length must 10";
        return false;
    }
    else if(password.trim()=="")
    {
        ps.style.border="solid 1.5px red";
        document.getElementById("pass").innerHTML="Required";
        return false;
    }
    else if(regpassword.test(password)==false)
    {
        ps.style.border="solid 1.5px red";
        document.getElementById("pass").innerHTML="Invalid Format";
        return false;
    }
    else if(password.trim()!=passwordc.trim())
    {
        psc.style.border="solid 1.5px red";
        document.getElementById("passc").innerHTML="Confirm Password must be same";
        return false;
    }
    else
    {
        alert("Successfully Submitted");
        return true;
    }
}




