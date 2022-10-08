var expect = require("chai").expect;

describe("PLAYER METHODS", function () {
  describe("validateLocation", function () {
    var validateLocation =
      require("../game-logic/player-methods").validateLocation;
    var player;

    beforeEach(function () {
      player = {
        ships: [
          {
            locations: [[7, 7]],
          },
        ],
      };
    });
    it("should confirm VALID for unoccupied locations in range", function () {
      var location = [0, 0];
      var actual = validateLocation(player, location);
      expect(actual).to.be.ok;
    });
    it("should confirm INVALID for occupied locations in range", function () {
      var location = [7, 7];
      var actual = validateLocation(player, location);
      expect(actual).to.be.false;
    });
    it("should confirm INVALID for UNOCCUPIED locations OUT of range", function () {
      var locationHigh = [10, 10];
      var locationLow = [-1, -1];
      expect(validateLocation(player, locationHigh)).to.be.false;
      expect(validateLocation(player, locationLow)).to.be.false;
    });
  });

  describe("validateLocations", function () {
    var validateLocations =
      require("../game-logic/player-methods").validateLocations;
    var player;

    beforeEach(function () {
      player = {
        ships: [
          {
            locations: [[0, 0]],
          },
        ],
      };
    });
    it("should correctly report a list of unoccupied locations is valid", function () {
      var locations = [
        [1, 1],
        [1, 2],
        [1, 3],
        [1, 4],
      ];
      expect(validateLocations).to.be.ok;
    });
    it("should correctly report a problem if any location in the list is invalid", function () {
      var locations = [
        [1, 1],
        [1, 2],
        [1, 3],
        [10, 10],
      ];
      expect(validateLocations).to.be.false;
    });
  });

  describe("placeShip", function () {
    var placeShip = require("../game-logic/player-methods").placeShip;
    var player;

    beforeEach(function () {
      player = {
        ships: [
          {
            size: 1,
            locations: [],
          },
          {
            size: 2,
            locations: [
              [1, 0],
              [1, 1],
            ],
          },
        ],
      };
    });
    it("should update a ship with a valid starting location", function () {
      var ship = player.ships[0];
      var coordinates = [0, 1];

      placeShip(player, ship, coordinates, "horizontal");
      var actual = ship.locations;

      expect(actual).to.be.ok;
      expect(actual).to.have.length(1);
      expect(actual[0]).to.deep.equal([0, 1]);
    });

    it("should throw an error if no direction is specified", function () {
      var ship = player.ships[0];
      var coordinates = [0, 1];

      var handler = function () {
        placeShip(player, ship, coordinates);
      };
      expect(handler).to.throw(Error);
      expect(handler).to.throw(
        "You left out the direction ! I need that for math!"
      );
    });
  });
});

/*
describe("COMPUTER PLAYER", function () {
  describe("computerFire", function () {
    var computerFire = require("../game-logic/player-methods").computerFire;
    var player;

    beforeEach(function () {
      player = {
        ships: [
          {
            locations: [[7, 7]],
          },
        ],
      };
    });
    it("should aim at a random location", function () {
      var ship = player.ships[0];

      computerFire();
      // EXPECT(SHIP).TO.......
      // EXPECT(SHIP.DAMAGE).TO.HAVE.LENGTH(1) || EXPECT(SHIP.DAMAGE).TO.BE.EMPTY
    });
  });
});
*/
