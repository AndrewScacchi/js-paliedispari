// EXERCISE 02 
/*
User choose Even or Odd. (TO DO)

User insert a number between 1 and 5 (TO DO CHECKS)
PC generate a random number in the same range (DONE)                           
Using a fx check if addition is ODD or EVEN, (DONE)
declare a winner

*/


// salvo in variabili il buttone e il numero dato
const button = document.getElementById("btn-send");
// var userNumber;

//verifica pari o dispari
function additionCheck(numUser, numPc){
    const addition = parseInt(numUser) + parseInt(numPc);
    if (addition % 2 == 0) {
        const result = true;
        return result;
    } else {
        const result = false;
        return result;
    }

}
// al click del bottone, prendo il valore dell'input, lo fornisco alla funzione prima stabilita, metto il risultato sul DOM
button.addEventListener("click", function(){
    const userNumber = document.getElementById("input-number").value;
    const pcNumber =  Math.floor(Math.random() * 5 + 1 );
    const finalAddition = parseInt(userNumber) + parseInt(pcNumber);

    const result = additionCheck(userNumber, pcNumber);
    const flavourText = document.getElementById("flavour-text");
    flavourText.innerHTML = `
        Il tuo numero era ${userNumber}; <br>
        Il numero del PC era ${pcNumber}; <br>
        `
    if (result){
        flavourText.innerHTML += `
        La somma ${finalAddition} è un numero PARI.
         `
    } else {
        flavourText.innerHTML += `
        La somma ${finalAddition} è un numero DISPARI.
         `
    }

})