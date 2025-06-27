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
    renderCards(stays, contenedor); // Usas la función que exportaste de utils.js
  }, 1000);
}, 100);
    
const cityLista = document.getElementById("cityList");

mostrarCiudades({
  stays,
  cityListContainer: cityLista,
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

// Filtro de Ciudades

const cityList = document.getElementById("cityList");

const ciudades = [...new Set(stays.map(stay => stay.city))];

ciudades.forEach(city => {
  const btn = document.createElement("button");
  btn.innerHTML = `
    <div class="flex items-center gap-3 p-2 hover:bg-gray-100 rounded-lg transition">
      <img src="./src/Jpg/icons/ubicacion.png" alt="ubicacionLogo" class="h-5 w-5" />
      <span class="text-gray-600 font-medium">${city}, Finland</span>
    </div>
  `;

  btn.addEventListener("click", () => {
    const filtrados = stays.filter(stay => stay.city === city);
    contenedor.innerHTML = '';
    filtrados.forEach(hotel => {
      contenedor.innerHTML += `
        <div class="overflow-hidden transition-transform duration-400 hover:scale-105 mx-2 gap-2">
          <img class="w-[450px] h-[260px] object-cover rounded-2xl" src="${hotel.photo}" alt="Foto de ${hotel.title}" />
          <div class="p-4 flex flex-col gap-2">
            <div class="flex items-center justify-between text-sm md:text-xl text-gray-500">
              ${hotel.superHost ? '<span class="text-center items-center border border-gray-800 rounded-full px-2 py-1 text-xs md:text-md font-bold text-gray-800">SUPER HOST</span>' : ''}
              <span class="md:text-lg">${hotel.type}${hotel.beds ? ` · ${hotel.beds} beds` : ''}</span>
              <span class="text-[#ef7979] font-semibold flex items-center gap-1">
                <svg xmlns="http://www.w3.org/2000/svg" class="w-4 h-4" viewBox="0 0 20 20" fill="currentColor">
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.286 3.965a1 1 0 00.95.69h4.173c.969 0 1.371 1.24.588 1.81l-3.377 2.455a1 1 0 00-.364 1.118l1.287 3.966c.3.921-.755 1.688-1.54 1.118L10 13.347l-3.377 2.455c-.784.57-1.838-.197-1.539-1.118l1.286-3.966a1 1 0 00-.364-1.118L2.63 9.392c-.783-.57-.38-1.81.588-1.81h4.173a1 1 0 00.95-.69l1.286-3.965z"/>
                </svg>
                ${hotel.rating}
              </span>
            </div>
            <h3 class="text-base md:text-lg font-semibold italic font-serif text-gray-800">${hotel.title}</h3>
          </div>
        </div>
      `;
    });

    modal1.classList.add("hidden"); // Cierra el modal después de hacer clic
  });

  cityList.appendChild(btn); // Agrega el botón a la lista
});
