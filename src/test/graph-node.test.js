const Board = require('../board');
const Coordinate = require('../coordinate');
const GraphNode = require('../graph-node');
const Knight = require('../knight');

test("class exists", () => {
  const board = new Board();
  const coordinate = new Coordinate(3,3);
  const node = new GraphNode(board, coordinate, Knight);
  expect(node.piece).toBe(Knight);
  expect(node.parent).toBeNull();
  expect(node.coordinate).toBeEqual(new Coordinate(3, 3));
  expect(node.edges)
});