var numero = 0;
var soma = 0;
while (numero !== -1) {
    soma += numero;
    let entrada = window.prompt("Digite o número: ");
    numero = parseInt(entrada);
}
window.alert(soma);