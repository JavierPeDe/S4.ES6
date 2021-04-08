//Exercici 4
// Crear una funció que accepti un string i retornada aquest string revertit. 
// Nota: Usar funció fletxa (arrow functions), l'operador de prograpación (spread operator) y el mètode .reverse()
strProva= 'Bon dia, tot bé?';

const revertit = (rev)=> [...rev].reverse().join(''); 

console.log(revertit(strProva))