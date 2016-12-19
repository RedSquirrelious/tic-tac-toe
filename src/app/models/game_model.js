import $ from 'jquery';
import Backbone from 'backbone';
import _ from 'underscore';

import Board from 'board_model';
import Player from 'player_model';

const Game = Backbone.Model.extend({
	
	defaults: {
		winStatus: "in progress",
		player1: '',
		player2: '',
		currentPlayer: '',
		playCounter: 0
		board: [["-", "-", "-"],
									["-", "-", "-"],
									["-", "-", "-"]],
	}, // END defaults


//makes a new game
	initialize: function(options) {
		this.date = new Date.toLocaleTimeString('en-US', {timeZone: zone, timeZoneName: 'short'});
		this.board = new Board();

	  return this;
	}, // END initialize


//checks to see if someone won the game (or if it is in-progress or a draw)
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


//sets the players of the game and calls in the current player
	setPlayers: function(options) {

		this.player1 = options.player1;
		// this.player1.setName(options.name1);
	  this.player1.setMark('X');

	  this.player2 = options.player2
	  // this.player2.setName(options.name2);
	  this.player2.setMark('O');
	  
	  this.currentPlayer = this.player1;
	}, //END setPlayers


// sets the game's currentPlayer attribute
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

