/**
 * Módulo de funciones utilitarias.
 * Este archivo contiene funciones auxiliares que serán utilizadas y llamadas
 * desde el archivo principal para realizar varias operaciones.
 */

/* Skeletons */

export function mostrarSkeletons(cantidad) {
    let skeletons = "";
    for (let i = 0; i < cantidad; i++) {
        skeletons += ` 
            <div role="status" class="skeleton-entry max-w-sm mx-auto animate-pulse p-4 transition-opacity duration-700 opacity-0">
                <div class="w-[350px] md:w-96 h-64 bg-gray-200 rounded mb-4 bg-gradient-to-r from-gray-200 via-rose-200 to-gray-200 bg-[length:400%_100%] bg-[position:-1000px_0] animate-shimmer"></div>
                <div class="h-4 bg-gray-200 rounded w-3/4 mb-2 bg-gradient-to-r from-gray-200 via-rose-200 to-gray-200 bg-[length:400%_100%] bg-[position:-1000px_0] animate-shimmer"></div>
                <div class="h-4 bg-gray-200 rounded w-1/2 mb-2 bg-gradient-to-r from-gray-200 via-rose-200 to-gray-200 bg-[length:400%_100%] bg-[position:-1000px_0] animate-shimmer"></div>
                <div class="h-4 bg-gray-200 rounded w-full bg-gradient-to-r from-gray-200 via-rose-200 to-gray-200 bg-[length:400%_100%] bg-[position:-1000px_0] animate-shimmer"></div>
            </div>
        `;
    }
    return skeletons;
}

// Cards

export function renderCards(lista, contenedor) {
  contenedor.innerHTML = ''; 

  lista.forEach(hotel => {
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
}

//mostrar ciudades

export function mostrarCiudades({ stays, cityListContainer, contenedorCards, onCloseModal }) {
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
      renderCards(filtrados, contenedorCards);
      if (onCloseModal) onCloseModal();
    });

    cityListContainer.appendChild(btn);
  });
}

// filtrar ciudades

export function agregarFiltroInput(inputElement, stays, contenedor, onCloseModal) {
  inputElement.addEventListener("input", () => {
    const texto = inputElement.value.trim().toLowerCase();

    if (texto === "") {
      renderCards(stays, contenedor);
      return;
    }

    const filtrados = stays.filter(stay =>
      stay.city.toLowerCase().includes(texto)
    );

    renderCards(filtrados, contenedor);

    if (filtrados.length === 1) {
      if (onCloseModal) onCloseModal();
    }
  });
}
