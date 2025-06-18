/* codigo sincrono */

/* console.log("1 levantamos");
console.log("2 cepillamos los dientes");
console.log("3 desayunamos");
console.log("4 hacemos lectura de libro de mormon");
console.log("5 entramos a clases");
 */
/* CODIGO ASINCRONO */

/* console.log("1 pedir una pizza");

setTimeout(() => {
  console.log("2 llego la pipza :v ");
}, 2000);

console.log("3 mirar una serie ");
setTimeout(() => {
  console.log("4 te fuiste a lavar los platos ");
}, 4000);
console.log("5 alistar la mesa");
 */
/* PROMESAS */

/* let datos = [
  {
    nombre: "pepe",
    edad: 18,
  },
  {
    nombre: "juan",
    edad: 34,
  },
  {
    nombre: "kevin",
    edad: 28,
  },
];

function traerDatos() {
  setTimeout(() => {
    return datos;
  }, 1500);
} */

//console.log(traerDatos()); /// aqui le promete al clg q en algun momento le va llegar los datos
/* console.log("hola chamos"); */

/* COMO SE CREAN PROMESAS */

/* let datos = [
  {
    nombre: "pepe",
    edad: 18,
  },
  {
    nombre: "juan",
    edad: 34,
  },
  {
    nombre: "kevin",
    edad: 28,
  },
];

function traerDatos() {
  let exito = false;
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (exito) {
        resolve(datos);
      } else {
        reject("code :422 error con la peticion ");
      }
    }, 3000);
  });
}

traerDatos()
  .then((datos) => console.log(datos))
  .catch((err) => console.log(err)); */

  /* ================================== */

// Ejercicio de setTimeout para Asincronia

/* console.log("1 picar el tomate");
console.log("2 picar la cebolla");

setTimeout(() => {
  console.log("3 freir");
}, 1000);

console.log("4 revolver los huevos");

console.log("5 revolver los huevos con el guiso ");
setTimeout(() => {
  console.log("6 Dejar freir ");
}, 2000);

console.log("7 servir el chocolate"); */

/* ========================================== */

//Me prometieron un mejor sueldo.

/* let trabajo = [
    {
       sueldo:   
    }
]
 */
/* function mejorSueldo() {
  let sueldo = false;
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (sueldo) {
        resolve(sueldo);
      } else {
        reject("code: 422\n" +
               "error: Error con la petición\n" +
               "Descripción: La operación falló porque aparentemente era de confianza\n" +
            "Solución:\n" + 
                "1. Reiniciar la fe en la humanidad.\n" +
                "2. Activar el modo escéptico.\n" +
                "3. No volver a creer en promesas sin contrato notariado.");
      }
    }, 3000); 
  });
}


mejorSueldo()
  .then((sueldo) => console.log("Te subieron el sueldo: " + sueldo))
  .catch((err) => console.log(err)); */

  /* ================================================ */
let datos = [
  { nombre: "Pepe", edad: 18, pais: "Argentina" },
  { nombre: "Juan", edad: 34, pais: "Perú" },
  { nombre: "Kevin", edad: 28, pais: "Chile" },
  { nombre: "Andrés", edad: 31, pais: "Bolivia" },
  { nombre: "Diego", edad: 38, pais: "Colombia" },
  { nombre: "Jhon", edad: 42, pais: "China" },
  { nombre: "Lucía", edad: 22, pais: "Argentina" },
  { nombre: "Sofía", edad: 28, pais: "Chile" },
  { nombre: "Carlos", edad: 26, pais: "México" },
  { nombre: "Fernanda", edad: 30, pais: "España" },
  { nombre: "Bruno", edad: 35, pais: "Uruguay" },
  { nombre: "Martina", edad: 28, pais: "Argentina" },
  { nombre: "Mateo", edad: 19, pais: "Colombia" },
  { nombre: "Valentina", edad: 24, pais: "Perú" },
  { nombre: "Alejandro", edad: 32, pais: "Ecuador" },
  { nombre: "Camila", edad: 21, pais: "Chile" },
  { nombre: "Luis", edad: 29, pais: "Paraguay" },
  { nombre: "Daniela", edad: 28, pais: "Argentina" },
  { nombre: "Hugo", edad: 40, pais: "México" },
  { nombre: "María", edad: 33, pais: "Bolivia" }
];


function traerDatos() {
  let exito = true;
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (exito) {
        resolve(datos);
      } else {
        reject("me mandó el querido Juan");
      }
    }, 2000);
  });
}

function mostrarSkeletons(cantidad) {
  let skeletons = "";
  for (let i = 0; i < cantidad; i++) {
    skeletons += `
<div role="status" class="max-w-sm animate-pulse">
    <div class="h-2.5 bg-gray-200 rounded-full dark:bg-gray-700 w-40 mb-4"></div>
    <div class="h-2 bg-gray-200 rounded-full dark:bg-gray-700 max-w-[360px] mb-2.5"></div>
    <div class="h-2 bg-gray-200 rounded-full dark:bg-gray-700 mb-2.5"></div>
    <div class="h-2 bg-gray-200 rounded-full dark:bg-gray-700 max-w-[330px] mb-2.5"></div>
    <div class="h-2 bg-gray-200 rounded-full dark:bg-gray-700 max-w-[300px] mb-2.5"></div>
    <div class="h-2 bg-gray-200 rounded-full dark:bg-gray-700 max-w-[360px]"></div>
    <span class="sr-only">Loading...</span>
</div>
    `;
  }
  return skeletons;
}

// Seleccionar contenedores
let lista = document.querySelector("#listado");
let estArg = document.querySelector("#argentinos");
let est28 = document.querySelector("#edad28");

// Mostrar skeletons iniciales
lista.innerHTML = mostrarSkeletons(6);
estArg.innerHTML = mostrarSkeletons(3);
est28.innerHTML = mostrarSkeletons(3);

function tarjeta(est) {
  return `
    <a href="#" class="max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow-sm hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700">
      <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">${est.nombre}</h5>
      <p class="font-normal text-gray-700 dark:text-gray-400">Edad: ${est.edad} años</p>
      <p class="font-normal text-gray-700 dark:text-gray-400">País: ${est.pais}</p>
    </a>
  `;
}

async function crgEstudiantes() {
  try {
    let estudiantes = await traerDatos();

    // Limpiar contenido
    lista.innerHTML = "";
    estArg.innerHTML = "";
    est28.innerHTML = "";

    estudiantes.forEach((estudiante) => {
      lista.innerHTML += tarjeta(estudiante);

      if (estudiante.pais === "Argentina") {
        estArg.innerHTML += tarjeta(estudiante);
      }

      if (estudiante.edad === 28) {
        est28.innerHTML += tarjeta(estudiante);
      }
    });
  } catch (err) {
    console.error(err);
  }
}
crgEstudiantes();

