// Ejercicios para esta sesion

/** Ejercicio 1
 * 
 * Elabora un programa que determine si una persona tiene edad
 * suficiente para votar
 * 
 * Debe recibir como parametro la edad
 * 
 * Consideraciones: utilizar la estructura if-else
 */

function puedeVotar(edad) {
    if (edad >= 18) {
        console.log("Si puede votar");
    } else {
        console.log("No puede votar");
    }
}


/** Ejercicio 2
 * 
 * Desarrolla un programa que permita obtener el promedio de un/a alumno/a
 * recibiendo como parametro 4 calificaciones
 * 
 * Si el promedio es aprobatorio (mayor o igual a 7) imprimir aprobado
 * en el caso de que no sea un promedio aprobatorio imprimir reporobado
 * 
 * Consideraciones: utilizar la estructura if-else
 * 
 */

function alumnoAprobado(cal1, cal2, cal3, cal4) {
    const promedio = (cal1 + cal2 + cal3 + cal4) / 4;
    console.log(`Promedio: ${promedio}`)
    if (promedio >= 7) {
        console.log("Alumno aprobado");
    } else {
        console.log("Alumno reprobado");
    }
}


/** Ejercicio 3
 * 
 * Desarrolla un programa que evalue si un numero es primo
 * 
 * Debe recibir como parametro un numero aleatorio
 * 
 * Consideraciones: utilizar la estructura if-else
 */

function esPrimo (numero) {

    if (numero === 1 || numero <= 0) {
        console.log(`El Numero ${numero} no es un numero primo.`)
        return;
    }

    for (let divisor = 2; divisor < numero; divisor++) {

        if (numero % divisor == 0) {
            console.log(`El Numero ${numero} no es primo, ya que el numero ${divisor} es su divisor`)
            return;
        }

    }

    console.log(`El Numero ${numero} es un numero primo.`)
}


/** Ejercicio 4
 * 
 * Desarrolla un programa que evalue si un numero es divisible
 * entre 7 y 8
 * 
 * Debe recibir como parametro un numero, cual sea
 * 
 * Si se cumple, imprimir verdadero
 * Si no, imprimir falso
 * 
 * 
 * Consideracion - Utilizar la estructura if-else
 * Casos de prueba: 56, 7, 8, 0, 224, 73
 */


function esDivisible78 (numero) {

    if (numero%7 === 0 && numero%8 === 0) {
        console.log(true, `El numero ${numero} si es divisible entre 7 y 8`);
    } else {
        console.log(false, `El numero ${numero} no es divisible entre 7 y 8` );
    }

}


/** Ejercicio 5
 * 
 * Desarrolla un programa que evalue si un numero es divisible
 * entre 4 o 9
 * 
 * Debe recibir como parametro un numero aleatorio
 * 
 * Si se cumple, imprimir verdadero
 * Si no, imprimir falso
 * 
 * Consideracion - Utilizar la estructura if-else
 */

function esDivisible49 (numero) {

    if (numero%4 === 0 || numero%9 === 0) {
        console.log(true, `El numero ${numero} si es divisible entre 4 o 9`);
    } else {
        console.log(false, `El numero ${numero} no es divisible entre 4 o 9` );
    }

}


/** Ejercicio 6
 * 
 * Crear un programa que funcione como una calculadora simple
 * que realice las operaciones aritmeticas basicas
 * 
 *  -suma
 *  -resta
 *  -multiplicacion
 *  -division
 * 
 * Debe recibir como parametros la operacion a realizar y dos numeros
 * Dependiendo de la opcion que se indique, realizar la operacion correspondiente
 * 
 * 1. suma
 * 2. resta
 * 3. multiplicacion
 * 4. division
 * 
 * Consideraciones: utilizar la estructura switch
 */

function calculadora(operacion, numeroA, numeroB) {

    if (isNaN(numeroA) || isNaN(numeroB)) {
        return console.log(`Numeros ingresados inválidos`);
    }

    switch (operacion) {
        case 1:
            console.log(`El resultado de la suma es ${numeroA + numeroB}`);
            break;
        case 2:
            console.log(`El resultado de la resta es ${numeroA - numeroB}`);
            break;
        case 3:
            console.log(`El resultado de la multiplicación es ${numeroA * numeroB}`);
            break;
        case 4:
            console.log(`El resultado de la división es ${numeroA / numeroB}`);
            break;
        default:
            console.log(`Operación ingresada inválida`);
            break;
    }

}


/** Ejercicio 7
 * 
 * Realizar un programa que reciba como parametro una categoria de peliculas
 * 
 * -accion
 * -drama
 * -comedia
 * -romance
 * -suspenso
 * -terror
 * 
 * Segun sea la categoria que se reciba, imprimir una recomendacion de pelicula
 * de acuerdo al parametro recibido
 * 
 * Consideraciones: utilizar la estructura switch
 */

function peliculas (genero) {

    genero = genero.toUpperCase();
    genero = genero.toLowerCase();

    switch (genero) {
        case "accion":
            console.log(`Película de acción recomendada: John Wick (2014)`);
            break;
        case "drama":
            console.log(`Película de drama recomendada: El Pianista (2003)`);
            break;
        case "comedia":
            console.log(`Película de comedia recomendada: Super Cool (2007)`);
            break;
        case "romance":
            console.log(`Película de romance recomendada: Lalaland (2016)`);
            break;
        case "suspenso":
            console.log(`Película de suspenso recomendada: Oldboy (2003)`);
            break;
        case "terror":
            console.log(`Película de terror recomendada: Exorcista (1973)`);
            break;
        default:
            console.log(`Género de película no encontrado`);
            break;
    }

}


/** Ejercicio 8
 * 
 * Crear una interfaz de un cajero ATM
 * 
 * Debe recibirse como parametro alguna de las siguientes opciones
 * 
 * 1. Retirar dinero
 * 2. Transferencia
 * 3. Deposito
 * 4. Pago de servicios
 * 
 * Segun sea la opcion indicada, imprimir en pantalla la accion a realizar
 */

function cajeroATM (opcion) {

    switch (opcion) {
        case 1:
            console.log(`Ocpicón seleccionada: Retirar dinero`);
            break;
        case 2:
            console.log(`Ocpicón seleccionada: Transferencia`);
            break;
        case 3:
            console.log(`Ocpicón seleccionada: Deposito`);
            break;
        case 4:
            console.log(`Ocpicón seleccionada: Pago de servicios`);
            break;
        default:
            console.log(`Opción no encontrada en el cajero`);
            break;
    }

}


/** Ejercicio 9
 * 
 * Escribir en codigo un programa conversor de divisas
 * 
 * Debe recibir como parametro una cantidad en pesos mexicanos y
 * Segun sea la opcion que se indique, realizar la conversion correspondiente
 * 
 * 1. A dolares estadounidenses
 * 2. A euros 
 * 3. A yenes japoneses
 * 4. A libra esterlina
 * 5. A franco suizo
 * 
 */

function conversionDivisas (monto, opcion) {
    if (isNaN(monto) || isNaN(opcion)) {
        return console.log(`EL monto ingresado o la opción no son valores numéricos`);
    }

    switch (opcion) {
        case 1:
            console.log(`$${monto} MXN equivale a $${monto*0.059} USD`);
            break;
        case 2:
            console.log(`$${monto} MXN equivale a $${monto*0.055} € (EUR)`);
            break;
        case 3:
            console.log(`$${monto} MXN equivale a $${monto*8.66} ¥ (YEN)`);
            break;
        case 4:
            console.log(`$${monto} MXN equivale a $${monto*0.047} GBP (Libra Esterlina)`);
            break;
        case 5:
            console.log(`$${monto} MXN equivale a $${monto*0.053} CHF (Franco Suizo)`);
            break;
        default:
            console.log(`Opción no encontrada para la conversión de divisas`);
            break;
    }

}

/** Ejercicio 10
 * 
 * Realizar un programa que calcule un descuento del 10% a un producto si se ingresa el codigo
 * de descuento correcto
 * 
 * Debe recibir como parametros el precio del producto
 * y el codigo de descuento
 * 
 * Sugerencia de codigo de descuento DESCUENTO10
 * 
 * Consideracion: utilizar la estructura if-else
 * 
 */
function descuento (precioProducto, codigo) {
    if (isNaN(precioProducto))  {
        return console.log(`Precio del producto inválido`);
    }

    codigo = codigo.toLowerCase();
    codigo = codigo.toUpperCase();

    if (codigo === "DESCUENTO10") {
        console.log(`Se aplica el 10% se descuento al producto, precio original: $${precioProducto} MXN. Precio con descuento: $${precioProducto*0.9} MXN.`);
    } else {
        console.log(`Cupón de descuento inválido`);
    }

}