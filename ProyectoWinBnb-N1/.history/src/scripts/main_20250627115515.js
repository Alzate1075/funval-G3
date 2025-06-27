/**
 * Aquí estará la lógica principal de la aplicación.
 * Este bloque de código contiene la funcionalidad principal
 * que define el comportamiento del programa.
 */

import { stays } from './stays.js';
import { mostrarSkeletons, renderCards, mostrarCiudades, agregarFiltroInput } from './utils.js';

const contenedor = document.querySelector("#contenedor-cards");
const cityList = document.getElementById("cityList");
const inputCiudad = document.getElementById("locationInput");

mostrarCiudades({
  stays,
  cityListContainer: cityList,
  contenedorCards: contenedor,
  onCloseModal: () => modal1.classList.add("hidden")
});

agregarFiltroInput(inputCiudad, stays, contenedor, () => modal1.classList.add("hidden"));

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

let modalInter = document.querySelector("#modalInter");

modal.addEventListener("click", function (e) {
  if (!modalInter.contains(e.target)) {
    modal.classList.add("hidden");
  }
});

// MODAL LOCATION

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

let modalInterno = document.querySelector("#modalInterno");

document.addEventListener("click", function (e) {
  const closeLocation =
    !modal1.contains(e.target) &&
    !openModal.contains(e.target);

  if (closeLocation) {
    modal1.classList.add("hidden");
  }
});

// MODAL GUESTS

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

let modalInt = document.querySelector("#modalInt");

document.addEventListener("click", function (e) {
  const closeGuests =
    !modal2.contains(e.target) &&
    !opModal.contains(e.target);

  if (closeGuests) {
    modal2.classList.add("hidden");
  }
});

// Contador

const resumen = document.getElementById("guestsSummary");
const adultCount = document.getElementById("count-adult");
const childCount = document.getElementById("count-child");
const babyCount = document.getElementById("count-baby");

let adults = 0;
let children = 0;
let babies = 0;


function filtrarContador() {
  const totalHuespedes = adults + children + babies;

  if (totalHuespedes === 0) {
    renderCards(stays, contenedor); 
    return;
  }

  const filtrados = stays.filter(stay =>
    stay.beds && stay.beds >= totalHuespedes
  );

  renderCards(filtrados, contenedor);
}

function actualizar() {
  adultCount.textContent = adults;
  childCount.textContent = children;
  babyCount.textContent = babies;

  const total = adults + children + babies;
  resumen.textContent = total > 0 ? `${total} guest${total > 1 ? "s" : ""}` : "Add guests";

  filtrarContador(); 
}

document.querySelectorAll(".btn-incremento").forEach(btn => {
  btn.onclick = () => {
    const tipo = btn.dataset.type;
    if (tipo === "adult") adults++;
    else if (tipo === "child") children++;
    else if (tipo === "baby") babies++;
    actualizar();
  };
});

document.querySelectorAll(".btn-decremento").forEach(btn => {
  btn.onclick = () => {
    const tipo = btn.dataset.type;
    if (tipo === "adult" && adults > 0) adults--;
    else if (tipo === "child" && children > 0) children--;
    else if (tipo === "baby" && babies > 0) babies--;
    actualizar();
  };
});

