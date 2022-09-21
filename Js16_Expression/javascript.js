   var list = document.getElementById("sujet");
    list.addEventListener("click", projet)


function projet() { 
    var texte;
    texte = list.options[list.selectedIndex].value;
    document.getElementById("choix").defaultValue = texte;
    console.log(texte);
}



var soc = document.getElementById("societe");
soc.addEventListener("change", societ)

function societ(){
    var filtre= new RegExp("[a-zA-Z0-9]");
    var resultat =filtre.test(soc.value);
    console.log(resultat);
    if (resultat == false){
        soc.value = "";   
        alert("Societé incorrect,saisissez une société")
    
    } 
}






    var contact = document.getElementById("contacter");
    contact.addEventListener("change", contacte)


function contacte(){
    var filtre= new RegExp("[a-zA-Z]");
    var resultat =filtre.test(contact.value);
    console.log(resultat);
    if (resultat == false){
        contact.value = "";   
        alert("Personne à contacter incorrect")
}
}



var poste = document.getElementById("postal");
    poste.addEventListener("change", codepostal)
    
function codepostal(){
var filtre = /^\d{5}$/;
var resultat =filtre.test(poste.value);
    console.log(resultat);
    
    if (resultat == false){
        poste.value = "";   
        alert("Code postal incorrect, saisissez un code postal de 5 chiffres")
    
    } 
}




    var ville = document.getElementById("ville");
    ville.addEventListener("change", villee)

function villee(){
    var filtre= new RegExp("[a-zA-Z]");
    var resultat =filtre.test(ville.value);
    console.log(resultat);
    if (resultat == false){
        ville.value = "";   
        alert("Ville incorrect")
    
    } 
}
    



    var email = document.getElementById("mail");
    email.addEventListener("change", function(){
    var filtre=/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/;
    
    var resultat =filtre.test(email.value);
    console.log(resultat);
    if (resultat == false){
        email.value = "";   
        alert("Email incorrect,saisissez un email correct")
    
    } 
    });


    var telephone = document.getElementById("phone");
    telephone.addEventListener("change", tel)
    
    function tel(){
        //filtre fixe et portable
    var filtre =/^\+33(.|-| )?(3|6)((.|-| )?[0-9]{2}){4}$/ 
    var filtre2 = /^0(3|6)((.|-| )?[0-9]{2}){4}$/
    var resultat =filtre.test(telephone.value)||filtre2.test(telephone.value);
    console.log(resultat);
    if (resultat == false){
        telephone.value = "";   
        alert("Numéro de téléphone incorrect")
    
    } 
    }
    

/*
var machin = document.getElementById("bouton");
machin = addEventListener("click", global);

function global(){

    var filtre1= new RegExp("[a-zA-Z0-9]");
    var truc1 = document.getElementById("societe");
    var resultat1 =filtre1.test(truc1.value);
    console.log(resultat1);
    if (resultat1 == false){
        truc1.value = "";   
        alert("Societer incorrect")
    
    } else if(resultat1 == true){
        alert("Societer correct");
    }


    var filtre2= new RegExp("[a-zA-Z]");
    var truc2= document.getElementById("contacter");
    var resultat2 =filtre2.test(truc2.value);
    console.log(resultat2);
    if (resultat2 == false){
        truc2.value = "";   
        alert("contact incorrect")
    
    } else if(resultat2 == true){
        alert("contact correct");
    }



var code3 = document.getElementById("postal");
var filtre3 = /^\d{5}$/;
var resultat3 =filtre3.test(code3.value);
    console.log(resultat3);
    
    if (resultat3 == false){
        code3.value = "";   
        alert("code postal incorrect")
    
    } else if(resultat3 == true){
        alert("code postal correct");
    }



    var filtre4= new RegExp("[a-zA-Z]");
    var truc4 = document.getElementById("ville");
    var resultat4 =filtre4.test(truc4.value);
    console.log(resultat4);
    if (resultat4 == false){
        truc4.value = "";   
        alert("ville incorrect")
    
    } else if(resultat4 == true){
        alert("ville correct");
    }


    var filtre5= /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/;
    var truc5 = document.getElementById("mail");
    var resultat5 =filtre5.test(truc5.value);
    console.log(resultat5);
    if (resultat5 == false){
        truc5.value = "";   
        alert("email incorrect")
    
    } else if(resultat5 == true){
        alert("email correct");
    }

}
*/