const boardFile = {
  a: 0,
  b: 1,
  c: 2,
  d: 3,
  e: 4,
  f: 5,
  g: 6,
  h: 7,
};

const validPieces = {
  K: "King",
  Q: "Queen",
  B: "Bishop",
  N: "Knight",
  R: "Rook",
  "♟️": "Pawn",
};

const fromChessNotation = (str) => {
  if (!/[KQBNR]{0,1}[a-h]{1}[1-8]{1}$/.test(str))
    throw new Error(`Invalid chess notation (${str})`);
  if (str.length === 2) str.unshift("♟️");
  const [piece, file, rank] = str.split("");
  if (!Object.keys(boardFile).some((l) => l === file))
    throw new Error(`Invalid file (${file} in ${str}) supplied`);
  if (rank < 0 || file > 7)
    throw new Error(`Invalid rank ${rank} in ${str} supplied`);
  return {
    pieceName: validPieces[piece],
    piece,
    file: file,
    x: boardFile[file],
    rank: Number(rank),
    y: rank - 1,
  };
};

module.exports = { fromChessNotation };
