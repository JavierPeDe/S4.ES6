//Exercici 9 (Nivel-3)
//  Aquest exercici tracta de crear un cercador. Donada una llista de noms, a l'introduir un nom al cercador només s'han de mostrar aquells que coincideixin.
// Seria desitjable que vagi filtrant conforme es va omplint el nom. També tenir en compte maquetar la solució final perquè tingui bon aspecte.

// Code snippet:

// <input type="text" id="myInput" onkeyup="filterNames()" placeholder="Buscar nom.." title="Buscar nom">

// <ul id="myUL">
//   <li><a href="#">Albert</a></li>
//   <li><a href="#">Ismael</a></li>
//   <li><a href="#">Luis</a></li>
//   <li><a href="#">Rubén</a></li>
//   <li><a href="#">Jonatan</a></li>
//   <li><a href="#">Jake</a></li>
//   <li><a href="#">Jose</a></li>
// </ul>

var lista = [] //guardamos la lista original
for (const nombres of document.querySelectorAll("a")) {
  lista.push(nombres.innerHTML);
}
var listaTemporal = [...lista];
function filterNames(event) {
  let input = event.value.toLowerCase();
  //Devuelve de la lista solamente las coincidencias a listaTemporal
  listaTemporal = lista.filter(function (n) {
    return n.toLowerCase().indexOf(input) > -1;
  });

  console.log(listaTemporal); //iformativo

  var myList = document.getElementById('myUL');
  myList.innerHTML = ''; //Borramos la lista de HTML y la volvemos a rellenar con las coincidencias en cada evento.
  for (let newName of listaTemporal) {
    var itemLi = document.createElement('li');
    var a = document.createElement('a');
    a.textContent = newName;
    a.setAttribute('href', '#');
    itemLi.appendChild(a);
    document.getElementById('myUL').appendChild(itemLi);
  }
}