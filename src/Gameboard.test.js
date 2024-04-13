import Gameboard from "./Gameboard";
import Ship from "./Ship";

let gameBoard = new Gameboard;
let testBoard = gameBoard.board;


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

// placeShip(ship, row, column)
// PLACES SHIP VERTICALLY

test('gameBoard.placeShip(ship5, 4, 6) out-of-bounds returns original board', () => {
    expect(gameBoard.placeShip(gameBoard.ships.ship5, 4, 6)).toStrictEqual([
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

test('testBoard.placeShip(ship5, 4, 5) returns 1s horizontally starting at board[4][5]]', () => {
    expect(gameBoard.placeShip(gameBoard.ships.ship5, 4, 5)).toStrictEqual([
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
gameBoard.ships.ship4.vert = true;

test('gameBoard.placeShip(ship5Vert, 7, 5) out-of-bounds returns original board', () => {
    expect(gameBoard.placeShip(gameBoard.ships.ship4, 7, 5)).toStrictEqual([
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
    expect(gameBoard.placeShip(gameBoard.ships.ship4, 5, 5)).toStrictEqual([
        [0,0,0,0,0,0,0,0,0,0],
        [0,0,0,0,0,0,0,0,0,0],
        [0,0,0,0,0,0,0,0,0,0],
        [0,0,0,0,0,0,0,0,0,0],
        [0,0,0,0,0,1,1,1,1,1],
        [0,0,0,0,0,1,0,0,0,0],
        [0,0,0,0,0,1,0,0,0,0],
        [0,0,0,0,0,1,0,0,0,0],
        [0,0,0,0,0,1,0,0,0,0],
        [0,0,0,0,0,0,0,0,0,0]
    ])
});

// RETURN ORIGINAL BOARD IF CONFLICTS

test('gameBoard.placeShip(ship5Vert, 3, 8) conflict w placed ships returns original board', () => {
    expect(gameBoard.placeShip(gameBoard.ships.ship4, 3, 8)).toStrictEqual([
        [0,0,0,0,0,0,0,0,0,0],
        [0,0,0,0,0,0,0,0,0,0],
        [0,0,0,0,0,0,0,0,0,0],
        [0,0,0,0,0,0,0,0,0,0],
        [0,0,0,0,0,1,1,1,1,1],
        [0,0,0,0,0,1,0,0,0,0],
        [0,0,0,0,0,1,0,0,0,0],
        [0,0,0,0,0,1,0,0,0,0],
        [0,0,0,0,0,1,0,0,0,0],
        [0,0,0,0,0,0,0,0,0,0]
    ])
});

test('gameBoard.receiveAttack(1,2) changes board coordinate to 2 for MISS', () => {
    expect(gameBoard.receiveAttack(1,2)).toStrictEqual([
        [0,0,0,0,0,0,0,0,0,0],
        [0,0,2,0,0,0,0,0,0,0],
        [0,0,0,0,0,0,0,0,0,0],
        [0,0,0,0,0,0,0,0,0,0],
        [0,0,0,0,0,1,1,1,1,1],
        [0,0,0,0,0,1,0,0,0,0],
        [0,0,0,0,0,1,0,0,0,0],
        [0,0,0,0,0,1,0,0,0,0],
        [0,0,0,0,0,1,0,0,0,0],
        [0,0,0,0,0,0,0,0,0,0]
    ])
});

test('gameBoard.receiveAttack(4,6) changes board coordinate to 3 for HIT', () => {
    expect(gameBoard.receiveAttack(4,6)).toStrictEqual([
        [0,0,0,0,0,0,0,0,0,0],
        [0,0,2,0,0,0,0,0,0,0],
        [0,0,0,0,0,0,0,0,0,0],
        [0,0,0,0,0,0,0,0,0,0],
        [0,0,0,0,0,1,3,1,1,1],
        [0,0,0,0,0,1,0,0,0,0],
        [0,0,0,0,0,1,0,0,0,0],
        [0,0,0,0,0,1,0,0,0,0],
        [0,0,0,0,0,1,0,0,0,0],
        [0,0,0,0,0,0,0,0,0,0]
    ])
});

test('gameBoard.receiveAttack(4,7) adds HIT count to correct ship', () => {
    gameBoard.receiveAttack(4,7);
    expect(gameBoard.ships.ship5.hits).toBe(2)
});

test('gameBoard.ship5 has correct # hits', () => {
    gameBoard.receiveAttack(4,5);
    gameBoard.receiveAttack(4,8);
    gameBoard.receiveAttack(4,9);
    expect(gameBoard.ships.ship5.hits).toBe(5);
});

test('testBoard = what is expected', () => {
    expect(testBoard).toStrictEqual([
        [0,0,0,0,0,0,0,0,0,0],
        [0,0,2,0,0,0,0,0,0,0],
        [0,0,0,0,0,0,0,0,0,0],
        [0,0,0,0,0,0,0,0,0,0],
        [0,0,0,0,0,3,3,3,3,3],
        [0,0,0,0,0,1,0,0,0,0],
        [0,0,0,0,0,1,0,0,0,0],
        [0,0,0,0,0,1,0,0,0,0],
        [0,0,0,0,0,1,0,0,0,0],
        [0,0,0,0,0,0,0,0,0,0]
    ])
});

test('gameBoard.ship5.sunk is TRUE after running reportSunk()', () => {
    gameBoard.reportSunk();
    expect(gameBoard.ships.ship5.sunk).toBe(true);
})

test('gameover', () => {
    expect(gameBoard.reportSunk()).toBe(false);
});

test('real gameover', () => {
    gameBoard.receiveAttack(5,5);
    gameBoard.receiveAttack(6,5);
    gameBoard.receiveAttack(7,5);
    gameBoard.receiveAttack(8,5);

    gameBoard.placeShip(gameBoard.ships.ship3, 0, 0);
    gameBoard.receiveAttack(0,0);
    gameBoard.receiveAttack(0,1);
    gameBoard.receiveAttack(0,2);

    gameBoard.placeShip(gameBoard.ships.ship2, 2,0);
    gameBoard.receiveAttack(2,0);
    gameBoard.receiveAttack(2,1);
    gameBoard.receiveAttack(2,2);

    gameBoard.placeShip(gameBoard.ships.ship1, 3,0);
    gameBoard.receiveAttack(3,0);
    gameBoard.receiveAttack(3,1);

    gameBoard.reportSunk();

    expect(gameBoard.reportSunk()).toBe(true);
})