//space_model.js

const Space = Backbone.Model.extend({
	defaults: {
		row: '-',
		column: '-',
		mark: '-'

	},

	initialize: function(options) {
		this.row = options.row,
		this.column = options.column,
		this.mark = options.mark
	}
});