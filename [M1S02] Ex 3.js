let entrada = window.prompt("Digite o número: ");
let numero = parseInt(entrada);
let texto = "";

for (let i = 0; i <= 10; i++) {
    texto += `${numero} x ${i} = ${numero * i}\n`;
}
window.alert(texto);