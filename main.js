// Exercici 8

// Modificar l'exercici anterior perquè els números s'introdueixin a través d'un formulari (amb validacions), 
// i que la taula de multiplicar la mostri en una taula HTML

// let num1 = prompt('Introdueix el primer numero:');
// let num2 = prompt('Introdueix el segon numero:');

function validacion() {
    let error = 0;
    var inputNum1 = document.forms["form"]["inputN1"];
    var inputNum2 = document.forms["form"]["inputN2"];

    form.classList.remove("is-invalid");
    form.classList.remove("is-valid");


    //Validacio Primer numero
    if (inputNum1.value == "") {
        inputNum1.classList.add("is-invalid");
        document.getElementById("eN1").textContent = "Introdueix un número";
        error++;
    }
    else if (parseInt(inputNum1.value) < 1 || parseInt(inputNum1.value) >= 10) {
        inputNum1.classList.add("is-invalid");
        document.getElementById("eN1").textContent = "Prova amb un número del 1-10";
        error++;
    }
    else {
        inputNum1.classList.add("is-valid");
        document.getElementById("vN1").textContent = "Número aceptat";
    }
    //Validacio Segon numero
    if (inputNum2.value == "") {
        inputNum2.classList.add("is-invalid");
        document.getElementById("eN2").textContent = "Introdueix un número";
        error++;
    }
    else if (parseInt(inputNum2.value) < 1 || parseInt(inputNum2.value) > 10) {
        inputNum2.classList.add("is-invalid");
        document.getElementById("eN2").textContent = "Prova amb un número del 1-10";
        error++;
    }
    else {
        inputNum2.classList.add("is-valid");
        document.getElementById("vN2").textContent = "Número aceptat";
    }
    if (error == 0) { taulaMultiplicar(inputNum1.value, inputNum2.value) } //Cridem la funcio taulamultiplicar si no hi ha errors
    // return (error == 0); 
}

const taulaMultiplicar = (num1, num2) => {
    let resultat = '';

    for (let i = 1; i <= num2; i++) {
        resultat += `${num1} X ${i} = ${num1 * i} <br>`
    }
    document.getElementById("resultat_P").innerHTML = resultat;
}
form.addEventListener('blur', (event) => {
    console.log(event);
    if (event.target.value != '') event.target.classList.remove('is-invalid');
    if (event.target.value != '') event.target.classList.remove('is-valid');
}, true);