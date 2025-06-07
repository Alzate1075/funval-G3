
/* 
🚀 Ejercicios de Métodos de Arrays en JavaScript
📌 Contexto
1️⃣ Recorrer y mostrar productos (forEach)
2️⃣ Crear un array de nombres de productos y verificar disponibilidad (map + includes)
3️⃣ Aplicar un descuento a los productos (map)
4️⃣ Filtrar productos por precio (filter)
5️⃣ Obtener los primeros productos (slice)
6️⃣ Ordenar productos por precio (sort)
7️⃣ Invertir el orden de los productos (reverse) 
*/

/* ==================================== */

//1️⃣ Recorrer y mostrar productos (forEach)

const inventarios = [
    { nombre: "Laptop", precio: 1200 },
    { nombre: "Mouse", precio: 25 },
    { nombre: "Teclado", precio: 50 },
    { nombre: "Monitor", precio: 300 },
    { nombre: "Silla Gamer", precio: 450 },
    { nombre: "Audífonos", precio: 80 },
    { nombre: "Webcam", precio: 60 },
    { nombre: "USB 128GB", precio: 30 },
    { nombre: "Impresora", precio: 200 },
    { nombre: "Tablet", precio: 500 }
 ];  


inventarios.forEach((inventario) => {
    console.log(inventario);
});

/* ================================ */

//2️⃣ Crear un array de nombres de productos y verificar disponibilidad (map + includes)


let invDispo = "tablet";

let producDisp = inventarios
  .map(producto => producto.nombre.toLowerCase())
  .includes(invDispo.toLowerCase());

console.log("El producto " , invDispo , "esta: ", producDisp ? "Disponible" : "Agotado");


/* ==================================== */

//3️⃣ Aplicar un 10% de descuento a los productos (map)

const ofertaProduc = inventarios.map(producto => ({
  nombre: producto.nombre,
  precioDesc: producto.precio * 0.9
}));

console.log(ofertaProduc);

/* ==================================== */

//4️⃣ Filtrar productos por precio (filter)
//productos cuyo precio sea menor a $100.

let prodEco = inventarios.filter(est => est.precio < 100)
console.log(prodEco);

/* ==================================== */

//5️⃣ Obtener los primeros productos (slice)

console.log(inventarios.slice(0, 6));

/* ==================================== */

//6️⃣ Ordenar productos por precio (sort)

inventarios.sort((a, b) => a.precio - b.precio)
console.log(inventarios)

/* ===================================== */

//7️⃣ Invertir el orden de los productos (reverse)

let productRever = inventarios.slice().reverse();
console.log(productRever);
