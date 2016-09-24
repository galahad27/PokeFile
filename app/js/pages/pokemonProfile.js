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
	var checkedBoxes;

	var typeFilter;
	var categoryFilter;
	var statusFilter;
	var battleFilter;
	var statFilter;
	var statDirFilter;
	var statNumFilter;
	var learnFilter;
	var powerFilter;
	var accuracyFilter;
	var ppFilter;
	var filteredList;

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
		checkedBoxes = [];

		filteredList = [];
		typeFilter = [];
		categoryFilter = [];
		statusFilter = [];
		battleFilter = [];
		statFilter = [];
		statDirFilter = [];
		statNumFilter = [];
		learnFilter = [];
		powerFilter = [];
		accuracyFilter = [];
		ppFilter = [];
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
				buttonClick(box, movesTable);
			}
			$(box).off("click");
			$(box).on("click", callback);
		});
		var buttons = movesFilter.querySelectorAll(".submitButton");
		buttons.forEach(function(button){
			var callback = function(){
				buttonClick(button, movesTable);
			}
			var parent = button.parentNode;
			var minBox = parent.querySelector(".minBox");
			var maxBox = parent.querySelector(".maxBox");
			$(minBox).off("click");
			$(maxBox).off("click");
			$(button).off("click");
			$(button).on("click", callback);
		})
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
			if(!!effects.increase[index]){
				if(string == ""){
					string = effects.increase[index];
				}else{
					if(!!effects.percentage[index]){
						string = string+" "+effects.increase[index];
					}else{
						string = string+" | "+effects.increase[index];
					}
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
					if(!!effects.percentage[index] || !!effects.increase[index]){
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
	buttonClick = function(button, movesTable){
		$(movesTable).empty();
		$(movesTable).append(html.movesHeader(primaryPokemon.battle.primaryType));
		var filterType = button.getAttribute("filterType")
		var filter = button.getAttribute("filter");
		if(button.checked){
			checkedBoxes.push(filter);
		}else{
			checkedBoxes = _.without(checkedBoxes, filter);
		}
		if(filterType == "type"){
			if(button.checked){
				typeFilter.push(filter);
			}else{
				typeFilter = _.without(typeFilter, filter); 
			}
		}else if(filterType == "category"){
			if(button.checked){
				categoryFilter.push(filter);
			}else{
				categoryFilter = _.without(categoryFilter, filter);
			}
		}else if(filterType == "status"){
			if(button.checked){
				statusFilter.push(filter);
			}else{
				statusFilter = _.without(statusFilter, filter);
			}
		}else if(filterType == "battle"){
			if(button.checked){
				battleFilter.push(filter);
			}else{
				battleFilter = _.without(battleFilter, filter);
			}
		}else if(filterType == "stat"){
			if(button.checked){
				statFilter.push(filter);
			}else{
				statFilter = _.without(statFilter, filter);
			}
		}else if(filterType == "statDir"){
			if(button.checked){
				statDirFilter.push(filter);
			}else{
				statDirFilter = _.without(statDirFilter, filter);
			}
		}else if(filterType == "statNum"){
			if(button.checked){
				statNumFilter.push(filter);
			}else{
				statNumFilter = _.without(statNumFilter, filter);
			}
		}else if(filterType == "learn"){
			if(button.checked){
				learnFilter.push(filter);
			}else{
				learnFilter = _.without(learnFilter, filter);
			}
		}else if(filterType == "power" || filterType == "accuracy" || filterType == "pp"){
			var regex;
			if(filterType == "power"){
				regex = /^([0-9]|[1-9][0-9]|[1][0-9][0-9]|[2][0-4][0-9]|250)$/;
			}else if(filterType == "accuracy"){
				regex = /^([0-9]|[1-9][0-9]|100)$/;
			}else if(filterType == "pp"){
				regex = /^([0-9]|[1-3][0-9]|40)$/;
			}
			var parent = button.parentNode;
			var minBox = parent.querySelector(".minBox");
			var maxBox = parent.querySelector(".maxBox");
			var minValue = minBox.value;
			var maxValue = maxBox.value;
			var validMin = utill.regex(minValue,regex);
			var validMax = utill.regex(maxValue,regex);
			if(validMin || validMax){
				if(validMin){
					minValue=parseInt(minValue);
				}else{
					minValue=0;
				}
				if(validMax){
					maxValue=parseInt(maxValue);
				}else{
					maxValue=250;
				}
				if(filterType == "power"){
					powerFilter = [minValue,maxValue];
				}else if(filterType == "accuracy"){
					accuracyFilter = [minValue,maxValue];
				}else if(filterType == "pp"){
					ppFilter = [minValue,maxValue];
				}
			}else{
				if(filterType == "power"){
					powerFilter = [];
				}else if(filterType == "accuracy"){
					accuracyFilter = [];
				}else if(filterType == "pp"){
					ppFilter = [];
				}
			}
		}
		filterTable(movesTable);
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
		fillCheckBoxes();
		filterTable(movesTable);
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
	/***************************Misc***************************/
	fillCheckBoxes = function(){
		console.log(checkedBoxes);
		checkedBoxes.forEach(function(x){
			console.log(x.checked);
			x.checked = true;
		});
	}
	filterTable = function(movesTable){
		var filteredList = [];
		var filtered = false;
		var typeFilterList = [];
		var categoryFilterList = [];
		var statusFilterList = [];
		var battleFilterList = [];
		var statFilterList = [];
		var statDirFilterList = [];
		var statNumFilterList = [];
		var learnFilterList = [];
		var powerFilterList = [];
		var accuracyFilterList = [];
		var ppFilterList = [];
		if(typeFilter.length == 0){
			typeFilterList = primaryPokemon.moves.all;
		}
		if(categoryFilter.length == 0){
			categoryFilterList = primaryPokemon.moves.all;
		}
		if(statusFilter.length == 0){
			statusFilterList = primaryPokemon.moves.all;
		}
		if(battleFilter.length == 0){
			battleFilterList = primaryPokemon.moves.all;
		}
		if(statFilter.length == 0){
			statFilterList = primaryPokemon.moves.all;
		}
		if(statDirFilter.length == 0){
			statDirFilterList = primaryPokemon.moves.all;
		}
		if(statNumFilter.length == 0){
			statNumFilterList = primaryPokemon.moves.all;
		}
		if(learnFilter.length == 0){
			learnFilterList = primaryPokemon.moves.all;
		}
		if(powerFilter.length == 0){
			powerFilterList = primaryPokemon.moves.all;
		}
		if(accuracyFilter.length == 0){
			accuracyFilterList = primaryPokemon.moves.all;
		}
		if(ppFilter.length == 0){
			ppFilterList = primaryPokemon.moves.all;
		}
		typeFilter.forEach(function(type){
			filtered = true;
			primaryPokemon.moves.all.forEach(function(move){
				if(dev.moves[move].type == type){
					typeFilterList.push(move);
				}
			});
		});
		categoryFilter.forEach(function(category){
			filtered = true;
			primaryPokemon.moves.all.forEach(function(move){
				if(dev.moves[move].category == category){
					categoryFilterList.push(move);
				}
			});
		});
		statusFilter.forEach(function(status){
			filtered = true;
			primaryPokemon.moves.all.forEach(function(move){
				if(_.contains(dev.moves[move].effects.condition, status)){
					statusFilterList.push(move);
				}
			});
		});
		battleFilter.forEach(function(battle){
			filtered = true;
			primaryPokemon.moves.all.forEach(function(move){
				if(_.contains(dev.moves[move].effects.condition, battle)){
					battleFilterList.push(move);
				}
			});
		});
		statFilter.forEach(function(stat){
			filtered = true;
			primaryPokemon.moves.all.forEach(function(move){
				var contains = _.some(dev.moves[move].effects.condition, function(el){
					if(!!el.stat){
						return el.stat == stat;
					}else{
						return false;
					}
				});
				if(contains){
					statFilterList.push(move);
				}
			});
		});
		statDirFilter.forEach(function(dir){
			filtered = true;
			primaryPokemon.moves.all.forEach(function(move){
				var contains = _.some(dev.moves[move].effects.condition, function(el){
					if(!!el.dir){
						return el.dir == dir;
					}else{
						return false;
					}
				});
				if(contains){
					statDirFilterList.push(move);
				}
			});
		});
		statNumFilter.forEach(function(num){
			filtered = true;
			primaryPokemon.moves.all.forEach(function(move){
				var contains = _.some(dev.moves[move].effects.condition, function(el){
					if(!!el.num){
						return el.num == num;
					}else{
						return false;
					}
				});
				if(contains){
					statNumFilterList.push(move);
				}
			});
		});
		learnFilter.forEach(function(learn){
			filtered = true;
			primaryPokemon.moves[learn].forEach(function(move){
				learnFilterList.push(move);
			});
		});
		primaryPokemon.moves.all.forEach(function(move){
			var movePower = parseInt(dev.moves[move].power);
			var moveAcc = parseInt(dev.moves[move].accuracy);
			var movePP = parseInt(dev.moves[move].pp);
			if(!!powerFilter[0]||!!accuracyFilter[0]||!!ppFilter[0]){
				filtered = true;
			}
			if(movePower>=powerFilter[0] && movePower<=powerFilter[1]){
				powerFilterList.push(move);
			}
			if(moveAcc>=accuracyFilter[0] && moveAcc<=accuracyFilter[1]){
				accuracyFilterList.push(move);
			}
			if(movePP>=ppFilter[0] && movePP<=ppFilter[1]){
				ppFilterList.push(move);
			}
		});

		if(filtered){
			filteredList = _.intersection(typeFilterList,categoryFilterList,statusFilterList,battleFilterList,statFilterList,statDirFilterList,statNumFilterList,learnFilterList,powerFilterList,accuracyFilterList,ppFilterList);
		}else{
			filteredList = primaryPokemon.moves.all;
		}
		filteredList.forEach(function(move){
			var input = {
				type : primaryPokemon.battle.primaryType,
				move : dev.moves[move],
				effect : moveEffectsToString(dev.moves[move].effects),
			};
			html.load(movesTable, input);
		});
	}
})(this);