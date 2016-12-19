import Game from 'game';
import Player from 'player';
import Board from 'board';


const Application = Backbone.Model.extend({
	defaults: {
  games: [],
  players: [],
  currentGame: ''
	},

	initialize: function() {
		console.log('new Application created');
	},

});

