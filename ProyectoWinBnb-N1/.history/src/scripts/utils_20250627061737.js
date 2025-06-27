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

