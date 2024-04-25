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

    // HELPER FUNCTION TO SEARCH REMAINING MOVES
    searchRemainingMoves(childArray) {
        for (let i=0; i<this.remainingMoves.length; i++) {
            if (this.remainingMoves[i].every(function(value, index) {
                return value === childArray[index]})) {
                    return true;
                }
        }
        return false;
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
            // MOVE AGAIN W SMART MOVE
            return this.adjacentMove(row, column, playerBoard);
        }
}

    adjacentMove(row, column, playerBoard) {
        
        // CREATE LIST OF POSSIBLE SMART ADJACENT MOVES
        let possibleMoves = [];

        let up = row-1;
        let down = row+1;
        let left = column-1;
        let right = column+1;

        if (up>=0 && this.searchRemainingMoves([up, column])) {
            possibleMoves.push([up, column])
        };
        if (down<10 && this.searchRemainingMoves([down, column])) {
            possibleMoves.push([down, column])
        };
        if (left>=0 && this.searchRemainingMoves([row, left])) {
            possibleMoves.push([row, left])
        };
        if (right<10 && this.searchRemainingMoves([row, right])) {
            possibleMoves.push([row, right])
        }

        // IF NO SMART MOVES, GO BACK TO RANDOM MOVE
        if (possibleMoves.length == 0) {
            return this.computerMove(playerBoard);
        }

        // PICK MOVE RANDOMLY FROM POSSIBLE MOVES
        let randomIndex = this.randomIndex(possibleMoves.length);
        let move = possibleMoves[randomIndex];

        // SAVE MOVES AS NEWROW AND NEWCOLUMN
        let newRow = move[0];
        let newColumn = move[1];

        // REMOVE NEW MOVE FROM REMAINING MOVES
        let remainingMovesIndex = this.remainingMoves.indexOf([newRow, newColumn]);
        this.remainingMoves.splice(remainingMovesIndex, 1);

        // MISS -- DOCUMENT ATTACK AND END
        if (playerBoard.board[newRow][newColumn] == 0) {
            return playerBoard.receiveAttack(newRow, newColumn);
        }
        // HIT -- DOCUMENT ATTACK AND RUN DIRECTED MOVE
        else if (playerBoard.board[newRow][newColumn] == 1) {
            playerBoard.receiveAttack(newRow, newColumn);
            return this.directedMove(row, column, newRow, newColumn, playerBoard);
        }
    }

    directedMove(oldRow, oldColumn, newRow, newColumn, playerBoard) {

        //
        // NEW ROW ON TOP, OLD ROW ON BOT
        if (oldRow > newRow) {
            let top = newRow;
            let bot = oldRow;
            let possibleMoves = [];

            // CHECK IF ABOVE/BELOW ARE VALID MOVES

            let newTop = top-1;
            let newBot = bot+1;

            if (top > 0 && this.searchRemainingMoves([newTop, oldColumn])) {
                possibleMoves.push(newTop);
            }
            if (bot < 9 && this.searchRemainingMoves([newBot, oldColumn])) {
                possibleMoves.push(newBot);
            }

            // IF VALID MOVE
            if (possibleMoves.length != 0) {
                // PICK MOVE AT RANDOM
                let index = this.randomIndex(possibleMoves.length);
                // REMOVE MOVE FROM REMAININGMOVES
                let remainingMovesIndex = this.remainingMoves.indexOf([possibleMoves[index], oldColumn]);
                this.remainingMoves.splice(remainingMovesIndex, 1);

                // IF HIT
                if (playerBoard.board[possibleMoves[index]][oldColumn] == 1) {
                    // RECEIVE ATTACK
                    playerBoard.receiveAttack(possibleMoves[index], oldColumn);
                    // RUN DIRECTED MOVE WITH NEW BOOKENDS
                    if (possibleMoves[index] < top) {
                        let newBookendRow = possibleMoves[index];
                        return this.directedMove(newBookendRow, oldColumn, bot, newColumn, playerBoard);
                    }
                    else if (possibleMoves[index] > bot) {
                        let newBookendRow = possibleMoves[index];
                        return this.directedMove(newBookendRow, oldColumn, top, newColumn, playerBoard);
                    }
                }
                // IF MISS
                else if (playerBoard.board[possibleMoves[index]][oldColumn] == 0) {
                    return playerBoard.receiveAttack(possibleMoves[index], oldColumn);
                }
            }
            // NO VALID MOVES -- RANDOM MOVE
            else {
                return this.computerMove(playerBoard);
            }

        }

        //
        // OLD ROW ON TOP, NEW ROW ON BOT
        else if (oldRow < newRow) {
            let top = oldRow;
            let bot = newRow;
            let possibleMoves = [];

            // CHECK IF ABOVE/BELOW ARE VALID MOVES

            let newTop = top-1;
            let newBot = bot+1;

            if (top > 0 && this.searchRemainingMoves([newTop, oldColumn])) {
                possibleMoves.push(newTop);
            }
            if (bot < 9 && this.searchRemainingMoves([newBot, oldColumn])) {
                possibleMoves.push(newBot);
            }

            // IF VALID MOVE
            if (possibleMoves.length != 0) {
                // PICK MOVE AT RANDOM
                let index = this.randomIndex(possibleMoves.length);
                // REMOVE MOVE FROM REMAININGMOVES
                let remainingMovesIndex = this.remainingMoves.indexOf([possibleMoves[index], oldColumn]);
                this.remainingMoves.splice(remainingMovesIndex, 1);

                // IF HIT
                if (playerBoard.board[possibleMoves[index]][oldColumn] == 1) {
                    // RECEIVE ATTACK
                    playerBoard.receiveAttack(possibleMoves[index], oldColumn);
                    // RUN DIRECTED MOVE WITH NEW BOOKENDS
                    if (possibleMoves[index] < top) {
                        let newBookendRow = possibleMoves[index];
                        return this.directedMove(newBookendRow, oldColumn, bot, newColumn, playerBoard);
                    }
                    else if (possibleMoves[index] > bot) {
                        let newBookendRow = possibleMoves[index];
                        return this.directedMove(newBookendRow, oldColumn, top, newColumn, playerBoard);
                    }
                }
                // IF MISS
                else if (playerBoard.board[possibleMoves[index]][oldColumn] == 0) {
                    return playerBoard.receiveAttack(possibleMoves[index], oldColumn);
                }
            }
            // NO VALID MOVES -- RANDOM MOVE
            else {
                return this.computerMove(playerBoard);
            }
        }

        //
        // NEW COLUMN ON LEFT OLD COLUMN ON RIGHT
        else if (oldColumn > newColumn) {
            let left = newColumn;
            let right = oldColumn;
            let possibleMoves = [];

            let newLeft = left-1;
            let newRight = right+1;

            if (left > 0 && this.searchRemainingMoves([oldRow, newLeft])) {
                possibleMoves.push(newLeft);
            }
            if (right < 9 && this.searchRemainingMoves([oldRow, newRight])) {
                possibleMoves.push(newRight);
            }

            if (possibleMoves.length !=0) {
                // PICK MOVE AT RANDOM
                let index = this.randomIndex(possibleMoves.length);
                // REMOVE MOVE FROM REMAININGMOVES
                let remainingMovesIndex = this.remainingMoves.indexOf([oldRow, possibleMoves[index]]);
                this.remainingMoves.splice(remainingMovesIndex, 1);

                // IF HIT
                if (playerBoard.board[oldRow][possibleMoves[index]] == 1) {
                    // RECEIVE ATTACK
                    playerBoard.receiveAttack(oldRow, possibleMoves[index]);
                    // RUN DIRECTED MOVE WITH NEW BOOKENDS
                    if (possibleMoves[index] > right) {
                        let newBookendColumn = possibleMoves[index];
                        return this.directedMove(oldRow, left, newRow, newBookendColumn, playerBoard);
                    }
                    else if (possibleMoves[index] < left) {
                        let newBookendColumn = possibleMoves[index];
                        return this.directedMove(oldRow, newBookendColumn, newRow, right, playerBoard);
                    }
                }
                // IF MISS
                else if (playerBoard.board[oldRow][possibleMoves[index]] == 0) {
                    return playerBoard.receiveAttack(oldRow, possibleMoves[index]);
                }
            }
            else {
                return this.computerMove(playerBoard);
            }
        }

        //
        // OLD COLUMN ON LEFT NEW COLUMN ON RIGHT
        else if (oldColumn < newColumn) {
            let left = oldColumn;
            let right = newColumn;
            let possibleMoves = [];

            // IF NEW MOVE VALID, ADD TO POSSIBLE MOVES FOR LEFT AND RIGHT +-1

            let newLeft = left-1;
            let newRight = right+1;

            if (left > 0 && this.searchRemainingMoves([oldRow, newLeft])) {
                possibleMoves.push(newLeft);
            }
            if (right < 9 && this.searchRemainingMoves([oldRow, newRight])) {
                possibleMoves.push(newRight);
            }

            // IF THERE ARE VALID MOVES
            if (possibleMoves.length !=0) {
                // PICK MOVE AT RANDOM AND REMOVE FROM REMAINING MOVES
                let index = this.randomIndex(possibleMoves.length);
                let remainingMovesIndex = this.remainingMoves.indexOf([oldRow, possibleMoves[index]]);
                this.remainingMoves.splice(remainingMovesIndex, 1);

                // IF HIT
                if (playerBoard.board[oldRow][possibleMoves[index]] == 1) {
                    // RECEIVE ATTACK
                    playerBoard.receiveAttack(oldRow, possibleMoves[index]);
                    // RUN DIRECTED MOVE WITH NEW BOOKENDS
                    if (possibleMoves[index] > right) {
                        let newBookendColumn = possibleMoves[index];
                        return this.directedMove(oldRow, left, newRow, newBookendColumn, playerBoard);
                    }
                    else if (possibleMoves[index] < left) {
                        let newBookendColumn = possibleMoves[index];
                        return this.directedMove(oldRow, newBookendColumn, newRow, right, playerBoard);
                    }
                }
                // IF MISS
                else if (playerBoard.board[oldRow][possibleMoves[index]] == 0) {
                    return playerBoard.receiveAttack(oldRow, possibleMoves[index]);
                }
            }
            // IF THERE ARE NO VALID MOVES, RANDOM ATTACK
            else {
                return this.computerMove(playerBoard);
            }

        }
    }

}