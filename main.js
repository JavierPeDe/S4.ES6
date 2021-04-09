// Exercici 5
// Modifica la funció 'a()' per a reemplaçar la promesa per aync/await:

// function b() {
//    // tasques asíncrones , que triguen una estona..
// }

// funtion a() {
//    // Ens esperem que la funció b acabi
//    b().then() = > {
//          doMoreWork();
//    }
// }


function doMoreWork() {
    console.log('do more work')
}
async function b() {
   
    //  tasques asíncrones , que triguen una estona..
}

async function a() {
    try {
       let c = await b();
     
    }
    catch{
        console.log('Error')
    }
}

a().then(doMoreWork());