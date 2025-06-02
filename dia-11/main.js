//Forma de poner comentarios en JS en una sola linea
/* Otra forma de poner comentarios
en jS multi-linea */

/*  console.log - LA MANERA DE MOSTRAR COSAS EN CONSOLA */

console.log("Hola Bogota");

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

console.log(typeof nombre);
console.log(enteros);
console.log(johan);
console.log(simbolo);

/* EJERCICIOS EN CLASE */

// 1. Escribe un comentario en una línea

// 2. Escribe un comentario en varias líneas

// 3. Declara variables con valores asociados a todos los datos de tipo primitivos

// 4. Imprime por consola el valor de todas las variables

// 5. Imprime por consola el tipo de todas las variables

// 6. A continuación, modifica los valores de las variables por otros del mismo tipo

// 7. A continuación, modifica los valores de las variables por otros de distinto tipo

// 8. Declara constantes con valores asociados a todos los tipos de datos primitivos

// 9. A continuación, modifica los valores de las constantes

// 10. Comenta las líneas que produzcan algún tipo de error al ejecutarse


//1 - Este es el primer punto

/* 2 -  Este es 
el segundo
punto */

//3
let miNombre = "Edwin"; //string
let miApellido = "Alzate"; //string
let numeroEntero = 6; // Tipo enteros
let unDecimal = 35.5; //Flotantes o Decimales
let negativos = -1; // Negativos
let verdad = true; //O es verdadero
let mentira = false; // o es falso
let niIdea; //indefinido
let edwin = null;
let value_raro = null;
let simboloSistema = Symbol("numerico8");
let numeroBig = 21346578393930384774646787829303544573475434672443574004n; //"n" - al final hace la misma funcion que BigInt
let numeroBig2 = BigInt(222247589243759072410751475178187185715782137372175); //BigInt

//4
console.log(miNombre);
console.log(miApellido);
console.log(numeroEnterontero);
console.log(unDecimal);
console.log(negativos);
console.log(verdad);
console.log(mentira);
console.log(niIdea)
console.log(edwin)
console.log(value_raro)
console.log(simboloSistema)
console.log(numeroBig)

//5
console.log(typeof miNombre);
console.log(typeof miApellido);
console.log(typeof numeroEnterontero);
console.log(typeof unDecimal);
console.log(typeof negativos);
console.log(typeof verdad);
console.log(typeof mentira);
console.log(typeof miNombre);
console.log(typeof miNombre);
console.log(typeof miNombre);
console.log(typeof miNombre);
console.log(typeof miNombre);
