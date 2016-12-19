import Backbone from 'backbone';
// //Board

const Board = Backbone.Model.extend( {

	defaults: 
		{board: [[null, null, null],
									[null, null, null],
									[null, null, null]]
		}, //END defaults

	initialize: function() {
		console.log('hi there');

	}, //END initialize

	setMarkAtPosition: function(row, column, mark) {
	
		if (row > 2 || row < 0 || column > 2 || column < 0 || this.board[row][column] != null ) {
			throw "Try Again!";
		} else {
			this.board[row][column] = mark;
		}; //end if/else conditional

	}//END setMarkAtPosition

}); //END Board

// Board.prototype.getMarkAtPosition = function(row, column) {
//   if (row > 2 || row < 0 || column > 2 || column < 0) {
//     throw "Spot Does Not Exist!";
//   } else {
// 	   return this.board[row][column];
//   }
// };






export default Board;
