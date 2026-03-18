
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
const usuario = {
 nombre: "Ana",
 edad: 20,
 activo: false
}
const descripcionUsuario = usuario => console.log(`${usuario.nombre} tiene ${usuario.edad} años`);
descripcionUsuario(usuario);

//-------------------EJ09-----------------------//

const activarUsuario = usuario => usuario.activo = true;
activarUsuario(usuario);
console.log(usuario.activo);

//-------------------EJ10-----------------------//

const productos = [
{nombre:"Mouse", precio:10},
{nombre:"Teclado", precio:25},
{nombre:"Monitor", precio:200}
]

const precioTotal = productos =>{
    let total = 0;
    productos.forEach(element =>{
        total += element.precio;
    })
    return total;
}
console.log(precioTotal(productos));


//--------------Parte 4 — ES6-----------------//
//-------------------EJ11-----------------------//