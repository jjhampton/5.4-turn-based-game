window.GameApp = window.GameApp || {};


(function(){
  'use strict';
  var playerOneCharacter;
  var enemyCharacter;
  var playerHealth = 100;
  var enemyHealth = 100;
  var playerOneTurn = true;
  var moveSetOne;
  var enemyMoveSet;


  // Create an event hub
  GameApp.vent = _.extend({}, Backbone.Events);

  GameApp.vent.on('list:display', function(event) { //this will need changing
    $('.application').append(JST['character-select']()); // this will need changing
  });

  GameApp.vent.on('playerMoveSelect', function(move) {
    if (playerOneTurn) {
      $('.actiontext').css('color', 'black');
      changeEnemyHealth(move.damage);
      logGameText(playerOneCharacter, enemyCharacter, move);
      displayGameText(playerOneCharacter, enemyCharacter, move);
      playerOneTurn = false;
      if(enemyHealth > 0) {
        enemyTurn();
      } else {
        GameApp.router.navigate('end', {trigger: true});
      }
    }
  });

  GameApp.vent.on('enemyMoveSelect', function(move) {
    setTimeout(function() {
      $('.actiontext').css('color', 'red');
      changePlayerHealth(move.damage);
      logGameText(enemyCharacter, playerOneCharacter, move);
      displayGameText(enemyCharacter, playerOneCharacter, move);

      if (playerHealth > 0) {
        playerOneTurn = true;
      } else {
        GameApp.router.navigate('end', {trigger: true});
      }
    }, 5000);
  });

  GameApp.vent.on('playerTurn: complete', function() {
    enemyMove();
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
        });

      $('.character-portrait').on('click', function(){
        playerOneCharacter=($(this).text());
        $('.player-one').replaceWith($(this).html());

        console.log("Player One has chosen" + " " + playerOneCharacter);

        $('.character-portrait').off('click');

        $('.character-portrait').on('click', function(){
          if (playerOneCharacter !== undefined){

          enemyCharacter=($(this).text());
          $('.player-two').replaceWith($(this).html());
          console.log("Player Two has chosen" + " " + enemyCharacter);
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
        return pokemon.name === enemyCharacter;
      });

      moveSetOne = selectedPokemonOne[0].moves;
      enemyMoveSet = selectedPokemonTwo[0].moves;
      displayPlayerPokemon(selectedPokemonOne[0], moveSetOne);
      displayEnemyPokemon(selectedPokemonTwo[0]);
    });
  });

  function displayBattleMenu(moveset) {
    $('.battlemenu').html(JST['battlemenu'](moveset));
    $('.firstmove').on('click', function(event) {
      GameApp.vent.trigger('playerMoveSelect', moveset[0]);
      //changeHealth(moveset[0].damage);
    });
    $('.secondmove').on('click', function(event) {
      GameApp.vent.trigger('playerMoveSelect', moveset[1]);
      //changeHealth(moveset[1].damage);
    });
    $('.thirdmove').on('click', function(event) {
      GameApp.vent.trigger('playerMoveSelect', moveset[2]);
      //changeHealth(moveset[2].damage);
    });
    $('.fourthmove').on('click', function(event) {
      GameApp.vent.trigger('playerMoveSelect', moveset[3]);
      //changeHealth(moveset[3].damage);
    });
  }

  function displayPlayerPokemon(pokemon, moveset) {
      $('.pokemondisplay').append(JST['player'](pokemon));
      displayBattleMenu(moveset);
  }

  function displayEnemyPokemon(pokemon) {
      $('.pokemondisplay').append(JST['enemy'](pokemon));
  }

  function changeEnemyHealth(damage) {
    var newHealth = enemyHealth - (damage * 0.5);
    displayEnemyHealth(newHealth);
    enemyHealth = newHealth;
  }

  function displayEnemyHealth(health) {
    var percentHealth = health + "%";
    $('.enemyhealthbar').css({"width": percentHealth});
  }

  function changePlayerHealth(damage) {
    var newHealth = playerHealth - (damage * 0.5);
    displayPlayerHealth(newHealth);
    playerHealth = newHealth;
  }

  function displayPlayerHealth(health) {
    var percentHealth = health + "%";
    $('.playerhealthbar').css({"width": percentHealth});
  }

  function enemyTurn() {
    var enemyMove =  getEnemyMoveChoice(enemyMoveSet);
    GameApp.vent.trigger('enemyMoveSelect', enemyMove);
  }

  function getEnemyMoveChoice(moveset) {
    var movesetIndex = _.random(0, 3);
    return moveset[movesetIndex];
  }

  function logGameText(pokemon, opponent, move) {
    console.log(pokemon + " uses " + move.name + " on " + opponent + " for " + move.damage + " damage!");
  }

  function displayGameText(pokemon, opponent, move) {
    $('.actiontext').html("");
    $('.actiontext').html("<p class='gameTextString' + >" + pokemon + " uses " + move.name + " on " + opponent + " for " + move.damage + " damage!" + "</p>");
  }

})();
