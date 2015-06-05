window.GameApp = window.GameApp || {};


(function(){
  'use strict';

  // Create an event hub
  GameApp.vent = _.extend({}, Backbone.Events);

  GameApp.vent.on('data:messages:sync', function(messages) { //this will need changing
    $('.messages-list').html(JST['messages'](messages)); // this will need changing
  });

  $(document).ready(function(){
    GameApp.router = new GameApp.GameRouter();
    Backbone.history.start();
    $.ajax({
      url: '../pokemon.json'
    }).then(function(pokemonlist) {
      pokemonlist.forEach(function(pokemon) {
        displayPlayerPokemon(pokemon);
        displayEnemyPokemon(pokemon);
      });
    });
  });

  // Set Event listener on character-selected-event: for whatever event is fired after both characters are selected on the 'CHARACTER SELECT GRID', a "BEGIN GAME BUTTON" or similar is pressed,  and we want to route to the game screen
  $(document).on('click', '.button-game-start', function(event){
    event.preventDefault();
    GameApp.router.navigate('game', {trigger: true});
  });

  // EXAMPLE FROM JAKE FROM CHAT-APP
  // function fetchMessages(){
  //   return $.ajax({
  //     url: "http://tiny-lasagna-server.herokuapp.com/collections/messages"
  //   }).then(function(messages){
  //     ** TRIGGER THE data:messages:sync event **
  //     ChatApp.vent.trigger('data:messages:sync', messages);
  //   });
  // }


=======
  });

>>>>>>> 752397340df4d023745283ba03e9ba1c051e2bb6
  function displayBattleMenu(pokemon) {
    var moveSet = pokemon.moves;
    $('.battlemenu').html(JST['battlemenu'](moveSet));
  }

  function displayPlayerPokemon(pokemon) {
    if(pokemon.name === "Charizard") {
      $('.pokemondisplay').append(JST['player'](pokemon));
      displayBattleMenu(pokemon);
    }
  }

  function displayEnemyPokemon(pokemon) {
    if(pokemon.name === "Moltres") {
      $('.pokemondisplay').append(JST['enemy'](pokemon));
    }
}
<<<<<<< HEAD
=======






>>>>>>> 752397340df4d023745283ba03e9ba1c051e2bb6
})();
