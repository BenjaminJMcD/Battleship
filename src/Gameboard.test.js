import Gameboard from "./Gameboard";
import Ship from "./Ship";

let gameBoard = new Gameboard;
let testBoard = gameBoard.board;

let ship5 = new Ship(5);


test('gameBoard is created as matrix of 0s', () => {
    expect(testBoard).toStrictEqual(
        [
            [0,0,0,0,0,0,0,0,0,0],
            [0,0,0,0,0,0,0,0,0,0],
            [0,0,0,0,0,0,0,0,0,0],
            [0,0,0,0,0,0,0,0,0,0],
            [0,0,0,0,0,0,0,0,0,0],
            [0,0,0,0,0,0,0,0,0,0],
            [0,0,0,0,0,0,0,0,0,0],
            [0,0,0,0,0,0,0,0,0,0],
            [0,0,0,0,0,0,0,0,0,0],
            [0,0,0,0,0,0,0,0,0,0]
        ]
    )
})

test('gameBoard is created and gives coords', () => {
    expect(testBoard[0][0]).toBe(0);
})

// placeShip(ship, x, y)

test('gameBoard.placeShip(ship5, 5, 5) out-of-bounds returns original board', () => {
    expect(gameBoard.placeShip(ship5, 6, 4)).toStrictEqual([
        [0,0,0,0,0,0,0,0,0,0],
        [0,0,0,0,0,0,0,0,0,0],
        [0,0,0,0,0,0,0,0,0,0],
        [0,0,0,0,0,0,0,0,0,0],
        [0,0,0,0,0,0,0,0,0,0],
        [0,0,0,0,0,0,0,0,0,0],
        [0,0,0,0,0,0,0,0,0,0],
        [0,0,0,0,0,0,0,0,0,0],
        [0,0,0,0,0,0,0,0,0,0],
        [0,0,0,0,0,0,0,0,0,0]
    ])
});

test('testBoard.placeShip(ship5, 4, 4) returns 1s horizontally starting at board[4][4]]', () => {
    expect(gameBoard.placeShip(ship5, 5, 4)).toStrictEqual([
        [0,0,0,0,0,0,0,0,0,0],
        [0,0,0,0,0,0,0,0,0,0],
        [0,0,0,0,0,0,0,0,0,0],
        [0,0,0,0,0,0,0,0,0,0],
        [0,0,0,0,0,1,1,1,1,1],
        [0,0,0,0,0,0,0,0,0,0],
        [0,0,0,0,0,0,0,0,0,0],
        [0,0,0,0,0,0,0,0,0,0],
        [0,0,0,0,0,0,0,0,0,0],
        [0,0,0,0,0,0,0,0,0,0]
    ])
});

// TEST VERTICAL
let ship5Vert = new Ship(5);
ship5Vert.vert = true;

test('gameBoard.placeShip(ship5Vert, 6, 6) out-of-bounds returns original board', () => {
    expect(gameBoard.placeShip(ship5Vert, 6, 6)).toStrictEqual([
        [0,0,0,0,0,0,0,0,0,0],
        [0,0,0,0,0,0,0,0,0,0],
        [0,0,0,0,0,0,0,0,0,0],
        [0,0,0,0,0,0,0,0,0,0],
        [0,0,0,0,0,1,1,1,1,1],
        [0,0,0,0,0,0,0,0,0,0],
        [0,0,0,0,0,0,0,0,0,0],
        [0,0,0,0,0,0,0,0,0,0],
        [0,0,0,0,0,0,0,0,0,0],
        [0,0,0,0,0,0,0,0,0,0]
    ])
});

test('testBoard.placeShip(ship5Vert, 5, 5) returns 1s vertically starting at board[5][5]]', () => {
    expect(gameBoard.placeShip(ship5Vert, 5, 5)).toStrictEqual([
        [0,0,0,0,0,0,0,0,0,0],
        [0,0,0,0,0,0,0,0,0,0],
        [0,0,0,0,0,0,0,0,0,0],
        [0,0,0,0,0,0,0,0,0,0],
        [0,0,0,0,0,1,1,1,1,1],
        [0,0,0,0,0,1,0,0,0,0],
        [0,0,0,0,0,1,0,0,0,0],
        [0,0,0,0,0,1,0,0,0,0],
        [0,0,0,0,0,1,0,0,0,0],
        [0,0,0,0,0,1,0,0,0,0]
    ])
});
