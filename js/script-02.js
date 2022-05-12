// EXERCISE 02 

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
    const choiceEven = document.getElementById("even");
    const choiceOdd = document.getElementById("odd");

    // check if radio buttons are selected
    if (!choiceEven.checked && !choiceOdd.checked){
        alert("Scommetti se il risultato sarà pari o dispari!")
    } else {

        //CHECK NUMBER RANGE ON BUTTON CLICK 
        if (userNumber < 1 || userNumber > 5 ){
            alert("Il numero inserito non è nel range richiesto!");   
        } else if (isNaN(userNumber)){
            alert("Quello non è un numero!");
        } else {
            //NOW DO THE MAJOR CODE
            
            const pcNumber =  Math.floor(Math.random() * 5 + 1 );
            // had to repeat this variable because exist only in the function (even tho was declared as a const...)
            const finalAddition = parseInt(userNumber) + parseInt(pcNumber);
        
            const result = additionCheck(userNumber, pcNumber);
            const flavourText = document.getElementById("flavour-text");

            //finally do something!
            flavourText.innerHTML = `
                Il tuo numero era ${userNumber}; <br>
                Il numero del PC era ${pcNumber}; <br>
                `
            if (result){
                flavourText.innerHTML += `
                La somma ${finalAddition} è un numero PARI. <br>
                 `
            } else {
                flavourText.innerHTML += `
                La somma ${finalAddition} è un numero DISPARI. <br>
                 `
            }

            // Final discrimination, checking on user radial choice
            if ((choiceEven.checked && result) || (choiceOdd.checked && !result)){
                flavourText.innerHTML += `
                <strong>Hai indovinato il risultato!</strong>
                `
            } else {
                flavourText.innerHTML += `
                <strong>Non hai indovinato il risultato!</strong>
                `
            }
        }
    }
})