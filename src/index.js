import './style.css';
import Ship from './Ship';
import Gameboard from './Gameboard';
import Player from './Player';


const player1 = new Player;
const computer = new Player;

const playerBoard = new Gameboard;
const compBoard = new Gameboard;

compBoard.placeShip(compBoard.ships.ship5, 0, 0);
compBoard.placeShip(compBoard.ships.ship4, 1, 0);
compBoard.placeShip(compBoard.ships.ship3, 2, 0);
compBoard.placeShip(compBoard.ships.ship2, 3, 0);
compBoard.placeShip(compBoard.ships.ship1, 4, 0);

playerBoard.placeShip(playerBoard.ships.ship5, 0, 0);
playerBoard.placeShip(playerBoard.ships.ship4, 1, 0);
playerBoard.placeShip(playerBoard.ships.ship3, 2, 0);
playerBoard.placeShip(playerBoard.ships.ship2, 3, 0);
playerBoard.placeShip(playerBoard.ships.ship1, 4, 0);

console.log(compBoard.board);
console.log(playerBoard.board);

let button = document.createElement("button");
let page = document.getElementsByTagName("body");
