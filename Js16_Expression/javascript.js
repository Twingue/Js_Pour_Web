
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
