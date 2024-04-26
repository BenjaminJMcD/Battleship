import Gameboard from "./Gameboard";

export default function CompBoard() {

    let compBoard = new Gameboard;

    let compShips = compBoard.ships;
    
    for (const ship in compShips) {
        alternateVert(compShips[ship])
    }

    let ship1 = compBoard.ships.ship1;
    let ship2 = compBoard.ships.ship2;
    let ship3 = compBoard.ships.ship3;
    let ship4 = compBoard.ships.ship4;
    let ship5 = compBoard.ships.ship5;

    do {
    let ship1Coords = secureSpot(ship1);
    compBoard.placeShip(ship1, ship1Coords.row, ship1Coords.column);
    } while (ship1.placement.length == 0)

    do {
    let ship2Coords = secureSpot(ship2);
    compBoard.placeShip(ship2, ship2Coords.row, ship2Coords.column);
    } while (ship2.placement.length == 0);

    do {
    let ship3Coords = secureSpot(ship3);
    compBoard.placeShip(ship3, ship3Coords.row, ship3Coords.column);
    } while (ship3.placement.length == 0);

    do {
    let ship4Coords = secureSpot(ship4);
    compBoard.placeShip(ship4, ship4Coords.row, ship4Coords.column);
    } while (ship4.placement.length == 0);

    do {
    let ship5Coords = secureSpot(ship5);
    compBoard.placeShip(ship5, ship5Coords.row, ship5Coords.column);
    } while (ship5.placement.length == 0)
    

    return compBoard;

}
    
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
        let row = randomNumber(ship.length+1);
        let column = randomNumber(10);
        return {
            row,
            column
        }
    }
    else if (!ship.vert) {
        let row = randomNumber(10);
        let column = randomNumber(ship.length+1);
        return {
            row,
            column
        }
    }
}