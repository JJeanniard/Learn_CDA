/**
 * Simple function
 */
function helloWord() {
  console.log("Hello World");
}

helloWord();

let firstName = "Spidi";

function helloWord(_firstName) {
  console.log("Hello world " + _firstName);
}

helloWord(firstName);

/**
 * Function sur variable
 */
helloWord = function () {
  console.log("Hello Word");
};

helloWord();

let firstname;
firstname = "jonasbadboys";

helloWord = function (_firstname) {
  console.log("Hello Word " + firstname);
};

helloWord(firstname);

/**
 * Porter de variable
 */
porterVaria = function () {
  let hello;
  hello = "helloWord";
};

//console.log(hello); error la variable est pas accessible, c'est une variable de fonction

/**
 * Function recurtif
 */
let i;
i = 0;
//fonction anonime
let recursive = function () {
  
  if (i < 100) {
    i++;
    console.log(i);
    recursive();
  } else {
    return 0;
  }
};

recursive();
/**
 * Fonction qui dans une sandbox et qui est standolone (qui s'execute toute seul)
 */
(function(){
    console.log('Hello World');
})();

/**
 * Retourner une valeur qui est recuperer par un fonction auto run
 */
let sayHello = (function(){
  return "Bonjour";  
})();

console.log(sayHello);