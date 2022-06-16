/*
fizz 3 buzz 5 fizzbuzz 15
-imposto le variabili che mi servono
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
/*     
    let sommaTre = 3;

    let sommaCinque = 5;
 */
    if (index % 3 == 0) {
        console.log('fizz')
    } else if (index % 5 == 0) {
        console.log('buzz')
    } if (index % 15 == 0) {
        console.log('fizzbuzz')
    } else {
        console.log(index)
    }
   

}