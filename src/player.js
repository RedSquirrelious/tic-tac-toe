import Backbone from 'backbone';

const Player = Backbone.Model.extend({
	defaults: {
		name: '',
		mark: '',
		status: '',
		currentGame: '',
		row1: 0,
		row2: 0,
		row3: 0,
		col1: 0,
		col2: 0,
		col3: 0,
		diagonalL2R: 0,
		diagonalR2L: 0
	}, // END defaults

	initialize: function() {
		console.log('new Player created');
	}

});   //END Player 

// Player.prototype.getName = function() {
// 	return this.name;
// };

var setName = function(name) {
	if (name == "") {
		throw 42
	} else {
		this.name = name;
	};
};

// Player.prototype.setMark = function( mark ) {
// 	if (mark != "X" && mark != "O" && mark != "x" && mark != "o") {
// 		throw 42
// 	} else {
// 		this.mark = mark.toUpperCase();
// 	};
// };

// Player.prototype.getMark = function() {
// 	return this.mark;
// };

// Player.prototype.setCurrentGame = function(game) {
// 	this.currentGame = game;
// };


//can't do until board is made
Player.prototype.chooseSquare = function(row, col) {
	this.currentGame.board.setMarkAtPosition(row, col, this.mark);
	var points = this.getPoints( row, col );

	if (row == 0) {
		this.row0 += points;
	} else if (row == 1) {
		this.row1 += points;
	} else if (row == 2) {
		this.row2 += points;
	};

	if (col == 0 ) {
		this.col0 += points;
	} else if (col == 1 ) {
		this.col1 += points;
	} else if (col == 2) {
		this.col2 += points;
	};

	if ((row == 0 && col == 0 ) || (row == 1 && col == 1 ) || (row == 2 && col == 2 )) {
		this.diagonalL2R += points;
	};

	if ((row == 0 && col == 2 ) || (row == 1 && col == 2 ) || (row == 2 && col == 0 )) {
		this.diagonalR2L += points;
	};
}; //chooseSquare

Player.prototype.checkPoints = function() {
	if (this.row0 == 15 || this.row1 == 15 || this.row2 == 15 || this.col0 == 15 || this.col1 == 15 || this.col2 == 15 || this.diagonalR2L == 15 || this.diagonalL2R == 15) {
		return true;
	};
	return false;
}

Player.prototype.getPoints = function( row, col ) {
	var points = 0

	if (row == 0 && col == 0) {
		points = 8;
	} else if (row == 0 && col == 1 ) {
		points = 1;
	} else if (row == 0 && col == 2 ) {
		points = 6;
	} else if (row == 1 && col == 0 ) {
		points = 3;
	} else if (row == 1 && col == 1 ) {
		points = 5;
	} else if (row == 1 && col == 2 ) {
		points = 7;
	} else if (row == 2 && col == 0 ) {
		points = 4;
	} else if (row == 2 && col == 1 ) {
		points = 9;
	} else if (row == 2 && col == 2 ) {
		points = 2;
	};
	return points;
}



// shows whether a player won or last its last game

Player.prototype.setStatus = function(status) {
	if (status.toLowerCase() != "won" && status.toLowerCase() != "lost") {
		throw 42
	} else {
	this.status = status.toLowerCase();
	}
};

Player.prototype.getStatus = function() {
	return this.status;
};


export default Player;
