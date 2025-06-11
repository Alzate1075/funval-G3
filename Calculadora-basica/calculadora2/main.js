numero1 = Number(prompt("Ingrese el primer número:"));
operacion = prompt("Ingrese la operación a realizar (+, -, *, /):");
numero2 = Number(prompt("Ingrese el segundo número:"));

let resultado;

if (operacion === "+") {
    resultado = numero1 + numero2;
    alert("El resultado de la suma es: " + resultado);

} else if (operacion === "-") {
    resultado = numero1 - numero2;
    alert("El resultado de la resta es: " + resultado);
}else if(operacion === "*"){
    resultado = numero1 * numero2;
    alert("El resultado de la multiplicación es: " + resultado);
}else if(operacion === "/"){
    resultado = numero1 / numero2;
    alert("El resultado de la división es: " + resultado);
}else if(operacion === "%"){
    resultado = numero1 % numero2;
    alert("El resultado del módulo es: " + resultado);
}else {
    alert("Operación no válida. Por favor, ingrese una operación válida (+, -, *, /, %).");
}

document.querySelector("#resultado").textContent = `El resultado de la operación es: ${resultado}`;
