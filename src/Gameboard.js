import Ship from "./Ship";

// 0 = NOTHING
// 1 = SHIP             <<< add 1 every time
// 2 = MISS             <<< add 2 every time
// 3 = HIT

let ship5 = new Ship(5);
let ship4 = new Ship(4);
let ship3 = new Ship(3);
let ship2 = new Ship(3);
let ship1 = new Ship(2);


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

    // board[ROW][COLUMN]
    // board[Y][X]

    placeShip(ship, row, column) {
        
        // VERT = TRUE/FALSE
        // IF PLACEMENT OUT OF BOUNDS, RETURNS ORIGINAL BOARD
        // CHECKS FOR COLLISIONS, RETURNS ORIGINAL BOARD IF EXIST

        if (ship.vert && row + ship.length < 11) {
            let conflict = true;
            for (let i=row; i<row + ship.length; i++) {
                if (this.board[i][column] == 1) {
                    return this.board;
                }
                else {conflict = false}
            }
            if (!conflict) {
                for (let i=row; i<row + ship.length; i++) {
                    this.board[i][column] = 1;
                    //ship.placement.push()
                }
            }
        }

        if (!ship.vert && column + ship.length < 11) {
            let conflict = true;
            for (let i=column; i<column + ship.length; i++) {
                if (this.board[row][i] == 1) {
                    return this.board;
                }
                else {conflict = false}
            }
            if (!conflict) {
                for (let i=column; i<column + ship.length; i++) {
                    this.board[row][i] = 1;
                }
            }
        }
        
        return this.board;

    };

    receiveAttack(row, column) {

        if (this.board[row][column] == 0) {
            this.board[row][column] = 2;
        }
        else if (this.board[row][column] == 1) {
            this.board[row][column] = 3;

        }

        return this.board;

    }

    // RECEIVE ATTACK FUNCTION 
            // TAKES PAIR OF COORDS, DETERMINES HIT/MISS, SHIP.HIT() FOR CORRECT SHIP OR RECORDS COORDS OF MISS

    // KEEPS TRACK OF MISSES

    // REPORT IF ALL SHIPS ARE SUNK





}