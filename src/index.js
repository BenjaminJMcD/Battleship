import './style.css';
import Ship from './Ship';
import Gameboard from './Gameboard';
import Player from './Player';
import newGame from './newGame';
import CompBoard from './CompBoard';

// GENERATES COMPUTER BOARD W RANDOM SHIP PLACEMENTS
let playerBoard = new Gameboard;
let computer = new Player;

for (let i=0; i<10; i++) {
    for (let j=0; j<10; j++) {
        playerBoard.board[i][j] = 1;
    }
}

computer.computerMove(playerBoard);

console.log(playerBoard.board)










//   GAME LOOP   +    MODULE FOR DOM INTERACTION

// GAME LOOP == CREATE PLAYERS AND POPULATE BOARD

// CLICK HANDLER == IN GAMEBOARD

// 
