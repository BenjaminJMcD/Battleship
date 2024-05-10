import './style.css';
import newGame from './newGame';


// GENERATES COMPUTER BOARD W RANDOM SHIP PLACEMENTS

let game = newGame();

let computer = game.compBoard               // GAMEBOARD
let compBoard = game.compBoard.board;       // GAMEBOARD.BOARD
let player1 = game.playerBoard;             // GAMEBOARD
let playerBoard = game.playerBoard.board;   // GAMEBOARD.BOARD
let player = game.player1;                  // PLAYER

let header = document.createElement("div");
header.classList.add("header");
header.innerText = "BATTLESHIP";
document.body.appendChild(header);

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
            // CREATE AND APPEND GRIDSQUARES WITH ROW/COL ATTRIBUTES
            let gridSquare = document.createElement("div");
            playerGameBoard.appendChild(gridSquare);
            gridSquare.classList.add("gridSquare");
            gridSquare.classList.add("playerGridSquare");
            gridSquare.setAttribute("row", i);
            gridSquare.setAttribute("column", j);

            // ADD EVENT LISTENERS FOR DRAG N DROP PLACE SHIP
            gridSquare.addEventListener("dragover", function(e) {
                e.preventDefault();
            })
            gridSquare.addEventListener("drop", function(e) {
                e.preventDefault();

                let ship = e.dataTransfer.getData("text/html");
                let dropRow = Number(e.target.getAttribute("row"));
                let dropCol = Number(e.target.getAttribute("column"));

                if (ship == 'ship1') {
                    player1.placeShip(player1.ships.ship1, dropRow, dropCol);
                }
                if (ship == 'ship2') {
                    player1.placeShip(player1.ships.ship2, dropRow, dropCol);
                }
                if (ship == 'ship3') {
                    player1.placeShip(player1.ships.ship3, dropRow, dropCol);
                }
                if (ship == 'ship4') {
                    player1.placeShip(player1.ships.ship4, dropRow, dropCol);
                }
                if (ship == 'ship5') {
                    player1.placeShip(player1.ships.ship5, dropRow, dropCol);
                }
                generatePlayerBoard();
            })

            // GIVE GRIDSQUARES VALUES TO DOCUMENT PLACEMENT AND GAME
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
                if (player1.setupComplete()) {
                    let row = e.target.getAttribute("row");
                    let col = e.target.getAttribute("column");
                    player.playerMove(row, col, computer, player1);
                    generateComputerBoard();
                    generatePlayerBoard();
                    checkWinLose();
                }
            }

            // CHECK WIN/LOSE. REMOVE ONCLICK
            let win = computer.reportSunk();
            let lose = player1.reportSunk();
            if (win == true) {
                gridSquare.onclick = null;
            }
            if (lose == true) {
                gridSquare.onclick = null;
            }

            // ADD APPROPRIATE CLASS TO EACH GRIDSQUARE
            if (compBoard[i][j] == 0) {
                gridSquare.classList.add("empty");
            }
            else if (compBoard[i][j] == 1) {
                gridSquare.classList.add("empty");
            }
            else if (compBoard[i][j] == 2) {
                gridSquare.classList.add("miss");
                gridSquare.onclick = null;
            }
            else if (compBoard[i][j] == 3) {
                gridSquare.classList.add("hit");
            }
        }
    }
}

// SHIPS TO BE PLACED 

// SHIPS CONTAINER

let placeShipsDiv = document.createElement("div");
placeShipsDiv.classList.add("placeShipsDiv");
main.appendChild(placeShipsDiv);

let shiftInstruction = document.createElement("p");
placeShipsDiv.appendChild(shiftInstruction);
shiftInstruction.classList.add("shiftInstruction")
shiftInstruction.innerText = "Press SHIFT to change Orientation"

let shipsContainer = document.createElement("div");
shipsContainer.classList.add("shipsContainer");
placeShipsDiv.appendChild(shipsContainer);

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

// TOGGLE VERT/HORIZ SHIP OBJECT AND DOM FOR UNPLACED SHIPS

window.onkeydown = toggleShips

function toggleShips (e) {
    if (e.shiftKey) {
    toggleVert();
    toggleVertShip();
    }
}

function toggleVertShip () {
    let ships = player1.ships;
    ships.ship1.altVert();
    ships.ship2.altVert();
    ships.ship3.altVert();
    ships.ship4.altVert();
    ships.ship5.altVert();
}

function toggleVert () {
    let ships;
    if (document.querySelectorAll('.shipDivVert').length == 0){
        ships = document.querySelectorAll('.shipDiv');
        ships.forEach(ship => {
            ship.classList.remove("shipDiv");
            ship.parentNode.classList.remove("shipsContainer")
            ship.classList.add("shipDivVert");
            ship.parentNode.classList.add("shipsContainerVert")
        });
    }
    else {
        ships = document.querySelectorAll('.shipDivVert');
        ships.forEach(ship => {
                ship.classList.remove("shipDivVert");
                ship.parentNode.classList.remove("shipsContainerVert");
                ship.classList.add("shipDiv");
                ship.parentNode.classList.add("shipsContainer");
        });
    }
}

// ADD DRAGGABLE TO ALL INITIAL PLACEMENT SHIPS

let ships = document.querySelectorAll('.shipDiv');
ships.forEach(ship => {
    ship.setAttribute("draggable", "true");
    ship.addEventListener("dragstart", handleDragStart);
    ship.addEventListener("dragend", handleDragEnd);
});

function handleDragStart(e) {
        e.dataTransfer.setDragImage(e.target, 25, 20);
        let ship = e.target.getAttribute("ship");
        e.dataTransfer.setData("text/html", ship);
}

function handleDragEnd(e) {

    let ship = e.target.getAttribute("ship");

    if (ship == "ship1") {
        if (player1.ships.ship1.placement.length == 2) {
            this.style.opacity = "0.4"
            e.target.setAttribute("draggable", "false");
        }
    }
    if (ship == "ship2") {
        if (player1.ships.ship2.placement.length == 3) {
            this.style.opacity = "0.4"
            e.target.setAttribute("draggable", "false");
        }
    }
    if (ship == "ship3") {
        if (player1.ships.ship3.placement.length == 3) {
            this.style.opacity = "0.4"
            e.target.setAttribute("draggable", "false");
        }
    }
    if (ship == "ship4") {
        if (player1.ships.ship4.placement.length == 4) {
            this.style.opacity = "0.4"
            e.target.setAttribute("draggable", "false");
        }
    }
    if (ship == "ship5") {
        if (player1.ships.ship5.placement.length == 5) {
            this.style.opacity = "0.4"
            e.target.setAttribute("draggable", "false");
        }
    }
}

function checkWinLose () {
    let win = computer.reportSunk();
    let lose = player1.reportSunk();
    if (win == true) {
        winScreen();
    }
    if (lose == true) {
        loseScreen();
    }
}

function winScreen () {
    let winDiv = document.createElement("div");
    main.appendChild(winDiv);
    let winTitle = document.createElement("p");
    winTitle.classList.add("conclusionText");
    winDiv.appendChild(winTitle);
    winTitle.innerText = "IT A WIN WIN WIN !"

    let playAgain = document.createElement("button");
    winDiv.appendChild(playAgain);
    playAgain.innerText = "PLAY AGAIN ?!"
    playAgain.addEventListener("click", () => {
        window.location.reload();
    })
}

function loseScreen() {
    let loseDiv = document.createElement("div");
    main.appendChild(loseDiv);
    let loseTitle = document.createElement("p");
    loseTitle.classList.add("conclusionText")
    loseDiv.appendChild(loseTitle);
    loseTitle.innerText = "you LOST !!!!!!"

    let playAgain = document.createElement("button");
    loseDiv.appendChild(playAgain);
    playAgain.innerText = "PLAY AGAIN ?!"
    playAgain.addEventListener("click", () => {
        window.location.reload();
    })
}

generatePlayerBoard();
generateComputerBoard();
