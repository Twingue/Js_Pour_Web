function InitTab() {
  var tab = new Array();
  console.log(tab);
  return tab;
}

var tab = InitTab();

function SaisieValeur() {
  var valeur = 1
  while (valeur != 0) {
    valeur = window.prompt("Saisissez les valeurs du tableau (Arrêt quand 0 saisie) ");
   //tab.pop() retire la derniere  valeur rentrer
    if (valeur != 0 ) {
      tab.push(valeur);
    } else {
      break;
    }
   
    

  }
 let somme = 0;

    for (let i = 0; i < tab.length; i++) {
        somme += parseInt(tab[i]);
    }

  document.write("La somme est de "+ somme);
  document.write("</br>La moyenne est de "+ somme/tab.length)
}
SaisieValeur();

document.write("</br>Il y a " + tab.length + " valeur(s) saisie");
