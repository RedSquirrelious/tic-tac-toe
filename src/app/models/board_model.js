import Backbone from 'backbone';


const Board = Backbone.Model.extend( {

	defaults: 
		{board: [["-", "-", "-"],
									["-", "-", "-"],
									["-", "-", "-"]]
		}, //END defaults

	initialize: function() {
		console.log('hi there');
		console.log(this.board);
	}, //END initialize

	setMarkAtPosition: function(row, column, mark) {
	
		if (row > 2 || row < 0 || column > 2 || column < 0 || this.board[row][column] != "-" ) {
			throw "Try Again!";
		} else {
			this.board[row][column] = mark;
		}; //end if/else conditional

	}//END setMarkAtPosition

}); //END Board


export default Board;
