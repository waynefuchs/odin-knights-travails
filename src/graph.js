const Move = require("./move");
const Turn = require("./turn");

class Graph {
  turns;
  squaresVisited;

  constructor(board, piece, initialCoordinate) {
    this.turns = [];
    this.squaresVisited = [];

    // Set up the "First Turn" (Turn 0)
    let thisTurn = new Turn(this);
    thisTurn.addMove(
      new Move(
        initialCoordinate,
        piece.getAllPossibleMoves(board, initialCoordinate)
      )
    );

    // Subsequent turns are just a single call
    while (this.addTurn(thisTurn)) {
      thisTurn = thisTurn.process(board, piece);
    }
  }

  addTurn(turn) {
    let newSquaresAdded = false;
    turn.moves.forEach((move) => {
      let squareVisited = this.squaresVisited.some((square) => {
        return move.fromEquals(square) ? true : false;
      });
      if (!squareVisited) {
        this.squaresVisited.push(move.from);
        newSquaresAdded = true;
      }
    });
    this.turns.push(turn);
    return newSquaresAdded;
  }

  findShortest(destination) {
    let index = 0;
    for(; index < this.turns.length; index++) {
      if(this.turns[index].containsDestination(destination)) {
        console.log(`Found at: ${index}`);
        this.getReturnPath(destination, index);
        break;
      }
    }
    console.log(`Exiting at: ${index}`);
  }

  getReturnPath(destination, index) {
    if(index < 0) return "FIN";
    const ele = this.turns[index].getReturnCoordinates(destination);
    ele.forEach(c => this.getReturnPath(c, index - 1));
    console.log(index + ':' + JSON.stringify(ele));
  }

}

module.exports = Graph;
