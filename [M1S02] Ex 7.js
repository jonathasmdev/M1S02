const primo = (numero) => {
    for (let i = 2; i < numero; i++)
        if (numero % i == 0) {
            return false;
        }
    return numero > 1;
};
let contador = 0;
for (let index = 0; index <= 1000; index++) {
    if (primo(index)) {
        console.log(index);
        contador++;
    }
}
console.log(contador);