const HanoiGame = require('./game.js');
const HanoiView = require('./hanoi-view.js');

$( () => {
  const rootEl = $('.hanoi');
  const game = new HanoiGame();
  const view = new HanoiView(game, rootEl);
  view.setUpTower();
});
console.log("random");
