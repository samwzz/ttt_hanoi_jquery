var hanoiGame = require('./game.js');

class View {
  constructor(game, $el){
    this.game = game;
    this.$el = $el;
  }

  setUpTower(){
    for (let i = 0; i < 3; i++) {
      const $ul = $("<ul>");
      $ul.data("index", i);

      if (i === 0) {
        for (let j = 0; j < 3; j++) {
          const $li = $("<li>");
          $ul.append($li);
        }
      }
      this.$el.append($ul);
    }
  }
}

module.exports = View;
