/**
 * Aquí estará la lógica principal de la aplicación.
 * Este bloque de código contiene la funcionalidad principal
 * que define el comportamiento del programa.
 */

import { stays } from './stays.js';
import { mostrarSkeletons, renderCards } from './utils.js';
import { mostrarCiudades } from './utils.js';




const contenedor = document.querySelector("#contenedor-cards");
/* const spinner = document.querySelector("#spinner"); */

/* spinner.classList.remove("hidden"); */

setTimeout(() => {
  spinner.classList.add("hidden");
  contenedor.innerHTML = mostrarSkeletons(6);
    requestAnimationFrame(() => {
    document.querySelectorAll('.skeleton-entry').forEach(el => {
      el.classList.remove('opacity-0');
      el.classList.add('opacity-100');
    });
  });
  
 setTimeout(() => {
    renderCards(stays, contenedor);
  }, 1000);
}, 100);
    
// Filtro de Ciudades

const cityList = document.getElementById("cityList");

mostrarCiudades({
  stays,
  cityListContainer: cityList,
  contenedorCards: contenedor,
  onCloseModal: () => modal1.classList.add("hidden")
});


// MODAL PRINCIPAL

const abrirModal = document.getElementById("abrirModal");
const modal = document.getElementById("buscadorModal");
const cerrarModal = document.getElementById("closeModal");

abrirModal.addEventListener("click", () => {
  modal.classList.remove("hidden");
});

cerrarModal.addEventListener("click", () => {
  modal.classList.add("hidden");
});

// Cerrar modal Principal

let modalInter = document.querySelector("#modalInter");

modal.addEventListener("click", function (e) {
  if (!modalInter.contains(e.target)) {
    modal.classList.add("hidden");
  }
});

//  MODAL LOCATION  

const openModal = document.getElementById("openModal");
const modal1 = document.getElementById("locationModal");
const modalClose = document.getElementById("modalClose");

openModal.addEventListener("click", () => {
  modal1.classList.remove("hidden");
    modal2.classList.add("hidden");
});

modalClose.addEventListener("click", () => {
  modal1.classList.add("hidden");
});

// Cerrar modal Location 

let modalInterno = document.querySelector("#modalInterno");

document.addEventListener("click", function (e) {
  const closeLocation = 
    !modal1.contains(e.target) && 
    !openModal.contains(e.target);
    
  if (closeLocation) {
    modal1.classList.add("hidden");
  }
});


//  MODAL GUESTS

const opModal = document.getElementById("opModal");
const modal2 = document.getElementById("guestsModal");
const modalCl = document.getElementById("modalCl");


opModal.addEventListener("click", () => {
  modal2.classList.remove("hidden");
    modal1.classList.add("hidden");
});

modalCl.addEventListener("click", () => {
  modal2.classList.add("hidden");
});

// Cerrar modal Guests

let modalInt = document.querySelector("#modalInt");

document.addEventListener("click", function (e) {
  const closeGuests = 
    !modal2.contains(e.target) && 
    !opModal.contains(e.target);

  if (closeGuests) {
    modal2.classList.add("hidden");
  }
});


