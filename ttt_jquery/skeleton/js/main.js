const View = require('./ttt-view.js');
const Game = require('../../solution/game.js');

$( () => {
  const $el = $("#game");
  const game = new Game();
  const view = new View(game, $el);
  view.bindEvents();
});
