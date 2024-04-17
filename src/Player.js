import Gameboard from "./Gameboard";

export default class Player {
    constructor() {
        this.remainingMoves = this.allMoves();
        this.playerTurn = true;
    }

    ///
    /// MAIN TAKE TURN METHOD ??
    /// changes playerTurn
    ///

    // ABILITY TO TAKE TURNS ATTACKING ENEMY GAMEBOARD
        // SWITCH GAMEBOARD
        // SWITCH PLAYER
        // 

    // CREATE AI FOR COMPUTER
        // LEGAL MOVES
        // ADJACENT MOVES IF HIT


    // 

    allMoves() {
        let moves = [];
        for (let i=0; i<10; i++) {
            for (let j=0; j<10; j++) {
                moves.push([i, j]);
            }
        }
        return moves;
    }


    eventHandler(row, column, board) {
        if (this.playerTurn) {
            this.player1.playerMove(row, column, board);
        }
    }

    playerMove(row, column, computerBoard) {

        computerBoard.receiveAttack(row, column);

        if (computerBoard.board[row][column] == 2) {
            this.playerTurn = false;
        }
    }

    randomIndex(highValue) {
        return Math.floor(Math.random() * highValue)
    }

    computerMove(playerBoard) {

        // GET RANDOM INDEX OF REMAINING MOVES
        let index = this.randomIndex(this.remainingMoves.length);
        // GET COORDS AT INDEX
        let move = this.remainingMoves[index];
        // REMOVE COORDS FROM REMAINING MOVES
        this.remainingMoves.splice(index, 1);

        let row = move[0];
        let column = move[1];
        
        // MISS
        if (playerBoard.board[row][column] == 0) {
            return playerBoard.receiveAttack(row, column);
        }
        // HIT
        else if (playerBoard.board[row][column] == 1) {
            playerBoard.receiveAttack(row, column);
            // MOVE AGAIN
            if (this.remainingMoves.length) {
            this.computerMove(playerBoard);
            }
        }

}


    adjacentMove(row, column, playerBoard) {
        
        // CREATE LIST OF POSSIBLE SMART MOVES
        let possibleMoves = [];

        let up = row+1;
        let down = row-1;
        let left = column-1;
        let right = column+1;

        if (up<10 && !this.rememberMoves.includes([up, column])) {
            possibleMoves.push([up, column])
        };
        if (down>=0 && !this.rememberMoves.includes([down, column])) {
            possibleMoves.push([down, column])
        };
        if (left>=0 && !this.rememberMoves.includes([row, left])) {
            possibleMoves.push([row, left])
        };
        if (right<10 && !this.rememberMoves.includes([row, right])) {
            possibleMoves.push([row, right]);
        }

        // IF NO SMART MOVES, CREATE RANDOM MOVE
        if (possibleMoves.length = 0) {
            setTimeout(() => {
                this.computerMove(playerBoard);
            }, 1000);
        }

        let randomChoice = Math.floor(Math.random()*possibleMoves.length);

        if (possibleMoves.length = 4) {
            let move = possibleMoves[randomChoice];
            playerBoard.receiveAttack(move[0], move[1]);

            if (playerBoard.board[move[0]][move[1]] == 3) {
                // START LOOP FOR ONE DIRECTION
            }
            else {
                // END TURN
            }
        }
        else if (possibleMoves.length < 4) {

        }


        // 4 POSSIBLE MOVES === FIRST HIT

        // 3 POSSIBLE MOVES === FIRST OR SECOND HIT
        // 2 === FIRST OR SECOND HIT
        // 1 === FIRST OR SECOND HIT


        // if 0, END

        // if 1, 2 possible moves

        // if 0, END

        // if 1, 2 possible moves

        // if 0, END

        // if 1, 2 possible moves


        // 4 possible
        // 2 possible if !rememberMoves
        // 2 possible if !rememberMoves
        // 2 possible if !rememberMoves
        // 2 possible if !rememberMoves


    }

}