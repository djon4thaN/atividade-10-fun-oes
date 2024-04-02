// Crie uma função que recebe por parâmetro um valor inteiro e
// positivo e retorne verdadeiro se o número for primo ou falso se não
// for.

function func(number) {
    if (number <= 1) {
    }
    if (number === 2) {
    }
    if (number % 2 === 0) {
    }
    for (let i = 3; i <= Math.sqrt(number); i += 2) {
        if (number % i === 0) {
            return false;
        }
    }
    return true;
}

    let num = parseInt(prompt('Digite um número inteiro e positivo:'));

    if (func(num)) {
        document.write('O número é primo!');
    } else {
        document.write('O número não é primo.');
    }
