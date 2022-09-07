const Board = require("./board");
const board = new Board();

const knightMoves = (start, end) => {};

/**
 * Determines whether coordinates are valid
 *
 * @param {Array} coordinates
 *    [file, rank]
 *
 * @return
 *    `true` or `false`
 */
const getAllPossibleMoves = (start) => {
  const possibleOffsets = [
    [1, 2],
    [2, -1],
    [-1, -2],
    [-2, 1],
    [-1, 2],
    [2, 1],
    [1, -2],
    [-2, -1],
  ];

  return possibleOffsets
    .map((c) => [c[0] + start[0], c[1] + start[1]]) // add start offset
    .filter((c) => board.isValidTile(c)); // filter invalid final positions
};

module.exports = { getAllPossibleMoves };
