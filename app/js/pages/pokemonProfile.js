(function(root){

	var LEVEL100 = "<h1 id=\"level100\">Level 100</h1>";
	var LEVEL50 = "<h1 id=\"level50\">Level 50</h1>";
	var TABLEROW0 = "<div id=\"row0\" class=\"tableRow\"></div>";
	var TABLEROW1 = "<div id=\"row1\" class=\"tableRow\"></div>";
	var TABLEROW2 = "<div id=\"row2\" class=\"tableRow\"></div>";
	var TABLEROW3 = "<div id=\"row3\" class=\"tableRow\"></div>";

	var page = document.querySelector("#pokemonProfile");

	var pokedex = page.querySelector("#pokedex");
	var stats = page.querySelector("#stats");
	var typeStats = page.querySelector("#typeStats");
	var moves = page.querySelector("#moves");
	var statsPage = page.querySelector("#statsPage");

	var pokemonImage = page.querySelector("#pokemonImage");
	var stockImage = page.querySelector("#stockImage");

	var basicInfo = page.querySelector("#basicInfo");
	var name = basicInfo.querySelector("#name");
	var altName = basicInfo.querySelector("#altName");
	var nationalNum = basicInfo.querySelector("#nationalNum");
	var species = basicInfo.querySelector("#species");
	var height = basicInfo.querySelector("#height");
	var weight = basicInfo.querySelector("#weight");
	var eggGroup = basicInfo.querySelector("#eggGroup");
	var gender = basicInfo.querySelector("#gender");
	var eggCycle = basicInfo.querySelector("#eggCycle");
	var evYields = basicInfo.querySelector("#evYields");
	var catchRate = basicInfo.querySelector("#catchRate");
	var happiness = basicInfo.querySelector("#happiness");
	var exp = basicInfo.querySelector("#exp");
	var growthRate = basicInfo.querySelector("#growthRate");
	var types = basicInfo.querySelector("#types");
	var abilities = basicInfo.querySelector("#abilities");
	var hiddenAbility = basicInfo.querySelector("#hiddenAbility");

	var primaryPokemon;
	var currImageIndex;
	var movesListNum;
	var typeFilter = [];

	page.onBeforeShow = function(){
		init();
		primaryPokemon = getData();
		setImage(stockImage, primaryPokemon, 0);
		setBasicInfo(primaryPokemon);
		setColorTheme(primaryPokemon);
		pokedexClick();
		addEventListeners();	
	};
	page.onShow = function(){

	};
	page.onBeforeHide = function(){
		removeEventListeners();
	};
	page.onHide = function(){

	};

	init = function(){
		currImageIndex = 0;
		movesListNum = 0;
	}
	addEventListeners = function(){
		$(pokedex).on("click", pokedexClick);
		$(stats).on("click", statsClick);
		$(typeStats).on("click", typeStatsClick);
		$(moves).on("click", movesClick);
		$(stockImage).on("click", stockImageClick);
	};
	removeEventListeners = function(){
		$(pokedex).off("click", pokedexClick);
		$(stats).off("click", statsClick);
		$(typeStats).off("click", typeStatsClick);
		$(moves).off("click", movesClick);
		$(stockImage).on("click", nextImage);
	};

	/***************************Getters***************************/
	getData = function(){
		return dev.pokemon.ninetales;
	}
	/***************************Setters***************************/
	setBarLength = function(){
		var barGraph = statsPage.querySelector(".statBarGraph");
		var hpCover = barGraph.querySelector(".hpBarCover");
		var attackCover = barGraph.querySelector(".attackBarCover");
		var defenseCover = barGraph.querySelector(".defenseBarCover");
		var spAttackCover = barGraph.querySelector(".spAttackBarCover");
		var spDefenseCover = barGraph.querySelector(".spDefenseBarCover");
		var speedCover = barGraph.querySelector(".speedBarCover");

		hpCover.style.width = (R.maxStats.HP-primaryPokemon.base.HP)*R.STATMODIFIER+"px";
		attackCover.style.width = (R.maxStats.ATTACK-primaryPokemon.base.ATTACK)*R.STATMODIFIER+"px";
		defenseCover.style.width = (R.maxStats.DEFENSE-primaryPokemon.base.DEFENSE)*R.STATMODIFIER+"px";
		spAttackCover.style.width = (R.maxStats.SPATTACK-primaryPokemon.base.SPATTACK)*R.STATMODIFIER+"px";
		spDefenseCover.style.width = (R.maxStats.SPDEFENSE-primaryPokemon.base.SPDEFENSE)*R.STATMODIFIER+"px";
		speedCover.style.width = (R.maxStats.SPEED-primaryPokemon.base.SPEED)*R.STATMODIFIER+"px";

		hpCover.style.marginLeft = -1*(R.maxStats.HP-primaryPokemon.base.HP)*R.STATMODIFIER+"px";
		attackCover.style.marginLeft = -1*(R.maxStats.ATTACK-primaryPokemon.base.ATTACK)*R.STATMODIFIER+"px";
		defenseCover.style.marginLeft = -1*(R.maxStats.DEFENSE-primaryPokemon.base.DEFENSE)*R.STATMODIFIER+"px";
		spAttackCover.style.marginLeft = -1*(R.maxStats.SPATTACK-primaryPokemon.base.SPATTACK)*R.STATMODIFIER+"px";
		spDefenseCover.style.marginLeft = -1*(R.maxStats.SPDEFENSE-primaryPokemon.base.SPDEFENSE)*R.STATMODIFIER+"px";
		speedCover.style.marginLeft = -1*(R.maxStats.SPEED-primaryPokemon.base.SPEED)*R.STATMODIFIER+"px";
	}
	setBorderWidth = function(){
		pokedex.style.borderWidth = "3px";
		stats.style.borderWidth = "3px";
		typeStats.style.borderWidth = "3px";
		moves.style.borderWidth = "3px";
	}
	setColorTheme = function(pokemon){
		pokemonImage.setAttribute("background", pokemon.battle.primaryType);
		basicInfo.setAttribute("background", pokemon.battle.primaryType);
		pokedex.setAttribute("background", pokemon.battle.primaryType);
		stats.setAttribute("background", pokemon.battle.primaryType);
		typeStats.setAttribute("background", pokemon.battle.primaryType);
		moves.setAttribute("background", pokemon.battle.primaryType);

		pokemonImage.setAttribute("border", pokemon.battle.primaryType);
		basicInfo.setAttribute("border", pokemon.battle.primaryType);
		pokedex.setAttribute("border", pokemon.battle.primaryType);
		stats.setAttribute("border", pokemon.battle.primaryType);
		typeStats.setAttribute("border", pokemon.battle.primaryType);
		moves.setAttribute("border", pokemon.battle.primaryType);
		statsPage.setAttribute("border", pokemon.battle.primaryType);

		if(!!pokemon.battle.secondaryType){
			pokemonImage.style.background = "linear-gradient("+R.typeColors[pokemon.battle.primaryType]+","+R.typeColors[pokemon.battle.secondaryType]+")";
			basicInfo.style.background = "linear-gradient("+R.typeColors[pokemon.battle.primaryType]+","+R.typeColors[pokemon.battle.secondaryType]+")";
		}
	}
	setBasicInfo = function(pokemon){
		name.innerHTML = pokemon.name.en;
		altName.innerHTML = pokemon.name.jap;
		nationalNum.innerHTML = "National Num: "+pokemon.basic.nationalNum;
		species.innerHTML =  "Species: " + pokemon.basic.species;
		height.innerHTML = "Height: " + pokemon.basic.height;
		weight.innerHTML = "Weight: " + pokemon.basic.weight;

		eggGroup.innerHTML =  "Egg Groups: " + pokemon.breeding.eggGroup;
		eggCycle.innerHTML = "Egg Cycle: " + pokemon.breeding.eggCycle;
		gender.innerHTML = "Gender: " + pokemon.breeding.male + "% Male | " + pokemon.breeding.female+"% Female";

		evYields.innerHTML =  " EV Yeilds: " + evsToString(pokemon);
		catchRate.innerHTML = "Catch Rate: " + pokemon.training.catchRate;
		happiness.innerHTML = "Happiness: " + pokemon.training.happiness;
		exp.innerHTML =  "EXP: " + pokemon.training.exp;
		growthRate.innerHTML = "Growth Rate: " + pokemon.training.growthRate;

		types.innerHTML =  "Types: " + typesToString(pokemon);
		abilities.innerHTML = "Abilities: " + abilitiesToString(pokemon);
		hiddenAbility.innerHTML = "Hidden Ability: " + hiddenAbilityToString(pokemon);
	}
	setFilterEventListeners = function(movesFilter, movesTable){
		var checkBoxes = movesFilter.querySelectorAll(".box");
		checkBoxes.forEach(function(box){
			var callback = function(){
				checkBoxClick(box, movesTable);
			}
			box.addEventListener("click", callback);
		});
	}
	setImage = function(img, pokemon, index){
		img.setAttribute("src", pokemon.img.url[index]);
		currImageIndex = index;
	}
	/***************************To String***************************/
	abilitiesToString = function(pokemon){
		tempAbilities = pokemon.battle.firstAbility;
		if(!!pokemon.battle.secondAbility){
			tempAbilities = tempAbilities + " | " + pokemon.battle.secondAbility;
		}
		return tempAbilities;
	}
	evsToString = function(pokemon){
		var tempEv="";
		var types = {
			hp : "HP",
			attack : "Attack",
			defense : "Defense",
			spAttack : "Sp. Attack",
			spDefense : "Sp. Defense",
			speed : "Speed",
		}
		var keys = _.keys(pokemon.training.ev);
		keys.forEach(function(key, index){
			if(!!pokemon.training.ev[key]){
				if(tempEv != ""){
					tempEv = tempEv + " | ";
				}
				tempEv = tempEv+pokemon.training.ev[key]+" "+types[key]
			}
		});
		return tempEv;
	}
	hiddenAbilityToString = function(pokemon){
		tempHidden = "";
		if(!!pokemon.battle.hiddenAbility){
			tempHidden = pokemon.battle.hiddenAbility;
		}
		return tempHidden;
	}
	moveEffectsToString = function(effects){
		var string = "";
		effects.condition.forEach(function(effect, index){
			if(!!effects.percentage[index]){
				if(string == ""){
					string = effects.percentage[index]+"%";
				}else{
					string = string+" | "+effects.percentage[index]+"%";
				}	
			}
			if(!!effect.stat){
				if(string == ""){
					string = effect.dir + effect.num + " " +effect.stat;
				}else{
					if(!!effects.percentage[index]){
						string = string + " " + effect.dir + effect.num + " " +effect.stat;
					}else{
						string = string + " | " + effect.dir + effect.num + " " +effect.stat;
					}	
				}
			}else{
				if(string == ""){
					string = effect;
				}else{
					if(!!effects.percentage[index]){
						string = string + " " + effect;
					}else{
						string = string + " | " + effect;
					}
					
				}
			}
		});
		return string;
	}
	typesToString = function(pokemon){
		tempTypes = pokemon.battle.primaryType;
		if(!!pokemon.battle.secondaryType){
			tempTypes = tempTypes + " | " + pokemon.battle.secondaryType;
		}
		return tempTypes;
	}
	/***************************Events***************************/
	movesClick = function(){
		setBorderWidth();
		moves.style.borderTopWidth = "7px";
		$(statsPage).empty();
		addMovesList();
	}
	checkBoxClick = function(box, movesTable){
		$(movesTable).empty();
		$(movesTable).append(html.movesHeader(primaryPokemon.battle.primaryType));
		console.log(box);
		if(box.getAttribute("section") == "type"){
			if(box.checked == true){
				typeFilter.push(box.getAttribute("catagory"));
			}else{
				
			}
			typeFilter.forEach(function(type){
				primaryPokemon.moves.all.forEach(function(move){
					if(dev.moves[move].type == type){
						var input = {
							type : primaryPokemon.battle.primaryType,
							move : dev.moves[move],
							effect : moveEffectsToString(dev.moves[move].effects),
						};
						html.load(movesTable, input);
					}
				})
			});
		}
	}
	pokedexClick = function(){
		setBorderWidth();
		pokedex.style.borderTopWidth = "7px";
		$(statsPage).empty();
		addPokedexEntries();
	};
	statsClick = function(){
		setBorderWidth();
		stats.style.borderTopWidth = "7px";
		$(statsPage).empty();
		addBarGraph();
		addTables();
	};
	stockImageClick = function(){
		if(currImageIndex<primaryPokemon.img.url.length-1){
			currImageIndex++;	
		}
		else{
			currImageIndex = 0;
		}
		stockImage.setAttribute("src", primaryPokemon.img.url[currImageIndex]);
	}
	typeStatsClick = function(){
		setBorderWidth();
		typeStats.style.borderTopWidth = "7px";
		$(statsPage).empty();
	};
	/***************************Add***************************/
	addBarGraph = function(){
		$(statsPage).append(html.containers.STATBARGRAPH(primaryPokemon.name.en+"BarGraph"));
		var barGraph = page.querySelector(".statBarGraph");
		var input = primaryPokemon.base;
		html.load(barGraph, input);
		setBarLength();
	}
	addMovesList = function(){
		$(statsPage).append(html.containers.MOVESLIST("movesList"+movesListNum));
		var movesList = statsPage.querySelector("#movesList"+movesListNum);
		movesList.style.borderColor = R.typeColors[primaryPokemon.battle.primaryType];
		html.load(movesList, primaryPokemon);
		var movesFilter = movesList.querySelector(".movesFilter");
		var movesTable = movesList.querySelector(".movesTable");
		primaryPokemon.moves.all.forEach(function(move){
			var input = {
				type : primaryPokemon.battle.primaryType,
				move : dev.moves[move],
				effect : moveEffectsToString(dev.moves[move].effects),
			};
			html.load(movesTable, input);
		});
		setFilterEventListeners(movesFilter, movesTable);
		movesListNum++;
	}
	addPokedexEntries = function(){
		$(statsPage).append(html.containers.POKEDEX);
		var entries = page.querySelector(".pokedexEntry");
		var keys = _.keys(primaryPokemon.pokedex);
		keys.forEach(function(key){
			var input = [key, primaryPokemon.pokedex[key]];
			html.load(entries, input);
		})
	}	
	addTables = function(){
		$(statsPage).append(LEVEL100);
		$(statsPage).append(TABLEROW0);
		$(statsPage).append(TABLEROW1);
		$(statsPage).append(LEVEL50);
		$(statsPage).append(TABLEROW2);
		$(statsPage).append(TABLEROW3);

		var row0 = statsPage.querySelector("#row0");
		var row1 = statsPage.querySelector("#row1");
		var row2 = statsPage.querySelector("#row2");
		var row3 = statsPage.querySelector("#row3");

		$(row0).append(html.containers.STATTABLE(primaryPokemon.base.HP, "HP", 100));
		$(row0).append(html.containers.STATTABLE(primaryPokemon.base.DEFENSE, "Defense", 100));
		$(row0).append(html.containers.STATTABLE(primaryPokemon.base.SPDEFENSE, "Sp. Defense", 100));
		$(row1).append(html.containers.STATTABLE(primaryPokemon.base.SPEED, "Speed", 100));
		$(row1).append(html.containers.STATTABLE(primaryPokemon.base.ATTACK, "Attack", 100));
		$(row1).append(html.containers.STATTABLE(primaryPokemon.base.SPATTACK, "Sp. Attack", 100));
		$(row2).append(html.containers.STATTABLE(primaryPokemon.base.HP, "HP", 50));
		$(row2).append(html.containers.STATTABLE(primaryPokemon.base.DEFENSE, "Defense", 50));
		$(row2).append(html.containers.STATTABLE(primaryPokemon.base.SPDEFENSE, "Sp. Defense", 50));
		$(row3).append(html.containers.STATTABLE(primaryPokemon.base.SPEED, "Speed", 50));
		$(row3).append(html.containers.STATTABLE(primaryPokemon.base.ATTACK, "Attack", 50));
		$(row3).append(html.containers.STATTABLE(primaryPokemon.base.SPATTACK, "Sp. Attack", 50));
		

		var tables = page.querySelectorAll(".statTable");
	
		tables.forEach(function(table){
			var input = {};
			input.stat = table.getAttribute("stat");
			input.name = table.getAttribute("name");
			input.level = parseInt(table.getAttribute("level"));
			if(input.name == "HP"){
				input.isHp = true;
			}else{
				input.isHp = false;
			}
			html.load(table, input);
		})
	}
})(this);