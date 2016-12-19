import $ from 'jquery';
import Backbone from 'backbone';
import _ from 'underscore';

import Board from 'board_model';
import Player from 'player_model';

const Game = Backbone.Model.extend({
	
	defaults: {

		date: new Date.toLocaleTimeString('en-US', {timeZone: zone, timeZoneName: 'short'},
		winStatus: "in progress",
		board: new Board(),
		player1: '',
		player2: '',
		currentPlayer: '',
		playCounter: 0,
	}, // END defaults

	initialize: function(options) {

  this.player1 = new Player();
  this.player1.setName(options.name1);
  this.player1.setMark('X')

  this.player2 = new Player();
  this.player2.setName(options.name2);
  this.player2.setMark('O')
  
  this.currentPlayer = player1;

  return this;
	}, // END initialize

	checkWinStatus: function() {
		if (this.currentPlayer.checkPoints == true) {
			this.winStatus = this.currentPlayer.mark;
			this.currentPlayer.setStatus('won');

			return this.currentPlayer.mark + "(" + this.winStatus + ")" + " won!";

		} else if (this.board.playCounter == 9) {
			this.winStatus = "draw";
			return this.winStatus;
		}; // END if/else conditional
	}, // END checkWinStatus

	setCurrentPlayer: function( player ) {
		if (player == "") {
			throw 42
		} else {
			this.currentPlayer = player;
		};

	}, //END setCurrentPlayer

}); //END Game Model


export default Game;






export default Application;

