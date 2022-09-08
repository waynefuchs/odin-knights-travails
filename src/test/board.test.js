const Board = require("../board");
const Coordinate = require('../coordinate');

let board;

beforeEach(() => {
    board = new Board();
})

afterEach(() => {
    board = null;
})

test("Board is created with default values", () => {
  expect(board.rank).toBe(8);
  expect(board.file).toBe(8);
});

test("Check correct identification of valid and invalid tiles", () => {
    expect(board.isValidTile(new Coordinate(0,0))).toBe(true);
    expect(board.isValidTile(new Coordinate(7,7))).toBe(true);
    expect(board.isValidTile([0,8])).toBe(false);
    expect(board.isValidTile([0,-1])).toBe(false);
    expect(board.isValidTile([-1,0])).toBe(false);
    expect(board.isValidTile([8,0])).toBe(false);
})