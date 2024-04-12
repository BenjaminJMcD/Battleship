import Ship from "./Ship";

// 0 = NOTHING
// 1 = SHIP
// 2 = HIT
// 3 = MISS

let ship5 = new Ship(5);
let ship4 = new Ship(4);
let ship3 = new Ship(3);
let ship33 = new Ship(3);
let ship2 = new Ship(2);


export default class Gameboard {
    constructor() {
        this.board = this.createBoard();
    }
    
    createBoard() {
        let board = [];
        for (let i=0; i<10; i++) {
            board[i] = [];
            for (let j=0; j<10; j++) {
                board[i][j] = 0;
            }
        }
        return board;
    }


    // PLACE SHIP AT SPECIFIC COORDINATES BY CALLING SHIP.JS

    placeShip(ship, coordX, coordY) {
        
        // VERT = TRUE/FALSE

        

        if (!ship.vert && coordX + ship.length < 10) {
            for (let i=coordX; i < coordX + ship.length; i++)
            this.board[coordY][i] = 1;
        }

        return this.board;

        // CHECK NO OTHER SHIPS IN THOSE SPOTS

        // if all spots = 0, change to 1

        // return this...........




    }

    // RECEIVE ATTACK FUNCTION 
            // TAKES PAIR OF COORDS, DETERMINES HIT/MISS, SHIP.HIT() FOR CORRECT SHIP OR RECORDS COORDS OF MISS

    // KEEPS TRACK OF MISSES

    // REPORT IF ALL SHIPS ARE SUNK





}