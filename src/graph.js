class GraphNode {
    coordinate;
    children;
    parent;
    constructor(parent, coordinate) {
        this.parent= parent;
        this.coordinate = coordinate;
        this.children = [];
    }
}