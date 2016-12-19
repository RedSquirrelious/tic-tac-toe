import $ from 'jquery';
import Backbone from 'backbone';
import _ from 'underscore';

import Board from 'board_model';
import Player from 'player_model';

const GameView = Backbone.View.extend({

	initialize: function() {
		// this.template = options.template;

		this.contactTemplate = _.template($('#board-template').html());
	},

	render: function() {
// // loop through the array of contact cards
		this.board.forEach(function(square) {
			//show the card

			square.render();

			this.contactTemplate.append(card.$el);
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
