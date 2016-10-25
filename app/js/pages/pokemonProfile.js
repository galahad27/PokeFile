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
	var MOVESSET = function(index){return "<div class=\"movesSet\" index=\""+index+"\"></div>"};

	var LISTNUM = 2;

	var page = document.querySelector("#pokemonProfile");

	var pokedex = page.querySelector("#pokedex");
	var stats = page.querySelector("#stats");
	var moves = page.querySelector("#moves");

	var statsPageWrapper = page.querySelector("#statsPageWrapper");
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
	var movesTableFilterList;

	page.onBeforeShow = function(){
		init();
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
		primaryPokemon = getData();
		currImageIndex = 0;
		movesTableFilterList = [];
	}
	// movesListInit = function(num){
	// 	movesLists[num] = {
	// 		checkedBoxes : [],
	// 		filledTextBoxes : [],
	// 		type : [],
	// 		category : [],
	// 		status : [],
	// 		battle : [],
	// 		stat : [],
	// 		statDir : [],
	// 		statNum : [],
	// 		learn : [],
	// 		power : [],
	// 		accuracy : [],
	// 		pp : [],
	// 	};
	// }
	addEventListeners = function(){
		$(pokedex).on("click", pokedexClick);
		$(stats).on("click", statsClick);
		$(moves).on("click", movesClick);
		$(stockImage).on("click", stockImageClick);
	};
	removeEventListeners = function(){
		$(pokedex).off("click", pokedexClick);
		$(stats).off("click", statsClick);
		$(moves).off("click", movesClick);
		$(stockImage).on("click", nextImage);
	};

	/***************************Getters***************************/
	getData = function(){
		return dev.pokemon.ninetales;
	}
	/***************************Setters***************************/
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
		statsPageWrapper.setAttribute("border", pokemon.battle.primaryType);

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
	typesToString = function(pokemon){
		tempTypes = pokemon.battle.primaryType;
		if(!!pokemon.battle.secondaryType){
			tempTypes = tempTypes + " | " + pokemon.battle.secondaryType;
		}
		return tempTypes;
	}
	/***************************Events***************************/
	// buttonClick = function(button, movesTable, num){
	// 	var filterType = button.getAttribute("filterType")
	// 	var filter = button.getAttribute("filter");
	// 	if(button.checked){
	// 		movesLists[num].checkedBoxes.push(filter);
	// 		movesLists[num][filterType].push(filter);
	// 	}else{
	// 		movesLists[num].checkedBoxes = _.without(movesLists[num].checkedBoxes, filter);
	// 		movesLists[num][filterType] = _.without(movesLists[num][filterType], filter);
	// 	}
	// 	if(filterType == "power" || filterType == "accuracy" || filterType == "pp"){
	// 		var regex;
	// 		if(filterType == "power"){
	// 			regex = /^([0-9]|[1-9][0-9]|[1][0-9][0-9]|[2][0-4][0-9]|250)$/;
	// 		}else if(filterType == "accuracy"){
	// 			regex = /^([0-9]|[1-9][0-9]|100)$/;
	// 		}else if(filterType == "pp"){
	// 			regex = /^([0-9]|[1-3][0-9]|40)$/;
	// 		}
	// 		var parent = button.parentNode;
	// 		var minBox = parent.querySelector(".minBox");
	// 		var maxBox = parent.querySelector(".maxBox");
	// 		var minValue = utill.regex(minBox.value,regex);
	// 		var maxValue = utill.regex(maxBox.value,regex);
	// 		if(minValue || maxValue){
	// 			if(minValue){
	// 				minValue=parseInt(minBox.value);
	// 			}else{
	// 				minValue=0;
	// 			}
	// 			if(maxValue){
	// 				maxValue=parseInt(maxBox.value);
	// 			}else{
	// 				maxValue=250;
	// 			}
	// 			movesLists[num][filterType] = [minValue,maxValue];
	// 		}else{
	// 			movesLists[num][filterType] = [];
	// 		}
	// 	}
	// 	filterTable(movesTable, num);
	// }
	// clearClick = function(movesFilter, movesTable, num){
	// 	movesListInit(num);
	// 	fillCheckBoxes(movesFilter, num);
	// 	fillTextBoxes(movesFilter, num);
	// 	filterTable(movesTable, num);
	// }
	movesClick = function(){
		setBorderWidth();
		moves.style.borderTopWidth = "7px";
		$(statsPage).empty();
		addMoves(0);
	}
	pokedexClick = function(){
		setBorderWidth();
		pokedex.style.borderTopWidth = "7px";
		$(statsPage).empty();
		addPokedexEntries();
	}
	// removeClick = function(movesList){
	// 	movesList.remove();
	// 	movesListNum--;
	// 	console.log(movesListNum);
	// 	$(".addButton").show();
	// }
	statsClick = function(){
		setBorderWidth();
		stats.style.borderTopWidth = "7px";
		$(statsPage).empty();
		addBarGraph();
		addTables();
	}
	stockImageClick = function(){
		if(currImageIndex<primaryPokemon.img.url.length-1){
			currImageIndex++;	
		}
		else{
			currImageIndex = 0;
		}
		stockImage.setAttribute("src", primaryPokemon.img.url[currImageIndex]);
	}
	/***************************Add***************************/
	addBarGraph = function(){
		var input = primaryPokemon.base;
		var statsBarGraph = html.load(statsPage, "statBarGraph", input);
		statsBarGraph.setBarLength(primaryPokemon.base);
	}
	// addMovesFilterEventListener = function(movesList, movesFilter, movesTable, num){
	// 	var boxes = movesFilter.querySelectorAll(".box");
	// 	boxes.forEach(function(box){
	// 		var callback = function(){
	// 			buttonClick(box, movesTable, num);
	// 		}
	// 		$(box).off("click");
	// 		$(box).on("click", callback);
	// 		removableEventListeners.push(box);
	// 	});
	// 	var buttons = movesFilter.querySelectorAll(".submitButton");
	// 	buttons.forEach(function(button){
	// 		var callback = function(){
	// 			buttonClick(button, movesTable, num);
	// 		}
	// 		var parent = button.parentNode;
	// 		var minBox = parent.querySelector(".minBox");
	// 		var maxBox = parent.querySelector(".maxBox");
	// 		$(minBox).off("click");
	// 		$(maxBox).off("click");
	// 		$(button).off("click");
	// 		$(button).on("click", callback);
	// 		removableEventListeners.push(button);
	// 	});

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
	addMoves = function(index){
		$(statsPage).append(MOVESSET(index))
		var movesSet = statsPage.querySelector("#statsPage [index=\""+index+"\"]");
		movesSet.style.borderColor = R.typeColors[primaryPokemon.battle.primaryType];
		var filterTable = {};
		filterTable.filter = html.load(movesSet, "movesFilter");
		filterTable.table = html.load(movesSet, "movesTable", primaryPokemon.battle.primaryType);
		movesTableFilterList[0] = filterTable;
		var filteredMoves = movesTableFilterList[0].filter.filterMoves(primaryPokemon.moves.all);
		movesTableFilterList[0].table.addMoves(filteredMoves);
	}
	addPokedexEntries = function(){
		var keys = _.keys(primaryPokemon.pokedex);
		keys.forEach(function(key){
			var input = [key, primaryPokemon.pokedex[key]];
			html.load(statsPage, "pokedexEntry", input);
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
	/***************************Remove***************************/
	// removeRemovableEvevntListeners = function(){
	// 	removableEventListeners.forEach(function(x){
	// 		$(x).off();
	// 	});
	// 	removableEventListeners = [];
	// }
	/***************************Misc***************************/
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
	// filterCategories = function(num){
	// 	if(movesLists[num].category.length == 0){
	// 		return primaryPokemon.moves.all;
	// 	}else{
	// 		var list = [];
	// 		movesLists[num].isFiltered = true;
	// 		movesLists[num].category.forEach(function(category){
	// 			primaryPokemon.moves.all.forEach(function(move){
	// 				if(dev.moves[move].category == category){
	// 					list.push(move);
	// 				}
	// 			});
	// 		});
	// 		return list;
	// 	}
	// }
	// filterStatus = function(num){
	// 	if(movesLists[num].status.length == 0){
	// 		return  primaryPokemon.moves.all;
	// 	}else{
	// 		var list = [];
	// 		movesLists[num].isFiltered = true;
	// 		movesLists[num].status.forEach(function(status){
	// 			primaryPokemon.moves.all.forEach(function(move){
	// 				if(_.contains(dev.moves[move].effects.condition, status)){
	// 					list.push(move);
	// 				}
	// 			});
	// 		});
	// 		return list;
	// 	}
	// }
	// filterBattle = function(num){
	// 	if(movesLists[num].battle.length == 0){
	// 		return primaryPokemon.moves.all;
	// 	}else{
	// 		var list = [];
	// 		movesLists[num].isFiltered = true;
	// 		movesLists[num].battle.forEach(function(battle){
	// 			primaryPokemon.moves.all.forEach(function(move){
	// 				if(_.contains(dev.moves[move].effects.condition, battle)){
	// 					list.push(move);
	// 				}
	// 			});
	// 		});
	// 		return list;
	// 	}
	// }
	// filterStat = function(num){
	// 	if(movesLists[num].stat.length == 0){
	// 		return primaryPokemon.moves.all;
	// 	}else{
	// 		var list = [];
	// 		movesLists[num].isFiltered = true;
	// 		movesLists[num].stat.forEach(function(stat){
	// 			primaryPokemon.moves.all.forEach(function(move){
	// 				var contains = _.some(dev.moves[move].effects.condition, function(el){
	// 					if(!!el.stat){
	// 						return el.stat == stat;
	// 					}else{
	// 						return false;
	// 					}
	// 				});
	// 				if(contains){
	// 					list.push(move);
	// 				}
	// 			});
	// 		});
	// 		return list;
	// 	}
	// }
	// filterStatDir = function(num){
	// 	if(movesLists[num].statDir.length == 0){
	// 		return primaryPokemon.moves.all;
	// 	}else{
	// 		var list = [];
	// 		movesLists[num].isFiltered = true;
	// 		movesLists[num].statDir.forEach(function(dir){
	// 			primaryPokemon.moves.all.forEach(function(move){
	// 				var contains = _.some(dev.moves[move].effects.condition, function(el){
	// 					if(!!el.dir){
	// 						return el.dir == dir;
	// 					}else{
	// 						return false;
	// 					}
	// 				});
	// 				if(contains){
	// 					list.push(move);
	// 				}
	// 			});
	// 		});
	// 		return list;
	// 	}
	// }
	// filterStatNum = function(num){
	// 	if(movesLists[num].statNum.length == 0){
	// 		return primaryPokemon.moves.all;
	// 	}else{
	// 		var list = [];
	// 		movesLists[num].isFiltered = true;
	// 		movesLists[num].statNum.forEach(function(num){
	// 			primaryPokemon.moves.all.forEach(function(move){
	// 				var contains = _.some(dev.moves[move].effects.condition, function(el){
	// 					if(!!el.num){
	// 						return el.num == num;
	// 					}else{
	// 						return false;
	// 					}
	// 				});
	// 				if(contains){
	// 					list.push(move);
	// 				}
	// 			});
	// 		});
	// 		return list;
	// 	}
	// }
	// filterLearn = function(num){
	// 	if(movesLists[num].learn.length == 0){
	// 		return primaryPokemon.moves.all;
	// 	}else{
	// 		var list = [];
	// 		movesLists[num].isFiltered = true;
	// 		movesLists[num].learn.forEach(function(learn){
	// 			primaryPokemon.moves[learn].forEach(function(move){
	// 				list.push(move);
	// 			});
	// 		});
	// 		return list;
	// 	}
	// }
	// filterPower = function(num){
	// 	if(movesLists[num].power.length == 0){
	// 		return primaryPokemon.moves.all;
	// 	}else{
	// 		var list = [];
	// 		movesLists[num].isFiltered = true;
	// 		primaryPokemon.moves.all.forEach(function(move){
	// 			var movePower = parseInt(dev.moves[move].power);
	// 			if(movePower>=movesLists[num].power[0] && movePower<=movesLists[num].power[1]){
	// 				list.push(move);
	// 			}
	// 		});
	// 		return list;
	// 	}
	// }
	// filterAccuracy = function(num){
	// 	if(movesLists[num].accuracy.length == 0){
	// 		return primaryPokemon.moves.all;
	// 	}else{
	// 		var list = [];
	// 		movesLists[num].isFiltered = true;
	// 		primaryPokemon.moves.all.forEach(function(move){
	// 			var moveAcc = parseInt(dev.moves[move].accuracy);
	// 			if(moveAcc>=movesLists[num].accuracy[0] && moveAcc<=movesLists[num].accuracy[1]){
	// 				list.push(move);
	// 			}
	// 		});
	// 		return list;
	// 	}
	// }
	// filterPP = function(num){
	// 	if(movesLists[num].pp.length == 0){
	// 		return primaryPokemon.moves.all;
	// 	}else{
	// 		var list = [];
	// 		movesLists[num].isFiltered = true;
	// 		primaryPokemon.moves.all.forEach(function(move){
	// 			var movePP = parseInt(dev.moves[move].pp);
	// 			if(movePP>=movesLists[num].pp[0] && movePP<=movesLists[num].pp[1]){
	// 				list.push(move);
	// 			}
	// 		});
	// 		return list;
	// 	}
	// }
	// filterTable = function(movesTable, num){
	// 	movesLists[num].isFiltered = false;
		
	// 	var typeFilterList = filterTypes(num);
	// 	var categoryFilterList = filterCategories(num);
	// 	var statusFilterList = filterStatus(num);
	// 	var battleFilterList = filterBattle(num);
	// 	var statFilterList = filterStat(num);
	// 	var statDirFilterList = filterStatDir(num);
	// 	var statNumFilterList = filterStatNum(num);
	// 	var learnFilterList = filterLearn(num);
	// 	var powerFilterList = filterPower(num);
	// 	var accuracyFilterList = filterAccuracy(num);
	// 	var ppFilterList = filterPP(num);

	// 	var filteredList = primaryPokemon.moves.all;
	// 	if(movesLists[num].isFiltered){
	// 		filteredList = _.intersection(typeFilterList,categoryFilterList,statusFilterList,battleFilterList,statFilterList,statDirFilterList,statNumFilterList,learnFilterList,powerFilterList,accuracyFilterList,ppFilterList);
	// 	}
	// 	$(movesTable).empty();
	// 	$(movesTable).append(html.movesHeader(primaryPokemon.battle.primaryType));
	// 	filteredList.forEach(function(move){
	// 		var input = {
	// 			type : primaryPokemon.battle.primaryType,
	// 			move : dev.moves[move],
	// 			effect : moveEffectsToString(dev.moves[move].effects),
	// 		};
	// 		html.load(movesTable, input);
	// 	});
	// }
})(this);