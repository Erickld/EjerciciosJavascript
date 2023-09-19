/* Ejercicio para esta sesion
 
    Declarar 10 variables de cada tipo de dato sin tomar en cuenta objetos, arrays y null
    Pueden variar entre las palabras reservadas var, let y const
    -number
    -string
    -boolean
 
 */
var nombreUsuario = "Erick";
var apellidoPaterno = "Luciano";
var apellidoMaterno = "Duarte";
var edadUsuarioString = "30";
var empresa = "Generation"
var email = "usuario@gmail.com"
let estado = "Guerrero"
let ciudad = "Acapulco"
let colonia = "Bugambilias"
let calle = "Zapata"

var diaNacimiento = 10;
var mesNacimiento = 6;
var yearNacimiento = 2000;
var estatura = 1.75;
var peso = 80;
var numeroExterior = 7;
var numeroInterior = 12;
var promedio = 10;
const GRAVEDAD = 9.81;
const NUMERO_PI = 3.1416;

var esMexicano = true;
var esEstudiante = true;
var esMayorEdad = true;
var esAdmin = true;
var esMaestro = false;
var esMedico = false;
var esCasado = false;
var esIngeniero = true;
var esProgramador = true;
var esBilingue = false;

/*
  Declarar variables numericas y realizar las operaciones aritmeticas basicas
    -suma
    -resta
    -multiplicacion
    -division
 */

var numeroA = 10;
var numeroB = 0.5;

let suma = numeroA + numeroB;
let resta = numeroA - numeroB;
let multiplicacion = numeroA * numeroB;
let division = numeroA / numeroB;

console.log(numeroA, numeroB);
console.log(suma, resta, multiplicacion, division);

/*
    Declarar variables que concatenen cadenas de texto
    -5 mensajes diferentes en pantalla, sin limite de palabras.
 */

let cadenaUno = nombreUsuario + " " + apellidoPaterno + " " + apellidoMaterno;
let cadenaDos = "Soy originario de " + ciudad + ", " + estado;
let cadenaTres = "Mi correro es: " + email;
let cadenaCuatro = "Vivo en la colonia: " + colonia;
let cadenaCinco = "Mi fecha de nacimiento es: " + diaNacimiento + "/" + mesNacimiento + "/" + yearNacimiento;

console.log(cadenaUno);
console.log(cadenaDos);
console.log(cadenaTres);
console.log(cadenaCuatro);
console.log(cadenaCinco);

/* Declarar 5 variables y convertirlas a otro tipo de dato */

//number a string
let yearNacimientoString = String(yearNacimiento);
//number a string
const NUMERO_PI_STRING = String(NUMERO_PI);
//string a boolean
var nombreUsuarioBoolean = Boolean(nombreUsuario)
//string a number
var edadUsuarioNumber = Number(edadUsuarioString)
//Number a boolean
var promedioBoolean = Boolean(promedio)

console.log(yearNacimientoString);
console.log(NUMERO_PI_STRING);
console.log(nombreUsuarioBoolean);
console.log(edadUsuarioNumber);
console.log(promedioBoolean);
