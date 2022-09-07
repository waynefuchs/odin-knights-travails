const { getAllPossibleMoves } = require("./knight");

test("Ensure correct possible moves are generated", () => {
  expect(getAllPossibleMoves([3, 3])).toStrictEqual([
    [4, 5],
    [5, 2],
    [2, 1],
    [1, 4],
    [2, 5],
    [5, 4],
    [4, 1],
    [1, 2],
  ]);

  expect(getAllPossibleMoves([0, 0])).toStrictEqual([
    [1, 2],
    [2, 1],
  ]);

  expect(getAllPossibleMoves([7, 7])).toStrictEqual([
    [6, 5],
    [5, 6],
  ]);

  expect(getAllPossibleMoves([6, 6])).toStrictEqual([
    [5, 4],
    [4, 7],
    [7, 4],
    [4, 5],
  ]);
});
