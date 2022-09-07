const Board = require("./board.js");

let board;

beforeEach(() => {
    board = new Board();
})

afterEach(() => {
    board = null;
})

test("Board is created with default values", () => {
  let values = Object.values(board.map);
  expect(values).toStrictEqual([...Array(64).keys()]);
  expect(board.rank).toBe(8);
  expect(board.file).toBe(8);
});

test("Test retrieving valid tile IDs", () => {
  expect(board.getId([0,0])).toBe(0);
});
