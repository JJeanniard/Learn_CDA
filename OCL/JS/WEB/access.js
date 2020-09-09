let resum;
resum = document.getElementById("resumer");
console.log(resum);
let divs, i;

for (i = 0; i < document.getElementsByTagName("div").length; i++) {
  //console.log(document.getElementsByTagName("div")[i])
}

console.log("Le nombre d'éléments selectionner est " + i + " de type div");

//Selection par selecteur css
console.log(document.querySelector("#test"));
//afficher le contenu du selecteur
console.log(document.querySelector("#test").innerHTML);
