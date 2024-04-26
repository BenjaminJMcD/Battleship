import Ship from "./Ship";

// 0 = NOTHING
// 1 = SHIP             <<< add 1
// 2 = MISS             <<< add 2 
// 3 = HIT              <<< add 2

export default class Gameboard {
    constructor() {
        this.board = this.createBoard();
        this.ships = {
            ship1 : new Ship(2),
            ship2 : new Ship(3),
            ship3 : new Ship(3),
            ship4 : new Ship(4),
            ship5 : new Ship(5),
        }
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

    // board[ROW][COLUMN]

    placeShip(ship, row, column) {
        
        // VERT = TRUE/FALSE
        // IF PLACEMENT OUT OF BOUNDS, RETURNS ORIGINAL BOARD
        // CHECKS FOR COLLISIONS, RETURNS ORIGINAL BOARD IF COLLISION

        if (ship.vert && row+ship.length < 11) {
            let conflict = true;
            for (let i=row; i<row+ship.length; i++) {
                if (this.board[i][column] == 1) {
                    return this.board;
                }
                else {conflict = false}
            }
            if (!conflict) {
                for (let i=row; i<row+ship.length; i++) {
                    this.board[i][column] = 1;
                    let coord = [];
                    coord.push(i);
                    coord.push(column);
                    ship.placement.push(coord);
                }
            }
        }

        if (!ship.vert && column+ship.length < 11) {
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
                    let coord = [];
                    coord.push(row);
                    coord.push(i);
                    ship.placement.push(coord);
                }
            }
        }
        return this.board;
    };

    receiveAttack(row, column) {

        // MISS
        if (this.board[row][column] == 0) {
            // RECORD MISS ON GAMEBOARD
            this.board[row][column] = 2;
        }
        // HIT
        else if (this.board[row][column] == 1) {
            // RECORD HIT ON GAMEBOARD
            this.board[row][column] = 3;

            // RECORD HIT ON SHIP
            let coord = [row, column];
            let ships = this.ships;
            for (const ship in ships) {
                let placements = ships[ship].placement;
                for (const coords in placements) {
                    if (placements[coords][0] == coord[0] && placements[coords][1] == coord[1]) {
                        ships[ship].hit();
                    }
                }   
            }
        }
        // return this.board;
    }

    // REPORT IF ALL SHIPS ARE SUNK

    reportSunk() {

        let gameOver = false;
        let sunkArray = [];

        let ships = this.ships;

        for (const ship in ships) {
            // RUN ISSUNK() ON ALL SHIPS
            ships[ship].isSunk();
            // PUSH SUNKEN SHIPS TO ARRAY
            if (ships[ship].sunk) {
                sunkArray.push(ships[ship]);
            }
        }
        if (sunkArray.length == 5) {
            gameOver = true;
        }
        return gameOver
    }


}