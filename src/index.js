import './style.css';
import Ship from './Ship';
import Gameboard from './Gameboard';



let playerBoard = new Gameboard;
let computerBoard = new Gameboard;

playerBoard.ships.ship5.vert = true;


playerBoard.placeShip(playerBoard.ships.ship5, 4, 4);
playerBoard.placeShip(playerBoard.ships.ship4, 0, 0);
playerBoard.placeShip(playerBoard.ships.ship3, 1, 0);
playerBoard.placeShip(playerBoard.ships.ship2, 2, 0);
playerBoard.placeShip(playerBoard.ships.ship1, 3, 0);

console.log(playerBoard.ships.ship1.placement)


console.log(playerBoard.ships.ship5.placement);

console.log(playerBoard.ships.ship1.length)

playerBoard.receiveAttack(4, 4);
playerBoard.receiveAttack(5,4)

console.log(playerBoard)

playerBoard.receiveAttack(6,4)
playerBoard.receiveAttack(7,4)
playerBoard.receiveAttack(0,0)
playerBoard.receiveAttack(0,1)
playerBoard.receiveAttack(0,2)
playerBoard.receiveAttack(0,3)
playerBoard.receiveAttack(0,4)
playerBoard.receiveAttack(1,1)
playerBoard.receiveAttack(1,0)
playerBoard.receiveAttack(1,2)
playerBoard.receiveAttack(2,0)
playerBoard.receiveAttack(2,1)
playerBoard.receiveAttack(2,2)
playerBoard.receiveAttack(8,4)

playerBoard.receiveAttack(3,0)
playerBoard.receiveAttack(3,1)

playerBoard.reportSunk();

