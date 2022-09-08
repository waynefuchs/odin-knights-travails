const Coordinate = require("./coordinate");

const isInRange = (n, max) => n < max && n >= 0;

class Board {
  file;
  rank;
  map;
  constructor(rank = 8, file = 8) {
    this.file = file;
    this.rank = rank;
  }

  /**
   * Determines whether coordinates are valid
   *
   * @param {Coordinate} c
   *    [file, rank]
   *
   * @return
   *    `true` or `false`
   */
  isValidTile(c) {
    return isInRange(c.rank, this.rank) && isInRange(c.file, this.file);
  }
}

module.exports = Board;
