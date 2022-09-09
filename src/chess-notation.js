const Coordinate = require("./coordinate");

const fileLetterToId = {
  a: 1,
  b: 2,
  c: 3,
  d: 4,
  e: 5,
  f: 6,
  g: 7,
  h: 8,
  i: 9,
  j: 10,
  k: 11,
  l: 12,
  m: 13,
  n: 14,
  o: 15,
  p: 16,
  q: 17,
  r: 18,
  s: 19,
  t: 20,
  u: 21,
  v: 22,
  w: 23,
  x: 24,
  y: 25,
  z: 26,
};

const validPieces = {
  K: "King",
  Q: "Queen",
  B: "Bishop",
  N: "Knight",
  R: "Rook",
  "♟️": "Pawn",
};

class ChessNotation {
  static getSquareName(coordinate) {
    return 'abcdefghijklmnopqrstuvwxyz'.charAt([coordinate.file]) + (coordinate.rank + 1).toString();
  }

  static getCoordinate(squareStr) {
    const file = squareStr.slice(0, 1);
    const rank = squareStr.slice(1)
    return new Coordinate(fileLetterToId[file], Number(rank));
  }
}

module.exports = ChessNotation;
