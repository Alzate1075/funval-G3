//importar Menu y footer

import { menuPrincipal, footerPrincipal } from './componentes.js';

document.addEventListener('DOMContentLoaded', () => {
  menuPrincipal();
  footerPrincipal();
});

const serviciosData = [{
    nombre: "DJ PRODUCTOR",
    descripcion: "Soy un aprendiz de DJ y productor musical apasionado por crear experiencias sonoras que conectan emociones, estilos y momentos únicos.",
    video: "../Jpg/Videos/VideoServicios/Dj-mezclasVid.mp4",
    imagen: "../Jpg/Servicios/Dj-mezclas.jpeg",
    linkPage: "https://youtube.com/playlist?list=PLdOr2AHNhg_EVtF0Rkj4KIN59-Ehmj0MD&si=R4g2CzeJnggN4ZdL" // Enlace para DJ Productor
}, {
    nombre: "ARTISTA",
    descripcion: "Disfruto pintar, dibujar y hacer manualidades. Cada creación es una forma de expresar lo que siento y dejar volar mi imaginación.",
    video: "../Jpg/Videos/VideoServicios/PintorVid.mp4",
    imagen: "../Jpg/Servicios/Pintor.jpeg",
    linkPage:"https://youtube.com/playlist?list=PLdOr2AHNhg_FbNO5YabUuAnadIEGLXbRs&si=YhIB63ZZ5c_h6eo7" // Enlace para Artista
}, {
    nombre: "LA COCINA DE ALZATE",
    descripcion: "Me gusta preparar recetas que encuentro en internet. Cocinar es mi forma de compartir momentos deliciosos con mi familia.",
    video: "../Jpg/Videos/VideoServicios/CocineroVid.mp4",
    imagen: "../Jpg/Servicios/Cocinero.jpeg",
    linkPage: "https://youtube.com/playlist?list=PLdOr2AHNhg_FNXkG0ZqZl7R4Mx33Oshlg&si=OcfWGiwAqqyfigau" // Enlace para La Cocina de Alzate
}, {
    nombre: "MUSICO",
    descripcion: "Me encanta tocar la guitarra, escribir canciones y explorar sonidos. A veces practico un poco de piano para inspirarme y seguir creando.",
    video: "../Jpg/Videos/VideoServicios/GuitarVid.mp4",
    imagen: "../Jpg/Servicios/Guitar.jpeg",
    linkPage: "https://youtube.com/playlist?list=PLdOr2AHNhg_GugVFLkGyNf1aAZDECB4cW&si=GWo93b4Xa3CnHpCR" // Enlace para Músico
}];

/**
 * Genera y muestra el contenido de la sección de servicios dinámicamente.
 * Crea elementos visuales para cada servicio con su nombre, descripción y video/imagen circular.
 */
function renderServicios() {
    // Título principal y descripción de la página de servicios.
    const serviciosPageHeaderHtml = `
        <div class="text-center py-8">
            <h1 class="text-4xl font-extrabold text-[#3b2b8c] mb-4">¡Bienvenidos a mi página de servicios!</h1>
            <p class="text-lg text-gray-700 max-w-2xl mx-auto">
                En esta página quiero compartir con ustedes algunos de los servicios que
                ofrezco, así como mis talentos, hobbies y pasiones.
            </p>
            <p class="text-lg text-gray-700 max-w-2xl mx-auto mt-2">
                ¡Espero que disfruten explorando este espacio creativo!
            </p>
        </div>
    `;

    // Mapea el array de servicios a un string HTML para cada "tarjeta" de servicio,
    // que ahora se enfoca en el círculo con video/imagen y texto.
    const serviciosItemsHtml = serviciosData.map(servicio => `
        <div class="service-item-wrapper">
            <!-- Título del servicio -->
            <h3 class="service-title text-2xl font-bold mb-4">${servicio.nombre}</h3>

            <!-- Contenedor del círculo con video/imagen -->
            <div class="service-circle-container">
                <!-- Enlace que envuelve el video y la imagen de fallback -->
                <a href="${servicio.linkPage}" target="_blank" aria-label="${servicio.nombre} Portafolio">
                    <video autoplay muted loop playsinline class="service-video">
                        <source src="${servicio.video}" type="video/mp4">
                        Tu navegador no soporta el video.
                    </video>
                    <!-- Imagen de fallback. Se muestra solo si el video no se puede reproducir. -->
                    <img src="${servicio.imagen}" alt="${servicio.nombre}" class="fallback-image"
                        onerror="this.style.opacity='1'; this.previousElementSibling.style.display='none';">
                </a>
            </div>

            <!-- Descripción del servicio -->
            <p class="service-description text-gray-700 text-base mt-4">${servicio.descripcion}</p>

            <!-- Botón "Ver Portafolio" con enlace dinámico -->
            <a href="${servicio.linkPage}" target="_blank"
                class="mt-4 bg-[#3b2b8c] text-white px-6 py-2 rounded-lg hover:bg-[#7265d7] transition">
                Ver Portafolio
            </a>
        </div>
    `).join(''); // Une todos los strings HTML de los ítems en uno solo.

    // HTML final para inyectar en el contenedor de servicios
    const finalContentHtml = `
        ${serviciosPageHeaderHtml}
        <div class="container mx-auto p-4 max-w-6xl">
            <!-- Cuadrícula responsiva para los elementos de servicio -->
            <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 justify-items-center mt-8">
                ${serviciosItemsHtml}
            </div>
        </div>
    `;

    // Obtiene el elemento donde se inyectará el contenido de servicios.
    const serviciosContentElement = document.getElementById('servicios-content');

    if (serviciosContentElement) {
        serviciosContentElement.innerHTML = finalContentHtml;
    } else {
        console.error("Elemento con ID 'servicios-content' no encontrado en el DOM para inyectar los servicios.");
    }
}

// Listener que se ejecuta cuando todo el DOM ha sido completamente cargado y parseado.
document.addEventListener('DOMContentLoaded', () => {
    // Forzar el scroll al principio de la página.
    window.scrollTo(0, 0);

    // Obtener el contenedor principal de la aplicación para la transición de opacidad.
    const appRoot = document.getElementById('app-root');

    if (!appRoot) {
        console.error("El elemento con ID 'app-root' no se encontró en el DOM. Asegúrate de que tu HTML tenga <div id='app-root'>.");
        return;
    }

    // Inyectar el Header y Footer.
    const menuElement = document.getElementById('menu');
    if (menuElement) {
        menuElement.innerHTML = menuPrincipal();
    } else {
        console.warn("Elemento con ID 'menu' no encontrado para inyectar el Header.");
    }

    const footerElement = document.getElementById('footer');
    if (footerElement) {
        footerElement.innerHTML = footerPrincipal();
    } else {
        console.warn("Elemento con ID 'footer' no encontrado para inyectar el Footer.");
    }

    // Renderizar los servicios después de que el Header y Footer estén en su lugar.
    renderServicios();

    // Una vez que todo el contenido dinámico está en el DOM, hacer visible el contenedor principal.
    appRoot.classList.add('ready');
});
