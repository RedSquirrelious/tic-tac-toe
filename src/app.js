import $ from 'jquery';
import Backbone from 'backbone';
import _ from 'underscore';

import Game from 'app/models/game_model';
import Board from 'app/models/board_model';
import Player from 'app/models/player_model';

import GameView from 'app/views/game_view';
import PlayerView from 'app/views/player_view';

var testPlayers = [
	{
		name: "Bugs Bunny",
	}, {
		name: "Elmer Fudd",
	}, {
		name:"Yosemite Sam" ,
	}
];



$(document).ready(function() {
	var player1 = new Player({name: testPlayers[0].name});
	var player2 = new Player({name: testPlayers[1].name});

	var game = new Game({player1: player1, player2: player2});
	var board = new GameView(
	{
	  // model: Game,
	  template: _.template($('#board-template').html()),
	  el: $('#game'),
	 	model: game
	}
	);

	var p1 = new PlayerView({
		el: $('#player-list'),
		model: player1,
		template: _.template($('#player-list-template').html()),
		player: player1
	});

	var p2 = new PlayerView({
		el: $('#player-list'),
		model: Player,
		template: _.template($('#player-list-template').html()),
		player: player2
	});

	game.currentPlayer = player1;

	console.log('i am the current player: ' + game.currentPlayer.attributes.name);

	// game.currentPlayer = player2;

	game.set({'currentPlayer': 'player2'});

		console.log('i am the current player now: ' + game.currentPlayer.attributes.name);

	player1.currentGame = game;
	player1.set('mark', board.squirrelImages.grass);

	player2.currentGame = game;
	player2.set('mark', board.squirrelImages.rocks);




	board.render();
 	p1.render();

});
