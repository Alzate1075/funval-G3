/* Calculadora de Áreas Geométricas

Este programa permite calcular el área de diferentes figuras geométricas: cuadrados, rectángulos y triángulos.

## Instrucciones

1.  **Menú Principal:**

    * El programa mostrará un menú con las siguientes opciones:

        * Calcular el área de un cuadrado.

        * Calcular el área de un rectángulo.

        * Calcular el área de un triángulo.

2.  **Selección de Opción:**

    * El usuario deberá ingresar el número correspondiente a la operación que desea realizar.

3.  **Solicitud de Datos:**

    * Dependiendo de la opción seleccionada, el programa solicitará los datos necesarios:

        * **Cuadrado:** Lado.

        * **Rectángulo:** Base y altura.

        * **Triángulo:** Base y altura.

4.  **Cálculo y Resultado:**

    * El programa realizará el cálculo del área utilizando las fórmulas correspondientes:

        * **Cuadrado:** Área = lado * lado

        * **Rectángulo:** Área = base * altura

        * **Triángulo:** Área = (base * altura) / 2

    * El resultado del área se mostrará en pantalla.

5.  **Manejo de Errores:**

    * Si el usuario ingresa una opción no válida o datos incorrectos, el programa mostrará un mensaje de error y solicitará que se ingrese la información nuevamente. */


let nombreUsuario = prompt("Bienvenido a CODECRAFT - Ingresa tu nombre de usuario");

if (!nombreUsuario || nombreUsuario.trim() === "") {
    alert("No es un nombre correcto.");
    process.exit(); // Termina el programa
}

let menu = prompt("hola " + nombreUsuario + " Gracias por utilizar nuestra Calculadora de Areas Geometricas. \nIngresa (s) para continuar: ");

menu = menu.toLowerCase();

if (menu === "s") {
    alert("A continuacion veras un menu con varias opciones, escoge la opción que deseas realizar.");
} else {
    alert("Opcion incorrecta.");
    process.exit();
}

let opcionMenu = Number(prompt(
  "A) Para Calcular el área de un cuadrado escoge la opción: 1.\n" +
  "B) Para Calcular el área de un rectángulo escoge la opción: 2.\n" +
  "C) Para Calcular el área de un triángulo escoge la opción: 3."
));


let menu1 = "El area de un Cuadrado";
let menu2 = "El area de un Rectangulo";
let menu3 = "El area de un Triangulo";


if (opcionMenu === 1) {
    alert("Excelente, escogiste la opcion: " + opcionMenu + " " + menu1 + "\nA continuación ingresa las medidas para calcular el area.");
}else if(opcionMenu === 2){
       alert("Excelente, escogiste la opcion: " + opcionMenu + " " + menu2 + "\nA continuación ingresa las medidas para calcular el area.");
}else if (opcionMenu === 3) {
            alert("Excelente, escogiste la opcion: " + opcionMenu + " " + menu3 + "\nA continuación ingresa las medidas para calcular el area.");               
}else{
    alert("Esta no es una opción valida, por favor seleccione una de las opciones del menú.");
}

let area = parseFloat(opcionMenu);

let lado;
let base;
let altura;

if (area === 1) {
    lado = Number(prompt("Ingresa una medida."));
    if (isNaN(lado) || lado <= 0) {
        alert("Dato incorrecto. Debes ingresar la informacion nuevamente.");
    } else {
        alert("El área del cuadrado es: " + (lado * lado));
    }
} else if (area === 2) {
    base = Number(prompt("Ingresa la medida 1."));
    altura = Number(prompt("Ingresa la medida 2."));
    if (isNaN(base) || base <= 0 || isNaN(altura) || altura <= 0) {
        alert("Dato incorrecto. Debes ingresar la informacion nuevamente.");
    } else {
        alert("El área del rectángulo es: " + (base * altura));
    }
} else if (area === 3) {
    base = Number(prompt("Ingresa la medida 1."));
    altura = Number(prompt("Ingresa la medida 2."));
    if (isNaN(base) || base <= 0 || isNaN(altura) || altura <= 0) {
        alert("Dato incorrecto. Debes ingresar la informacion nuevamente.");
    } else {
        alert("El área del triángulo es: " + (base * altura / 2));
    }
}
