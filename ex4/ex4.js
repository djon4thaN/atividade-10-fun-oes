// Crie uma função que recebe por parâmetro o tempo de duração de
// uma fábrica expressa em segundos e retorna esse tempo em horas,
// minutos e segundos.

// Ex:
// Entrada: 3672
// Saída: 1:1:12

let segundos = parseInt(prompt('Digite a duração em segundos:'));

function fabric(){

    let hour = segundos / 3600;
    let min = (segundos % 3600) / 60;
    let sec = (segundos % 3600) % 60;

    document.write(`O horario baseado nos segundos digitados é: ${hour.toFixed(0)} horas ${min.toFixed(0)} minutos e ${sec.toFixed(0)} segundos`);
};

fabric();