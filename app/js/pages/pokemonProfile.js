(function(root){

	var page = document.querySelector("#pokemonProfile");

	var pokedex = page.querySelector("#pokedex");
	var stats = page.querySelector("#stats");
	var typeStats = page.querySelector("#typeStats");
	var moves = page.querySelector("#moves");
	var statsPage = page.querySelector("#statsPage");
	var statsContainers;

	page.onBeforeShow = function(){
		addEventListeners();
		pokedexClick();
	};
	page.onShow = function(){

	};
	page.onBeforeHide = function(){
		removeEventListeners();
	};
	page.onHide = function(){

	};

	addEventListeners = function(){
		$(pokedex).on("click", pokedexClick);
		$(stats).on("click", statsClick);
		$(typeStats).on("click", typeStatsClick);
		$(moves).on("click", movesClick);
	};
	removeEventListeners = function(){
		$(pokedex).off("click", pokedexClick);
		$(stats).off("click", statsClick);
		$(typeStats).off("click", typeStatsClick);
		$(moves).off("click", movesClick);
	};

	pokedexClick = function(){
		resetBorderWidth();
		pokedex.style.borderTopWidth = "6px";
		$(statsPage).empty();
		insertPokedexEntries();
	};
	statsClick = function(){
		resetBorderWidth();
		stats.style.borderTopWidth = "6px";
		$(statsPage).empty();
		insertBaseStats();
	};
	typeStatsClick = function(){
		resetBorderWidth();
		typeStats.style.borderTopWidth = "6px";
		$(statsPage).empty();
	};
	movesClick = function(){
		resetBorderWidth();
		moves.style.borderTopWidth = "6px";
		$(statsPage).empty();
	}
	resetBorderWidth = function(){
		pokedex.style.borderWidth = "3px";
		stats.style.borderWidth = "3px";
		typeStats.style.borderWidth = "3px";
		moves.style.borderWidth = "3px";
	}
	insertPokedexEntries = function(){
		$(statsPage).append(html.containers.POKEDEX);
		statsContainers = page.querySelector(".container");
		var keys = _.keys(dev.ninetales.pokedex);
		keys.forEach(function(key){
			var input = [key, dev.ninetales.pokedex[key]];
			html.load(statsContainers, input);
		})
	}
	insertBaseStats = function(){
		statsPage.innerHTML = html.containers.STATBARGRAPH;
		statsContainers = [];
		statsContainers.push(page.querySelector(".container"));
		var input = dev.ninetales.base;
		statsContainers.forEach(function(container){
			html.load(container, input)
		});
	}
})(this);