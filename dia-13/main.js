/* ITERACIONES  */

/* let cantidadHomeros = false;
let numero = 1;
while (cantidadHomeros) {
  console.log(`homero numero ` + numero);
  numero++;
  if (numero == 6) {
    break;
  }
}
console.log("error acabas de salir del bucle"); */

/* DO while */

/* let numeroKevin = 8;
do {
  console.log("kevin numero " + numeroKevin);
  numeroKevin++;
} while (numeroKevin < 5); */
/* validar datos */

/* let condicionDo = true;
do {
  let username = prompt("ingresa tu nombre de usuario");
  let password = parseInt(prompt("ingresa tu contraseña"));
  if (username === "kevin123" && parseInt(password) === 123456) {
    condicionDo = false;
  } else {
    alert("ingresa datos correctos x favor");
  }
} while (condicionDo); */

/* For */

/* for (let i = 0; i <= 5; i++) {
  console.log("este mensaje se va imprimir " + i);
} */

// 2,4,6,8,10,12,14

/* realizar un programa q pida un numero x y mostrar en pantalla la cantidad x de elemntos de la serie de los numeros pares */

/*  x=4
    2,4,6,8
    x=2
    2,4
    x=6
    2,4,6,8,10,12
*/

/* let numeroX = parseInt(prompt("ingresa un numero x favor"));
let pares = 2;
for (let j = 1; j <= numeroX; j++) {
  console.log(pares);
  pares += 2;
} */

/* generar los x terminos de la serie de los numeros multiplis de 5

    x= 3
    5,10,15

    x=5
    5,10,15,20,25
*/

/* let numeroX = parseInt(prompt("ingresa un numero x favor"));
let pares = 5;
for (let j = 1; j <= numeroX; j++) {
  console.log(pares);
  pares += 5;
} */


/* 
    quiero q realicen una calculadora de exponentes sin utilizar **
    piden 2 numeros al usuario 1ro sera el q deberan multiplicar reiteradas veces>
    y el 2do sera la cantidad de veces q sera iterado

    5**2= 5*5=25
    2**3= 2*2*2=8
*/

// Calculadora de exponentes sin usar **

/* let numeroBase = parseInt(prompt("Ingrese el número base:"));
let exponente = parseInt(prompt("Ingrese el exponente (número de veces a multiplicar):"));
let resultado = numeroBase;

for (let j = 1; j <= exponente; j++){
    resultado = resultado * numeroBase;
    console.log(resultado);
}
 */

/* LA SERIE FIBONACI
LA SUMA DE LOS 2 ELEMENTOS ANTERIORES
1, 1, 2, 3,5,8,13,21 

LOS FACTORIALES DE UN NÚMERO
5! = 1*2*3*4*5 */

/* =============================================== */

// FUNCIONES

/* DECLARAR UN AFUNCIÓN */

function duplicar(numero) {
    let resultado = 0;
    resultado = numero * 2;
    return resultado;
}

/* El codigo sera reutilizable?
el codigo maneja su propia logica?
Que tanto alcance tendra mi funcion */

// COMO LLAMAR UNA FUNCION

console.log(duplicar(5));
console.log(duplicar(33));
console.log(duplicar(77));

/* Invertir un string y eliminar los espacios "Edwin Alzate " "etazlA niwdE" 
funcion para eliminar los espacios de un string
funcion para invertir los elemento de un string
*/

function eliminaEspacios(cadena){
    let resultado= " ";
    for (let i = 0; i < cadena.length; i++) {
        if (cadena[i] !== " "){    /*!== esto significa Diferente*/
            resultado = resultado + cadena[i];
        }
    }
    return resultado;
}

console.log(eliminaEspacios("k e v i n r o d r i g u e z"));


function invertirTexto(texto) {
    let invertido = "";
    for (let i = texto.length - 1; i >= 0; i--) {
        invertido += texto[i];
    }
    return invertido;
}
let original = "Hola";
let resultado = invertirTexto(original);
console.log(resultado);  // Resultado: "aloH"

/* =================================== */

/* EJERCICIOS DE REPASO */

/* Ejericicos con while */
//1
let numeroInicial = 1;

while (numeroInicial <= 10){
    console.log(numeroInicial);
    numeroInicial++;
}
//2
numeroInicial = 1;
resultado = 0;

while(numeroInicial <= 5){
    resultado = resultado + numeroInicial;
    numeroInicial++;
    console.log(resultado);
}

/* Ejericicos con Do while */

//1
do {
    let datoUsuario = parseInt(prompt("Ingresa un número"));
    if (datoUsuario === 0) {
        break; //Se puede usar SWICH / BREAK/ FALSE para romper el ciclo.
    } 
} while (true);
alert("Lograste salir de la Matrix");
