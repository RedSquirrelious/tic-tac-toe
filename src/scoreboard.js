import Game from 'game';
import Player from 'player';
import Board from 'board';

//ScoreBoard

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

var startNewGame = function(name1, name2){
  var game = new Game();

  var player1 = new Player();
  player1.setName(name1);

  var player2 = new Player();
  player2.setName(name2);
  
  game.setPlayers(player1, player2);

  this.currentGame = game;
  this.games.push(game);
  this.players.push(player1, player2);

  return game;
}

export default Application;
