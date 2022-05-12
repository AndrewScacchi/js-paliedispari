// EXERCISE 02 
/*
User choose Even or Odd.
Pc choose the remaining
User insert a number between 1 and 5
PC generate a random number in the same range
Add both number
Using a fx check if result is ODD or EVEN,
declare a winner

*/


// math random number
//  Math.floor(Math.random() * max);
  
// console.log
var userChoice = prompt("digita 'pari' o 'dispari'");
console.log(userChoice);
var userNumber = parseInt(prompt("Selezion un numero tra 1 e 5"));
console.log("You choose " + userNumber);
var pcNumber = Math.floor(Math.random() * 5 + 1 );
console.log("The pc choose " + pcNumber);
var addNumbers = pcNumber + userNumber;
console.log("The somma is " + addNumbers);

if (addNumbers % 2 == 0 ){
    console.log("la somma è pari ");
} else {
    console.log("la somma è dispari ");
}


//Let's start simple
/*
    on button addEventListener

    initial choice user always EVEN
    user select number
    (no checks FTM)
    pc select number

    Fx to check random somma modulo

*/