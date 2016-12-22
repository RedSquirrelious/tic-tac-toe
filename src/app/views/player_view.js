import $ from 'jquery';
import Backbone from 'backbone';
import _ from 'underscore';

import Board from 'app/models/board_model';
import Player from 'app/models/player_model';


const PlayerView = Backbone.View.extend({

	initialize: function(options) {
		this.template = options.template;

		// if my player changes, we re-render

		this.listenTo(this.model, 'change', this.render );

		this.player = options.player;
	},

	render: function() {
// this sets what we want to see
  var html = this.template({name: this.player.attributes.name, row0: this.player.attributes.row0});


  this.$el.html(html);

// this helps re-bind events since the html is all new
  this.delegateEvents();
    // Enable chained calls
  return this;
  }, //render end

});

export default PlayerView;