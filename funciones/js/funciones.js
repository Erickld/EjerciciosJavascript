/**Ejercicios para esta sesion
 * 
 * Declara una funcion para cada problema planteado
 * 
 * calcular el perimetro de un circulo
 * calcular el area de un rectangulo
 * calcular el cuadrado de un numero
 * calcular la conversion de grados celsius a farenheit
 * calcular el valor del voltaje dadas la resistencia y la corriente
 * calcular el volumen de una esfera
 * 
 * CONSIDERACIONES: poner en practica las mejores practicas para declarar funciones
 * Los ejercicios se entregan tanto en funciones con nombre como funciones flecha
 */
const PI = 3.141592;

// calcular el perimetro de un circulo
function calcularPerimetroCirculo(radio) {
   let perimetro = 2*PI*radio;
   return `El perimetro de un circulo de radio ${radio} cm es de ${perimetro} cm`
}

const flechaPerimetroCirculo = (radio) => `El perimetro de un circulo de radio ${radio} cm es de ${2*PI*radio} cm`;

//--------------------------------------------------------------------------------------------------------------

// calcular el area de un rectangulo
function calcularAreaRectangulo(ladoMenor, ladoMayor) {
   let area = ladoMenor*ladoMayor;
   return `El área de un rectangulo de lados ${ladoMenor}X${ladoMayor} cm es ${area} cm2`;
}

const flechaAreaRectangulo = (ladoMenor, ladoMayor) => `El área de un rectangulo de lados ${ladoMenor}X${ladoMayor} cm es ${ladoMenor*ladoMayor} cm2`;

//--------------------------------------------------------------------------------------------------------------

// calcular el cuadrado de un numero
function calcularCuadrado(numero) {
   let cuadrado = numero**2;
   return `El cuadrado del numero ${numero} es ${cuadrado}`;
}

const flechaCuadrado = (numero) => `El cuadrado del numero ${numero} es ${numero**2}`;

//--------------------------------------------------------------------------------------------------------------

// calcular la conversion de grados celsius a farenheit
function celsiusAFarenheit(gradosCelsius) {
   let gradosFarenheit = (gradosCelsius * 9/5) + 32;
   return `${gradosCelsius} °C equivalen a ${gradosFarenheit} °F`;
}

const flechaCelsiusAFarenheit = (gradosCelsius) => `${gradosCelsius} °C equivalen a ${(gradosCelsius * 9/5) + 32} °F`;

//--------------------------------------------------------------------------------------------------------------

// calcular el valor del voltaje dadas la resistencia y la corriente
function calcularVoltaje(resistencia, corriente) {
   let voltaje = resistencia*corriente;
   return `El voltaje calculado es de ${voltaje} Volts, para una resistencia de ${resistencia} ohms con corriente de ${corriente} amperes`;
}

const flechaVoltaje = (resistencia, corriente) => `El voltaje calculado es de ${resistencia*corriente} Volts, para una resistencia de ${resistencia} ohms con corriente de ${corriente} amperes`;

//--------------------------------------------------------------------------------------------------------------

// calcular el volumen de una esfera
function calcularVolumenEsfera(radio) {
   let volumen = (4/3) * (PI) * (radio**3)
   return `El volumen de una esfera con radio de ${radio} cm es de ${volumen} cm3`;
}

const flechaVolumenEsfera = (radio) => `El volumen de una esfera con radio de ${radio} cm es de ${(4/3) * (PI) * (radio**3)} cm3`;

//--------------------------------------------------------------------------------------------------------------