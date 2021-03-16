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

window.onload = function Grafiku() {

    var chart = new CanvasJS.Chart("grafik", {
        animationEnabled: true,
        title: {
            text: "Sondazh mbi gjuhet e programimit"
        },
        data: [{
            type: "pie",
            startAngle: 360,
            yValueFormatString: "##0.00\"%\"",
            indexLabel: "{label} {y}",
            dataPoints: [
                {y: 79.45, label: "Javascript"},
                {y: 7.31, label: "Python"},
                {y: 7.06, label: "Java"},
                {y: 4.91, label: "C++"},
                {y: 1.26, label: "Tjeter"}
            ]
        }]
    });
    chart.render();
    
    }