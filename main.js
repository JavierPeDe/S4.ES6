// Exercici 7 Nivell 2
// Realitzar un programa en ES6, amb al menys una funció.
// Aquest programa demana a l'usuari dos nombres de l'1 a l'10 (con promp es suficient). 
// Un cop introduïts, es mostra per consola la taula de multiplicar del número 1 que va fins al número 2.

// Per exemple, si l'usuari introdueix 3 i 5:

// 3 X 1 = 3
// 3 X 2 = 6
// 3 X 3 = 9
// 3 X 4 = 12
// 3 X 5 = 15

let num1 = prompt('Introdueix el primer numero:');
let num2 = prompt('Introdueix el segon numero:');

const taulaMultiplicar = (num1, num2) => {
    let resultat = '';

    for (let i = 1; i <= num2; i++) {
        resultat += `${num1} X ${i} = ${num1 * i} <br>`
    }
    document.getElementById("resultat2").innerHTML = resultat;
}
taulaMultiplicar(num1, num2);