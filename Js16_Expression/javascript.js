
function projet() { 
    var liste, texte;
    liste = document.getElementById("sujet");
    texte = liste.options[liste.selectedIndex].value;
    document.getElementById("choix").defaultValue = texte;
    console.log(texte);
}

function codepostal(){
var code;
    code = document.getElementById("postal");

 if (code.value.length != 5){
    code.value = "";   
    alert("Code postal incorrect, saisissez 5 valeurs")

} 

}

function societ(){
    var filtre= /^\w+\s+$/;
    var truc = document.getElementById("societe");
    var resultat =filtre.test(truc.value);
    console.log(resultat);
    if (resultat == false){
        truc.value = "";   
        alert("Societer incorrect")
    
    } else if(resultat == true){
        alert("Societer correct");
    }
}