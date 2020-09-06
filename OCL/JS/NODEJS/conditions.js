let int_nb;
int_nb = 5;

if(int_nb > 4){
    console.log('c\'est superieux');
}else{
    console.log('c\'est inferieux'); 
}

let age;
age = 15;

if(age >= 1 && age <= 17){
    console.log("Vous etes pas encore majeur")
}else if(age >= 18 && age <= 49){
    console.log("Vous etes majeur mais pas encore senior")
}else if (age >= 50 && age <= 59){
    console.log("Vous etes senior mais pas encore retraite")
}else if(age >= 60 && age <= 120){
    console.log("")
}else{
    console.log('Vous étes hors tranche d\'age');
}

/**
 * Exemple d'incrementation 
 * let nb = 0
 * nb = nb + 1;
 * 
 * ou
 * 
 * nb++
 * et décrémenter
 * nb--
 */

let nb_1;
nb_1 = 0;

nb_1++; //value stoker est 0
++nb_1; //value stoker est 1

while(nb_1 < 100){
    console.log(nb_1);
    nb_1++;
}

nb_1 = 0;

do {
    ++nb_1;
    console.log(nb_1);
} while (nb_1 <= 1000);

let i;

for(i = 0; i < 100000000000000000n; i++){
    console.log("Love "+i)
}
