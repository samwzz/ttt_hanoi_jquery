class View {
  constructor(game, $el) {
    this.game = game;
    this.$el = $el;
    this.setupBoard();
  }

  bindEvents() {}

  makeMove($square) {}

  setupBoard() {
    const $ul = $("<ul>");
    $ul.addClass(".grid");
    const $li = $("<li>");
    for (var i = 0; i < 9; i++) {
      $ul.append($li);

    }
    this.$el.append($ul);
  }
}

module.exports = View;
