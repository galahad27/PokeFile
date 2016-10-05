(function(root){
	//*********************************CATAGORIES*********************************//
	//Getters
	//Setters
	//To String
	//Events
	//Add
	//Remove
	//misc
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
	var movesLists
	var movesListNum;
	var removableEventListeners;

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
		removableEventListeners = [];
		movesLists = [];
	}
	movesListInit = function(num){
		movesLists[num] = {
			checkedBoxes : [],
			filledTextBoxes : [],
			type : [],
			category : [],
			status : [],
			battle : [],
			stat : [],
			statDir : [],
			statNum : [],
			learn : [],
			power : [],
			accuracy : [],
			pp : [],
		};
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
	addButtonClick = function(){
		if(movesListNum<4){
			var lastMovesList = statsPage.querySelector("#movesList"+(movesListNum-1));
			addMovesList(lastMovesList);
		}
	}
	buttonClick = function(button, movesTable, num){
		var filterType = button.getAttribute("filterType")
		var filter = button.getAttribute("filter");
		if(button.checked){
			movesLists[num].checkedBoxes.push(filter);
			movesLists[num][filterType].push(filter);
		}else{
			movesLists[num].checkedBoxes = _.without(movesLists[num].checkedBoxes, filter);
			movesLists[num][filterType] = _.without(movesLists[num][filterType], filter);
		}
		if(filterType == "power" || filterType == "accuracy" || filterType == "pp"){
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
			var minValue = utill.regex(minBox.value,regex);
			var maxValue = utill.regex(maxBox.value,regex);
			if(minValue || maxValue){
				if(minValue){
					minValue=parseInt(minBox.value);
				}else{
					minValue=0;
				}
				if(maxValue){
					maxValue=parseInt(maxBox.value);
				}else{
					maxValue=250;
				}
				movesLists[num][filterType] = [minValue,maxValue];
			}else{
				movesLists[num][filterType] = [];
			}
		}
		filterTable(movesTable, num);
	}
	clearClick = function(movesFilter, movesTable, num){
		movesListInit(num);
		fillCheckBoxes(movesFilter, num);
		fillTextBoxes(movesFilter, num);
		filterTable(movesTable, num);
	}
	movesClick = function(){
		removeRemovableEvevntListeners();
		setBorderWidth();
		moves.style.borderTopWidth = "7px";
		$(statsPage).empty();
		if(movesListNum==0){
			addMovesList();
		}else{
			var num = movesListNum;
			movesListNum = 0;
			for(i=0;i<num;i++){
				addMovesList();
			}
		}
		addAddButton();
	}
	pokedexClick = function(){
		removeRemovableEvevntListeners();
		setBorderWidth();
		pokedex.style.borderTopWidth = "7px";
		$(statsPage).empty();
		addPokedexEntries();
	};
	statsClick = function(){
		removeRemovableEvevntListeners();
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
		removeRemovableEvevntListeners();
		setBorderWidth();
		typeStats.style.borderTopWidth = "7px";
		$(statsPage).empty();
	};
	/***************************Add***************************/
	addAddButton = function(){
		$(statsPage).append(html.addButton);
		var addButton = page.querySelector(".addButton");
		$(addButton).off("click");
		$(addButton).on("click", addButtonClick);
		removableEventListeners.push(addButton);
	}
	addBarGraph = function(){
		$(statsPage).append(html.containers.STATBARGRAPH(primaryPokemon.name.en+"BarGraph"));
		var barGraph = page.querySelector(".statBarGraph");
		var input = primaryPokemon.base;
		html.load(barGraph, input);
		setBarLength();
	}
	addMovesFilterEventListener = function(movesFilter, movesTable, num){
		var boxes = movesFilter.querySelectorAll(".box");
		boxes.forEach(function(box){
			var callback = function(){
				buttonClick(box, movesTable, num);
			}
			$(box).off("click");
			$(box).on("click", callback);
			removableEventListeners.push(box);
		});
		var buttons = movesFilter.querySelectorAll(".submitButton");
		buttons.forEach(function(button){
			var callback = function(){
				buttonClick(button, movesTable, num);
			}
			var parent = button.parentNode;
			var minBox = parent.querySelector(".minBox");
			var maxBox = parent.querySelector(".maxBox");
			$(minBox).off("click");
			$(maxBox).off("click");
			$(button).off("click");
			$(button).on("click", callback);
			removableEventListeners.push(button);
		});
		var clearButton = movesFilter.querySelector(".clearButton");
		var callback = function(){
			clearClick(movesFilter, movesTable, num);
		};
		$(clearButton).off("click");
		$(clearButton).on("click", callback);
		removableEventListeners.push(clearButton);
	}
	addMovesList = function(prevMovesList){
		if(!!prevMovesList){
			$(prevMovesList).after(html.containers.MOVESLIST("movesList"+movesListNum));
		}else{
			$(statsPage).append(html.containers.MOVESLIST("movesList"+movesListNum));
		}
		var movesList = statsPage.querySelector("#movesList"+movesListNum);
		movesList.style.borderColor = R.typeColors[primaryPokemon.battle.primaryType];
		html.load(movesList, primaryPokemon);
		var movesFilter = movesList.querySelector(".movesFilter");
		var movesTable = movesList.querySelector(".movesTable");
		if(!movesLists[movesListNum]){
			movesListInit(movesListNum);
		}
		fillCheckBoxes(movesFilter, movesListNum);
		fillTextBoxes(movesFilter, movesListNum);
		filterTable(movesTable, movesListNum);
		addMovesFilterEventListener(movesFilter, movesTable, movesListNum);
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
	/***************************Remove***************************/
	removeRemovableEvevntListeners = function(){
		removableEventListeners.forEach(function(x){
			$(x).off();
		});
		removableEventListeners = [];
	}
	/***************************Misc***************************/
	fillCheckBoxes = function(movesFilter, num){
		var boxes = movesFilter.querySelectorAll(".box");
		boxes.forEach(function(x){
			contains = _.some(movesLists[num].checkedBoxes, function(y){
				return x.getAttribute("filter") == y;
			})
			if(contains){
				x.checked = true;
			}else{
				x.checked = false;
			}
		});
	}
	fillTextBoxes = function(movesFilter, num){
		var ppMin = movesFilter.querySelector(".ppMin");
		var ppMax = movesFilter.querySelector(".ppMax");
		var accuracyMin = movesFilter.querySelector(".accuracyMin");
		var accuracyMax = movesFilter.querySelector(".accuracyMax");
		var powerMin = movesFilter.querySelector(".powerMin");
		var powerMax = movesFilter.querySelector(".powerMax");

		ppMin.value = movesLists[num].pp[0] || "";
		ppMax.value = movesLists[num].pp[1] || "";
		accuracyMin.value = movesLists[num].accuracy[0] || "";
		accuracyMax.value = movesLists[num].accuracy[1] || "";
		powerMin.value = movesLists[num].power[0] || "";
		powerMax.value = movesLists[num].power[1] || "";
	}
	filterTypes = function(num){
		if(movesLists[num].type.length == 0){
			return primaryPokemon.moves.all;
		}else{
			var list = [];
			movesLists[num].isFiltered = true;
			movesLists[num].type.forEach(function(type){
				primaryPokemon.moves.all.forEach(function(move){
					if(dev.moves[move].type == type){
						list.push(move);
					}
				});
			});
			return list;
		}
	}
	filterCategories = function(num){
		if(movesLists[num].type.length == 0){
			return categoryFilterList = primaryPokemon.moves.all;
		}else{
			var list = [];
			movesLists[num].isFiltered = true;
			movesLists[num].category.forEach(function(category){
				primaryPokemon.moves.all.forEach(function(move){
					if(dev.moves[move].category == category){
						list.push(move);
					}
				});
			});
			return list;
		}
	}
	filterStatus = function(num){
		if(movesLists[num].status.length == 0){
			return  primaryPokemon.moves.all;
		}else{
			var list = [];
			movesLists[num].isFiltered = true;
			movesLists[num].status.forEach(function(status){
				primaryPokemon.moves.all.forEach(function(move){
					if(_.contains(dev.moves[move].effects.condition, status)){
						list.push(move);
					}
				});
			});
			return list;
		}
	}
	filterBattle = function(num){
		if(movesLists[num].battle.length == 0){
			return primaryPokemon.moves.all;
		}else{
			var list = [];
			movesLists[num].isFiltered = true;
			movesLists[num].battle.forEach(function(battle){
				primaryPokemon.moves.all.forEach(function(move){
					if(_.contains(dev.moves[move].effects.condition, battle)){
						battleFilterList.push(move);
					}
				});
			});
			return list;
		}
	}
	filterStat = function(num){
		if(movesLists[num].stat.length == 0){
			return primaryPokemon.moves.all;
		}else{
			var list = [];
			movesLists[num].isFiltered = true;
			movesLists[num].stat.forEach(function(stat){
				primaryPokemon.moves.all.forEach(function(move){
					var contains = _.some(dev.moves[move].effects.condition, function(el){
						if(!!el.stat){
							return el.stat == stat;
						}else{
							return false;
						}
					});
					if(contains){
						list.push(move);
					}
				});
			});
			return list;
		}
	}
	filterStatDir = function(num){
		if(movesLists[num].statDir.length == 0){
			return primaryPokemon.moves.all;
		}else{
			var list = [];
			movesLists[num].isFiltered = true;
			movesLists[num].statDir.forEach(function(dir){
				primaryPokemon.moves.all.forEach(function(move){
					var contains = _.some(dev.moves[move].effects.condition, function(el){
						if(!!el.dir){
							return el.dir == dir;
						}else{
							return false;
						}
					});
					if(contains){
						list.push(move);
					}
				});
			});
			return list;
		}
	}
	filterStatNum = function(num){
		if(movesLists[num].statNum.length == 0){
			return primaryPokemon.moves.all;
		}else{
			var list = [];
			movesLists[num].isFiltered = true;
			movesLists[num].statNum.forEach(function(num){
				primaryPokemon.moves.all.forEach(function(move){
					var contains = _.some(dev.moves[move].effects.condition, function(el){
						if(!!el.num){
							return el.num == num;
						}else{
							return false;
						}
					});
					if(contains){
						list.push(move);
					}
				});
			});
			return list;
		}
	}
	filterLearn = function(num){
		if(movesLists[num].learn.length == 0){
			return primaryPokemon.moves.all;
		}else{
			var list = [];
			movesLists[num].isFiltered = true;
			movesLists[num].learn.forEach(function(learn){
				primaryPokemon.moves[learn].forEach(function(move){
					list.push(move);
				});
			});
			return list;
		}
	}
	filterPower = function(num){
		if(movesLists[num].power.length == 0){
			return primaryPokemon.moves.all;
		}else{
			movesLists[num].isFiltered = true;
			primaryPokemon.moves.all.forEach(function(move){
				var movePower = parseInt(dev.moves[move].power);
				if(movePower>=movesLists[num].power[0] && movePower<=movesLists[num].power[1]){
					powerFilterList.push(move);
				}
			});
		}
	}
	filterAccuracy = function(num){
		if(movesLists[num].accuracy.length == 0){
			return primaryPokemon.moves.all;
		}else{
			movesLists[num].isFiltered = true;
			primaryPokemon.moves.all.forEach(function(move){
				var moveAcc = parseInt(dev.moves[move].accuracy);
				if(moveAcc>=movesLists[num].accuracy[0] && moveAcc<=movesLists[num].accuracy[1]){
					accuracyFilterList.push(move);
				}
			});
		}
	}
	filterPP = function(num){
		if(movesLists[num].pp.length == 0){
			return primaryPokemon.moves.all;
		}else{
			movesLists[num].isFiltered = true;
			primaryPokemon.moves.all.forEach(function(move){
				var movePP = parseInt(dev.moves[move].pp);
				if(movePP>=movesLists[num].pp[0] && movePP<=movesLists[num].pp[1]){
					ppFilterList.push(move);
				}
			});
		}
	}
	filterTable = function(movesTable, num){
		movesLists[num].isFiltered = false;
		
		var typeFilterList = filterTypes();
		var categoryFilterList = filterCategories();
		var statusFilterList = filterStatus();
		var battleFilterList = filterBattle();
		var statFilterList = filterStat();
		var statDirFilterList = filterStatDir();
		var statNumFilterList = filterStatNum();
		var learnFilterList = filterLearn();
		var powerFilterList = filterPower();
		var accuracyFilterList = filterAccuracy();
		var ppFilterList = filterPP();

		var filteredList = primaryPokemon.moves.all;
		if(movesLists[num].isFiltered){
			filteredList = _.intersection(typeFilterList,categoryFilterList,statusFilterList,battleFilterList,statFilterList,statDirFilterList,statNumFilterList,learnFilterList,powerFilterList,accuracyFilterList,ppFilterList);
		}
		$(movesTable).empty();
		$(movesTable).append(html.movesHeader(primaryPokemon.battle.primaryType));
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