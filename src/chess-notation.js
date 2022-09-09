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
  static fromChessNotation(str) {
    if (!/[KQBNR]{0,1}[a-h]{1}[1-8]{1}$/.test(str))
      throw new Error(`Invalid chess notation (${str})`);
    if (str.length === 2) str.unshift("♟️");
    const [piece, file, rank] = str.split("");
    if (!Object.keys(fileLetterToId).some((l) => l === file))
      throw new Error(`Invalid file (${file} in ${str}) supplied`);
    if (rank < 0 || file > 7)
      throw new Error(`Invalid rank ${rank} in ${str} supplied`);
    return {
      pieceName: validPieces[piece],
      piece,
      file: file,
      x: fileLetterToId[file],
      rank: Number(rank),
      y: rank - 1,
    };
  }

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
