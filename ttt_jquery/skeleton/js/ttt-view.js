class View {
  constructor(game, $el) {
    this.game = game;
    this.$el = $el;
    this.setupBoard();
  }

  bindEvents() {
    const $sq = $("ul");
    $sq.on("click", e => {
      console.log(e);
      const $target = $(e.target);
      console.log($target);
      console.log($sq);
      if ($target.context === "ul") {
        alert("Invalid move!");
      }
      // alert($currentTarget.data("pos"));
      this.makeMove($target);
    });
  }

  makeMove($square) {
    let mark = this.game.currentPlayer;
    $square.text(mark);

    let pos = $square.data("pos");
    this.game.playMove(pos);
    $square.css("background", "white");
    if (mark === "x") {
      $square.css("color", "green" );
    } else {
      $square.css("color", "blue" );
    }
    if(this.game.board.winner){
      alert(`${mark} won!`);
    }
  }

  setupBoard() {
    const $ul = $("<ul>");
    $ul.addClass("grid");
    $ul.addClass("group");

    for (let i = 0; i < 3; i++) {
      for (let j = 0; j < 3; j++) {
        const $li = $("<li>");
        $li.data("pos", [i, j]);
        console.log($li.data("pos"));

        $ul.append($li);
      }

    this.$el.append($ul);
  }
}
}

module.exports = View;
