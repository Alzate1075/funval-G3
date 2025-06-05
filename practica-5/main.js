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


function iniciarCalculadora() {
    let nombreUsuario = prompt("Bienvenido a CODECRAFT - Por favor ingresa tu nombre de usuario.");

    while (!nombreUsuario || nombreUsuario.trim() === "") {
        alert("No es un nombre correcto, Intenta nuevamente.");
        nombreUsuario = prompt("Ingresa tu nombre de usuario:");
    }

    let menu;
    do {
        menu = prompt("Hola " + nombreUsuario + ", Gracias por utilizar nuestra Calculadora de Áreas Geométricas. \nIngresa (s) para continuar: ");
        if (menu) menu = menu.toLowerCase();
    } while (menu !== "s");

    alert("A continuación verás un menú con varias opciones, escoge la opción que deseas realizar.");

    let opcionMenu;
    while (true) {
        opcionMenu = Number(prompt(
            "A) Para Calcular el área de un cuadrado escoge la opción: 1.\n" +
            "B) Para Calcular el área de un rectángulo escoge la opción: 2.\n" +
            "C) Para Calcular el área de un triángulo escoge la opción: 3."
        ));

        if (opcionMenu === 1 || opcionMenu === 2 || opcionMenu === 3) {
            break;
        } else {
            alert("Esta no es una opción válida, por favor selecciona una de las opciones del menú.");
        }
    }

    let lado, base, altura;

    if (opcionMenu === 1) {
        alert("Escogiste calcular el área de un CUADRADO.");
        while (true) {
            lado = Number(prompt("Ingresa la medida del lado:"));
            if (!isNaN(lado) && lado > 0) {
                alert("El área del cuadrado es: " + (lado * lado));
                break;
            } else {
                alert("Dato incorrecto. Debes ingresar un número válido mayor que cero.");
            }
        }
    } else if (opcionMenu === 2) {
        alert("Escogiste calcular el área de un RECTÁNGULO.");
        while (true) {
            base = Number(prompt("Ingresa la base:"));
            altura = Number(prompt("Ingresa la altura:"));
            if (!isNaN(base) && base > 0 && !isNaN(altura) && altura > 0) {
                alert("El área del rectángulo es: " + (base * altura));
                break;
            } else {
                alert("Datos incorrectos. Debes ingresar números válidos mayores que cero.");
            }
        }
    } else if (opcionMenu === 3) {
        alert("Escogiste calcular el área de un TRIÁNGULO.");
        while (true) {
            base = Number(prompt("Ingresa la base:"));
            altura = Number(prompt("Ingresa la altura:"));
            if (!isNaN(base) && base > 0 && !isNaN(altura) && altura > 0) {
                alert("El área del triángulo es: " + (base * altura / 2));
                break;
            } else {
                alert("Datos incorrectos. Debes ingresar números válidos mayores que cero.");
            }
        }
    }
}

iniciarCalculadora(); // Llamada inicial para arrancar el programa
