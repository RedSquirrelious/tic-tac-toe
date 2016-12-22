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



//IDEA IS TO CHANGE BASED ON CLICK
//changes the player's attributes based on points from the Magic Square
	setPointsRow: function(points, squareElement) {
		
		console.log(this.attributes.row0);
	

		if (squareElement.substr(0,4) == 'row0') {
			this.set('row0', this.get("row0") + points);

		} 	

		else if (squareElement.substr(0,4) == 'row1') {			
			this.set('row1', this.get("row0") + points);
		} 

		else if (squareElement.substr(0,4) == 'row2') {			
			this.set('row2', this.get("row0") + points);
		};
	},

	setPointsColumn: function(points, squareElement) {
		// 
		console.log(this.attributes.col0);

		if (squareElement.substr(4,6) == 'col0') {
			this.set('col0', this.get("col0") + points);
		} 	

		else if (squareElement.substr(4,6) == 'col1') {			
			this.set('col1', this.get("col1") + points);
		} 

		else if (squareElement.substr(4,6) == 'col2') {			
			this.set('col2', this.get("col2") + points);
		};
	}, //END setPoints

	setPointsDiagonal: function(points, squareElement) {

		if ((squareElement.substr(0,4) == 'row0' && squareElement.substr(4,6) == 'col0' ) || (squareElement.substr(0,4) == 'row1' && squareElement.substr(4,6) == 'col1' ) || (squareElement.substr(0,4) == 'row2' && squareElement.substr(4,6) == 'col2' )) {

			this.set('diagonalL2R', this.get('diagonalL2R') + points);
		};

		if ((squareElement.substr(0,4) == 'row0' && squareElement.substr(4,6) == 'col2' ) || (squareElement.substr(0,4) == 'row1' && squareElement.substr(4,6) == 'col1' ) || (squareElement.substr(0,4) == 'row2' && squareElement.substr(4,6) == 'col0' )) {
			
			this.set('diagonalR2L', this.get('diagonalR2L') + points);
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
