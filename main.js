// Exercici 6
// Tenim un array de tasques i volem aconseguir un array que contingui únicament els noms de les tasques. 

// - Usar .forEach() per obtenir aquest array.

// - Usar .map() per obtenir aquest array.

var arrayF = [];
var tasks = [
    {
        'name': 'Start React web',
        'duration': 120
    },
    {
        'name': 'Work out',
        'duration': 60
    },
    {
        'name': 'Procrastinate on facebook',
        'duration': 240
    }
];
tasks.forEach(task => {
    arrayF.push(task.name);
    console.log(task.name);
});
console.log(arrayF);

let arrayMap = tasks.map(task => {
    return (task.name);
})
console.log(arrayMap);