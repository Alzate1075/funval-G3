let contenedor = document.querySelector(".contenedor-cards");

let recetas = [
  {
    image: {
      thumbnail: "./assets/images/image-waffle-thumbnail.jpg",
      mobile: "./assets/images/image-waffle-mobile.jpg",
      tablet: "./assets/images/image-waffle-tablet.jpg",
      desktop: "./assets/images/image-waffle-desktop.jpg",
    },
    name: "Waffle with Berries",
    category: "Waffle",
    price: 6.5,
  },
  {
    image: {
      thumbnail: "./assets/images/image-creme-brulee-thumbnail.jpg",
      mobile: "./assets/images/image-creme-brulee-mobile.jpg",
      tablet: "./assets/images/image-creme-brulee-tablet.jpg",
      desktop: "./assets/images/image-creme-brulee-desktop.jpg",
    },
    name: "Vanilla Bean Crème Brûlée",
    category: "Crème Brûlée",
    price: 7.0,
  },
  {
    image: {
      thumbnail: "./assets/images/image-macaron-thumbnail.jpg",
      mobile: "./assets/images/image-macaron-mobile.jpg",
      tablet: "./assets/images/image-macaron-tablet.jpg",
      desktop: "./assets/images/image-macaron-desktop.jpg",
    },
    name: "Macaron Mix of Five",
    category: "Macaron",
    price: 8.0,
  },
  {
    image: {
      thumbnail: "./assets/images/image-tiramisu-thumbnail.jpg",
      mobile: "./assets/images/image-tiramisu-mobile.jpg",
      tablet: "./assets/images/image-tiramisu-tablet.jpg",
      desktop: "./assets/images/image-tiramisu-desktop.jpg",
    },
    name: "Classic Tiramisu",
    category: "Tiramisu",
    price: 5.5,
  },
  {
    image: {
      thumbnail: "./assets/images/image-baklava-thumbnail.jpg",
      mobile: "./assets/images/image-baklava-mobile.jpg",
      tablet: "./assets/images/image-baklava-tablet.jpg",
      desktop: "./assets/images/image-baklava-desktop.jpg",
    },
    name: "Pistachio Baklava",
    category: "Baklava",
    price: 4.0,
  },
  {
    image: {
      thumbnail: "./assets/images/image-meringue-thumbnail.jpg",
      mobile: "./assets/images/image-meringue-mobile.jpg",
      tablet: "./assets/images/image-meringue-tablet.jpg",
      desktop: "./assets/images/image-meringue-desktop.jpg",
    },
    name: "Lemon Meringue Pie",
    category: "Pie",
    price: 5.0,
  },
  {
    image: {
      thumbnail: "./assets/images/image-cake-thumbnail.jpg",
      mobile: "./assets/images/image-cake-mobile.jpg",
      tablet: "./assets/images/image-cake-tablet.jpg",
      desktop: "./assets/images/image-cake-desktop.jpg",
    },
    name: "Red Velvet Cake",
    category: "Cake",
    price: 4.5,
  },
  {
    image: {
      thumbnail: "./assets/images/image-brownie-thumbnail.jpg",
      mobile: "./assets/images/image-brownie-mobile.jpg",
      tablet: "./assets/images/image-brownie-tablet.jpg",
      desktop: "./assets/images/image-brownie-desktop.jpg",
    },
    name: "Salted Caramel Brownie",
    category: "Brownie",
    price: 4.5,
  },
  {
    image: {
      thumbnail: "./assets/images/image-panna-cotta-thumbnail.jpg",
      mobile: "./assets/images/image-panna-cotta-mobile.jpg",
      tablet: "./assets/images/image-panna-cotta-tablet.jpg",
      desktop: "./assets/images/image-panna-cotta-desktop.jpg",
    },
    name: "Vanilla Panna Cotta",
    category: "Panna Cotta",
    price: 6.5,
  },
];

for (let i = 0; i < recetas.length; i++) {
  contenedor.innerHTML += `
  <div class="card relative mb-20 rounded-2xl">
            <img
              src="${recetas[i].image.mobile}"
              alt=""
              class="fotito w-full h-full object-cover rounded"
            />
            <button
              class="btn flex gap-1 bg-white py-1.5 w-[45%] rounded-3xl items-center justify-center absolute left-1/2 bottom-[-12px] transform -translate-x-1/2 shadow"
            >
              <img
                src="./assets/images/icon-add-to-cart.svg"
                alt=""
                class="size-[12px]"
              />
              <p class="text-[9px]">Add to Cart</p>
            </button>
            <p class="text-xs text-[#c1b4af] mt-4">${recetas[i].category}</p>
            <h2 class="text-[#291613]">${recetas[i].name}</h2>
            <p class="text-orange-700 text-xs font-semibold">$${recetas[
              i
            ].price.toFixed(2)}</p>
          </div>
    `;
}

let contador = 1;

contenedor.addEventListener("click", function (evento) {
  let elementoSelecionado = evento.target.closest(".btn");
  let cardP = evento.target.closest(".card");
  let imagen1 = cardP.querySelector(".fotito");

  if (
    elementoSelecionado &&
    !elementoSelecionado.classList.contains("activo")
  ) {
    imagen1.classList.add("border-2", "border-orange-800", "rounded-2xl");
    elementoSelecionado.innerHTML = "";
    elementoSelecionado.classList.remove("bg-white");
    elementoSelecionado.classList.remove("justify-center");
    elementoSelecionado.classList.add("justify-around");
    elementoSelecionado.classList.add("bg-orange-800");
    elementoSelecionado.classList.add("text-white");
    elementoSelecionado.classList.add("text-[9px]");
    elementoSelecionado.classList.add("activo"); // bandera para evitar múltiples reemplazos
    elementoSelecionado.innerHTML = `<img
                src="./assets/images/icon-decrement-quantity.svg"
                alt=""
                class="btn-decrement size-[12px] border p-0.5 border-white rounded-full"
              />
              <p class="text-[9px] parrafo-loco" data-quantity="1">1</p>
              <img
                src="./assets/images/icon-increment-quantity.svg"
                alt=""
                class="btn-increment size-[12px] border p-0.5 border-white rounded-full"
              />
    `;
  }
  if (evento.target.closest(".btn-increment")) {
    const card = evento.target.closest(".card");
    const pCantidad = card.querySelector(".parrafo-loco");

    let cantidad = parseInt(pCantidad.getAttribute("data-quantity"));
    cantidad++;
    pCantidad.setAttribute("data-quantity", cantidad);
    pCantidad.textContent = cantidad;
  }
  if (evento.target.closest(".btn-decrement")) {
    const card = evento.target.closest(".card");
    const pCantidad = card.querySelector(".parrafo-loco");
    let cantidad = parseInt(pCantidad.getAttribute("data-quantity"));
    if (cantidad > 1) {
      cantidad--;
      pCantidad.setAttribute("data-quantity", cantidad);
      pCantidad.textContent = cantidad;
    } else {
      imagen1.classList.remove("border-2", "border-orange-800", "rounded-2xl");
      elementoSelecionado.classList.add("bg-white");
      elementoSelecionado.classList.add("justify-center");
      elementoSelecionado.classList.remove(
        "justify-around",
        "bg-orange-800",
        "text-white",
        "text-[9px]",
        "activo"
      );
      elementoSelecionado.innerHTML = `
        <img
                src="./assets/images/icon-add-to-cart.svg"
                alt=""
                class="size-[12px]"
              />
              <p class="text-[9px]">Add to Cart</p>
        `;
    }
  }
});