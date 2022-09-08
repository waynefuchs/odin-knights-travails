const Coordinate = require("./coordinate");
const Move = require('./move');

class Turn {
  graph;
  movesFrom;
  movesTo;
  constructor(graph) {
    this.graph = graph;
    this.startingPositions = [];
    this.movesFrom = [];
    this.movesTo = [];
  }

  process() {
    console.log("================ GRAPH");
    console.log(this.graph);
    console.log("================ MOVES FROM");
    console.log(JSON.stringify(this.movesFrom));
    console.log("================ MOVES TO");
    console.log(this.movesTo);
  }

  addMove(move) {
    // TODO: Check if 
    this.movesFrom.push(move);
  }

  // addMoveFrom(from, to) {
  //   const moveFrom = this.getMoveFrom(from);
  //   console.log(moveFrom);
  //   if(!moveFrom) {
  //     const newMove = new Move(from, to);
  //     this.movesFrom.push(newMove);
  //   } else {
  //     moveFrom.addTo(to);
  //   }
  // }

  containsMoveFrom(from) {
    return this.movesFrom.includes(c => from.equals(c));
  }

  getMoveFrom(from) {
    return this.movesFrom.find(c => from.equals(c));
  }
}

module.exports = Turn;