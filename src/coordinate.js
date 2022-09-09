const cn = require("./chess-notation");

class Coordinate {
  file;
  rank;
  constructor(file, rank) {
    this.file = file;
    this.rank = rank;
  }

  equals(coordinate) {
    return this.file === coordinate.file && this.rank === coordinate.rank;
  }

  toJSON() {
    return cn.getSquareName(this);
  }
  // valueOf() {
  //   return Number((this.file) + (this.rank * 8));
  // }
}

module.exports = Coordinate;
