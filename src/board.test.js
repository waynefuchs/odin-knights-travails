const Board = require("./board");

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
    expect(board.isValidTile([0,0])).toBe(true);
    expect(board.isValidTile([7,7])).toBe(true);
    expect(board.isValidTile([0,8])).toBe(false);
    expect(board.isValidTile([0,-1])).toBe(false);
    expect(board.isValidTile([-1,0])).toBe(false);
    expect(board.isValidTile([8,0])).toBe(false);
})

test("Test retrieving valid tile IDs", () => {
  expect(board.getId([0,0])).toBe(0);
  expect(board.getId([0,1])).toBe(1);
  expect(board.getId([0,2])).toBe(2);
  expect(board.getId([0,3])).toBe(3);
  expect(board.getId([0,4])).toBe(4);
  expect(board.getId([0,5])).toBe(5);
  expect(board.getId([0,6])).toBe(6);
  expect(board.getId([0,7])).toBe(7);
  expect(board.getId([1,0])).toBe(8);
  expect(board.getId([2,0])).toBe(16);
  expect(board.getId([5,5])).toBe(45);
  expect(board.getId([6,6])).toBe(54);
  expect(board.getId([7,7])).toBe(63);
  expect(board.getId([8,0])).toBe(false);
});

test("Test turning IDs into coordinates", () => {
    expect(board.getCoordinates(0)).toStrictEqual([0,0]);
    expect(board.getCoordinates(27)).toStrictEqual([3,3]);
    expect(board.getCoordinates(32)).toStrictEqual([0,4]);
    expect(board.getCoordinates(55)).toStrictEqual([7,6]);
    expect(board.getCoordinates(63)).toStrictEqual([7,7]);
    expect(board.getCoordinates(-1)).toBe(false);
    expect(board.getCoordinates(64)).toBe(false);
})