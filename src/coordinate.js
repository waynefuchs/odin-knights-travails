const ChessNotation = require("./chess-notation");

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

  toJSON = () => ChessNotation.getSquareName(this);
  toString = this.toJSON;
  valueOf = this.toJSON;
}

module.exports = Coordinate;
