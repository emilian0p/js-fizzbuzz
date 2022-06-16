/*
fizz 3 buzz 5 fizzbuzz 15
-imposto delle variabili
-imposto un ciclo for con un index da 1 a 100
-imposto degli if nel ciclo per visualizzare fizz buzz e fizzbuzz
-stampo in console
 */
const numberRow = document.getElementById('number');

for (let index = 1; index <= 100 ; index++) {

    const numberRowBox = document.createElement('div');

    numberRowBox.classList.add('box','col-2');

    numberRowBox.innerHTML = index;

    numberRow.append(numberRowBox);
}