

 export function menuPrincipal() {
    const ruta = window.location.pathname;

    let headerContent = '';

    const baseNavAndWaveHtml = `
        <nav class="flex flex-wrap justify-center gap-x-4 gap-y-2 text-xl relative z-10 mt-6
                    sm:flex-nowrap sm:justify-center sm:gap-y-0
                    md:justify-start md:ml-6">
            <a href="./index.html" class="hover:text-yellow-300 transition">Inicio</a>
            <a href="./portafolio.html" class="hover:text-yellow-300 transition">Portafolio</a>
            <a href="./servicios.html" class="hover:text-yellow-300 transition">Servicios</a>
            <a href="./contactanos.html" class="hover:text-yellow-300 transition">Contáctanos</a>
        </nav>
        <div class="wave h-[100px] w-full overflow-hidden relative z-10 mt-auto">
            <svg
                viewBox="0 0 500 150"
                preserveAspectRatio="none"
                style="height: 120%; width: 100%;"
            >
                <path
                    d="M0.00,50.10 C150.00,150.33 349.20,-50.10 500.00,50.10 L500.00,150.33 L0.00,150.33 Z"
                    style="stroke: none; fill: hsla(0, 0%, 100%, 0.459)"
                ></path>
            </svg>
        </div>
    `;

    if (ruta.includes('index.html')) {
    
        headerContent = `
            <header class="bg-black text-white relative overflow-hidden h-[500px] flex flex-col">
                ${baseNavAndWaveHtml}
                <div class="flex justify-center mt-8 relative z-10">
                    <img src="../Jpg/Logos/Titulos/CodeCraftLogo1.png" alt="CodeCraft" class="w-full max-w-xs sm:max-w-md md:max-w-lg h-auto object-contain" />
                </div>
            </header>
        `;
    } else {
       
        let tituloImagen = ''; 

        if (ruta.includes('portafolio')) {
            tituloImagen = '../Jpg/Logos/Titulos/LogoPortafolio.png';
        } else if (ruta.includes('servicios')) {
            tituloImagen = '../Jpg/Logos/Titulos/LogoServicios.png';
        } else if (ruta.includes('contactanos')) {
            tituloImagen = '../Jpg/Logos/Titulos/LogoContactanos.png';
        }

        headerContent = `
            <header class="bg-black text-white overflow-hidden h-[500px] flex flex-col">
                ${baseNavAndWaveHtml}
                <!-- Contenedor del Logo CodeCraft pequeño -->
                <div class="flex flex-col items-center justify-center gap-4 mt-6 mb-4 relative z-10
                            md:flex-row">
                    <img src="../Jpg/Logos/Titulos/CodeCraftLogo1.png" alt="Logo pequeño"
                         class="w-40 h-auto object-contain" />
                </div>
                <!-- Contenedor del Título de la página -->
                <div class="flex justify-center mt-4 relative z-10">
                    <img src="${tituloImagen}" alt="Título" class="w-full max-w-xs sm:max-w-md md:max-w-xl h-auto object-contain" />
                </div>
            </header>
        `;
    }

    return headerContent; 
}

export function footerPrincipal() {
    const footerHtml = `
        <footer>
            <hr class="border-t-2 border-[#3b2b8c] pb-1 md:border-t-4" />
            <div
                class="grid grid-cols-2 md:grid-cols-1 footer-container bg-gradient-to-b from-[#3b2b8c] to-[#7265d7] text-white"
            >
                <div
                    class="footer md:flex justify-around text-center text-sm p-6 md:text-2xl gap-4"
                >
                    <div class="content-foo text-white">
                        <h4>TELEFONO</h4>
                        <p class="text-yellow-400 cursor-pointer">(+57) 317 497 3545</p>
                    </div>
                    <div class="content-foo text-white">
                        <h4>EMAIL</h4>
                        <p class="text-yellow-400 cursor-pointer">codecraft@gmail.com</p>
                    </div>
                    <div class="content-foo text-white">
                        <h4>DIRECCION</h4>
                        <p class="text-yellow-400 cursor-pointer">Avenida Siempre viva</p>
                    </div>
                </div>
                <div
                    class="flex flex-col items-center justify-center gap-2 m-4 md:flex-row md:justify-center md:items-center md:gap-8"
                >
                    <div class="flex justify-center md:justify-end m-6">
                        <a href="#top" aria-label="Volver al inicio"
                            ><button
                                class="cursor-pointer text-lg font-semibold border-3 border-white text-white bg-red-600 text-center p-2 rounded-2xl shadow-lg hover:bg-orange-600 transition-colors duration-300 hover:scale-105 px-4 md:w-[150px]"
                            >
                                INICIO
                            </button></a
                        >
                    </div>
                    <h2 class="cursor-pointer http text-[12px] text-white md:text-2xl">
                        &copy; https://CodeCraft.com.co
                    </h2>
                </div>
            </div>
        </footer>
        `;
    return footerHtml;
}


const cargImg = [
    '../Jpg/Logos/Titulos/CodeCraftLogo1.png',
    '../Jpg/Logos/Titulos/LogoPortafolio.png',
    '../Jpg/Logos/Titulos/LogoServicios.png',
    '../Jpg/Logos/Titulos/LogoContactanos.png',
];

cargImg.forEach(src => {
    const img = new Image();
    img.src = src;
});


document.addEventListener('DOMContentLoaded', () => {
    
    window.scrollTo(0, 0);

    const appRoot = document.getElementById('app-root');

    if (!appRoot) {
        console.error("El elemento con ID 'app-root' no se encontró en el DOM. Asegúrate de que tu HTML tenga <div id='app-root'>.");
        return; 
    }

    const menuElement = document.getElementById('menu');
    const footerElement = document.getElementById('footer');

    if (menuElement) {
        menuElement.innerHTML = menuPrincipal();
    } else {
        console.warn("Elemento con ID 'menu' no encontrado para inyectar el Header.");
    }

    if (footerElement) {
        footerElement.innerHTML = footerPrincipal();
    } else {
        console.warn("Elemento con ID 'footer' no encontrado para inyectar el Footer.");
    }

    appRoot.classList.add('ready');
});
