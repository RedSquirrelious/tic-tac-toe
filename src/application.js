import $ from 'jquery';
import Backbone from 'backbone';
import _ from 'underscore';

import Board from 'board_model';
import Player from 'player_model';

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
	var game = new Game();
	var board = new GameView({
	  el: $('#application'),
	  model: game
	});

  application.render();
});