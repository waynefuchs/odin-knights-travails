const Coordinate = require("./coordinate");
const Knight = require("./knight");
const Move = require("./move");

class Turn {
  moves;
  constructor() {
    this.moves = [];
  }

  process(board, piece) {
    const nextTurn = new Turn();
    this.moves.forEach((move) => {
      move.toList.forEach((coord) => {
        nextTurn.addMove(
          new Move(coord, piece.getAllPossibleMoves(board, coord))
        );
      });
    });

    return nextTurn;
  }

  addMove(move) {
    // TODO: Check if
    this.moves.push(move);
  }

  containsMoveFrom(from) {
    return this.moves.includes((c) => from.equals(c));
  }

  getMoveFrom(from) {
    return this.moves.find((c) => from.equals(c));
  }

  toString() {
    return JSON.stringify(this);
  }

  containsDestination(to) {
    return this.moves.some(move => move.toListContains(to));
  }

  getReturnCoordinates(to) {
    const matchingMoves = this.moves.filter(move => move.toListContains(to));
    const matchingCoords = matchingMoves.map(move => move.from);
    const uniqueCoords = [];
    matchingCoords.forEach(c => {
      if(!uniqueCoords.some(uc => uc.equals(c))) uniqueCoords.push(c);
    });
    return uniqueCoords;
  }
}

module.exports = Turn;
