class Move {
  square;
  destinations; // Destination Dictionary

  constructor(from, destinations = []) {
    if (destinations === undefined || destinations.constructor !== Array)
      throw "Move.constructor(from, to): `to` must be an array.";
    this.square = from;
    this.destinations = {};

    destinations.forEach((destination) => {
      this.addDestination(destination);
    });
  }

  getDestinations() {
    return Object.values(this.destinations);
  }

  equals(coord) {
    return coord === this.square.toString();
  }

  containsDestination(destination) {
    return (destination.toString() in this.destinations);
  } 

  addDestination(destination) {
    if (!this.containsDestination(destination)) {
      const squareString = destination.toString();
      this.destinations[squareString] = destination;
    }
    // else {
    //   console.log(`Attempted to add duplicate destination ${this.square}:${destination.toString()}`);
    // }
  }
}

module.exports = Move;
