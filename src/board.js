const Coordinate = require("./coordinate");

const minimum = 3;
const maximum = 26;

const isInRange = (n, max) => n < max && n >= 0;

class Board {
  file;
  rank;
  map;
  constructor(file = 8, rank = 8) {
    if (rank < minimum || file < minimum || rank > maximum || file > maximum)
      throw new Error(`Board size ${file} x ${rank} is out of range`);
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
