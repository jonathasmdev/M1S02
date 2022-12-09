let inumero = window.prompt("Digite incial: ");
let numero = parseInt(inumero);

let iraiz = window.prompt("Digite raiz: ");
let raiz = parseInt(iraiz);

for (let index = 0; index < 10; index++) {
    console.log(numero);
    window.alert(numero);
    numero = raiz + numero;
}