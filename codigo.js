// EJ1
function formatearNombre(nombre) {
if (typeof nombre !== 'string') return '';
let start = 0;
while (start < nombre.length && nombre[start] === ' ') start++;
if (start === nombre.length) return '';
let end = nombre.length - 1;
while (end >= 0 && nombre[end] === ' ') end--;
const primera = nombre[start].toUpperCase();
let resto = '';
for (let i = start + 1; i <= end; i++) {
resto += nombre[i].toLowerCase();
}
return primera + resto;
}




    function contarLetras(texto) {
        if (typeof texto !== 'string') return 0;
        let contador = 0;
        for (let i = 0; i < texto.length; i++) {
            if (texto[i] !== ' ') contador++;
        }
        return contador;
    }


    // EJ3
    function maximo(a, b, c) {
        let mayor = a;
        if (b > mayor) mayor = b;
        if (c > mayor) mayor = c;
        return mayor;
    }


    // EJ4
    function validarPassword(password) {
        if (typeof password !== 'string') return false;
        if (password.length < 8) return false;
        for (let i = 0; i < password.length; i++) {
            const ch = password[i];
            if (ch >= '0' && ch <= '9') return true;
        }
        return false;
    }

  // para mostrar en consola
    console.log('formatearNombre("JUAN") ->', formatearNombre('JUAN')); // Juan
    console.log('formatearNombre("mARIA") ->', formatearNombre('mARIA')); // Maria
    console.log('contarLetras("hola mundo") ->', contarLetras('hola mundo')); // 9
    console.log('maximo(3,9,5) ->', maximo(3,9,5)); // 9
    console.log('validarPassword("abc12345") ->', validarPassword('abc12345')); // true
    console.log('validarPassword("short1") ->', validarPassword('short1')); // false




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

const usuarios = [
{nombre:"Ana", edad:17},
{nombre:"Juan", edad:25},
{nombre:"Pedro", edad:30}
]
const soloNombres = usuarios => usuarios.map(e => e.nombre);
console.log(soloNombres(usuarios));

//-------------------EJ12-----------------------//

const mayoresA18 = usuarios => usuarios.filter(e => e.edad >= 18);
console.log(mayoresA18(usuarios))

//-------------------EJ13-----------------------//

const sumarArrays2 = unArray => unArray.reduce((a,b) => a + b, 0);
console.log(sumarArrays2(Prueba));

    // EJ14 y EJ15
    const producto = {
        nombre: 'Notebook',
        precio: 1000
    };
    const { nombre, precio } = producto;
    console.log('EJ14 - nombre ->', nombre); // Notebook
    console.log('EJ14 - precio ->', precio); // 1000
    const productoConStock = { ...producto, stock: 5 };
    console.log('EJ15 - productoConStock ->', productoConStock);


//----------Parte 6 — Problemas más reales----------//
//-------------------EJ16-----------------------//

const buscarProducto = (productos, nombre) => productos.filter(e => e.nombre === nombre);
console.log(buscarProducto(productos, "Mouse"));

//-------------------EJ17-----------------------//