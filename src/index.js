import './style.css';
import newGame from './newGame';


// GENERATES COMPUTER BOARD W RANDOM SHIP PLACEMENTS

let game = newGame();

let computer = game.compBoard               // GAMEBOARD
let compBoard = game.compBoard.board;       // GAMEBOARD.BOARD
let player1 = game.playerBoard;             // GAMEBOARD
let playerBoard = game.playerBoard.board;   // GAMEBOARD.BOARD
let comp = game.computer;                   // PLAYER
let player = game.player1;                  // PLAYER

let playerTurn = true;


// PLAYERBOARD PLACEMENT FOR TESTING
game.playerBoard.placeShip(game.playerBoard.ships.ship1, 0, 0);
game.playerBoard.placeShip(game.playerBoard.ships.ship2, 1, 0);
game.playerBoard.placeShip(game.playerBoard.ships.ship3, 2, 0);
game.playerBoard.placeShip(game.playerBoard.ships.ship4, 3, 0);
game.playerBoard.placeShip(game.playerBoard.ships.ship5, 4, 0);

let main = document.createElement("div");
main.classList.add("main");
document.body.appendChild(main);

let playerGameBoard = document.createElement("div");
playerGameBoard.classList.add("playerBoard");
playerGameBoard.classList.add("gameBoard");
main.appendChild(playerGameBoard);

let compGameBoard = document.createElement("div");
compGameBoard.classList.add("compBoard");
compGameBoard.classList.add("gameBoard");
main.appendChild(compGameBoard);

function generatePlayerBoard() {
    playerGameBoard.innerHTML = "";
    for (let i=0; i<10; i++) {
        for (let j=0; j<10; j++) {
            let gridSquare = document.createElement("div");
            playerGameBoard.appendChild(gridSquare);
            gridSquare.classList.add("gridSquare");
            gridSquare.setAttribute("row", i);
            gridSquare.setAttribute("column", j);
            // ADD EVENT LISTENER FOR PLACE SHIP

            if (playerBoard[i][j] == 0) {
                gridSquare.classList.add("empty");
            }
            else if (playerBoard[i][j] == 1) {
                gridSquare.classList.add("ship");
            }
            else if (playerBoard[i][j] == 2) {
                gridSquare.classList.add("miss");
            }
            else if (playerBoard[i][j] == 3) {
                gridSquare.classList.add("hit");
            }
        }
    }
}

function generateComputerBoard() {
    compGameBoard.innerHTML = "";
    for (let i=0; i<10; i++) {
        for (let j=0; j<10; j++) {
            let gridSquare = document.createElement("div");
            compGameBoard.appendChild(gridSquare);
            gridSquare.classList.add("gridSquare");
            gridSquare.setAttribute("row", i);
            gridSquare.setAttribute("column", j);
            gridSquare.onclick = function(e) {
                let row = e.target.getAttribute("row");
                let col = e.target.getAttribute("column");
                player.playerMove(row, col, computer, player1);
                generateComputerBoard();
                generatePlayerBoard();
            }

            if (compBoard[i][j] == 0) {
                gridSquare.classList.add("empty");
            }
            else if (compBoard[i][j] == 2) {
                gridSquare.classList.add("miss");
            }
            else if (compBoard[i][j] == 1) {
                gridSquare.classList.add("empty");
            }
            else if (compBoard[i][j] == 3) {
                gridSquare.classList.add("hit");
            }
        }
    }
}



generatePlayerBoard();
generateComputerBoard();

console.log(game.compBoard.board);