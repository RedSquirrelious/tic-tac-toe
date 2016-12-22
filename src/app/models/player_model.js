import $ from 'jquery';
import Backbone from 'backbone';
import _ from 'underscore';

const Player = Backbone.Model.extend({
	defaults: {
		name: '',
		mark: '',
		status: '',
		currentGame: '',
		row0: 0,
		row1: 0,
		row2: 0,
		col0: 0,
		col1: 0,
		col2: 0,
		diagonalL2R: 0,
		diagonalR2L: 0
	}, // END defaults


//gives us a new player
	initialize: function(options) {
		this.set("name", options.name)
		this.set("row1", 0)
		console.log(this.get("name"));
		console.log(this.get('col2'));
		console.log('new Player created: ' + this.get("name"));


	}, //END initialize


//sets the players' names
	setName: function(name) {
		if (name == "") {
			throw 42
		} else {
			this.name = name;
		};
	}, //END setName

//sets the player's mark
	setMark: function(mark) {
		this.set("mark", mark);
	}, //END setMark


//
	chooseSquare: function(row, col) {
		// this.currentGame.board.setMarkAtPosition(row, col, this.mark);
		var points = this.getPoints( row, col );
		this.setPoints();
	}, //END chooseSquare

//works
// //changes the player's attributes based on points from the Magic Square
// 	setPoints: function(row, col) {
// 		if (row == 0) {
// 			this.row0 += points;
// 		} else if (row == 1) {
// 			this.row1 += points;
// 		} else if (row == 2) {
// 			this.row2 += points;
// 		};

// 		if (col == 0 ) {
// 			this.col0 += points;
// 		} else if (col == 1 ) {
// 			this.col1 += points;
// 		} else if (col == 2) {
// 			this.col2 += points;
// 		};

// 		if ((row == 0 && col == 0 ) || (row == 1 && col == 1 ) || (row == 2 && col == 2 )) {
// 			this.diagonalL2R += points;
// 		};

// 		if ((row == 0 && col == 2 ) || (row == 1 && col == 2 ) || (row == 2 && col == 0 )) {
// 			this.diagonalR2L += points;
// 		};
// 	}, //END setPoints

//IDEA IS TO CHANGE BASED ON CLICK
//changes the player's attributes based on points from the Magic Square
	setPointsRow: function(points, squareElement) {
		// console.log('Player setPoints:  i am supposed to talk about my attribute.  expect a number');
		console.log(this.attributes.row0);
		// console.log('Player setPoints: i am squareElement ' + squareElement );

	

		if (squareElement.substr(0,4) == 'row0') {
			this.attributes.row0 += points;

			console.log("Player setPoints: i'm the player's row0 attribute! " + this.attributes.row0);

		} 	else if (squareElement.substr(0,4) == 'row1') {			
			this.attributes.row1 += points;
			console.log("Player setPoints: i'm the player's row1 attribute! " + this.attributes.row1);

		} else if (squareElement.substr(0,4) == 'row2') {			
			this.attributes.row2 += points;
			console.log("Player setPoints: i'm the player's row2 attribute! " + this.attributes.row2);
			console.log(this.attributes.row2);
		};
	},

	setPointsColumn: function(points, squareElement) {
		// console.log('Player setPoints:  i am supposed to talk about my attribute.  expect a number');
		console.log(this.attributes.col0);

		if (squareElement.substr(4,6) == 'col0') {
			this.attributes.col0 += points;
			console.log("Player setPoints: i'm the player's col0 attribute! " + this.attributes.col0);
		} 	else if (squareElement.substr(4,6) == 'col1') {			
			this.attributes.col1 += points;
			console.log("Player setPoints: i'm the player's col1 attribute! " + this.attributes.col1);
		} else if (squareElement.substr(4,6) == 'col2') {			
			this.attributes.col2 += points;
			console.log("Player setPoints: i'm the player's col2 attribute! " + this.attributes.col0);
			console.log(this.attributes.row2);
		};
	}, //END setPoints

	setPointsDiagonal: function(points, squareElement) {
		console.log('Player setPoints:  i am supposed to talk about my attribute.  expect a number');
		console.log(this.attributes.diagonalR2L);

		if ((squareElement.substr(0,4) == 'row0' && squareElement.substr(4,6) == 'col0' ) || (squareElement.substr(0,4) == 'row1' && squareElement.substr(4,6) == 'col1' ) || (squareElement.substr(0,4) == 'row2' && squareElement.substr(4,6) == 'col2' )) {
			this.attributes.diagonalL2R += points;
			console.log('setPointsDiagonal: here are the points for diagonalL2R: ' + this.attributes.diagonalL2R);
		};

		if ((squareElement.substr(0,4) == 'row0' && squareElement.substr(4,6) == 'col2' ) || (squareElement.substr(0,4) == 'row1' && squareElement.substr(4,6) == 'col1' ) || (squareElement.substr(0,4) == 'row2' && squareElement.substr(4,6) == 'col0' )) {
			this.attributes.diagonalR2L += points;

			console.log('setPointsDiagonal: here are the points for diagonalL2R: ' + this.attributes.diagonalR2L);
		};
	},

//checks to see if a player won (based on the Magic Square)
	checkPoints: function() {
		if (this.attributes.row0 == 15 || this.attributes.row1 == 15 || this.attributes.row2 == 15 || this.attributes.col0 == 15 || this.attributes.col1 == 15 || this.attributes.col2 == 15 || this.attributes.diagonalR2L == 15 || this.attributes.diagonalL2R == 15) {
			return true;
		};
		return false;
	}, //END checkPoints





// shows whether a player won or last its last game
	setStatus: function(status) {
		if (status.toLowerCase() != "won" && status.toLowerCase() != "lost") {
			throw 42
		} else {
		this.status = status.toLowerCase();
		}
	}, //END setStatus

	wabbitHearing: function() {
		this.listenTo(this.currentGame, this)
		console.log('kill da wabbit');
	}

});   //END Player 



export default Player;
