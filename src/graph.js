const Move = require("./move");
const Turn = require("./turn");

class Graph {
  turns;
  squaresVisited;
  initialCoordinate;

  constructor(board, piece, initialCoordinate) {
    this.turns = [];
    this.squaresVisited = {};
    this.initialCoordinate = initialCoordinate;

    // Set up the "First Turn" (Turn 0)
    this.squaresVisited[initialCoordinate.toString()] = initialCoordinate;
    let turn = new Turn();
    let possibleMoves = piece.getAllPossibleMoves(board, initialCoordinate);
    turn.addMoves(initialCoordinate, possibleMoves);

    let newSquares;
    newSquares = this.pushTurnToStack(turn);

    // Go until no new squares are visited
    do {
      const startingSquares = turn.getAllPossibleDestinations();
      turn = new Turn(this.squaresVisited);
      startingSquares.forEach((source) => {
        this.updateTurn(turn, board, piece, source);
      });
      newSquares = this.pushTurnToStack(turn);
    } while (newSquares.length > 0);
  }

  updateTurn(turn, board, piece, source) {
    const possibleMoves = piece.getAllPossibleMoves(board, source);
    turn.addMoves(source, possibleMoves);
  }

  pushTurnToStack(turn) {
    const newSquares = this.visited(turn.getAllPossibleDestinations());
    this.turns.push(turn);
    return newSquares;
  }

  visited(squares) {
    const newSquares = squares.filter(
      (square) => {
        if (square.toString() in this.squaresVisited) return false;
        this.squaresVisited[square.toString()] = square;
        return true;
      });
    return newSquares;
  }

  findPathTo(square) {
    let index;
    for(index = 0; index < this.turns.length; index += 1) {
      if(this.turns[index].containsMoveTo(square)) {
        const move = this.turns[index].getMoveTo(square);
        const path = [square.toString()].concat(this.pathfind(move, index));
        path.reverse();
        return path;
      }
    }
    throw new Error(`Failed to find ${square}`);
  }

  pathfind(move, index) {
    if(index <= 0) return this.initialCoordinate.toString();
    const nextMove = this.turns[index-1].getMoveTo(move.square);
    return [move.square.toString()].concat(this.pathfind(nextMove, index - 1));
  }
}

module.exports = Graph;
