// Crie uma função que recebe 3 notas de um aluno por parâmetro e
// uma letra. Se a letra for A a função deve calcular a média aritmética,
// se for P, a média ponderada (peso: 5, 3 e 2).

let nota1 = parseFloat(prompt('Digite a sua primeira nota'));
let nota2 = parseFloat(prompt('Digite a sua segunda nota'));
let nota3 = parseFloat(prompt('Digite a sua terceira nota'));
let mediaA = prompt('Escolha como quer calcular: A - aritmética | P - ponderada').toUpperCase();

function notas(){

    let peso1 = 5;
    let peso2 = 3;
    let peso3 = 2;
    
    if(mediaA === `A`){
        let resultadoA = (nota1 + nota2 + nota3) / 3;
        document.write(`A sua nota final foi de: ${resultadoA}`);
    } else if (mediaA === `P`){
        let multiplicacao = (nota1 * peso1) + (nota2 * peso2) + (nota3 * peso3);
        let somPesos = peso1 + peso2 + peso3;
        let div = multiplicacao / somPesos;
        document.write(`A sua nota final ponderada é de: ${div}`);
    }
};

notas();