var fire = require("./ship-methods").fire;

function checkGameStatus(players) {
  return false;
}

function takeTurn(opposingPlayer, guessFunction) {
  var coordinates = guessFunction();
  fire(opposingPlayer, coordinates);
  var gameOver = -checkGameStatus();

  return gameOver;
}

module.exports.checkGameStatus = checkGameStatus;
module.exports.takeTurn = takeTurn;
