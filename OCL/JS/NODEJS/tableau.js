(function(){
    //Tout les variables sont objet
    let myString = "Ceci est une chaîne de caractère";
    console.log(myString.length);
    console.log(myString.toUpperCase())
})()

let tableau = ['tata', 'toto'] //taille 2, index 0 et 1
console.log(tableau[1]);

let myArray = new Array('tata', 'titi', 'toto');

myArray[1] = "tete";
console.log(myArray[1]);

//ajoute une valeur dans le tableau
myArray.push('tutu');
console.log(myArray[myArray.length-1]);
