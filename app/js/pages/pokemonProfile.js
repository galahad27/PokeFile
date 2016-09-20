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
		insertBarGraph();
		insertTables();
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
		var entries = page.querySelector(".pokedexEntry");
		var keys = _.keys(dev.ninetales.pokedex);
		keys.forEach(function(key){
			var input = [key, dev.ninetales.pokedex[key]];
			html.load(entries, input);
		})
	}
	insertBarGraph = function(){
		$(statsPage).append(html.containers.STATBARGRAPH(dev.ninetales.name+"BarGraph"));
		var barGraph = page.querySelector(".statBarGraph");
		var input = dev.ninetales.base;
		html.load(barGraph, input);
		updateBarLength();
	}
	insertTables = function(){
		var hpId = dev.ninetales.name+"HPTable";
		var attackId = dev.ninetales.name+"AttackTable";
		var defenseId = dev.ninetales.name+"DefenseTable";
		var spAttackId = dev.ninetales.name+"SpAttackTable";
		var spDefenseId = dev.ninetales.name+"SpDefenseTable";
		var speedId = dev.ninetales.name+"SpeedTable";
		$(statsPage).append(html.containers.STATTABLE(hpId));
		$(statsPage).append(html.containers.STATTABLE(attackId));
		$(statsPage).append(html.containers.STATTABLE(defenseId));
		$(statsPage).append(html.containers.STATTABLE(spAttackId));
		$(statsPage).append(html.containers.STATTABLE(spDefenseId));
		$(statsPage).append(html.containers.STATTABLE(speedId));

		var tables = page.querySelectorAll(".statTable");
		var titles[hpId] = "HP";
		var titles[attackId] = "Attack";
		var titles[defenseId] = "Defense";
		var titles[spAttackId] = "Sp. Attack";
		var titles[spDefenseId] = "Sp. Defense";
		var titles[speedId] = "Speed";
		var baseName[hpId] = "HP";
		var baseName[attackId] = "ATTACK";
		var baseName[defenseId] = "DEFENSE";
		var baseName[spAttackId] = "SPATTACK";
		var baseName[spDefenseId] = "SPDEFENSE";
		var baseName[speedId] = "SPEED";
	
		tables.forEach(function(table){
			input.title = title[table.getAttribute("id")];
			input.base = dev.ninetales.base[baseName[table.getAttribute("id")]]
			html.load(table, input);
		})
	}
	updateBarLength = function(){
		var barGraph = statsPage.querySelector(".statBarGraph");
		var hpCover = barGraph.querySelector(".hpBarCover");
		var attackCover = barGraph.querySelector(".attackBarCover");
		var defenseCover = barGraph.querySelector(".defenseBarCover");
		var spAttackCover = barGraph.querySelector(".spAttackBarCover");
		var spDefenseCover = barGraph.querySelector(".spDefenseBarCover");
		var speedCover = barGraph.querySelector(".speedBarCover");

		hpCover.style.width = (R.HP-dev.ninetales.base.HP)*R.STATMODIFIER+"px";
		attackCover.style.width = (R.ATTACK-dev.ninetales.base.ATTACK)*R.STATMODIFIER+"px";
		defenseCover.style.width = (R.DEFENSE-dev.ninetales.base.DEFENSE)*R.STATMODIFIER+"px";
		spAttackCover.style.width = (R.SPATTACK-dev.ninetales.base.SPATTACK)*R.STATMODIFIER+"px";
		spDefenseCover.style.width = (R.SPDEFENSE-dev.ninetales.base.SPDEFENSE)*R.STATMODIFIER+"px";
		speedCover.style.width = (R.SPEED-dev.ninetales.base.SPEED)*R.STATMODIFIER+"px";

		hpCover.style.marginLeft = -1*(R.HP-dev.ninetales.base.HP)*R.STATMODIFIER+"px";
		attackCover.style.marginLeft = -1*(R.ATTACK-dev.ninetales.base.ATTACK)*R.STATMODIFIER+"px";
		defenseCover.style.marginLeft = -1*(R.DEFENSE-dev.ninetales.base.DEFENSE)*R.STATMODIFIER+"px";
		spAttackCover.style.marginLeft = -1*(R.SPATTACK-dev.ninetales.base.SPATTACK)*R.STATMODIFIER+"px";
		spDefenseCover.style.marginLeft = -1*(R.SPDEFENSE-dev.ninetales.base.SPDEFENSE)*R.STATMODIFIER+"px";
		speedCover.style.marginLeft = -1*(R.SPEED-dev.ninetales.base.SPEED)*R.STATMODIFIER+"px";
	}
})(this);