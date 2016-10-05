(function(root){
	var html = {};

	html.load = function(element, input){
		var type = element.getAttribute("type-insert");
		if(!!input){
			$(element).append(html[type](input));	
		}else{
			$(element).append(html[type]);
		}
		return element;
	};

	html.containers = {
		MOVESLIST : function(id){return "<div id=\""+id+"\" class=\"container movesList\" type-insert=\"movesList\"></div>";},
		POKEDEX : function(id){ return "<div id=\""+id+"\" class=\"container pokedexEntry\" type-insert=\"pokedexEntry\"></div>";},
		STATBARGRAPH : function(id){return "<div id=\""+id+"\" class=\"container statBarGraph\" type-insert=\"statBarGraph\"></div>";},
		STATTABLE : function(stat, name, level){return "<div class=\"container statTable\" stat=\""+stat+"\" name=\""+name+"\" level=\""+level+"\" type-insert=\"statTable\"></div>";},
	}

	root.html = html;
})(this);