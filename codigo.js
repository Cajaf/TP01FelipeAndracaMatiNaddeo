
//-------------------ARRAYS-----------------------//
//-------------------EJ05-----------------------//

const Prueba = [2,4,3,5]

const sumarArrays = unArray => {
    let total = 0;
    unArray.forEach(element => {
        total += element;
    });
    return total;
}
console.log(sumarArrays(Prueba));

//-------------------EJ06-----------------------//

const mayorNum = unArray =>{
const arrayOrdenado = unArray.sort((a, b) => b - a);
return unArray[0]
}
console.log(mayorNum(Prueba))

//-------------------EJ07-----------------------//

const obtenerPares = unArray =>{
const pares = unArray.filter(e =>e % 2 === 0);
return pares;
}
console.log(obtenerPares(Prueba));


//-------------------OBJETOS-----------------------//
//-------------------EJ08-----------------------//

