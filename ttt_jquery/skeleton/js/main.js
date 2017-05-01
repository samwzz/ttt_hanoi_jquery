const View = require('/Users/appacademy/Desktop/JQuery/skeleton/js/ttt-view.js');
const Game = require('/Users/appacademy/Desktop/JQuery/solution/game.js');

$( () => {
  const $el = $("#game");
  const game = new Game();
  const view = new View(game, $el);
});
