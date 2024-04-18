import './style.css';
import Ship from './Ship';
import Gameboard from './Gameboard';
import Player from './Player';
import newGame from './newGame';
import CompBoard from './CompBoard';

// GENERATES COMPUTER BOARD W RANDOM SHIP PLACEMENTS
let playerBoard = new Gameboard;
let computer = new Player;

playerBoard.placeShip(playerBoard.ships.ship5, 0, 0);
playerBoard.placeShip(playerBoard.ships.ship4, 1, 0);
playerBoard.placeShip(playerBoard.ships.ship3, 2, 0);
playerBoard.placeShip(playerBoard.ships.ship2, 3, 0);
playerBoard.placeShip(playerBoard.ships.ship1, 4, 0);

computer.computerMove(playerBoard);

console.log(playerBoard.board);






//   GAME LOOP   +    MODULE FOR DOM INTERACTION

// GAME LOOP == CREATE PLAYERS AND POPULATE BOARD

// CLICK HANDLER == IN GAMEBOARD

// 
