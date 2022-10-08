// TEST 1
var checkForShip = require("./ship-methods").checkForShip;

function validateLocation(player, coordinates) {
  var x = coordinates[0];
  var y = coordiantes[1];

  var spaceAvailable = !checkForShip(player, coordinates);
  if (x <= 9 && x >= 0 && y <= 9 && y >= 0) {
    return spaceAvailable; // DECIDES WHETHER THIS VALID SPACE IS OCCUPIED
  } else {
    return false;
  }
}

function validateLocations(player, locations) {
  var validated = locations.map(function (location) {
    return validateLocation(player, location);
  });
  return validated.indexOf(false) === -1;
}

function placeShip(player, ship, startingCoordinates, direction) {
  if (!direction)
    throw Error("You left out the direction ! I need that for math!");

  var proposedLocations = [];
  var previousLocation, rowNumber, columnNumber;

  for (var i = 0; i < ship.size; i++) {
    previousLocation = proposedLocations[i - 1] || [];
    rowNumber = previousLocation[0];
    columnNumber = previousLocation[1];

    proposedLocations[i] =
      i === 0
        ? startingCoordinates
        : direction === "horizontal"
        ? [rowNumber, ++columnNumber]
        : [++rowNumber, columnNumber];
    if (validateLocations(player, proposedLocations)) {
      ship.locations = proposedLocations;
    } else {
      return false;
    }
  }
}

// TEST 2
function getRandomCoordinates() {
  var x = Math.floor(Math.random() * 7);
  var y = Math.floor(Math.random() * 7);
  return [x, y];
}

function getRandomDirection() {
  return Math.random() > 0.5 ? "horizontal" : "vertical";
}
/*
fire(player, getRandomCoordinates());
placeShip(computerPlayer, computerPlayer.ship[0], getRandomCoordinates(), getRandomDirection());
*/
/*
function computerFire(player) {
  /*
  var x = Math.floor(Math.random() * 7);
  var y = Math.floor(Math.random() * 7);
  var coordinates = [x, y];
  
  fire(player, coordinates);
}
*/
/*
function computerPlaceShip(player, ship) {
  /*
  var direction = Math.random() > 0.5 ? "horizontal" : "vertical";
  */
/*
  var x = Math.floor(Math.random() * 7);
  var y = Math.floor(Math.random() * 7);
  var coordinates = [x, y];
  
  placeShip(player, ship, coordinates, direction);
}
*/

module.exports = {
  placeShip: placeShip,
  validateLocations: validateLocations,
  validateLocation: validateLocation,
  /*
  computerPlaceShip: computerPlaceShip,
  computerFire: computerFire,
  */
};
