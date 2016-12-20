import Backbone from 'backbone';
// //Board

const Board = Backbone.Collection.extend( {
  model: Space,
}); //END Board

export default Board;
