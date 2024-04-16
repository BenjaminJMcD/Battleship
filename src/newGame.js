import Gameboard from "./Gameboard";
import Player from "./Player";
import Ship from './Ship';

export default function newGame () {

    let player1 = new Player;
    let computer = new Player;

    let playerBoard = new Gameboard;
    let compBoard = new Gameboard;

    let ship1 = compBoard.ships.ship1;
    let ship2 = compBoard.ships.ship2;
    let ship3 = compBoard.ships.ship3;
    let ship4 = compBoard.ships.ship4;
    let ship5 = compBoard.ships.ship5;

    // alternateVert(ship1);
    // alternateVert(ship2);
    // alternateVert(ship3);
    // alternateVert(ship4);
    // alternateVert(ship5);

    compBoard.ships.foreach((ship) => alternateVert(ship));

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



    playerBoard.placeShip(playerBoard.ships.ship5, 0, 0);
    playerBoard.placeShip(playerBoard.ships.ship4, 1, 0);
    playerBoard.placeShip(playerBoard.ships.ship3, 2, 0);
    playerBoard.placeShip(playerBoard.ships.ship2, 3, 0);
    playerBoard.placeShip(playerBoard.ships.ship1, 4, 0);

    return {
        player1,
        computer,
        playerBoard,
        compBoard
    }

}

function randomNumber10 () {
    return Math.floor(Math.random()*10);
}

function randomNumber2 () {
    return Math.floor(Math.random()*2)
}

function alternateVert (ship) {
    let rng = randomNumber2();

    if (rng == 0) {
        ship.vert = false
    }
    else if (rng == 1) {
        ship.vert = true
    }
    return ship;
}

function secureSpot(ship) {

    let row = randomNumber10();
    let column = randomNumber10();

    if (ship.vert) {
        if (ship.length + row > 10) {
            return secureSpot(ship);
        }
    }
    else if (!ship.vert) {
        if (ship.length + column > 10) {
            return secureSpot(ship);
        }
    }
    else {
        return {
            row,
            column
        }
    }
}

// FUNCTION FOR PLACESHIP WORKS FOR MANUAL CLICK

// NEED IT TO WORK FOR RANDOM PLACEMENT
        // IF CONFLICT/FAIL -> TRY AGAIN


// ALSO NEED RANDOM VERT TRUE/FALSE