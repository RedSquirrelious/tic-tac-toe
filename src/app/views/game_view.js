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


		this.listenTo(this, 'testHearing', this.markSquare(this, this.squirrelImages.grass));


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
		$('.row-container').children().children().on('click', function() { 
			if ($(this).has('.cartoon').length) { 
				alert("This Square Already Has a Mark!  Try Another Square!"); 
			} else { var squareElement = '#' + this.id + ' p'; 
					$(squareElement).append('<section class="cartoon"><img src=' + character + '></section>');};
		});
	}, //END markSquare

 //  	chooseSquare: function(row, col) {
	// 	this.currentGame.board.setMarkAtPosition(row, col, this.mark);
	// 	var points = this.getPoints( row, col );
	// 	this.setPoints();
	// }, //END chooseSquare


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