/*Arrow Functions.
Nueva forma de definir funciones anonimas que sean expresadas.
    -Estas funciones pueden ser escritas en una sola línea de código.
    -No es necesario escribir la palabra reservada function.
    -No es necesario escribir la palabra reservada return.
    -No necesitas escribir las llaves
*/
console.log("--------------------FUNCIONES FLECHA---------------------------------")
//Ejemplo funcion expresada

console.log("-----------Ejemplo función expresada----------------")

const saludar = function () {
    return "Hola!"
}
console.log(saludar())

/*Arrow functions
Su sintaxis es la siguiente:
    const nombreFuncion=(parametros)=>{
        //código función
    }
Cuando la función es de una linea se pueden omitir los corchetes
    const nombreFuncion=()=> //código función
*/

console.log("-----------Ejemplos arrow functions----------------")

const despedir = () => {
    console.log("Adios!")
}
despedir();

const recibir = () => console.log("Recibido!");
recibir();

//Parametros dentro de los parentesis o se pueden dejar sin los parentesis si es un solo parametro

const bienvenida = (nombre) => console.log(`Bienvenido(a) ${nombre}`);
bienvenida("Luna");

const despedida = nombre => console.log(`Hasta luego ${nombre}`);
despedida("Luna");

//Tambien se evita poner return cuando es solo una linea
const sumar = (a, b) => a + b;
console.log(sumar(8, 9));
