import $ from 'jquery';
import _ from 'underscore';
import Backbone from 'backbone';
import Contact from 'app/models/contact';

const BoardView = Backbone.View.extend({

	initialize: function(options) {
		this.template = options.template;
	}, //END initialize

	render: function() {
// this sets what we want to see
	  // var html = this.template({name: this.currentPlayer.attributes.name});
	  // var html = this.template({name: this.currentPlayer.name});
	  this.$el.html(html);

	// this helps re-bind events since the html is all new
	  this.delegateEvents();

	    // Enable chained calls
	  return this;
  }, //END render 

	drawBoard: function() {
		console.log(this.board[0]);
		console.log("");
		console.log(this.board[1]);
		console.log("")
		console.log(this.board[2]);
		console.log("");
	} //END drawBoard

	}); //END BoardView
