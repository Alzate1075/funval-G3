
/* 
ARRAY
Como declarar un Array o como crearlo.
*/

/* let miArray = ["Edwin", 322, true , 32.7];
console.log(miArray); */

/* let edwin = "nombre";
let miArray = [edwin, 322, true , 32.7];
console.log(miArray); */

/* 
METODOS MAS COMUNES
length
Filter
Find
Findlast
ForEach
IndexOf
Map
Push - Agrega un elemento al final
Unshift - agrega elementos al inicio
Pop - Elimina el ultimo elemento del array y lo retorna a una variable
shift - Elimina elementos, los parentesis deben ir vacios.
*/

/* console.log(miArray.length); */

/* Metodos de insercion */

/* miArray.push("Pablo"); 
console.log(miArray);

miArray.unshift("Felipe", "Thomas");
console.log(miArray); */

/* Metodos de Eliminación */

/* miArray.pop();

miArray.shift();

console.log(miArray); */

/* ============================================ */

/* REGLA DE ORO
Siempre que vean un Array, su instinto principal sera itrarlo. 
Usando Bucle For
*/

/* for (let index = 0; index < array.length; index++) {
    const element = array[index];
} */

/* ============================================ */

    //1
/* let nombres = ["Juanita", "Pepito", "Pedrito"];
console.log(nombres); */
//2
/* let frutas = ["Mango", "Peras", "Coco", "Banano", "Piña"];
console.log(frutas); */
//3
/* frutas.push("Manzana");
console.log(frutas); */
//4
/* nombres.shift();
console.log(nombres); */
//5
/* let numeroSuma = [10, 20, 35, 64, 5];
let sumaTotal = numeroSuma.reduce((acumulador, valor) => acumulador + valor, 0);
console.log(sumaTotal); */
/* 
numeroSuma = [5, 10, 15, 20, 25];

for (let index = 0; numeroSuma < array.length; index++) {
    numeroSuma = array[index];
    numeroSuma += index;  
} */
//6
/* console.log(nombres.length); */

//7
/* let notas1 = [3, 7, 5, 9, 11, 44, 56, 12, 4, 87];
let mayor = 0;
for (let i = 0; i < notas1.length; i++) {
    if  (mayor [i] < 0){
        notas1++;
    }   
} console.log(contador); */


//8
/* let notas = [3, 7, 5, 9, 11, 44, 56, 12, 4, 87];
let contador = 0;
for (let index = 0; index < notas.length; index++) {
    if  (notas [index] > 10){
        contador++;
    }   
} console.log(contador); */

//9
/* let numero2 = [1, 2, 3, 4, 5];
let numeroDoble = [];

for (let index = 0; i < numero2.length; i++) {
    numeroDoble.push(numero2[i] * 2);
}

console.log(numeroDoble); */ 

//10
/* let nombre1 = ["Andres", "sebas", "nico", "Edwin"];
let nombreMayus = [];
for (let i = 0; i < nombre1.length; i++) {  
    nombreMayus.push(nombre1[i].toUpperCase());
}
console.log(nombreMayus); */

//11

/* ============================== */

/* METODOS AVANZADOS */

//FUNCION FLECHA  =>

/* const juanito = () => {
    console.log("Hola");
}
juanito(); */

/* ============================= */

/* FOR EACH */

/* si tengo una lista de estudiantes en el array ej: "STUDENTS" 
para mostrar lo que esta dentro del Array se busca en singular "STUNET"
*/

/* let students = ["FElipe", "Carlos", "Johan", "Alex"];

students.forEach((student)=> {
    console.log(student);
}) */

/* Iterar usando ForEach y sacar el promedio de los estudiantes de Funval */

/* let notasFunval = [100, 90, 10, 15, 67, 70, 0, 88];
let promedio = 0;

notasFunval.forEach(notasFunval.length) => {
    console.log(promedio);
}; */

/* =================================== */

/* OBJETOS */

/* let persona = {
    nombre: "edwin",
    edad: 19,
    pais: "Bolivia",
    genero: "Masculino",
    altura: 1.73,
}; */

//Actualizar un dato

/* persona.edad = 39;
persona.celular = "317867754566"; */

//eliminar un dato

/* delete persona.altura;
console.log(persona);
 */

/* ================================= */

/* let estudianteFunval = {
    nombre: "edwin",
    edad: 19,
    pais: "Bolivia",
    notas: [100, 90, 0, 51, 85],
}; */

/* Mostrar el nombre del estudiante y su promedio de notas  */

/* 
console.log(estudianteFunval.nombre);

let promedio = 0;
for (let i = 0; i < estudianteFunval.notas.length; i++) {
    promedio = promedio + estudianteFunval.notas[i];
}
promedio = promedio / estudianteFunval.notas.length;
console.log(promedio);
 */
/* =========================================== */

/* 
tenemos un array de estudiantes con diferentes notas quiero q me muestre un listado
de los estudiantes aprobados, se considerara aprobado aquel q tenga un promedio mayor a 51 
*/

let estudiantes = [
  {
    nombre: "Marco",
    edad: 22,
    pais: "Peru", //estudiantes[0]
    notas: [100, 90, 0, 51, 85],
  },
  {
    nombre: "Pablo",
    edad: 33,
    pais: "Argentina", //estudiantes[1]
    notas: [90, 75, 0, 0, 10],
  },
  {
    nombre: "Thomas",
    edad: 21, //estudiantes[2]
    pais: "Argentina",
    notas: [51, 30, 20, 41, 85],
  },
  {
    nombre: "Woodleine",
    edad: 33, //estudiantes[2]
    pais: "Chile",
    notas: [88, 11, 33, 77, 99],
  },
  {
    nombre: "Kevin",
    edad: 28, //estudiantes[2]
    pais: "Bolivia",
    notas: [31, 30, 12, 51, 77],
  },
];

function calcularPromedio(notas){

    let promedio = 0;
    for (let index = 0; index < notas.length; index++) {
    promedio = promedio + notas[index];
    }
    promedio = promedio / notas.length;
    return promedio;
}

for (let index = 0; index < estudiantes.length; index++) {
    let estudiantePromedio = calcularPromedio(estudiantes[index].notas);
    if (estudiantePromedio >= 51){
        console.log(
            "estudiante " +
            estudiantes[index].nombre +
            " Aprobado con ub promedio de: " +
            estudiantePromedio
        );
    }
}

/* del array de estudiantes mostrar a todos los estudiantes que pertenezcan al pais de argentina */

for (let index = 0; index < estudiantes.length; index++) {
    let paises = estudiantes[index].pais;
    let nombres = estudiantes[index].nombre;
    if (estudiantes[index].pais === "Argentina"){
        console.log("El estudiante " + nombres + " es de: " + paises);
    }
    
}