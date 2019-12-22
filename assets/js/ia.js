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
const pictures = ['images/rock.png', 'images/paper.png', 'images/scissors.png'];

function getMachineMove(){

    let mov = Math.floor(Math.random() * 3);
    let mov_machine = document.getElementById('machine_move');

    mov_machine.src = pictures[mov];
    //quito el nombre de la animacion, para reiniciarla cada vez que clickea una opcion
    mov_machine.style.animation = '';
    //provoca un cambio en el dom, por lo cual vuelve a actualizar el nodo y por lo tanto reinicia la animacion
    void mov_machine.offsetWidth; 
    //Vuelvo a agregar la animacion y mas el cambio, reinicia la misma
    mov_machine.style.animation = 'show-move 1.5s';
    return mov;
}

function getPlayerMove(player){
    var result = -1;
    switch(player.alt)
    {
        case 'Rock':
            result = 0;
            break;
        case 'Paper':
            result = 1;
            break;
        case 'Scissors':
            result = 2;
            break;
        default:
            result=0;
    }

    return result;
}

function listenerOn(){
    var list_movs = document.getElementsByName('player-movs');

    list_movs.forEach(element => {
        element.addEventListener('click', onClick);
    });
}

function showTestResult(result){
    let txt_result = 'You Win';
    let txt = document.getElementById('txt-result');

    if (result === 0){ txt_result = 'Draw'};
    if (result === -1) { txt_result = 'You Lose!!!'};
    if (result === 1) { txt_result = 'You win!!!!'};

   txt.innerHTML = txt_result;
}

function updateScore(result){
    let score = document.getElementById('txt-score');

    score.innerHTML = Number(score.innerHTML) + result;
}

function onClick(e){
    var player_move = e.target; //obtengo cual recibio el evento

    let player_1 = getPlayerMove(player_move)
    let player_2 = getMachineMove();
    let result = mat_decision[player_1][player_2];
    showTestResult(result);
    updateScore(result);
}

window.onload = listenerOn;