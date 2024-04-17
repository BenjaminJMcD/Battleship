import Player from "./Player";
import Gameboard from './Gameboard';

let playerBoard = new Gameboard;
let computer = new Player;

for (let i=0; i<10; i++) {
    for (let j=0; j<10; j++) {
        playerBoard.board[i][j] = 1;
    }
}

test('playerBoard.board is all 1s', () => {
    expect(playerBoard.board).toStrictEqual([
        [1,1,1,1,1,1,1,1,1,1],
        [1,1,1,1,1,1,1,1,1,1],
        [1,1,1,1,1,1,1,1,1,1],
        [1,1,1,1,1,1,1,1,1,1],
        [1,1,1,1,1,1,1,1,1,1],
        [1,1,1,1,1,1,1,1,1,1],
        [1,1,1,1,1,1,1,1,1,1],
        [1,1,1,1,1,1,1,1,1,1],
        [1,1,1,1,1,1,1,1,1,1],
        [1,1,1,1,1,1,1,1,1,1]
    ])
});

test('computer cycles until entire board are 3s', () => {
    computer.computerMove(playerBoard)
    expect(playerBoard.board).toStrictEqual([
        [3,3,3,3,3,3,3,3,3,3],
        [3,3,3,3,3,3,3,3,3,3],
        [3,3,3,3,3,3,3,3,3,3],
        [3,3,3,3,3,3,3,3,3,3],
        [3,3,3,3,3,3,3,3,3,3],
        [3,3,3,3,3,3,3,3,3,3],
        [3,3,3,3,3,3,3,3,3,3],
        [3,3,3,3,3,3,3,3,3,3],
        [3,3,3,3,3,3,3,3,3,3],
        [3,3,3,3,3,3,3,3,3,3],
    ])
})