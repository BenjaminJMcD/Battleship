import './style.css';
import Ship from './Ship';
import Gameboard from './Gameboard';

let newGame = new Gameboard;

let playerBoard = newGame.createBoard();
let computerBoard = newGame.createBoard();

console.log(playerBoard);
console.log(computerBoard);
