/**
 * Le principe été de convertir un nombre en chaine de caractére,
 * il n'y a pas la convertion sur la totalité du travail demander.
 */
let nb_int = 155;

let tab_nb = {
  0: "zero",
  1: "one",
  2: "two",
  3: "tree",
  4: "four",
  5: "five",
  6: "six",
  7: "seven",
  8: "eight",
  9: "nine",
};

function converter(_nb_int) {
  let fra_int = [];
  let str_nb = '';

  if (typeof _nb_int != "number") {
    console.log("Ceci est pas un nonbre!");
    return 0;
  }

  fra_int = _nb_int.toString().split("");

  for (let y in fra_int) {
    for (let i in tab_nb) {
      if (i == fra_int[y]) {
        str_nb += tab_nb[i];
        str_nb += ' ';
      }
    }
  }
  return str_nb;
}

console.log(converter(nb_int));
