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

    // HELPER FUNCTION TO SEARCH REMAINING MOVES
    searchRemainingMoves(parentArray, childArray) {
        for (let i=0; i<parentArray.length; i++) {
            if (parentArray[i].every(function(value, index) {
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

        if (up>=0 && this.searchRemainingMoves(this.remainingMoves, [up, column])) {
            possibleMoves.push([up, column])
        };
        if (down<10 && this.searchRemainingMoves(this.remainingMoves, [down, column])) {
            possibleMoves.push([down, column])
        };
        if (left>=0 && this.searchRemainingMoves(this.remainingMoves, [row, left])) {
            possibleMoves.push([row, left])
        };
        if (right<10 && this.searchRemainingMoves(this.remainingMoves, [row, right])) {
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
            // return this.directedHit(row, column, newRow, newColumn, playerBoard);
            return this.adjacentMove(newRow, newColumn, playerBoard);
        }
    }

    directedMove(oldRow, oldColumn, newRow, newColumn, playerBoard) {

        // ISSUE !!!!   NEED TO FIGURE OUT WHAT'S GOING ON BEFORE CHECKING VALID MOVES OR ELSE THIS ONLY WORKS FOR NEXT MOVE

        // IF FIRST MOVE 3,3 THEN ADJACENT MOVE 3,4 THEN DIRECTED MOVE 3,2 AND HIT, DIFFERENT FROM IF MOVES 3,3 3,4 3,5 BC ONLY LOOKING AT LAST TWO MOVES

        //    0 1 2 3 4 5 6 7 8 9
        // 0 [0,0,0,0,0,0,0,0,0,0],
        // 1 [0,0,0,0,0,0,0,0,0,0],
        // 2 [0,0,0,0,0,0,0,0,0,0],
        // 3 [1,1,3,3,1,0,0,0,0,0],
        // 4 [0,0,0,0,0,0,0,0,0,0],
        // 5 [0,0,0,0,0,0,0,1,0,0],
        // 6 [0,0,0,0,0,0,0,1,0,0],
        // 7 [0,0,0,0,0,0,0,3,0,0],
        // 8 [0,0,0,0,0,0,0,3,0,0],
        // 9 [0,0,0,0,0,0,0,1,0,0]


        // if oldRow > newRow
        // if oldRow == newRow              figure out and 
        // if oldRow < newRow               keep track of top n bottom

        let possibleMoves = [];

        //
        // NEW ROW ON TOP, OLD ROW ON BOT
        if (oldRow > newRow) {


        }

        //
        // OLD ROW ON TOP, NEW ROW ON BOT
        else if (oldRow < newRow) {

        }

        //
        // NEW COLUMN ON LEFT OLD COLUMN ON RIGHT
        else if (oldColumn > newColumn) {
            let left = newColumn;
            let right = oldColumn;

            if (left >=0 && this.searchRemainingMoves(this.remainingMoves.length, [oldRow, left-1])) {
                possibleMoves.push(left-1);
            }
            if (right < 10 && this.searchRemainingMoves(this.remainingMoves.length, [oldRow, right+1])) {
                possibleMoves.push(right+1);
            }

            if (possibleMoves.length !=0) {
                // PICK MOVE AT RANDOM
                let index = randomIndex(possibleMoves.length);
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
                        return this.directedMove(oldRow, left, newRow, newBookendColumn);
                    }
                    else if (possibleMoves[index < left]) {
                        let newBookendColumn = possibleMoves[index];
                        return this.directedMove(oldRow, newBookendColumn, newRow, right);
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

            // IF NEW MOVE VALID, ADD TO POSSIBLE MOVES FOR LEFT AND RIGHT +-1
            if (left >= 0 && this.searchRemainingMoves(this.remainingMoves.length, [oldRow, left-1])) {
                possibleMoves.push(left-1);
            }
            if (right < 10 && this.searchRemainingMoves(this.remainingMoves.length, [oldRow, right+1])) {
                possibleMoves.push(right+1);
            }

            // IF THERE ARE VALID MOVES
            if (possibleMoves.length !=0) {
                // PICK MOVE AT RANDOM AND REMOVE FROM REMAINING MOVES
                let index = randomIndex(possibleMoves.length);
                let remainingMovesIndex = this.remainingMoves.indexOf([oldRow, possibleMoves[index]]);
                this.remainingMoves.splice(remainingMovesIndex, 1);

                // IF HIT
                if (playerBoard.board[oldRow][possibleMoves[index]] == 1) {
                    // RECEIVE ATTACK
                    playerBoard.receiveAttack(oldRow, possibleMoves[index]);
                    // RUN DIRECTED MOVE WITH NEW BOOKENDS
                    if (possibleMoves[index] > right) {
                        let newBookendColumn = possibleMoves[index];
                        return this.directedMove(oldRow, left, newRow, newBookendColumn);
                    }
                    else if (possibleMoves[index < left]) {
                        let newBookendColumn = possibleMoves[index];
                        return this.directedMove(oldRow, newBookendColumn, newRow, right);
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

        // FIND TOP/BOTTOM OR LEFT/RIGHT


        // CREATE LIST OF POSSIBLE SMART DIRECTED MOVES






    }

}