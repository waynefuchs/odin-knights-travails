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
   * @param {Array} coordinates
   *    [file, rank]
   *
   * @return
   *    `true` or `false`
   */
  isValidTile(coordinates) {
    const [file, rank] = coordinates;
    return rank < this.rank && rank >= 0 && file < this.file && file >= 0;
  }

  /**
   * Returns the square id.
   *
   * @param {Array} coordinates
   *    [file, rank]
   *
   * @return
   *    The integer value of the specified board square.
   */
  getId(coordinates) {
    const [file, rank] = coordinates;
    return this.isValidTile(coordinates) ? file * this.file + rank : false;
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
    const file = id % this.rank;
    const rank = Math.floor(id / this.rank);
    return this.isValidTile([file, rank]) ? [file, rank] : false;
  }
}

module.exports = Board;
