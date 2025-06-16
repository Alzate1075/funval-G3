//importar Menu y footer

import { menuPrincipal, footerPrincipal } from './componentes.js';

document.addEventListener('DOMContentLoaded', () => {
  menuPrincipal();
  footerPrincipal();
});

const portfolioData = [
    {
        title: "Portafolio Codecraft",
        image: "../Jpg/Portafolio/PortafolioCodecraft.png",
        link: "http://127.0.0.1:5500/practica%203/index.html", // Asegúrate que esta URL sea accesible o ajústala
        alt: "Imagen del proyecto Codecraft",
        isFullWidth: false
    },
    {
        title: "Página de Conciertos",
        image: "../Jpg/Portafolio/PortafolioConciertoss.png",
        link: "http://127.0.0.1:5500/dia-7/proyecto/index.html", // Asegúrate que esta URL sea accesible o ajústala
        alt: "Imagen de página de conciertos",
        isFullWidth: false
    },
    {
        title: "Formulario ArtBeats",
        image: "../Jpg/Portafolio/PortafolioFormArtbeats.png",
        link: "http://127.0.0.1:5500/practica%202/index.html", // Asegúrate que esta URL sea accesible o ajústala
        alt: "Imagen de formulario ArtBeats",
        isFullWidth: false
    },
    {
        title: "Página de Noticias",
        image: "../Jpg/Portafolio/PortafolioNoticias.png",
        link: "http://127.0.0.1:5500/Dia-5/Practica%20Noticias/noticias.html", // Asegúrate que esta URL sea accesible o ajústala
        alt: "Imagen de página de noticias",
        isFullWidth: false
    },
    {
        title: "Página de Películas (Funval)",
        image: "../Jpg/Portafolio/PortafolioPelisFunval.png",
        link: "http://127.0.0.1:5500/dia-2/index2.html", // Asegúrate que esta URL sea accesible o ajústala
        alt: "Imagen de página de películas Funval",
        isFullWidth: true // Este elemento ocupará dos columnas en pantallas medianas
    }
];


function renderPortafolio() {
 
    const pageHeaderHtml = `
        <div class="text-center py-8">
            <h1 class="text-4xl font-extrabold text-[#3b2b8c] mb-4">MI PORTAFOLIO DE PROYECTOS</h1>
            <p class="text-lg text-gray-700 max-w-2xl mx-auto">
                Aquí podrás explorar algunos de los proyectos más destacados que he desarrollado.
            </p>
            <p class="text-lg text-gray-700 max-w-2xl mx-auto mt-2">
                Cada uno es un reflejo de mis habilidades y pasión por la creación.
            </p>
        </div>
    `;

    const portfolioItemsHtml = portfolioData.map(item => `
        <!--
            Contenedor flex para centrar la tarjeta dentro de su columna.
            Las clases 'col-span-1 md:col-span-2' se aplican condicionalmente para el último elemento.
        -->
        <div class="flex items-center justify-center pb-10 ${item.isFullWidth ? 'col-span-1 md:col-span-2' : ''}">
            <!--
                Enlace de la tarjeta del proyecto.
                Las clases de ancho responsivo 'w-[80%] md:w-[70%]' (y 'md:w-[50%]' para el fullWidth)
                se aplican al enlace mismo.
                Se añade un efecto hover para realzar la tarjeta.
            -->
            <a href="${item.link}" target="_blank" aria-label="${item.alt}"
               class="w-[80%] ${item.isFullWidth ? 'md:w-[50%]' : 'md:w-[70%]'} flex justify-center border rounded-3xl shadow-lg transition-transform hover:scale-105">
                <img src="${item.image}" alt="${item.alt}" class="w-full h-auto object-contain" />
            </a>
        </div>
    `).join(''); 

    const portfolioSectionHtml = `
        ${pageHeaderHtml}
        <section class="grid grid-cols-1 md:grid-cols-2 gap-8 py-10 place-items-center mt-8 max-w-7xl mx-auto px-4">
            ${portfolioItemsHtml}
        </section>
    `;


    const portfolioContentElement = document.getElementById('portfolio-content');


    if (portfolioContentElement) {
        portfolioContentElement.innerHTML = portfolioSectionHtml;
    } else {
        console.error("Elemento con ID 'portfolio-content' no encontrado en el DOM para inyectar el portafolio.");
    }
}

document.addEventListener('DOMContentLoaded', () => {

    window.scrollTo(0, 0);

    const appRoot = document.getElementById('app-root');

    if (!appRoot) {
        console.error("El elemento con ID 'app-root' no se encontró en el DOM. Asegúrate de que tu HTML tenga <div id='app-root'>.");
        return;
    }

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

    renderPortafolio();

    appRoot.classList.add('ready');
});
