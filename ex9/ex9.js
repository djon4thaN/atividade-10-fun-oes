//     Crie uma função chamada calcularMedia(nota1, nota2, nota3,
//     nome), que recebe 4 parâmetros sendo três inteiros e um texto
//     (String). Esta função será chamada ao abrir a página e mostrará um
//     alerta com a média. Exemplo: “João, sua média é 70.” A função
//     também deve mostrar no console.log() as notas recebidas. Exemplo
//     “Nota 1: 60,Nota 2: 70,Nota 3: 80”.

function calcularMedia(nota1, nota2, nota3, nome){
    alert(`${nome}, sua média é de 70.`);
    console.log(`Nota 1: ${nota1}`);
    console.log(`Nota 2: ${nota2}`);
    console.log(`Nota 3: ${nota3}`);
};

calcularMedia(10, 50, 30, 'Djonathan');