class Board {
  rank;
  file;
  map;
  constructor(rank = 8, file = 8) {
    this.rank = rank;
    this.file = file;
    this._generateMap(rank, file);
  }

  _generateMap(rank, file) {
    let map = {};
    let count = 0;
    for (let x = 0; x < rank; x++) {
      for (let y = 0; y < file; y++, count += 1) {
        const arr = [x, y];
        map[arr] = count;
      }
    }
    this.map = map;
  }

  /**
   * Returns the square id.
   * 
   * @param {Number} array
   *    [rank, file]
   * 
   * @return
   *    The integer value of the specified board square.
   */
  getId(array) {
    return array in this.map ? this.map[array] : false;
  }
}

module.exports = Board;