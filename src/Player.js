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
        
        // CREATE LIST OF POSSIBLE SMART MOVES
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

        console.log(possibleMoves)

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

    directedHit(oldRow, oldColumn, newRow, newColumn, playerBoard) {

        // if oldRow = newRow ---- 
        //      possible = 
                    // LEFT = [row,oldColumn-1] 
                    // RIGHT = [row,newColumn+1]
                // CHECK REMAINING MOVES



    }

}