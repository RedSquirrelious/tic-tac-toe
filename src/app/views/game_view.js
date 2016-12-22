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
		// console.log('the spot where "' + this.currentGame.attributes.board[0][0] + '" was the mark');

	},

	events: { 

		'click .square': 'markSquare'

	},

	render: function() {
		var that = this;
// // this helps re-bind events since the html is all new
  	this.delegateEvents();

// Enable chained calls
	 return this;
  }, //render end

  markImages: {
  	grass: "images/squirrel-grass.jpg",
  	rocks: "images/squirrel-rocks-c.jpg",

  	bugs: "images/Bugs_Bunny.png",

  	elmer: "images/Elmer_Fudd.gif",

  	sam: "images/Yosemite_Sam.png",

  	daffy: "images/Daffy_Duck.png",

  	porky: "images/Porky_Pig.png",

  	marvin: "images/Marvin_the_Martian.png",

  	coyote: "images/Wile_E._Coyote.png",

  	roadrunner: "images/Roadrunner.png"
  },


  markSquare: function(event) {
  	//not entirely sure why i need to save the this as that here...  i can pass in 'this' as a method argument, but it won't accept it for the method call??
  	var that = this;

  	console.log(event.target.id);

  	//watches for clicks on the board squares
		// $('.row-container').children().children().on('click', function() { 

		//checks to see if an image/mark is in there already & stops them if there is
			if ($('#' + event.target.id).has('.mark').length) { 
				alert("This Square Already Has a Mark!  Try Another Square!"); 
			} 

		//if there is no image/mark in the clicked square, then puts a mark there and updates the player's points attributes (we calculate for win based on the player's points attributes)
			else { 
					var squareElement = '#' + event.target.id + ' p'; 
					$(squareElement).append('<section class="mark"><img src=' + this.model.currentPlayer.attributes.mark + '></section>');};

				//assigns the points associated with the clicked squares
			var testPoints = that.getPoints(event.target.id);

			// sets the player's Row attribute
					this.model.currentPlayer.setPointsRow(testPoints, event.target.id);

			// sets the player's Column attribute
					this.model.currentPlayer.setPointsColumn(testPoints, event.target.id);

			// sets the player's diagonal attributes
					this.model.currentPlayer.setPointsDiagonal(testPoints, event.target.id);

					this.takeTurns();

	}, //END markSquare


//IDEA IS TO ASSIGN POINTS BASED ON CLICKS
//assigns points based on where a player marks the Magic Square 
	getPoints: function( squareElement) {
		var points = 0
		if (squareElement == 'row0col0') {
			points = 8;	
		} else if (squareElement == 'row0col1') {
			points = 1;
		} else if (squareElement == 'row0col2') {
			points = 6;
		} else if (squareElement == 'row1col0') {
			points = 3;
		} else if (squareElement == 'row1col1') {
			points = 5;
		} else if (squareElement == 'row1col2') {
			points = 7;
		} else if (squareElement == 'row2col0') {
			points = 4;
		} else if (squareElement == 'row2col1') {
			points = 9;
		} else if (squareElement == 'row2col2') {
			points = 2;
		};

		return points;
	}, //END getPoints

	takeTurns: function() {

		// if (this.model.attributes.playCounter >= 5) {
		// 	// console.log(this.checkWinStatus());
		// 	$('#board h2').append('<h4>' + this.checkWinStatus + '</h4>');
		// };

		if (this.model.currentPlayer == this.model.attributes.player1) {
			this.model.currentPlayer = this.model.attributes.player2;
		} 

		else if (this.model.currentPlayer == this.model.attributes.player2 ) {
			this.model.currentPlayer = this.model.attributes.player1;
		};

	} //END takeTurns

});
export default GameView;