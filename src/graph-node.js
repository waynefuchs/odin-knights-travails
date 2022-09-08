class GraphNode {
    piece;
    coordinate;
    childCoordinates;
    depth;
    parent;
    constructor(parent, coordinate, piece) {
        this.piece = piece;
        this.coordinate = coordinate;
        this.depth = null;
        this.parent= parent;
        this.childCoordinates = piece.getAllValidMoves(coordinate);
    }

    addChild()
}

module.exports = GrpahNode;