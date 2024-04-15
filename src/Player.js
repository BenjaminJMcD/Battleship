import Gameboard from "./Gameboard";

export default class Player {
    constructor() {
        this.rememberMoves = [];
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

    computerMove(playerBoard) {

        let rowRandom = Math.floor(Math.random() * 10);
        let columnRandom = Math.floor(Math.random() * 10);

        // DONT REPEAT MOVES
        if (!this.rememberMoves.includes([rowRandom, columnRandom])) {
            // MISS
            if (playerBoard.board[rowRandom][columnRandom] == 0) {
                this.rememberMoves.push([rowRandom, columnRandom]);
                this.playerTurn = true;
                return playerBoard.receiveAttack(rowRandom, columnRandom);
            }
            // HIT
            else if (playerBoard.board[rowRandom][columnRandom] == 1) {
                this.rememberMoves.push([rowRandom, columnRandom]);
                playerBoard.receiveAttack(rowRandom, columnRandom);
                // MOVE AGAIN
                this.computerMove(playerBoard);
            }
        }
        // REPEATED MOVE -- TRY AGAIN W NEW COORD
        else {
            this.computerMove(playerBoard);
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