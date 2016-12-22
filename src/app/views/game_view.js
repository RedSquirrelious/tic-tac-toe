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

	events: { 

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

		console.log('squee ' + this.currentGame.attributes.player1.attributes.name);

		this.listenTo(this.markSquare(this, this.squirrelImages.rocks));
// // this helps re-bind events since the html is all new
  	this.delegateEvents();

// Enable chained calls
	 return this;
  }, //render end

  squirrelImages: {
  	grass: "images/squirrel-grass.jpg",
  	rocks: "images/squirrel-rocks.jpg"
  },

  cartoonCharacterImages: {
  	bugs: "https://upload.wikimedia.org/wikipedia/en/thumb/1/17/Bugs_Bunny.svg/360px-Bugs_Bunny.svg.png",
  	elmer: "https://upload.wikimedia.org/wikipedia/en/6/66/ElmerFudd.gif",

  	sam: "https://upload.wikimedia.org/wikipedia/en/thumb/2/2d/Yosemite_Sam.svg/360px-Yosemite_Sam.svg.png",

  	daffy: "https://upload.wikimedia.org/wikipedia/en/thumb/f/f4/Daffy_Duck.svg/360px-Daffy_Duck.svg.png",

  	porky: "https://upload.wikimedia.org/wikipedia/en/thumb/8/88/Porky_Pig.svg/300px-Porky_Pig.svg.png",

  	marvin: "https://upload.wikimedia.org/wikipedia/en/thumb/d/d5/Marvin_the_Martian.svg/334px-Marvin_the_Martian.svg.png",

  	coyote: "https://upload.wikimedia.org/wikipedia/en/thumb/3/3c/Wile_E._Coyote.svg/220px-Wile_E._Coyote.svg.png",

  	roadrunner: "https://upload.wikimedia.org/wikipedia/en/e/ee/Roadrunner_looney_tunes.png"
  },


  markSquare: function(squareElement, character) {
  	//not entirely sure why i need to save the this as that here...  i can pass in 'this' as a method argument, but it won't accept it for the method call??
  	var that = this;


  	//watches for clicks on the board squares
		$('.row-container').children().children().on('click', function() { 

		//checks to see if an image/mark is in there already & stops them if there is
			if ($(this).has('.cartoon').length) { 
				alert("This Square Already Has a Mark!  Try Another Square!"); 
			} 

		//if there is no image/mark in the clicked square, then puts a mark there and updates the player's points attributes (we calculate for win based on the player's points attributes)
			else { 
					var squareElement = '#' + this.id + ' p'; 
					$(squareElement).append('<section class="cartoon"><img src=' + that.currentGame.currentPlayer.attributes.mark + '></section>');};


				console.log('hello ' + that.currentGame.attributes.player1.attributes.name);
				console.log('woah ' + that.currentGame.currentPlayer.attributes.name);

				//assigns the points associated with the clicked squares
			var testPoints = that.getPoints(this.id);

			//sets the player's Row attribute
					that.currentGame.currentPlayer.setPointsRow(testPoints, this.id);

			//sets the player's Column attribute
					that.currentGame.currentPlayer.setPointsColumn(testPoints, this.id);

			//sets the player's diagonal attributes
					that.currentGame.currentPlayer.setPointsDiagonal(testPoints, this.id);


		});

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

	takeTurns: function(row, col) {
		this.currentPlayer.chooseSquare(row, col);

		if (this.board.playCounter >= 5) {
			// console.log(this.checkWinStatus());
			$('#board h2').append('<h4>' + this.checkWinStatus + '</h4>');

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