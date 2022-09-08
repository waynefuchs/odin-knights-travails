const Coordinate = require("./coordinate");
const Knight = require("./knight");
const Board = require("./board");
const Move = require("./move");
const Turn = require("./turn");

/*

Iterate through each square that can be reached on this turn
  check if 


*/

class Graph {
  board;
  piece;
  turns;
  squares;

  constructor(board, piece, initialCoordinate) {
    this.board = board;
    this.piece = piece;
    this.turns = [];
    this.squares = [];

    // Set up the "First Turn" (Turn 0)
    let thisTurn = new Turn(this);
    thisTurn.addMove(
      new Move(
        initialCoordinate,
        this.piece.getAllPossibleMoves(this.board, initialCoordinate)
      )
    );

    // Subsequent turns are just a single call
    while (this.addTurn(thisTurn)) {
      thisTurn = thisTurn.process(this.board, this.piece);
    }

    console.log(JSON.stringify(this));
  }

  addTurn(turn) {
    let newSquaresAdded = false;
    turn.moves.forEach((move) => {
      let squareVisited = this.squares.some((square) => {

        return move.fromEquals(square) ? true : false;
      });
      if (!squareVisited) {
        this.squares.push(move.from);
        newSquaresAdded = true;
      }
    });
    this.turns.push(turn);
    return newSquaresAdded;
  }
}

const b = new Board();
const g = new Graph(b, Knight, new Coordinate(0, 0));
