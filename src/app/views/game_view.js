import $ from 'jquery';
import _ from 'underscore';
import Backbone from 'backbone';
import Contact from 'app/models/contact';

const GameView = Backbone.View.extend({

	initialize: function(options) {
		this.template = options.template;
	},

	render: function() {
// this sets what we want to see
	  var html = this.template({name: this.currentPlayer.attributes.name});
	  // var html = this.template({name: this.currentPlayer.name});
	  this.$el.html(html);

	// this helps re-bind events since the html is all new
	  this.delegateEvents();

	    // Enable chained calls
	  return this;
  }, //render end



	takeTurns: function(row, col) {
		this.currentPlayer.chooseSquare(row, col);

		if (this.board.playCounter >= 5) {
			console.log(this.checkWinStatus());

		};

		if (this.currentPlayer == this.player1) {
			this.currentPlayer = this.player2;
		} else if (this.currentPlayer == this.player2 ) {
			this.currentPlayer = this.player1;
		};


		this.board.drawBoard();
	}; //END takeTurns
