const Coordinate = require("./coordinate");

class Knight {
  // const knightMoves = (start, end) => {};

  /**
   * Calculate all knight moves that would result in a valid ending position
   *
   * @param {Coordinate} coordinates
   *    Coordinate Object
   *
   * @return [..., Coordinate]
   *    A list of Coordinates valid knight moves
   */
  static getAllPossibleMoves(board, start) {
    const knightOffsets = [
      new Coordinate(1, 2),
      new Coordinate(2, -1),
      new Coordinate(-1, -2),
      new Coordinate(-2, 1),
      new Coordinate(-1, 2),
      new Coordinate(2, 1),
      new Coordinate(1, -2),
      new Coordinate(-2, -1),
    ];
    return knightOffsets
      .map((c) => new Coordinate(c.file + start.file, c.rank + start.rank)) 
      .filter((c) => board.isValidTile(c));
  };  
}

module.exports = Knight;
