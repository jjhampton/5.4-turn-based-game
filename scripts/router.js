// create global variable if doesn't already exist
window.GameApp = window.GameApp || {};

(function(){

  GameApp.GameRouter = Backbone.Router.extend({
    routes: {
      '': 'index', //Title Screen & Character-Select-Grid (Sean's template design)
      'game': 'game', //Game screen (Austin's template design)
      'end' : 'end' //Game Over Screen that displays winner (John's template design)

    },

    index: function(){
      $('.application').html(JST['title']());
      // will use $('.application').append(JST['character-select']()) to append character-select-grid with scroll-down effect
    },

    game: function() {
      $('.application').html(JST['game']()); // routes user to game screen
    },

    end: function() {
      $('.application').html(JST['game']()); // routes user to game-over screen
    }
  });

  GameApp.router = new GameApp.GameRouter;();

})()
