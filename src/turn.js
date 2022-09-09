const Coordinate = require("./coordinate");
const Knight = require("./knight");
const Move = require("./move");

class Turn {
  moves;

  // TODO: Implement this to prevent infinitely cycling between the same squares
  invalidSquares;

  constructor(invalidSquares = []) {
    this.invalidSquares = invalidSquares;
    this.moves = {};
  }

  addMoves(source, destinations) {
    destinations.forEach((destination) => {
      this.addMove(source, destination);
    });
  }

  addMove(source, destination) {
    if (destination.toString() in this.invalidSquares) {
      return;
    }
    const move = this.getMove(source).addDestination(destination);
  }

  getMove(source) {
    if (source.toString() in this.moves) {
      return this.moves[source.toString()];
    }

    this.moves[source.toString()] = new Move(source);
    return this.moves[source.toString()];
  }

  containsMoveTo(dest) {
    return [...Object.values(this.moves)].some((c) =>
      c.containsDestination(dest)
    );
  }

  getMoveTo(dest) {
    return [...Object.values(this.moves)].find((c) =>
      c.containsDestination(dest) ? c : false
    );
  }

  getAllPossibleDestinations() {
    let returnDestinations = [];
    Object.values(this.moves).forEach((move) => {
      returnDestinations = returnDestinations.concat(move.getDestinations());
    });
    return [...new Set(returnDestinations)];
  }

  containsDestination(to) {
    return this.moves.some((move) => move.toListContains(to));
  }

  getReturnCoordinates(to) {
    const matchingMoves = this.moves.filter((move) => move.toListContains(to));
    const matchingCoords = matchingMoves.map((move) => move.from);
    const uniqueCoords = [];
    matchingCoords.forEach((c) => {
      if (!uniqueCoords.some((uc) => uc.equals(c))) uniqueCoords.push(c);
    });
    return uniqueCoords;
  }
}

module.exports = Turn;
