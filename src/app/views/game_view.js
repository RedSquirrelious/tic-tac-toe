import $ from 'jquery';
import Backbone from 'backbone';
import _ from 'underscore';

import Board from 'app/models/board_model';
import Player from 'app/models/player_model';
import Game from 'app/models/game_model';

const GameView = Backbone.View.extend({

	initialize: function(options) {
		this.template = options.template;
		// if my game changes, we re-render
		this.listenTo(this.model, 'change', this.render );

		this.currentGame = options.currentGame;
		console.log('the spot where "' + this.currentGame.attributes.board[0][0] + '" was the mark');

	},

	render: function() {
		var that = this;
		
		for (var i = 0; i<3; i++) {
			var rowClass = "row" + i;
			this.el.insertAdjacentHTML('beforeend', "<p class='" + rowClass + "'>");
			for (var n = 0; n < 3; n++) {
				this.el.append(that.currentGame.attributes.board[i][n]);
			};//END n
			this.el.insertAdjacentHTML('beforeend', "</p>");
			this.el.append("\n");
		}; //END i


		var html = this.sortSquares();
		console.log(html);
		// this.el.html(html);

// // this helps re-bind events since the html is all new
  this.delegateEvents();

// Enable chained calls
	 return this;
  }, //render end

  sortSquares: function() {

  },

	takeTurns: function(row, col) {
		this.currentPlayer.chooseSquare(row, col);

		if (this.board.playCounter >= 5) {
			// console.log(this.checkWinStatus());

		};

		if (this.currentPlayer == this.player1) {
			this.currentPlayer = this.player2;
		} else if (this.currentPlayer == this.player2 ) {
			this.currentPlayer = this.player1;
		};


		this.board.drawBoard();
	} //END takeTurns

});
export default GameView;