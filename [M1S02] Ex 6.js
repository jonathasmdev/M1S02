let operacion = window.prompt("Digite a operação: ");
let entrada1 = window.prompt("Digite o primeiro número: ");
let numero1 = parseInt(entrada1);
let entrada2 = window.prompt("Digite o segundo número: ");
let numero2 = parseInt(entrada2);

if ( operacion == "+" ) {
    let resultado = numero1 + numero2;
    window.alert("O resultado do seu cálculo é: " + resultado);
}

if ( operacion == "-" ) {
    let resultado = numero1 - numero2;
    window.alert("O resultado do seu cálculo é: " + resultado);
}

if ( operacion == "*" ) {
    let resultado = numero1 * numero2;
    window.alert("O resultado do seu cálculo é: " + resultado);
}

if (operacion == "/") {
    let resultado = numero1 / numero2;
    window.alert("O resultado do seu cálculo é: " + resultado);
}