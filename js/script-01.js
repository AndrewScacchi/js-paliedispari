// Chiedere una parola all'utente.
// Verificare che la parola sia palindroma

var wordGiven;
const button = document.getElementById("btn-send");

function palyndromeCheck(word){
    //.split percorre la stringa dividendo i singoli caratteri "" in un array
    let wordArray = word.split("");
    //inverto l'array
    let wordReverseArray = wordArray.reverse();
    //.join unisce array elements in una stringa divisi dal valore indicato ""
    let wordReverse = wordReverseArray.join("");

    //verifica palindromicità
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
    // salvo in const il valore dell'input
    wordGiven = document.getElementById("input-word").value;

    // chiamo la fx, salvo in varGlobale, 
    const finalresult = palyndromeCheck(wordGiven);

    //inserisco il risultato in un elemento del DOM
    const flavourText = document.getElementById("flavour-text");
    flavourText.innerHTML = finalresult;
})

