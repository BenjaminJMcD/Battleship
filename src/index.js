import './style.css';
import Ship from './Ship';
import Gameboard from './Gameboard';
import Player from './Player';
import newGame from './newGame';


let computer = new Player;
let compBoard = new Gameboard;

let ship1 = compBoard.ships.ship1;
let ship2 = compBoard.ships.ship2;
let ship3 = compBoard.ships.ship3;
let ship4 = compBoard.ships.ship4;
let ship5 = compBoard.ships.ship5;

let compShips = compBoard.ships;

for (const ship in compShips) {
    alternateVert(compShips[ship])
}

let ship1Coords = secureSpot(ship1);
let ship2Coords = secureSpot(ship2);
let ship3Coords = secureSpot(ship3);
let ship4Coords = secureSpot(ship4);
let ship5Coords = secureSpot(ship5);

compBoard.placeShip(ship1, ship1Coords.row, ship1Coords.column);
compBoard.placeShip(ship2, ship2Coords.row, ship2Coords.column);
compBoard.placeShip(ship3, ship3Coords.row, ship3Coords.column);
compBoard.placeShip(ship4, ship4Coords.row, ship4Coords.column);
compBoard.placeShip(ship5, ship5Coords.row, ship5Coords.column);



function randomNumber(highValue) {
    return Math.floor(Math.random() * highValue);
}


function alternateVert (ship) {
    let rng = randomNumber(2);

    if (rng == 0) {
        ship.vert = false
    }
    else if (rng == 1) {
        ship.vert = true
    }
    return ship;
}

function secureSpot(ship) {

    if (ship.vert) {
        let row = randomNumber(ship.length + 1);
        let column = randomNumber(10);
        return {
            row,
            column
        }
    }
    else if (!ship.vert) {
        let row = randomNumber(10);
        let column = randomNumber(ship.length + 1)
        return {
            row,
            column
        }
    }
}


//   GAME LOOP   +    MODULE FOR DOM INTERACTION

// GAME LOOP == CREATE PLAYERS AND POPULATE BOARD

// CLICK HANDLER == IN GAMEBOARD

// 
