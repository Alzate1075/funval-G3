/* STRINGS */

// let nombre2 = "kevin";
// let apellido = `kevin
// Rodriguez`;

/* TEMPLATE LITERALS */

// let apellido = `${nombre2} Rodriguez`;

/* CONCATENAR */

// console.log(nombre + "Rodriguez");
// console.log(apellido);

/* ======================================== */

/* METODOS Y FUNCIONES BASICAS DE LOS STRINGS */

let nombre = "juan";
let apellido = "rodriguez"; // Necesario declarar la variable para evitar error

console.log(nombre.length); /* cantidad de caracteres del string */
console.log(apellido.length);

console.log(
  nombre.indexOf("T")
); /* devuelve la posición donde inicia el sub-string, si no existe da -1 */

console.log(nombre.toLowerCase()); /* convierte a minúsculas */
console.log(nombre.toUpperCase()); /* convierte a MAYÚSCULAS */

console.log(nombre.includes("tho")); /* revisa si un texto existe dentro del string */

console.log(
  nombre.slice(2, 4)
); /* crea un sub-string sin alterar el original */

console.log(nombre[3]); /* trae el caracter en esa posición */

/* ======================================== */

/* CONDICIONALES */

// IF ELSE

// if (condicion) {
// Código si la condición es true
// } else {
// Código si la condición es false
// }

// IF ELSE IF

// if (condicion) {
// Código si la primera condición es true
// } else if (condicion2) {
// Código si la segunda condición es true
// } else {
// Código si ninguna condición es true
// }

let permiso = true;
let edadDisco = 0;

// IF
// if (2 > 4 && 2 > 1) {
//   console.log("Tengo permiso");
// }

// IF ELSE
// Falsos: false, 0, null, undefined, "", NaN — todo lo demás es true

if (edadDisco >= 18) {
  console.log("Tengo permiso");
} else if (edadDisco >= 16) {
  console.log("También tiene permiso");
} else {
  console.log("No puedes");
}

/* EJERCICIOS STRINGS */

// 1. Concatena dos cadenas de texto
// 2. Muestra la longitud de una cadena de texto
// 3. Muestra el primer y último carácter de un string
// 4. Convierte a mayúsculas y minúsculas un string
// 5. Crea una cadena de texto en varias líneas
// 8. Comprueba si una cadena contiene una palabra
// 9. Comprueba si dos strings son iguales
// 10. Comprueba si dos strings tienen la misma longitud

// STRINGS

let nombre1 = "edwin";
apellido = "alzate";
let miembro = true;
let activo = true;

// Concatenar
let nombreCompleto = nombre1 + " " + apellido;

// Métodos de strings
console.log(nombre1.length); // Devuelve la cantidad de caracteres que tiene el string 'nombre1'
console.log(apellido.length); // Devuelve la cantidad de caracteres del string 'apellido'

console.log(nombre1.indexOf("T")); // Busca la posición de la letra "T" en el string; si no la encuentra, devuelve -1

console.log(nombre1.toLowerCase()); // Convierte todos los caracteres del string a minúsculas
console.log(nombre1.toUpperCase()); // Convierte todos los caracteres del string a MAYÚSCULAS

console.log(nombre1.includes("tho")); // Devuelve true si el string contiene "tho", y false si no lo contiene

console.log(nombre1.slice(2, 4)); // Extrae una parte del string desde el índice 2 (inclusive) hasta el 4 (exclusivo)

console.log(nombre1[3]); // Muestra el carácter que está en la posición 3 del string (contando desde 0)


// Condicionales
// let edadDisco = 0; // Ya declarada antes

if (edadDisco >= 18) {
  console.log("Tengo permiso");
} else if (edadDisco >= 16) {
  console.log("También tiene permiso");
} else {
  console.log("No puedes");
}

// Ejercicios strings
console.log(nombreCompleto); // 1. Concatenar
console.log(nombre.length); // 2. Longitud
console.log(nombre[0], nombre[nombre.length - 1]); // 3. Primer y último carácter
console.log(nombre.toUpperCase(), nombre.toLowerCase()); // 4. Mayúsculas y minúsculas
let edad = `39\naños`; // 5. Varias líneas
console.log(nombreCompleto.includes("alzate")); // 8. Contiene palabra
console.log(nombre === "edwin"); // 9. Comparar igualdad
console.log(nombre.length === nombre1.length); // 10. Misma longitud

// SWITCH CASE
let dia = 3;

switch (dia) {
  case 1:
    console.log("Lunes");
    break;
  case 2:
    console.log("Martes");
    break;
  case 3:
    console.log("Miércoles");
    break;
  case 4:
    console.log("Jueves");
    break;
  case 5:
    console.log("Viernes");
    break;
  case 6:
    console.log("Sábado");
    break;
  case 7:
    console.log("Domingo");
    break;
  default:
    console.log("error");
}

/* EJERCICIOS CONDICIONALES */

// 1. Imprime tu nombre si una variable toma su valor
// 2. Imprime un mensaje si el usuario y contraseña coinciden con unos establecidos
// 3. Verifica si un número es positivo, negativo o cero
// 4. Verifica si una persona puede votar o no (mayor o igual a 18)
// 5. Usa el operador ternario para asignar "adulto" o "menor" según la edad

// switch
// 6. Muestra la estación del año según el mes
// 7. Muestra los días del mes
// 8. Saludo diferente según el idioma

let miNombre = "edwin";
let miAlias = "edal";
let usuario = "Funval-1";
let contraseña = 3245;

// 1. Nombre según valor
if (miNombre === "edwin") {
  console.log("Mi nombre es " + miNombre);
}

// 2. Usuario y contraseña
if (usuario === "Funval-1" && contraseña === 3245) {
  console.log("Usuario y contraseña correctos");
} else {
  console.log("Error en usuario o contraseña");
}

// 3. Número positivo, negativo o cero
let numero = 5;
if (numero > 0) {
  console.log("Número positivo");
} else if (numero < 0) {
  console.log("Número negativo");
} else {
  console.log("Es cero");
}

// 4. ¿Puede votar?
let edadPersona = 15;
if (edadPersona >= 18) {
  console.log("Puede votar");
} else {
  console.log("Le faltan " + (18 - edadPersona) + " años para votar");
}

// 5. Ternario
let estado = edadPersona >= 18 ? "adulto" : "menor";
console.log("Estado:", estado);

// 6. Estación del año
let mes = 3;
switch (mes) {
  case 12:
  case 1:
  case 2:
    console.log("Invierno");
    break;
  case 3:
  case 4:
  case 5:
    console.log("Primavera");
    break;
  case 6:
  case 7:
  case 8:
    console.log("Verano");
    break;
  case 9:
  case 10:
  case 11:
    console.log("Otoño");
    break;
  default:
    console.log("Mes inválido");
}

// 7. Días del mes
switch (mes) {
  case 2:
    console.log("Tiene 28 días (o 29 si es bisiesto)");
    break;
  case 4:
  case 6:
  case 9:
  case 11:
    console.log("Tiene 30 días");
    break;
  default:
    console.log("Tiene 31 días");
}

// 8. Saludo por idioma

let idioma = "es";
switch (idioma) {
  case "es":
    console.log("¡Hola!");
    break;
  case "en":
    console.log("Hello!");
    break;
  case "fr":
    console.log("Bonjour!");
    break;
  default:
    console.log("Idioma no soportado");
}

/* =============================== */

/* let nombreUsuario = prompt("ingresa tu nombre");
let edadUsuario = pront("ingresa tu edad");
console.log(nombreUsuario);
console.log(nombreUsuario.length);
console.log(typeof edadUsuario); */

//parseInt convierte los string a number
// parseFloat convierte los string a decimal

let edadDefinitiva = parseInt(edadUsuario); 
let edadDecimal = parseFloat(edadUsuario); 
console.log(typeof edadDefinitiva);
console.log(edadDefinitiva);
console.log(typeof edadDecimal);
console.log(edadDecimal);

/* GRUPO DE LOS NO HOMEROS */

/*
pedimos al cliente q nos ingrese el nombre de usuario
si el nombre de usuario es Homero no se le debera permitir el ingreso al club
a menos que la cantidad de Homeros sea de 1 si es mayor o igual a 1 no se le permitira el ingreso al club
*/

//RESULTADO 

let homeros = 0; // contador global de Homeros

let nombreUsuario = prompt("Ingresa tu nombre de usuario");

if (nombreUsuario.toLowerCase() === "homero") {
  if (homeros === 0) {
    console.log("Puedes entrar al club");
    homeros++;
    console.log("La cantidad de Homeros es: " + homeros);
  } else {
    console.log("No puedes entrar al club, ya hay un Homero");
  }
} else {
  console.log(`Puedes entrar al club, ${nombreUsuario}`);
}

