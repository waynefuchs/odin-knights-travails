const Coordinate = require("./coordinate");
const GraphNode = require("./graph-node");

class Graph {
  root;
  moves;
  solvedCoordinates;
  constructor(coordinate) {
    // this.root = 
  }

  buildGraph() {

  }

  contains(coordinate) {
    this.solvedCoordinates.some(
      (c) => c.file == coordinate.file && c.rank == coordinate.rank
    );
  }
}
