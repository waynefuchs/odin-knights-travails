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
  root;
  turns;

  constructor(board, initialCoordinate) {
    this.turns = [];

    let thisTurn = new Turn(this);
    const possibleMoves = new Move(
      initialCoordinate,
      Knight.getAllPossibleMoves(board, initialCoordinate)
    );
    thisTurn.addMove(possibleMoves);
    thisTurn.process();
  }

}

const b = new Board();
const g = new Graph(b, new Coordinate(0, 0));
