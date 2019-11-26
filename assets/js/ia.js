/*
    tabla para definir quien gana en el duelo de piedra papel y tijera. Siguiendo este orden se crea 
    la tabla de doble entrada, siendo la fila para player_1 y la columna para player_2. 
    Si player_1 elija piedra (0) y player_2 tijera (2) => [0][2] devuelve 1, por lo cual gana player_1
    Quedando los siguientes resultados:
    0 => empate
    1 => Gana player_1
    -1 => Gana player_2

*/
const ia_rock = [0, -1, 1]; 
const ia_paper = [1, 0, -1];
const ia_scissors = [-1, 1, 0];
const mov = ['Rock', 'Papper', 'Scissor'];
const mat_decision = [ia_rock, ia_paper, ia_scissors];

function showResult(){
    let player_1 = getPlayerMove()
    let player_2 = getMachineMove();
    let result = mat_decision[player_1][player_2];

    console.log('You Picked ' + mov[player_1]);
    console.log('The House Picked ' + mov[player_2]);
    console.log('The final result is: ');
    if (result === 0){ console.log('Draw')};
    if (result === -1) { console.log('You Lose!!!')};
    if (result === 1) { console.log('You win!!!!')};

    return result;
}

function getMachineMove(){
    return Math.floor(Math.random() * (3 - 0) + 0);
}

function getPlayerMove(){
    let result = -2;
    let options = document.getElementsByName('movs');
    options.forEach(mov =>{
        if (mov.checked){ result = mov.value };
    });
    return result;
}

