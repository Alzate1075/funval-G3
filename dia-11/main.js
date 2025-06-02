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
console.log(verdadero);
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
console.log(numeroEntero);
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
console.log(typeof numeroEntero);
console.log(typeof unDecimal);
console.log(typeof negativos);
console.log(typeof verdad);
console.log(typeof mentira);
console.log(typeof niIdea);
console.log(typeof edwin);
console.log(typeof value_raro);
console.log(typeof simboloSistema);
console.log(typeof numeroBig);

//6

/* =================================== */

/* OPERADORES ARITMETICOS */


let a = 5;
let b = 2;

/* 1 - SUMA */
let suma = a+b;
console.log(suma)

/* 2 - RESTA */
let resta = a-b;
console.log(resta);

/* 3 - MULTIPLICACION */
let multiplicacion = a*b;
console.log(multiplicacion)

/* 4 - DIVISION */
let division = a/b;
console.log(division)

/* 5 - MODULO */
let modulo = a % b;
console.log(modulo);

/* 6 - EXPONENCIAL */
let exponente = a**b;
 
/* 7 - INCREMENTO */
a++; //a=a+1
console.log(a);

/* 8 - DECREMENTO */
a--; //a=a-1
console.log(a);

/* ========================= */

/* OPERADORES DE ASIGNACION */

let var_322 = 23;
var_322 = 34;
/* de Suma */
var_322 += 10; //var_322 = var_322 + 10
/* de Resta */
var_322 -= 5; //var_322 = var_322 -5
/* de multiplicacion */
var_322 *= 2; //var_322 = var_322 *2
console.log(var_322);
/* de division */
var_322 /= 2; //var_322 = var_322 / 2

/* ======================================= */

/* OPERADORES DE COMPARACION */

//Siempre va dar un resultado Booleano

let aa = 22;
let bb = 77;

aa==bb; //El doble == compara 22 es igual a 77 entonces va a devolver VERDADER o FALSO

let resultadito = aa == bb; //FALSE o TRUE Solo compara el dato y NO el tipo de dato / es decir si el dato es a = 22 b = "22" nos dara resultado TRUE por que solo compara el dato y no el tipo de dato, si es STRING o NUMBER o etc.

console.log(resultadito);

let resultado1 = a === bb;
console.log(resultado1); //FALSE OR TRUE Compara el DATO y el TIPO DE DATO

/* COMPARADOR ESTRICTO QUE */
let resultado2 = aa > bb; // Mayor estricto que
/* Mayor o igual que */
let resultado3 = aa >= bb;


aa=60;
bb=59;

/* comparador menor estricto que */
resultado5 = aa < bb;
/* Menor o igual que */
resultado6 = aa <= bb;

/* ============================================ */

/* OPERADORES LOGICOS */
//AND &&
//OR !!
//NOT !

/* let permiso = true;
let mayorEdad = false;

let entrarDiscoteca = permiso && mayorEdad;
console.log(entrarDiscoteca);


let permisoMama = true;
let permisoPapa = false;
let mayorEdad1 = true;

let salidaCasa = permisoMama || permisoPapa;

resultado = entrarDiscoteca && salidaCasa;

console.log(resultado);
 */

/* CONCATENAR RESULTADOS */
/* 

resultado = permisoMama && mayorEdad && (permisoMama || mayorEdad);

console.log(resultado);

console.log(!mayorEdad);
console.log(salidaCasa);
console.log(entrarDiscoteca);
 */

/* EJERCICIOS */

let platita = true;
let recomendacion = true;
let bloqueos = true;
let animos = true;
let temploAbierto = true;

let salirBarrio = platita && recomendacion;

let dirigirTemplo = bloqueos || temploAbierto;

ingresarTemplo = temploAbierto && animos && recomendacion;

let salidafeliz = salirBarrio && dirigirTemplo && ingresarTemplo;

console.log(salidafeliz);

/* ============================================== */

/* OPERADOR TERNARY */

/* condition ? exprIfTrue : exprIfFalse; */

let internet = true;
let verOnepiece = true;
internet && verOnepiece ?
console.log("profe feliz") : console.log("profesor triste");

let x = 8;
let y = 6;
let z = 4;

x > y ? x > z ?
console.log("x es mayor") : console.log("z es mayor") : y > z ? console.log("y es mayor") : console.log("z es mayor");

