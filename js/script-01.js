// Chiedere una parola all'utente.
// Verificare che la parola sia palindroma

//first console.log

const wordGiven = prompt("Inserisci una parola");
const wordGivenArray = wordGiven.split("");

const wordReverseArray = wordGivenArray.reverse();
const wordReverse = wordReverseArray.join("");


// console log checks, why the array is reversed?
console.log("word given was " + wordGiven);
console.log(wordGivenArray);
console.log(wordReverseArray);
console.log("word revers is " + wordReverse);


// check palyndrom conditions
if (wordGiven === wordReverse){
    console.log("The word " + wordGiven + " is a Palyndrom");
} else {
    console.log("The word " + wordGiven + " is NOT a Palyndrom");
}


//now onto input
