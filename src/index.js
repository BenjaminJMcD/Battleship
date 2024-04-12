import './style.css';
import Ship from './Ship';
import Gameboard from './Gameboard';

let ship5 = new Ship(5);

let playerBoard = new Gameboard;
let computerBoard = new Gameboard;


console.log(playerBoard.board);
console.log(computerBoard.board);

playerBoard.placeShip(ship5, 4, 4);

console.log(playerBoard.board)

playerBoard.receiveAttack(4, 5)


