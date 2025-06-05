function cajeroFunval() {
    let saldo = 0;
    let salir = false;

    while (!salir) {
        let menu = Number(prompt(
            "Bienvenido a Cajeros Funval, Ingresa la opción que deseas realizar:\n" +
            "1) Consignar dinero\n" +
            "2) Retirar dinero\n" +
            "3) Consultar saldo\n" +
            "4) Salir"
        ));

        if (menu === 1) {
            while (true) {
                let consignacion = Number(prompt("Ingresa el valor a consignar:"));
                if (!isNaN(consignacion) && consignacion > 0) {
                    saldo += consignacion;
                    alert("Tu valor consignado es: " + consignacion);
                    alert("Consignacion exitosa, Tu saldo actual es: " + saldo);
                    break;
                } else {
                    alert("Dato incorrecto, Debes ingresar un número válido mayor que cero.");
                }
            }
        } else if (menu === 2) {
            alert("Escogiste Retirar dinero.");
            while (true) {
                let retirar = Number(prompt("Ingresa el valor a retirar:"));
                if (!isNaN(retirar) && retirar > 0 && retirar <= saldo) {
                    saldo -= retirar;
                    alert("El valor a retirar es: " + retirar);
                    alert("Tu retiro fue un exito, Tu saldo actual es: " +saldo);
                    break;
                } else if (retirar > saldo) {
                    alert("Saldo insuficiente.");
                } else {
                    alert("Dato incorrecto, Debes ingresar un número válido mayor que cero.");
                }
            }
        } else if (menu === 3) {
            alert("Escogiste ver el saldo.");
            alert("Tu saldo actual es: " + saldo);
        } else if (menu === 4) {
            alert("Gracias por usar Cajeros Funval. ¡Hasta pronto!");
            salir = true;
        } else {
            alert("Esta no es una opción válida, por favor selecciona una de las opciones del menú.");
        }
    }
}

cajeroFunval();