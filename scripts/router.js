// create global variable if doesn't already exist
window.GameApp = window.GameApp || {};

(function(){

  GameApp.GameRouter = Backbone.Router.extend({
    routes: {
      '': 'index', //Title Screen & Character-Select-Grid (Sean's template design)
      'game': 'game', //Game screen (Austin's template design)
      'win' : 'win',
      'lose': 'lose' //Game Over Screen that displays winner (John's template design)

    },

    index: function(){
      $('.application').html(JST['title-screen']());
      //lower volume of title screen music - default is too loud
      var titlescreenmusic = document.querySelector('.title-screen-audio');
      titlescreenmusic.volume = 0.2;
    },

    game: function() {
      $('.application').html(JST['renderarena']());
      //lower volume of battle screen music - default is too loud
      var battlemusic = document.querySelector('.battle-theme-audio');
      battlemusic.volume = 0.4;
    },

    win: function() {
      $('.application').html(JST['gamewin']()); // routes user to game-over screen
    },

    lose: function() {
      $('.application').html(JST['gamelose']()); // routes user to game-over screen
    }
  });

  GameApp.router = new GameApp.GameRouter();

})();
