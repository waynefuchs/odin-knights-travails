class Board {
  rank;
  file;
  map;
  constructor(rank = 8, file = 8) {
    this.rank = rank;
    this.file = file;
  }

  /**
   * Determines whether coordinates are valid
   *
   * @param {Array} coordinates
   *    [rank, file]
   *
   * @return
   *    `true` or `false`
   */
  isValidTile(coordinates) {
    const [rank, file] = coordinates;
    return rank < this.rank && rank >= 0 && file < this.file && file >= 0;
  }

  /**
   * Returns the square id.
   *
   * @param {Array} coordinates
   *    [rank, file]
   *
   * @return
   *    The integer value of the specified board square.
   */
  getId(coordinates) {
    const [rank, file] = coordinates;
    return this.isValidTile(coordinates) ? rank * this.rank + file : false;
  }

  /**
   * Calculate coordinates from id
   *
   * @param {Number} id
   *    The integer tile id value
   *
   * @return
   *    an array containing [rank, file]
   */
  getCoordinates(id) {
    const rank = Math.floor(id / this.rank);
    const file = id % this.rank;
    return this.isValidTile([rank, file]) ? [rank, file] : false;
  }
}

module.exports = Board;
