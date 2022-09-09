const Board = require("./board");
const Coordinate = require("./coordinate");
const Graph = require("./graph");
const Knight = require("./knight");


const b = new Board();
const g = new Graph(b, Knight, new Coordinate(0, 0));
//g.findShortest(new Coordinate(7, 7));
