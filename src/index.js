import './style.css';
import newGame from './newGame';


// GENERATES COMPUTER BOARD W RANDOM SHIP PLACEMENTS

let game = newGame();

let compBoard = game.compBoard.board;
let playerBoard = game.playerBoard.board;
let comp = game.computer;
let player = game.player1;

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

function generateBoard(divBoard, gameBoard) {
    for (let i=0; i<10; i++) {
        for (let j=0; j<10; j++) {
            let gridSquare = document.createElement("div");
            divBoard.appendChild(gridSquare);
            gridSquare.classList.add("gridSquare");
            gridSquare.setAttribute("row", i);
            gridSquare.setAttribute("column", j);

            if (gameBoard[i][j] == 0) {
                gridSquare.classList.add("empty");
            }
            else if (gameBoard[i][j] == 1) {
                gridSquare.classList.add("ship");
            }
            else if (gameBoard[i][j] == 2) {
                gridSquare.classList.add("miss");
            }
            else if (gameBoard[i][j] == 3) {
                gridSquare.classList.add("hit");
            }
        }
    }
}

generateBoard(playerGameBoard, playerBoard);
generateBoard(compGameBoard, compBoard);