(function(root){
	//***************************VARIABLES***************************//
	//FINAL
	//ELEMENTS
	//LOCAL
	//***************************FUNCTIONS***************************//
	//PAGE
	//INITIALIZE
	//DESTROY
	//GETTERS
	//SETTERS
	//ADD
	//REMOVE
	//EVENTS
	//TO STRING
	//MISC

	//***************************ELEMENTS***************************//
	var page = document.querySelector("#pokemonProfile");

	var pokedex = page.querySelector("#pokedex");
	var stats = page.querySelector("#stats");
	var moves = page.querySelector("#moves");

	var statsPageWrapper = page.querySelector("#statsPageWrapper");
	var statsPage = page.querySelector("#statsPage");

	var pokemonImageWrapper = page.querySelector("#pokemonImageWrapper");
	var pokemonImage = page.querySelector("#pokemonImage");

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
	//***************************FINAL***************************//
	const LEVEL100 = "<h1 id=\"level100\">Level 100</h1>";
	const LEVEL50 = "<h1 id=\"level50\">Level 50</h1>";
	const TABLEROW0 = "<div id=\"row0\" class=\"tableRow\"></div>";
	const TABLEROW1 = "<div id=\"row1\" class=\"tableRow\"></div>";
	const TABLEROW2 = "<div id=\"row2\" class=\"tableRow\"></div>";
	const TABLEROW3 = "<div id=\"row3\" class=\"tableRow\"></div>";
	const MOVESSET = function(index){return "<div class=\"movesSet\" index=\""+index+"\"></div>"};
	const STATPAGETABS = {pokedex: pokedex, stats: stats, moves: moves};
	//***************************LOCAL***************************//
	var primaryPokemon;
	var currImageIndex;
	var movesTableNum;
	var movesTableList;
	var tabCatagories;

	//***************************PAGE***************************//
	page.onBeforeShow = function(){
		initPage();
		initVariables()
		initUI();
		initEventListeners();
	};
	page.onShow = function(){

	};
	page.onBeforeHide = function(){
		destroyEventListeners();
	};
	page.onHide = function(){

	};

	//***************************INITIALIZE***************************//
	function initPage(){
		
	}
	function initEventListeners(){
		$(pokedex).on("click", pokedexClick);
		$(stats).on("click", statsClick);
		$(moves).on("click", movesClick);
		$(pokemonImage).on("click", pokemonImageClick);
	}
	function initUI(){
		setImage(pokemonImage, primaryPokemon.img.url, 0);
		setBasicInfo(primaryPokemon);
		setColorTheme(primaryPokemon.battle.types);
		pokedexClick();
	}
	function initVariables(){
		primaryPokemon = getData();
		currImageIndex = 0;
		movesTableNum = 0;
		movesTableList = [];
	}
	//***************************DESTROY***************************//
	function destroyEventListeners(){
		$(pokedex).off("click", pokedexClick);
		$(stats).off("click", statsClick);
		$(moves).off("click", movesClick);
		$(pokemonImage).on("click", nextImage);
	}
	//***************************GETTERS***************************//
	function getData(){
		return dev.pokemon.ninetales;
	}
	//***************************SETTERS***************************//
	function setBasicInfo(pokemon){
		name.innerHTML = pokemon.name.en;
		altName.innerHTML = pokemon.name.jap;
		nationalNum.innerHTML = "National Num: "+pokemon.basic.nationalNum;
		species.innerHTML =  "Species: " + pokemon.basic.species;
		height.innerHTML = "Height: " + pokemon.basic.height;
		weight.innerHTML = "Weight: " + pokemon.basic.weight;

		eggGroup.innerHTML =  "Egg Groups: " + pokemon.breeding.eggGroup;
		eggCycle.innerHTML = "Egg Cycle: " + pokemon.breeding.eggCycle;
		gender.innerHTML = "Gender: " + gendersToString(pokemon.breeding.genders);

		evYields.innerHTML =  " EV Yeilds: " + evsToString(pokemon.training.evs);
		catchRate.innerHTML = "Catch Rate: " + pokemon.training.catchRate;
		happiness.innerHTML = "Happiness: " + pokemon.training.happiness;
		exp.innerHTML =  "EXP: " + pokemon.training.exp;
		growthRate.innerHTML = "Growth Rate: " + pokemon.training.growthRate;

		types.innerHTML =  "Types: " + typesToString(pokemon.battle.types);
		abilities.innerHTML = "Abilities: " + abilitiesToString(pokemon.battle.abilities);
		hiddenAbility.innerHTML = "Hidden Ability: " + hiddenAbilityToString(pokemon.battle.abilities.hiddenAbility);
	}
	function setBorderWidth(current){
		var STANDARD_WIDTH = "3px";
		var CHOSEN_WIDTH = "7px";
		for(var key in STATPAGETABS){
			if(STATPAGETABS.hasOwnProperty(key)){
				STATPAGETABS[key].style.borderWidth = STANDARD_WIDTH;
				if(key===current){
					STATPAGETABS[key].style.borderTopWidth = CHOSEN_WIDTH;
				}
			}
		}
	}
	function setColorTheme(types){
		pokemonImageWrapper.setAttribute("background", types.primaryType);
		basicInfo.setAttribute("background", types.primaryType);
		pokedex.setAttribute("background", types.primaryType);
		stats.setAttribute("background", types.primaryType);
		moves.setAttribute("background", types.primaryType);

		pokemonImageWrapper.setAttribute("border", types.primaryType);
		basicInfo.setAttribute("border", types.primaryType);
		pokedex.setAttribute("border", types.primaryType);
		stats.setAttribute("border", types.primaryType);
		moves.setAttribute("border", types.primaryType);
		statsPageWrapper.setAttribute("border", types.primaryType);

		if(!!types.secondaryType){
			pokemonImageWrapper.style.background = "linear-gradient("+R.typeColors[types.primaryType]+","+R.typeColors[types.secondaryType]+")";
			basicInfo.style.background = "linear-gradient("+R.typeColors[types.primaryType]+","+R.typeColors[types.secondaryType]+")";
		}
	}
	function setImage(img, url, index){
		img.setAttribute("src", url[index]);
		currImageIndex = index;
	}
	//***************************ADD***************************//
	function addBarGraph(){
		var input = primaryPokemon.base;
		var statsBarGraph = html.load(statsPage, "statBarGraph", input);
		statsBarGraph.setBarLength(primaryPokemon.base);
	}
	function addMoves(index){
		$(statsPage).append(MOVESSET(index))
		var movesSet = statsPage.querySelector("#statsPage [index=\""+index+"\"]");
		movesSet.style.borderColor = R.typeColors[primaryPokemon.battle.types.primaryType];
		var filterTable = {};
		filterTable.filter = html.load(movesSet, "movesFilter", primaryPokemon.moves.all);
		filterTable.table = html.load(movesSet, "movesTable", primaryPokemon.battle.types.primaryType);
		movesTableList[0] = filterTable;
		var filteredMoves = movesTableList[0].filter.filterMoves();
		movesTableList[0].table.addMoves(filteredMoves);
	}
	function addPokedexEntries(){
		var keys = _.keys(primaryPokemon.pokedex);
		keys.forEach(function(key){
			var input = [key, primaryPokemon.pokedex[key]];
			html.load(statsPage, "pokedexEntry", input);
		});
	}
	function addTables(){
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

		var setInput = function(name, level, stat, isHp){
			return {
				name: name,
				level: level,
				stat: stat,
				isHp: isHp,
			};
		}
		html.load(row0, "statTable", setInput("HP", primaryPokemon.base.HP, 100, true));
		html.load(row0, "statTable", setInput("Defense", primaryPokemon.base.DEFENSE, 100, false));
		html.load(row0, "statTable", setInput("Sp. Defense", primaryPokemon.base.SPDEFENSE, 100, false));
		html.load(row1, "statTable", setInput("Speed", primaryPokemon.base.SPEED, 100, false));
		html.load(row1, "statTable", setInput("Attack", primaryPokemon.base.ATTACK, 100, false));
		html.load(row1, "statTable", setInput("Sp. Attack", primaryPokemon.base.SPATTACK, 100, false));
		html.load(row2, "statTable", setInput("HP", primaryPokemon.base.HP, 50, true));
		html.load(row2, "statTable", setInput("Defense", primaryPokemon.base.DEFENSE, 50, false));
		html.load(row2, "statTable", setInput("Sp. Defense", primaryPokemon.base.SPDEFENSE, 50, false));
		html.load(row3, "statTable", setInput("Speed", primaryPokemon.base.SPEED, 50, false));
		html.load(row3, "statTable", setInput("Attack", primaryPokemon.base.ATTACK, 50, false));
		html.load(row3, "statTable", setInput("Sp. Attack", primaryPokemon.base.SPATTACK, 50, false));
	}
	//***************************REMOVE***************************//
	//***************************EVENTS***************************//
	function movesClick(){
		setBorderWidth("moves");
		$(statsPage).empty();
		addMoves(movesTableNum);
	}
	function pokedexClick(){
		setBorderWidth("pokedex");
		$(statsPage).empty();
		addPokedexEntries();
	}
	function pokemonImageClick(){
		var index = 0
		if(currImageIndex<primaryPokemon.img.url.length-1){
			index = currImageIndex+1;	
		}
		setImage(pokemonImage, primaryPokemon.img.url, index);
	}
	function statsClick(){
		setBorderWidth("stats");
		$(statsPage).empty();
		addBarGraph();
		addTables();
	}
	//***************************TO STRING***************************//
	function abilitiesToString(abilities){
		tempAbilities = abilities.firstAbility;
		if(!!abilities.secondAbility){
			tempAbilities = tempAbilities + " | " + abilities.secondAbility;
		}
		return tempAbilities;
	}
	function evsToString(evs){
		var tempEv="";
		var types = {
			hp : "HP",
			attack : "Attack",
			defense : "Defense",
			spAttack : "Sp. Attack",
			spDefense : "Sp. Defense",
			speed : "Speed",
		}
		var keys = _.keys(evs);
		keys.forEach(function(key, index){
			if(!!evs[key]){
				if(tempEv != ""){
					tempEv = tempEv + " | ";
				}
				tempEv = tempEv+evs[key]+" "+types[key]
			}
		});
		return tempEv;
	}
	function gendersToString(genders){
		return genders.male + "% Male | " + genders.female+"% Female";
	}
	function hiddenAbilityToString(hiddenAbility){
		tempHidden = "";
		if(!!hiddenAbility){
			tempHidden = hiddenAbility;
		}
		return tempHidden;
	}
	function typesToString(types){
		tempTypes = types.primaryType;
		if(!!types.secondaryType){
			tempTypes = tempTypes + " | " + types.secondaryType;
		}
		return tempTypes;
	}
	//***************************MISC***************************//





	
	
	
	// moveEffectsToString = function(effects){
	// 	var string = "";
	// 	effects.condition.forEach(function(effect, index){
	// 		if(!!effects.percentage[index]){
	// 			if(string == ""){
	// 				string = effects.percentage[index]+"%";
	// 			}else{
	// 				string = string+" | "+effects.percentage[index]+"%";
	// 			}	
	// 		}
	// 		if(!!effects.increase[index]){
	// 			if(string == ""){
	// 				string = effects.increase[index];
	// 			}else{
	// 				if(!!effects.percentage[index]){
	// 					string = string+" "+effects.increase[index];
	// 				}else{
	// 					string = string+" | "+effects.increase[index];
	// 				}
	// 			}	
	// 		}
	// 		if(!!effect.stat){
	// 			if(string == ""){
	// 				string = effect.dir + effect.num + " " +effect.stat;
	// 			}else{
	// 				if(!!effects.percentage[index]){
	// 					string = string + " " + effect.dir + effect.num + " " +effect.stat;
	// 				}else{
	// 					string = string + " | " + effect.dir + effect.num + " " +effect.stat;
	// 				}	
	// 			}
	// 		}else{
	// 			if(string == ""){
	// 				string = effect;
	// 			}else{
	// 				if(!!effects.percentage[index] || !!effects.increase[index]){
	// 					string = string + " " + effect;
	// 				}else{
	// 					string = string + " | " + effect;
	// 				}				
	// 			}
	// 		}
	// 	});
	// 	return string;
	// }
	



	// clearClick = function(movesFilter, movesTable, num){
	// 	movesListInit(num);
	// 	fillCheckBoxes(movesFilter, num);
	// 	fillTextBoxes(movesFilter, num);
	// 	filterTable(movesTable, num);
	// }
	
	


	// 	var clearCallback = function(){
	// 		clearClick(movesFilter, movesTable, num);
	// 	};
	// 	var clearButton = movesFilter.querySelector(".clearButton");
	// 	$(clearButton).off("click");
	// 	$(clearButton).on("click", clearCallback);
	// 	removableEventListeners.push(clearButton);

	// 	var removeCallback = function(){
	// 		removeClick(movesList);
	// 	};
	// 	var removeButton = movesFilter.querySelector(".removeButton");
	// 	$(removeButton).off("click");
	// 	$(removeButton).on("click", removeCallback);
	// 	removableEventListeners.push(removeButton);
	// }
	


	
	// removeRemovableEvevntListeners = function(){
	// 	removableEventListeners.forEach(function(x){
	// 		$(x).off();
	// 	});
	// 	removableEventListeners = [];
	// }
	




	// fillCheckBoxes = function(movesFilter, num){
	// 	var boxes = movesFilter.querySelectorAll(".box");
	// 	boxes.forEach(function(x){
	// 		contains = _.some(movesLists[num].checkedBoxes, function(y){
	// 			return x.getAttribute("filter") == y;
	// 		})
	// 		if(contains){
	// 			x.checked = true;
	// 		}else{
	// 			x.checked = false;
	// 		}
	// 	});
	// }
	// fillTextBoxes = function(movesFilter, num){
	// 	var ppMin = movesFilter.querySelector(".ppMin");
	// 	var ppMax = movesFilter.querySelector(".ppMax");
	// 	var accuracyMin = movesFilter.querySelector(".accuracyMin");
	// 	var accuracyMax = movesFilter.querySelector(".accuracyMax");
	// 	var powerMin = movesFilter.querySelector(".powerMin");
	// 	var powerMax = movesFilter.querySelector(".powerMax");

	// 	ppMin.value = movesLists[num].pp[0] || "";
	// 	ppMax.value = movesLists[num].pp[1] || "";
	// 	accuracyMin.value = movesLists[num].accuracy[0] || "";
	// 	accuracyMax.value = movesLists[num].accuracy[1] || "";
	// 	powerMin.value = movesLists[num].power[0] || "";
	// 	powerMax.value = movesLists[num].power[1] || "";
	// }
	// filterTypes = function(num){
	// 	if(movesLists[num].type.length == 0){
	// 		return primaryPokemon.moves.all;
	// 	}else{
	// 		var list = [];
	// 		movesLists[num].isFiltered = true;
	// 		movesLists[num].type.forEach(function(type){
	// 			primaryPokemon.moves.all.forEach(function(move){
	// 				if(dev.moves[move].type == type){
	// 					list.push(move);
	// 				}
	// 			});
	// 		});
	// 		return list;
	// 	}
	// }
})(this);