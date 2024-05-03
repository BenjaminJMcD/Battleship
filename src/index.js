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


// PLAYERBOARD PLACEMENT FOR TESTING
// game.playerBoard.placeShip(game.playerBoard.ships.ship1, 0, 0);
// game.playerBoard.placeShip(game.playerBoard.ships.ship2, 1, 0);
// game.playerBoard.placeShip(game.playerBoard.ships.ship3, 2, 0);
// game.playerBoard.placeShip(game.playerBoard.ships.ship4, 3, 0);
// game.playerBoard.placeShip(game.playerBoard.ships.ship5, 4, 0);

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

    let dropRow = 0;
    let dropCol = 0;

    for (let i=0; i<10; i++) {
        for (let j=0; j<10; j++) {
            let gridSquare = document.createElement("div");
            playerGameBoard.appendChild(gridSquare);
            gridSquare.classList.add("gridSquare");
            gridSquare.classList.add("playerGridSquare");
            gridSquare.setAttribute("row", i);
            gridSquare.setAttribute("column", j);
            // ADD EVENT LISTENER FOR PLACE SHIP

            gridSquare.ondragover = function(e) {
                e.preventDefault();
                dropRow = e.target.getAttribute("row");
                dropCol = e.target.getAttribute("column");
            }

            gridSquare.ondrop = function(e) {
                e.preventDefault();
                let ship = e.dataTransfer.getData("text/html");

                if (ship === 'ship1') {
                    game.playerBoard.placeShip(game.playerBoard.ships.ship1, dropRow, dropCol);
                }
                else if (ship === 'ship2') {
                    game.playerBoard.placeShip(game.playerBoard.ships.ship2, dropRow, dropCol);
                }
                else if (ship === 'ship3') {
                    game.playerBoard.placeShip(game.playerBoard.ships.ship3, dropRow, dropCol);
                }
                else if (ship === 'ship4') {
                    game.playerBoard.placeShip(game.playerBoard.ships.ship4, dropRow, dropCol);
                }
                else if (ship === 'ship5') {
                    game.playerBoard.placeShip(game.playerBoard.ships.ship5, dropRow, dropCol);
                }

                generatePlayerBoard();
            }


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

            // CHECK WIN/LOSE. REMOVE ONCLICK AND ANNOUNCE RESULT
            let win = computer.reportSunk();
            let lose = player1.reportSunk();
            if (win == true) {
                gridSquare.onclick = null;


                // PLAYER WINS FUNCTION (prompt w start over button ?)
            
            
            }
            if (lose == true) {
                gridSquare.onclick = null;


                // PLAYER LOSES FUNCTION
            
            
            }

            if (compBoard[i][j] == 0) {
                gridSquare.classList.add("empty");
            }
            else if (compBoard[i][j] == 2) {
                gridSquare.classList.add("miss");
                gridSquare.onclick = null;
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

// SHIPS TO BE PLACED 

// SHIPS CONTAINER
let shipsContainer = document.createElement("div");
shipsContainer.classList.add("shipsContainer");
main.appendChild(shipsContainer);

// CREATE SHIPS
let placeShip1 = document.createElement("div");
addShipSquares(placeShip1, 2);
placeShip1.setAttribute("ship", "ship1");
shipsContainer.appendChild(placeShip1);

let placeShip2 = document.createElement("div");
addShipSquares(placeShip2, 3);
placeShip2.setAttribute("ship", "ship2");
shipsContainer.appendChild(placeShip2);

let placeShip3 = document.createElement("div");
addShipSquares(placeShip3, 3);
placeShip3.setAttribute("ship", "ship3");
shipsContainer.appendChild(placeShip3);

let placeShip4 = document.createElement("div");
addShipSquares(placeShip4, 4);
placeShip4.setAttribute("ship", "ship4");
shipsContainer.appendChild(placeShip4);

let placeShip5 = document.createElement("div");
addShipSquares(placeShip5, 5);
placeShip5.setAttribute("ship", "ship5");
shipsContainer.appendChild(placeShip5);
placeShip5 = game.playerBoard.ships.ship5;

function addShipSquares(shipDiv, length) {
    shipDiv.classList.add("shipDiv");
    for (let i=0; i<length; i++) {
        let shipSquare = document.createElement("div");
        shipSquare.classList.add("shipSquare");
        shipDiv.appendChild(shipSquare);
    }
}

// ADD DRAGGABLE TO ALL SHIPS

let ships = document.querySelectorAll('.shipDiv');
ships.forEach(ship => {
    ship.setAttribute("draggable", "true");
    ship.addEventListener("dragstart", handleDragStart);
    ship.addEventListener("dragend", handleDragEnd);
});

function handleDragStart(e) {
    this.style.opacity = "0.4"
    e.dataTransfer.setDragImage(e.target, 25, 20);
    let ship = e.target.getAttribute("ship");
    e.dataTransfer.setData("text/html", ship)
}

function handleDragEnd(e) {
    this.style.opacity = "0.4";
}




// EVENT LISTENER FOR CLICK, DRAG, DROP ON GRIDSQUARE

// CHANGE ORIENTATION WHEN PRESS SHIFT WHILE DRAGGING ???



generatePlayerBoard();
generateComputerBoard();

