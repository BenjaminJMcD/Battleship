import Gameboard from "./Gameboard";
import Player from "./Player";
import CompBoard from "./CompBoard";

export default function newGame () {

    let player1 = new Player;
    let computer = new Player;

    let playerBoard = new Gameboard;
    let compBoard = CompBoard();

    return {
        player1,
        computer,
        playerBoard,
        compBoard
    }

}
