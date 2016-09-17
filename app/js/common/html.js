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
		POKEDEX : "<div class=\"container\" type-insert=\"pokedexEntry\"></div>",
		STATBARGRAPH : "<div class=\"container statBarGraph\" type-insert=\"statBarGraph\"></div>",
	}

	root.html = html;
})(this);