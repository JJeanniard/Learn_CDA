helloWord = function(){
    console.log("Hello Word");
}

helloWord();

let firstname;
firstname = "jonasbadboys";

helloWord = function (_firstname){
    console.log("Hello Word " + firstname);
}

helloWord(firstname);