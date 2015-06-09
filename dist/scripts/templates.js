this["JST"] = this["JST"] || {};
this["JST"]["application"] = Handlebars.template({"compiler":[6,">= 2.0.0-beta.1"],"main":function(depth0,helpers,partials,data) {
    return "<h1>Hello</h1>\n";
},"useData":true});
this["JST"]["battlemenu"] = Handlebars.template({"compiler":[6,">= 2.0.0-beta.1"],"main":function(depth0,helpers,partials,data) {
    var stack1, alias1=this.lambda, alias2=this.escapeExpression;

  return "<section class=\"battlebar\">\n  <section class=\"actiontext\">\n  </section>\n  <section class=\"actionoptions\">\n    <button class=\"actionmove firstmove\">"
    + alias2(alias1(((stack1 = (depth0 != null ? depth0['0'] : depth0)) != null ? stack1.name : stack1), depth0))
    + "</button>\n    <button class=\"actionmove secondmove\">"
    + alias2(alias1(((stack1 = (depth0 != null ? depth0['1'] : depth0)) != null ? stack1.name : stack1), depth0))
    + "</button>\n    <button class=\"actionmove thirdmove\">"
    + alias2(alias1(((stack1 = (depth0 != null ? depth0['2'] : depth0)) != null ? stack1.name : stack1), depth0))
    + "</button>\n    <button class=\"actionmove fourthmove\">"
    + alias2(alias1(((stack1 = (depth0 != null ? depth0['3'] : depth0)) != null ? stack1.name : stack1), depth0))
    + "</button>\n  </section>\n</section>\n";
},"useData":true});
this["JST"]["character-select"] = Handlebars.template({"compiler":[6,">= 2.0.0-beta.1"],"main":function(depth0,helpers,partials,data) {
    return "<div class=\"selection-stage-player\">\n  <h3 class=\"player-selection-status pulse\">Choose your Pokemon!</h3>\n</div>\n<div class=\"character-grid-container\">\n</div>\n<div class=\"selection-stage-enemy\">\n  <h3 class=\"enemy-selection-status pulse\">Choose your opponent!</h3>\n</div>\n<h3 class=\"selection-waiting-alert pulse\">Awaiting selections...</h3>\n<button class=\"start-game-button slideExpandUp\">Click to start battle!</button>\n";
},"useData":true});
this["JST"]["enemy"] = Handlebars.template({"compiler":[6,">= 2.0.0-beta.1"],"main":function(depth0,helpers,partials,data) {
    var stack1, helper, alias1=this.escapeExpression;

  return "<div class=\"enemyinfo\">\n  <span class=\"enemyname\">"
    + alias1(((helper = (helper = helpers.name || (depth0 != null ? depth0.name : depth0)) != null ? helper : helpers.helperMissing),(typeof helper === "function" ? helper.call(depth0,{"name":"name","hash":{},"data":data}) : helper)))
    + "</span>\n  <div class=\"enemyhp\">HP<div class=\"enemyhealthbox\"><div class=\"enemyhealthbar\"></div></div></div>\n</div>\n\n<div class=\"enemybox\">\n  <img src=\""
    + alias1(this.lambda(((stack1 = (depth0 != null ? depth0.image : depth0)) != null ? stack1.front : stack1), depth0))
    + "\" class=\"enemygif\">\n</div>\n";
},"useData":true});
this["JST"]["gamelose"] = Handlebars.template({"compiler":[6,">= 2.0.0-beta.1"],"main":function(depth0,helpers,partials,data) {
    return "<section class=\"losescreen\">\n  <h1 class=\"losetext\">You Lose</h1>\n  <img src=\"http://media.giphy.com/media/wzRfW1SV1DSec/giphy.gif\" class=\"loseimage\">\n  <div class=\"gameboy\"></div>\n</section>\n<button class=\"playagain\">Play Again!</button>\n<audio class=\"battle-theme-audio\" src=\"assets/audio/losing-song.mp3\" autoplay></audio>\n";
},"useData":true});
this["JST"]["gamewin"] = Handlebars.template({"compiler":[6,">= 2.0.0-beta.1"],"main":function(depth0,helpers,partials,data) {
    return "<section class=\"winscreen\">\n  <h1 class=\"wintext\">You Win!</h1>\n  <img src=\"http://media.giphy.com/media/FSBSB5UDRomuQ/giphy.gif\" class=\"winimage\">\n  <img src=\"../../pokemon-gifs/trainer1.gif\" class=\"trainer\">\n  <img src=\"../../pokemon-gifs/pikachu.gif\" class=\"pikachu\">\n</section>\n<button class=\"playagain\">Play Again!</button>\n<audio class=\"battle-theme-audio\" src=\"assets/audio/winning-song.mp3\" autoplay loop></audio>\n";
},"useData":true});
this["JST"]["player"] = Handlebars.template({"compiler":[6,">= 2.0.0-beta.1"],"main":function(depth0,helpers,partials,data) {
    var stack1, helper, alias1=this.escapeExpression;

  return "<div class=\"playerbox\">\n  <img src=\""
    + alias1(this.lambda(((stack1 = (depth0 != null ? depth0.image : depth0)) != null ? stack1.back : stack1), depth0))
    + "\" class=\"playergif\">\n</div>\n\n<div class=\"playerpokemoninfo\">\n  <span class=\"playerpokemonname\">"
    + alias1(((helper = (helper = helpers.name || (depth0 != null ? depth0.name : depth0)) != null ? helper : helpers.helperMissing),(typeof helper === "function" ? helper.call(depth0,{"name":"name","hash":{},"data":data}) : helper)))
    + "</span>\n  <div class=\"playerhp\">HP<div class=\"playerhealthbox\"><div class=\"playerhealthbar\"></div></div></div>\n</div>\n";
},"useData":true});
this["JST"]["renderarena"] = Handlebars.template({"compiler":[6,">= 2.0.0-beta.1"],"main":function(depth0,helpers,partials,data) {
    return "<section class=\"arenacontent\">\n  <div class=\"pokemondisplay\">\n\n  </div>\n  <div class=\"battlemenu\">\n\n  </div>\n  <audio class=\"battle-theme-audio\" src=\"assets/audio/pokemon-battle-theme-orchestra.mp3\" autoplay loop></audio>\n</section>\n";
},"useData":true});
this["JST"]["rendercharacter"] = Handlebars.template({"compiler":[6,">= 2.0.0-beta.1"],"main":function(depth0,helpers,partials,data) {
    var stack1, helper, alias1=helpers.helperMissing, alias2="function", alias3=this.escapeExpression;

  return "<li class=\"character-portrait\" data-name=\""
    + alias3(((helper = (helper = helpers.name || (depth0 != null ? depth0.name : depth0)) != null ? helper : alias1),(typeof helper === alias2 ? helper.call(depth0,{"name":"name","hash":{},"data":data}) : helper)))
    + "\">\n  <img src=\""
    + alias3(this.lambda(((stack1 = (depth0 != null ? depth0.image : depth0)) != null ? stack1.profile : stack1), depth0))
    + "\" class=\"character-portrait-image\">\n  "
    + alias3(((helper = (helper = helpers.name || (depth0 != null ? depth0.name : depth0)) != null ? helper : alias1),(typeof helper === alias2 ? helper.call(depth0,{"name":"name","hash":{},"data":data}) : helper)))
    + "\n</li>\n";
},"useData":true});
this["JST"]["stagedplayer"] = Handlebars.template({"compiler":[6,">= 2.0.0-beta.1"],"main":function(depth0,helpers,partials,data) {
    var helper, alias1=helpers.helperMissing, alias2="function", alias3=this.escapeExpression;

  return "<div class=\"player-on-stage\">\n  <h3>"
    + alias3(((helper = (helper = helpers.name || (depth0 != null ? depth0.name : depth0)) != null ? helper : alias1),(typeof helper === alias2 ? helper.call(depth0,{"name":"name","hash":{},"data":data}) : helper)))
    + "</h3>\n  <img src=\""
    + alias3(((helper = (helper = helpers.imgURL || (depth0 != null ? depth0.imgURL : depth0)) != null ? helper : alias1),(typeof helper === alias2 ? helper.call(depth0,{"name":"imgURL","hash":{},"data":data}) : helper)))
    + "\"\n</div>\n";
},"useData":true});
this["JST"]["title-screen"] = Handlebars.template({"compiler":[6,">= 2.0.0-beta.1"],"main":function(depth0,helpers,partials,data) {
    return "<div class=\"title-elements\">\n  <img src=\"assets/title-screen.jpg\" alt=\"title image\" class=\"title-image\" />\n  <button class=\"start-button slideLeft\">Click to Play!</button>\n</div>\n<audio class=\"title-screen-audio\" src=\"assets/audio/pokemon-title-screen.mp3\" autoplay loop></audio>\n";
},"useData":true});