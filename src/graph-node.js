class GraphNode {
  // If, after complete graph construction, this node contains coordinates that 
  // aren't also in the `childLinks` array, then this is a non-optimal solution
  childCoordinates; // All the coordinates you can get to
  edges; // Links that make sense at the graph level

  piece;
  coordinate;
  depth;
  parent;
  constructor(board, coordinate, piece, parent = null) {
    this.piece = piece;
    this.coordinate = coordinate;
    this.depth = null;
    this.parent = parent;
    this.childCoordinates = piece.getAllPossibleMoves(board, coordinate);
    this.edges = [];
  }
}

module.exports = GraphNode;
