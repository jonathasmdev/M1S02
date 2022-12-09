let entrada = window.prompt("Digite o número: ");
let numero = parseInt(entrada);
let pares = 0;
let impares = 0;
for (let i = 0; i <= Math.abs(numero); i++) {
    if (i % 2 === 0) {
        pares++;
    } else {
        impares++;
    }
}
window.alert(`Quantidade de números: pares: ${pares}, impares: ${impares}`);