function rand(){
var random = Math.floor(Math.random() * 101);
console.log(random);
return random;
}
var random=rand();
var element = document.getElementById("button1").onclick;

var input = document.getElementById("textBox1");
input.addEventListener("keypress", function(event) {
  if (event.key === "Enter") {
    event.preventDefault();
    document.getElementById("button1").click();
  }
});


function verif(random){
    var prop = document.getElementById("textBox1").value;
   
    if (random<prop){
        document.getElementById("label1").innerHTML = "Trop grand, redonnez un nombre";
    }else if (random>prop) {
        document.getElementById("label1").innerHTML = "Trop petit, redonnez un nombre";
        }else if (random == prop) {
            document.getElementById("label1").innerHTML = "Correct, bravo!!";

        }

}
