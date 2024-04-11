import Ship from "./Ship";

// 0 = NOTHING
// 1 = SHIP
// 2 = HIT
// 3 = MISS


export default class Gameboard {

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

    // RECEIVE ATTACK FUNCTION 
            // TAKES PAIR OF COORDS, DETERMINES HIT/MISS, SHIP.HIT() FOR CORRECT SHIP OR RECORDS COORDS OF MISS

    // KEEPS TRACK OF MISSES

    // REPORT IF ALL SHIPS ARE SUNK





}