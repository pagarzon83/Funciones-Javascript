//funcion declarada
console.log("---------------  Funcion Declarada  ---------------")
{
    function calcularPropina(totalCuenta, porcentajePropina) {
        let propina = totalCuenta * porcentajePropina / 100;
        return propina;
    }

    // Ejemplo de uso
    let totalFactura = 100000;
    let porcentajePropina = 20;
    let propina = calcularPropina(totalFactura, porcentajePropina);
    console.log(`Para una cuenta de $${totalFactura}cop y una propina del ${porcentajePropina}%, 
la propina a pagar es de $${propina} cop.`);
}
//funcion expresada
console.log("---------------  Funcion Expresada  ---------------")
{
    let calcularPropina = function (totalCuenta, porcentajePropina) {
        return totalCuenta * porcentajePropina / 100;
    }

    let totalFactura = 100000;
    let porcentajePropina = 20;
    let propina = calcularPropina(totalFactura, porcentajePropina);
    console.log(`Para una cuenta de $${totalFactura}cop y una propina del ${porcentajePropina}%, 
la propina a pagar es de $${propina} cop.`);
}
//funcion flecha
console.log("---------------  Funcion Flecha  ---------------")
{
    let calcularPropina = (totalCuenta, porcentajePropina) => {
        return totalCuenta * porcentajePropina / 100;
    }
    let totalFactura = 100000;
    let porcentajePropina = 20;
    let propina = calcularPropina(totalFactura, porcentajePropina);
    console.log(`Para una cuenta de $${totalFactura}cop y una propina del ${porcentajePropina}%, 
la propina a pagar es de $${propina} cop.`);
}

//Ahora Agregemos esas funciones a otra funcion
//funcion declarada
console.log("---------------  Funcion Declarada Utilizando otra funcion declarada  ---------------")
{
    function calcularPropina(totalCuenta, porcentajePropina) {
        let propina = totalCuenta * porcentajePropina / 100;
        console.log(`propina: $${propina} cop.`);
        return propina;
    }
    function calcularTotal(totalCuenta, porcentajePropina) {
        /*tenemos que llamar la funcion pasandole el parametro de la funcion calcularTotal*/
        let total = totalCuenta + calcularPropina(totalCuenta, porcentajePropina);
        return total;
    }
    let totalFactura = 100000;
    let porcentajePropina = 20;
    console.log(`Cuenta: $${totalFactura} cop`);
    /*Como es una funcion declarada, esta no se asigna a ningun valor por tanto, tenemos que pasar el valor del porcentaje 
    para que pueda llamar a la funcion calcularPropina */
    // let total = calcularTotal(totalFactura, calcularPropina(totalFactura, porcentajePropina)) //genera error ya que espera una variable, no una funcion
    let total = calcularTotal(totalFactura, porcentajePropina);
    console.log(`El total a pagar es de: $${total} cop`);
}
console.log("---------------  Funcion Expresada Utilizando otra funcion expresada  ---------------")
//funcion expresada
{
    let calcularPropina = function (totalCuenta, porcentajePropina) {
        let propina = totalCuenta * porcentajePropina / 100;
        console.log(`propina: $${propina} cop.`);
        return propina
    }
    let calcularTotal = function (totalCuenta, calcularPropina) {
        //recibe la funcion calcularPropina desde una variable
        return totalCuenta + calcularPropina;
    }
    let totalFactura = 100000;
    let porcentajePropina = 20;
    console.log(`Cuenta: $${totalFactura} cop`);
    /*como se guarda en una variable, esta puede ser utilizada en la otra funcion, 
    sin necesidad de que calcularTotal sepa el valor del porcentaje*/
    let total = calcularTotal(totalFactura, calcularPropina(totalFactura, porcentajePropina))
    console.log(`El total a pagar es de: $${total} cop`);
}
//funcion flecha
console.log("---------------  Funcion Flecha Utilizando otra funcion Flecha  ---------------")
{
    let calcularTotal = (totalCuenta, porcentajePropina) => {
        let calcularPropina = () => {
            let propina = totalCuenta * porcentajePropina / 100;
            console.log(`propina: $${propina} cop.`);
            return propina
        }
        return totalCuenta + calcularPropina();
    }
    let totalFactura = 100000;
    let porcentajePropina = 20;
    console.log(`Cuenta: $${totalFactura} cop`);
    let total = calcularTotal(totalFactura, porcentajePropina);
    // let total = calcularPropina(); // aunque puede ser utilizada, no se puede enviar parametros
    console.log(`El total a pagar es de: $${total} cop`);
}
console.log("---------------  EJEMPLO CON TODAS LAS FUNCIONES  ---------------")
{

    function pedirDatos(totalFactura, porcentajePropina) { //funcion declarada
        let calcularPropina = () => {//funcion flecha 
            return totalFactura * porcentajePropina / 100;
        }
        let calcularTotal = function () {//funcion expresada
            return totalFactura + calcularPropina();
        }
        let mostrarCuenta = () => { //funcion flecha
            console.log(`Cuenta: ${totalFactura}`)
            console.log(`Propina: ${calcularPropina()}`)
            console.log(`Total: ${calcularTotal()}`)
        }
        return mostrarCuenta()
    }
    console.log("****Resumen de su transaccion****")
    pedirDatos(100000, 20)
}


{
    console.log("---ANTES---")
    pruebaDeclarada()
    // pruebaExpresada()// error,  primero debe ser declara antes de usarla
    //pruebaFlecha()// error,  primero debe ser declara antes de usarla
    function pruebaDeclarada() {
        console.log("llegue desde una funcion declarada")
    }
    let pruebaExpresada = function () {
        console.log("llegue desde una funcion expresada")
    }
    let pruebaFlecha = () => { console.log("llegue desde una flecha") }
    console.log("---DESPUES---")
    pruebaDeclarada()
    pruebaExpresada()
    pruebaFlecha()
    console.log("---REASIGNAR---")
    /* podemos asignar la funcion declarada a una variable pero no podemos volverla a declarar*/
    let variableDeclarada1 = pruebaDeclarada();
    //let pruebaDeclarada = function () { console.log("llegue desde una funcion reasiganda") } //error
    pruebaExpresada = function () { console.log("llegue desde una funcion expresada reasiganda") }
    pruebaExpresada()
}