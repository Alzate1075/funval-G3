//Forma de poner comentarios en JS en una sola linea
/* Otra forma de poner comentarios
en jS multi-linea */

/*  console.log - LA MANERA DE MOSTRAR COSAS EN CONSOLA */

console.log("Hola mundo");

console.log("2+3");

let var1 = 12;
console.log(var1);

/* Creación de variables y Constantes */
//VAR
//VAR - NO DEBE USARSE por el scope global que tiene.

var pepito = "Hola Pepito";
console.log(pepito);

//let
let juanito = "Hola Juanito"; //valor de la variable
console.log(juanito);
juanito= "hola juanioto lokillo" //Se puede cambiar el valor de la variable Let
console.log(juanito);
juanito= 77;
console.log(juanito);

//Const
const pedrito= "hola pedrito";
console.log(pedrito);
/* pedrito="hola kevin";  NO SE PUEDE REASIGNAR UNA CONSTANTE!!!*/

/* LOWER AMEL CASE */
let apellidoPaterno; //Variable sin espacio pero se diferencia con una Mayuscula en la segunda palabra.
let apellidoMaterno;
let apellidoPaternoAbuelo;


/* TIPOS DE DATOS PRIMITIVOS */
//Tenemos 7 tipos de datos primitivos

/* STRING - TEXTO */
let nombre = "kevin"; //string o cadena de texto
let apellido = "Rodriguez Calderon"; //Se toma todos los caracteres incluyendo los espacios

/* NUMBER */
let enteros = 12; // Tipo enteros
let decimales = 45.5; //Flotantes o Decimales
let negativo = -15; // Negativos

/* BOOLEAN */
let verdadero = true; //O es verdadero
let falso =false; // o es falso

/* UNDEFINED */
let indefinida;

/* NULL */
let kevin = null;
let valor_null = null;

/* SYMBOL */
let simbolo = Symbol("numerico2");

/* BIG INT */
let numeroGrande = 21346578393930384774646787829303544573475434672443574004n; //"n" - al final hace la misma funcion que BigInt
let numeroGrande2 = BigInt(222247589243759072410751475178187185715782137372175); //BigInt para poner números grandes superiores a 64 bits de datos

