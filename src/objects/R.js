(function(root){
	var R = {};

	R.abilities = {};
	R.items = {};
	R.moves = {};
	R.pokemon = {};
	R.types = {};

	R.getData = function(){
		R.abilities = dev.abilities;
		R.items = dev.items;
		R.moves = dev.moves;
		R.pokemon = dev.pokemon;
		R.types = dev.types;
	}

	root.R = R;
})(this);