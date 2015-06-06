window.GameApp = window.GameApp || {};


(function(){
  'use strict';
  var playerOneCharacter;
  var playerTwoCharacter;
  var playerOneHealth = 100;
  var playerTwoHealth = 100;


  // Create an event hub
  GameApp.vent = _.extend({}, Backbone.Events);

  GameApp.vent.on('list:display', function(event) { //this will need changing
    $('.application').append(JST['character-select']()); // this will need changing
  });

  $(document).ready(function(){
    GameApp.router = new GameApp.GameRouter();
    Backbone.history.start();
    GameApp.router.navigate('index', {trigger: true});

    });

  // Set Event listener on character-selected-event: for whatever event is fired after both characters are selected on the 'CHARACTER SELECT GRID', a "BEGIN GAME BUTTON" or similar is pressed,  and we want to route to the game screen
  $(document).on('click', '.start-button', function(event){
    event.preventDefault();
    GameApp.vent.trigger('list:display');
    $.ajax({
      url: '../pokemon.json'
    }).then(function(pokemonlist) {
      pokemonlist.forEach(function(pokemon) {
        $('.character-grid-container').append(JST['rendercharacter'](pokemon));
      }); // routes user to game screen
      $('.character-portrait').on('click', function(){
        playerOneCharacter=($(this).text());
        console.log("Player One has chosen" + " " + playerOneCharacter);
        $('.character-portrait').off('click');

        $('.character-portrait').on('click', function(){
          if (playerOneCharacter !== undefined){


          playerTwoCharacter=($(this).text());
          console.log("Player Two has chosen" + " " + playerTwoCharacter);
        }
      });

      });
    });
  });

  $(document).on('click', '.start-game-button', function(event){
    event.preventDefault();
    GameApp.router.navigate('game', {trigger: true});
    $.ajax({
      url: '../pokemon.json'
    }).then(function(pokemonlist) {
      var selectedPokemonOne = _.filter(pokemonlist, function(pokemon){
        return pokemon.name === playerOneCharacter;
      });

      var selectedPokemonTwo = _.filter(pokemonlist, function(pokemon){
        return pokemon.name === playerTwoCharacter;
      });

      var moveSetOne = selectedPokemonOne[0].moves;
      var moveSetTwo = selectedPokemonTwo[0].moves;
      displayPlayerPokemon(selectedPokemonOne[0], moveSetOne);
      displayEnemyPokemon(selectedPokemonTwo[0]);





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





  function displayBattleMenu(moveset) {
    $('.battlemenu').html(JST['battlemenu'](moveset));
    $('.firstmove').on('click', function(event) {
      console.log(moveset[0].damage);
    });
    $('.secondmove').on('click', function(event) {
      console.log(moveset[1].damage);
    });
    $('.thirdmove').on('click', function(event) {
      console.log(moveset[2].damage);
    });
    $('.fourthmove').on('click', function(event) {
      console.log(moveset[3].damage);
    });
  }

  function displayPlayerPokemon(pokemon, moveset) {
      $('.pokemondisplay').append(JST['player'](pokemon));
      displayBattleMenu(moveset);
  }

  function displayEnemyPokemon(pokemon) {
      $('.pokemondisplay').append(JST['enemy'](pokemon));
}







  // $(document).ready(function(){
  //
  //     route();
  //
  //     $(document).on('click', '.start-button', function(event){
  //       event.preventDefault();
  //       window.location.hash = '/charselect';
  //     });
  //
  //     $(window).on('hashchange', function(event){
  //       event.preventDefault();
  //       route();
  //     });
  //   });
  //
  //
  //   function route(){
  //     switch(window.location.hash){
  //       case '':
  //       $('.application').html(JST['title-screen']());
  //       break;
  //     case '#/charselect':
  //       charSelect()
  //       break;
  //     }
  //   }
  //
  //   function charSelect(){
  //     $('.application').append(JST['character-select']());
  //   }
  //
});
})();
