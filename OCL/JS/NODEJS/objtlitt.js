/**
 * Les objets littéraux
 */
var family = {
    self: "Seb",
    sister: "Laurence",
    brother: "Ludo",
    cousin_1: "Pauline",
    cousin_2: "Guillaume"
}

console.log(family.self);
console.log(family['sister']);
//Et le passé par une variable
let brother = 'brother'

console.log(family[brother]);

//add item

family.uncle = "Didier";

//parcours
for (const id in family) {
    console.log(family[id]);
}

/**
 * Utilisation des objtes literal pour return des valeurs multi
 */

function getCoords(){
    return {x:12, y:15};
}

for(let id in getCoords()){
    console.log(getCoords()[id]);
}

