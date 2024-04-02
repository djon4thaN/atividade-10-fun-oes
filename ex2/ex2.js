// Crie uma função que recebe um valor inteiro e retorne verdadeiro se
// for ímpar ou falso se for par.

let num = parseInt(prompt('Digite um número inteiro:'));

function number(){
    if(num % 2 === 0){
        document.write('O número é par!')
        return true
    } else{
        document.write('O número é ímpar!')
        return false
    }
};

number();