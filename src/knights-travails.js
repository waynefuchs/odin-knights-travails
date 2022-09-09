const Board = require("./board");
const Coordinate = require("./coordinate");
const Graph = require("./graph");
const Knight = require("./knight");

const board = new Board();
const graph = new Graph(board, Knight, new Coordinate(0, 0));
const path = graph.findPathTo(new Coordinate(7, 7));
console.log(path.shift() + path.map(i => ` -> ${i}`));

