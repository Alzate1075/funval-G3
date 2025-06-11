
// la palabra function se puede reemplazar por una flecha => .

/* let btn = document.querySelector('#btn');
let contador = 0;
btn.addEventListener('click', () => {  
    contador++
    console.log("Haz hecho click " + contador + " veces");
}) */


// la palabra function indica que es una función anónima.

/* let btn = document.querySelector('#btn');
let parrafo = document.querySelector('#parrafo');
let contador = 0;
btn.addEventListener('click', function () {  
    contador++;
    parrafo.textContent= contador;  
}); */

/* ============================================= */
// Ejemplo contador de clicks


let btnPositivo = document.querySelector('#btnPositivo');
let btnNegativo = document.querySelector('#btnNegativo');
let contador = 0;

let positivo = document.querySelector('#positivo');
btnPositivo.addEventListener('click', function () {
    contador++;
    parrafo.textContent = contador;
});

let negativo = document.querySelector('#negativo');
btnNegativo.addEventListener('click', function () {
    contador--;
    parrafo.textContent = contador;
});

/* ============================================= */

// Ejemplo princesa fiona de dia - Ogra de noche

/* let btn = document.querySelector("#btn");
let img = document.querySelector("#imagen");
let dia = true;

btn.addEventListener("click", function () {
  dia = !dia;
  if (dia) {
    btn.textContent = "Dia";
    img.setAttribute(
      "src",
      "https://upload.wikimedia.org/wikipedia/en/d/d0/Fiona_standing_human.png"
    );
  } else {
    btn.textContent = "noche";
    img.setAttribute(
      "src",
      "https://upload.wikimedia.org/wikipedia/en/thumb/b/b9/Princess_Fiona.png/130px-Princess_Fiona.png"
    );
  }
}); */

/* ============================================= */

// Ejemplo Anakin de luz, oscuridad y poca luz

let btnAnakin = document.querySelector("#btnAnakin");
let img = document.querySelector("#imagen");

let estado = 0;

btnAnakin.addEventListener("click", function () {
  estado = (estado + 1) % 3;

  if (estado === 0) {
    btnAnakin.textContent = "Luz";
    img.setAttribute(
      "src",
      "https://i.pinimg.com/736x/6b/08/b7/6b08b7998264b4f9a1cd3ca4fa5b9cea.jpg"
    );
  } else if (estado === 1) {
    btnAnakin.textContent = "Oscuridad";
    img.setAttribute(
      "src",
      "https://grupobizarro.wordpress.com/wp-content/uploads/2011/06/darth-vader-aliceonthesky.jpg"
    );
  } else {
    btnAnakin.textContent = "Poca luz";
    img.setAttribute(
      "src",
      "https://sm.ign.com/ign_latam/screenshot/default/anakin_xw4j.jpg"
    );
  }
});
