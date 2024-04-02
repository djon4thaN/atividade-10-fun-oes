// Crie uma função que recebe um valor inteiro e retorne verdadeiro se
// é um valor perfeito ou falso se não for. Um valor é dito perfeito
// quando ele é igual a soma dos seus divisores excetuando ele
// próprio.

// Ex: 6 é perfeito, pois 6 = 1 + 2 + 3, que são seus divisores

let number = parseInt(prompt('Digite um número inteiro:'));

function isabella() {
    if (number <= 0) {
        return false;
    }

    let sum = 0;

    for (let i = 1; i <= Math.floor(number / 2); i++) {
        if (number % i === 0) {
            sum += i;
        }
    }

    return sum === number;
}

document.write(isabella());
