let entrada = window.prompt("Digite a idade: ");
let idade = parseInt(entrada);

if (idade >= 65) {
    window.alert("Idosos");
} else if (idade <= 15) {
    window.alert("Jovens");
} else {
    window.alert("Adultos");
}