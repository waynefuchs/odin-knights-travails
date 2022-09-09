class Move {
  from;
  toList;
  constructor(from, to) {
    if (to === undefined || to.constructor !== Array)
      throw "Move.constructor(from, to): `to` must be an array.";
    this.from = from;
    this.toList = to;
  }

  fromEquals(coord) {
    return coord.file === this.from.file && coord.rank === this.from.rank;
  }

  addTo(to) {
    if (!this.toListContains(to)) this.toList.push(to);
  }

  toListContains(to) {
    return this.toList.some(
      (coord) => coord.file === to.file && coord.rank === to.rank
    );
  }
}

module.exports = Move;
