class Move {
  from;
  toList;
  constructor(from, to) {
    if (to.constructor !== Array)
      throw "Move.constructor(from, to): `to` must be an array.";
    this.from = from;
    this.toList = to;
  }

  fromCoordinateEquals(from) {
    return from.file === this.from.file && from.rank === this.from.rank;
  }

  addTo(to) {
    if (!this.hasTo(to)) this.toList.push(to);
  }

  hasTo(to) {
    return this.toList.includes(
      (coord) => coord.file === to.file && coord.rank === to.rank
    );
  }
}

module.exports = Move;
