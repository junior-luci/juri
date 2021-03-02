function Juri() { 
    var name =  
        document.forms["RegForm"]["Emri"]; 
    var email =  
        document.forms["RegForm"]["E-Mail"]; 
    var phone =  
        document.forms["RegForm"]["NR-Telefoni"]; 
    var what =  
        document.forms["RegForm"]["Gjuha"]; 
    var address =  
        document.forms["RegForm"]["Adresa"]; 
    var gjini =  
        document.forms["RegForm"]["gjini"]; 

    if (name.value == "") { 
        window.alert("Ju lutem vendosni emrin."); 
        name.focus(); 
        return false; 
    } 

    if (address.value == "") { 
        window.alert("Ju lutem vendosni nje adrese."); 
        address.focus(); 
        return false; 
    } 

    if (email.value == "") { 
        window.alert( 
          "Ju lutem vendosni nje adrese e-mail"); 
        email.focus(); 
        return false; 
    } 

    if (phone.value == "") { 
        window.alert( 
          "Ju lutem vendosni nje numer telefoni."); 
        phone.focus(); 
        return false; 
    } 

    if (gjini.value == "") { 
        window.alert( 
          "Ju lutem zgjidhni nje opsion."); 
        phone.focus(); 
        return false; 
    } 

    if (what.selectedIndex < 1) { 
        alert("Zgjidhni nje gjuhe."); 
        what.focus(); 
        return false; 
    } 

    return true; 
} 