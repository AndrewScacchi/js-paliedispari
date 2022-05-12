// Chiedere una parola all'utente.
// Verificare che la parola sia palindroma

//first console.log
/*
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
*/

//now onto DOM manipulation

var wordGiven;
const button = document.getElementById("btn-send");

function palyndromeCheck(word){
    let wordArray = word.split("");
    let wordReverseArray = wordArray.reverse();
    let wordReverse = wordReverseArray.join("");

    if (word === wordReverse){
        const isPalyndrome = `La parola <span class="upperCase">\"${word}\"</span> <strong>E'</strong> un palindromo`;
        return isPalyndrome;
    } else {
        const isNotPalyndrome = `La parola <span class="upperCase">\"${word}\"</span> <strong>NON E'</strong> un palindromo`;
        return isNotPalyndrome;
    }
}



// al click del bottone, prendo il valore dell'input, lo fornisco alla funzione prima stabilita, metto il risultato sul DOM


button.addEventListener("click", function(){
    wordGiven = document.getElementById("input-word").value;
    const finalresult = palyndromeCheck(wordGiven);
    const flavourText = document.getElementById("flavour-text");
    flavourText.innerHTML = finalresult;
})

