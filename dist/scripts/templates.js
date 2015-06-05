this["JST"] = this["JST"] || {};
this["JST"]["battlemenu"] = Handlebars.template({"compiler":[6,">= 2.0.0-beta.1"],"main":function(depth0,helpers,partials,data) {
    var stack1, alias1=this.lambda, alias2=this.escapeExpression;

  return "<section class=\"battlebar\">\n  <section class=\"actiontext\">\n  </section>\n  <section class=\"actionoptions\">\n    <div class=\"actionmoves\">"
    + alias2(alias1(((stack1 = (depth0 != null ? depth0['0'] : depth0)) != null ? stack1.name : stack1), depth0))
    + "</div>\n    <div class=\"actionmoves\">"
    + alias2(alias1(((stack1 = (depth0 != null ? depth0['1'] : depth0)) != null ? stack1.name : stack1), depth0))
    + "</div>\n    <div class=\"actionmoves\">"
    + alias2(alias1(((stack1 = (depth0 != null ? depth0['2'] : depth0)) != null ? stack1.name : stack1), depth0))
    + "</div>\n    <div class=\"actionmoves\">"
    + alias2(alias1(((stack1 = (depth0 != null ? depth0['3'] : depth0)) != null ? stack1.name : stack1), depth0))
    + "</div>\n  </section>\n</section>\n";
},"useData":true});
this["JST"]["enemy"] = Handlebars.template({"compiler":[6,">= 2.0.0-beta.1"],"main":function(depth0,helpers,partials,data) {
    var stack1, helper, alias1=this.escapeExpression;

  return "<div class=\"enemyinfo\">\n  <span class=\"enemyname\">"
    + alias1(((helper = (helper = helpers.name || (depth0 != null ? depth0.name : depth0)) != null ? helper : helpers.helperMissing),(typeof helper === "function" ? helper.call(depth0,{"name":"name","hash":{},"data":data}) : helper)))
    + "</span>\n  <div class=\"enemyhp\">HP<div class=\"enemyhealthbar\"></div></div>\n</div>\n\n<div class=\"enemybox\">\n  <img src=\""
    + alias1(this.lambda(((stack1 = (depth0 != null ? depth0.image : depth0)) != null ? stack1.front : stack1), depth0))
    + "\" class=\"enemygif\">\n</div>\n";
},"useData":true});
this["JST"]["player"] = Handlebars.template({"compiler":[6,">= 2.0.0-beta.1"],"main":function(depth0,helpers,partials,data) {
    var stack1, helper, alias1=this.escapeExpression;

  return "<div class=\"playerbox\">\n  <img src=\""
    + alias1(this.lambda(((stack1 = (depth0 != null ? depth0.image : depth0)) != null ? stack1.back : stack1), depth0))
    + "\" class=\"playergif\">\n</div>\n\n<div class=\"playerpokemoninfo\">\n  <span class=\"playerpokemonname\">"
    + alias1(((helper = (helper = helpers.name || (depth0 != null ? depth0.name : depth0)) != null ? helper : helpers.helperMissing),(typeof helper === "function" ? helper.call(depth0,{"name":"name","hash":{},"data":data}) : helper)))
    + "</span>\n  <div class=\"playerhp\">HP<div class=\"playerhealthbar\"></div></div>\n</div>\n";
},"useData":true});