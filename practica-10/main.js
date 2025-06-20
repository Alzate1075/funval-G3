
let contenedor = document.querySelector("#contenedor-cards");

async function fetchUsuario() {
    try {
        const resultado = await fetch("https://jsonplaceholder.typicode.com/users")
        if (!resultado.ok) {
          throw new Error("Error al obtener datos del usuario");  
        }
        const data = await resultado.json();

        data.forEach((usuario) => {
            contenedor.innerHTML += `
                <a href="#" class="block max-w-sm p-6 bg-white border-3 border-[#008cff] rounded-lg shadow-lg hover:bg-[#dbfff0]">

                <h5 class="mb-2 text-1.5xl font-bold tracking-tight text-gray-900 dark:text-white">${usuario.name}</h5>
                <p class="font-normal text-gray-700 dark:text-gray-400"><b>Usuario:</b> ${usuario.username}</p>
                <p class="font-normal text-gray-700 dark:text-gray-400"><b>Email:</b> ${usuario.email}</p>
                <p class="font-normal text-gray-700 dark:text-gray-400"><b>Empresa:</b> ${usuario.company.name}</p>
                </a>
                `;
        });
    }catch (error) {
        contenedor.innerHTML = `
        <div class="col-span-full text-center text-red-600 font-semibold text-lg">
        Error al cargar los usuarios. Inténtalo de nuevo más tarde.
      </div>
      `;
        console.error(error);
    }
    
}

fetchUsuario();
