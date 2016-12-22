import $ from 'jquery';
import Backbone from 'backbone';
import _ from 'underscore';


import Board from 'app/models/board_model';
import Player from 'app/models/player_model';

const Game = Backbone.Model.extend({
	
	defaults: {
		winStatus: "in progress",
		player1: '',
		player2: '',
		currentPlayer: '',
		playCounter: 0
	}, // END defaults

	// events: {'click', }

//makes a new game
	initialize: function(options) {

		this.set("player1", options.player1);
		this.set("player2", options.player2);

		console.log('new game! ' + this.get("player1").attributes.name);
	  return this;
	}, // END initialize


//checks to see if someone won the game (or if it is in-progress or a draw)
	checkWinStatus: function() {
		if (this.currentPlayer.checkPoints == true) {
			this.set("winStatus", this.currentPlayer.mark);
			this.get("currentPlayer").setStatus('won');

			return this.get("currentPlayer").mark + "(" + this.get("winStatus") + ")" + " won!";

		} else if (this.board.playCounter == 9) {
			this.set("winStatus", "draw");
			return this.get("winStatus");
		}; // END if/else conditional
	}, // END checkWinStatus


//sets the players of the game and calls in the current player
	setPlayers: function(options) {

		this.set("player1", options.player1);
		// this.player1.setName(options.name1);
	  this.player1.setMark('X');

	  this.set("player2", options.player2);
	  // this.player2.setName(options.name2);
	  this.player2.setMark('O');
	  
	  this.set("currentPlayer", this.player1);
	}, //END setPlayers


// sets the game's currentPlayer attribute
	setCurrentPlayer: function( player ) {
		if (player == "") {
			throw 42
		} else {
			this.set("currentPlayer", player);
		};

	}, //END setCurrentPlayer

}); //END Game Model


export default Game;



