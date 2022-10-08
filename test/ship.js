var expect = require("chai").expect;

// TEST 1
describe("checkForShip", function () {
  var checkForShip = require("../game-logic/ship-methods").checkForShip;

  // TEST 6
  var player;
  before(function () {
    player = {
      /*
      ships: [
        {
          locations: [[0, 0]],
        },
      ],
      */
      ships: [
        {
          locations: [
            [0, 0],
            [0, 1],
          ],
        },
        {
          locations: [
            [1, 0],
            [1, 1],
          ],
        },
        {
          locations: [
            [2, 0],
            [2, 1],
            [2, 2],
            [2, 3],
          ],
        },
      ],
    };
  });

  it("should correctly report no ship at a given players coordinates", function () {
    /*
    player = {
      ships: [
        {
          locations: [[0, 0]],
        },
      ],
    };
    */

    expect(checkForShip(player, [7, 7])).to.be.false;
  });

  // TEST 2
  it("should correctly report a ship located at a given coordinates", function () {
    /*
    player = {
      ships: [
        {
          locations: [[0, 0]],
        },
      ],
    };
    */

    // expect(checkForShip(player, [0, 0])).to.be.true;
    expect(checkForShip(player, [0, 0])).to.deep.equal(player.ships[0]);
  });

  // TEST 3
  it("should handle ships located at more than one coordinate", function () {
    /*
    player = {
      ships: [
        {
          locations: [
            [0, 0],
            [0, 1],
          ],
        },
      ],
    };
    */

    // expect(checkForShip(player, [0, 0])).to.be.true;
    expect(checkForShip(player, [0, 0])).to.deep.equal(player.ships[0]);
    // expect(checkForShip(player, [0, 1])).to.be.true;
    expect(checkForShip(player, [0, 1])).to.deep.equal(player.ships[0]);
    expect(checkForShip(player, [7, 7])).to.be.false;
  });

  // TEST 4
  it("should handle checking multiple ships", function () {
    /*
    player = {
      /*
      ships: [
        {
          locations: [
            [0, 0],
            [0, 1],
          ],
        },
        {
          locations: [
            [1, 0],
            [1, 1],
          ],
        },
        {
          locations: [
            [2, 0],
            [2, 1],
            [2, 2],
            [2, 3],
          ],
        },
      ],
    };
    */

    // expect(checkForShip(player, [0, 0])).to.be.true;
    expect(checkForShip(player, [0, 0])).to.deep.equal(player.ships[0]);
    // expect(checkForShip(player, [0, 1])).to.be.true;
    expect(checkForShip(player, [0, 1])).to.deep.equal(player.ships[0]);
    // expect(checkForShip(player, [1, 0])).to.be.true;
    expect(checkForShip(player, [1, 0])).to.deep.equal(player.ships[1]);
    // expect(checkForShip(player, [1, 1])).to.be.true;
    expect(checkForShip(player, [1, 1])).to.deep.equal(player.ships[1]);
    // expect(checkForShip(player, [2, 3])).to.be.true;
    expect(checkForShip(player, [2, 3])).to.deep.equal(player.ships[2]);
    expect(checkForShip(player, [7, 7])).to.be.false;
  });
});

describe("damageShip", function () {
  var damageShip = require("../game-logic/ship-methods").damageShip;

  it("should register damage on a given ship at a given location", function () {
    var ship = {
      locations: [[0, 0]],
      damage: [],
    };
    damageShip(ship, [0, 0]);

    expect(ship.damage).to.not.be.empty;
    // expect(ship.damage).to.include([0, 0]);
    expect(ship.damage[0]).to.deep.equal([0, 0]);
  });
});

// TEST 5
describe("fire", function () {
  var fire = require("../game-logic/ship-methods").fire;
  // TEST 6
  var player;
  beforeEach(function () {
    player = {
      ships: [
        {
          locations: [[0, 0]],
          damage: [],
        },
      ],
    };
  });

  // TEST 7
  after(function () {
    console.log("the entire test suite completed");
  });
  afterEach(function () {
    console.log("one unit test completed");
  });

  it("should record damage on the given players ship at a given coordinate", function () {
    /*
    var player = {
      ships: [
        {
          locations: [[0, 0]],
          damage: [],
        },
      ],
    };
    */
    fire(player, [0, 0]);

    expect(player.ships[0].damage[0]).to.deep.equal([0, 0]);
  });

  it("should NOT record damage if there is no ship at my coordinates", function () {
    /*
    var player = {
      ships: [
        {
          locations: [[0, 0]],
          damage: [],
        },
      ],
    };
    */
    fire(player, [7, 7]);

    expect(player.ships[0].damage).to.be.empty;
  });
});
