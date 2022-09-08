const Coordinate = require("../coordinate");
const knight = require("../knight");

test("Ensure correct possible moves are generated", () => {
  let coordinate = new Coordinate(3,3);
  let result = knight.getAllPossibleMoves(coordinate);
  expect(result).toContainEqual(new Coordinate(4,5));
  expect(result).toContainEqual(new Coordinate(5,2));
  expect(result).toContainEqual(new Coordinate(2,1));
  expect(result).toContainEqual(new Coordinate(1,4));
  expect(result).toContainEqual(new Coordinate(2,5));
  expect(result).toContainEqual(new Coordinate(5,4));
  expect(result).toContainEqual(new Coordinate(4,1));
  expect(result).toContainEqual(new Coordinate(1,2));

  
  coordinate = new Coordinate(0, 0);
  result = knight.getAllPossibleMoves(coordinate);
  expect(result).toContainEqual(new Coordinate(1,2));
  expect(result).toContainEqual(new Coordinate(2,1));

  coordinate = new Coordinate(7, 7);
  result = knight.getAllPossibleMoves(coordinate);
  expect(result).toContainEqual(new Coordinate(6,5));
  expect(result).toContainEqual(new Coordinate(5,6));


  coordinate = new Coordinate(6, 6);
  result = knight.getAllPossibleMoves(coordinate);
  expect(result).toContainEqual(new Coordinate(5,4));
  expect(result).toContainEqual(new Coordinate(4,7));
  expect(result).toContainEqual(new Coordinate(7,4));
  expect(result).toContainEqual(new Coordinate(4,5));
});
