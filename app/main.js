(function(root){
	var dev = {};

	dev.pokemon = {
		ninetales : {
			name : {
				en: "Ninetales",
				jap: "Kyukon",
			},
			localNum : {
				red : "38",
				blue : "38",
				yellow : "38",
				gold : "126",
				silver : "126",
				crystal : "126",
				ruby : "154",
				sapphire : "154",
				fireRed : "38",
				leafGreen : "38",
				emerald : "154",
				dimond : null,
				pearl : null,
				platinum : null,
				heartGold : "128",
				soulSilver : "128",
				black : null,
				white : null,
				black2 : "249",
				white2 : "249",
				x : null,
				y : null,
				omegaRuby : "161",
				alphaSapphire : "161",
			},
			basic : {
				nationalNum : "38",
				species : "Fox Pokemon",
				height : "1.09 m",
				weight : "19.9 kg",
			},
			breeding : {
				eggGroup : "Field",
				eggCycle : "21",
				genders : {
					male : "25",
					female : "75",
				},
			},
			training : {
				evs : {
					hp : null,
					attack : null,
					defense : null,
					spAttack : null,
					spDefense : 1,
					speed : 1,
				},
				catchRate : "75",
				happiness : "70",
				exp : "178",
				growthRate : "Medium Fast",
			},
			battle : {
				types : {
					primaryType : "fire",
					secondaryType : null,	
				},
				abilities : {
					firstAbility : "flashFire",
					secondAbility : null,
					hiddenAbility : "drought",
				},
			},
			pokedex : {
				red : "Very smart and very vengeful. Grabbing one of its many tails could result in a 1000-year curse.",
				blue : "Very smart and very vengeful. Grabbing one of its many tails could result in a 1000-year curse.",
				yellow : "According to an enduring legend, 9 noble saints were united and reincarnated as this POKéMON.",
				gold : "Some legends claim that each of its nine tails has its own unique type of special mystical power.",
				silver : "Its nine beautiful tails are filled with a wondrous energy that could keep it alive for 1,000 years.",
				crystal : "It is said to live a thousand years, and each of its tails is loaded with supernatural powers.",
				ruby : "NINETALES casts a sinister light from its bright red eyes to gain total control over its foe’s mind. This POKéMON is said to live for a thousand years.",
				sapphire : "Legend has it that NINETALES came into being when nine wizards possessing sacred powers merged into one. This POKéMON is highly intelligent - it can understand human speech.",
				fireRed : "It has nine long tails and fur that gleams gold. It is said to live for 1,000 years.",
				leafGreen : "Very smart and very vengeful. Grabbing one of its many tails could result in a 1,000-year curse.",
				emerald : "It has long been said that each of the nine tails embody an enchanted power. A long-lived NINETALES will have fur that shines like gold.",
				dimond : "Its nine tails are said to be imbued with a mystic power. It can live for a thousand years.",
				pearl : "Its nine tails are said to be imbued with a mystic power. It can live for a thousand years.",
				platinum : "Its nine tails are said to be imbued with a mystic power. It can live for a thousand years.",
				heartGold : "Some legends claim that each of its nine tails has its own unique type of special mystical power.",
				soulSilver : "Its nine beautiful tails are filled with a wondrous energy that could keep it alive for 1,000 years.",
				black : "Its nine tails are said to be imbued with a mystic power. It can live for a thousand years.",
				white : "Its nine tails are said to be imbued with a mystic power. It can live for a thousand years.",
				black2 : "Each of its nine tails is imbued with supernatural power, and it can live for a thousand years.",
				white2 : "Each of its nine tails is imbued with supernatural power, and it can live for a thousand years.",
				x : "It has nine long tails and fur that gleams gold. It is said to live for 1,000 years.",
				y : "Very smart and very vengeful. Grabbing one of its many tails could result in a 1,000-year curse.",
			},
			base : {
				hp : 73,
				attack : 76,
				defense : 75,
				spAttack : 81,
				spDefense : 100,
				speed : 100,
			},
			img : {
				url: ["./res/img/ninetales/Ninetales.png", "./res/img/ninetales/Ninetales.gif"],
			},
			moves : {
				all : ["flamethrower","extrasensory","heatWave","confuseRay","imprison","nastyPlot","quickAttack","safeguard"],
				level : ["flamethrower","confuseRay","imprison","nastyPlot","quickAttack","safeguard"],
				egg : ["extrasensory","heatWave"],
				tutor : ["heatWave"],
				preEvolution : ["extrasensory"],
				hm : [],
				tm : ["flamethrower","safeguard"],
				transfer : [],
			},
		}
	}
	dev.moves = {
		flamethrower : {
			name : "Flamethrower",
			type : "Fire",
			category : "Special",
			power : "90",
			accuracy : "100",
			pp : "15",
			effects : {
				condition : ["Burn"],
				percentage : ["10"],
				increase : [null],
			},
			pokemon : ["ninetales"],
		},
		extrasensory : {
			name : "Extrasensory",
			type : "Psychic",
			category : "Special",
			power : "80",
			accuracy : "100",
			pp : "20",
			effects : {
				condition : ["Flinch"],
				percentage : ["10"],
				increase : [null],
			},
			pokemon : ["ninetales"],	
		},
		heatWave : {
			name : "Heat Wave",
			type : "Fire",
			category : "Special",
			power : "95",
			accuracy : "90",
			pp : "10",
			effects : {
				condition : ["Burn"],
				percentage : ["10"],
				increase : [null],
			},
			pokemon : ["ninetales"],
		},
		confuseRay : {
			name : "Confuse Ray",
			type : "Ghost",
			category : "Status",
			power : "",
			accuracy : "100",
			pp : "10",
			effects : {
				condition : ["Confusion"],
				percentage : ["100"],
				increase : [null],
			},
			pokemon : ["ninetales"],
		},
		imprison : {
			name : "Imprison",
			type : "Psychic",
			category : "Status",
			power : "",
			accuracy : "",
			pp : "10",
			effects : {
				condition : [],
				percentage : [],
				increase : [],
			},
			pokemon : ["ninetales"],
		},
		nastyPlot : {
			name : "Nasty Plot",
			type : "Dark",
			category : "Status",
			power : "",
			accuracy : "",
			pp : "20",
			effects : {
				condition : [{stat:"Special Attack",dir:"+",num:"2"}],
				percentage : [null],
				increase : [null],
			},
			pokemon : ["ninetales"],
		},
		quickAttack : {
			name : "Quick Attack",
			type : "Normal",
			category : "Physical",
			power : "40",
			accuracy : "100",
			pp : "30",
			effects : {
				condition : ["Priority"],
				percentage : [null],
				increase : ["+1"],
			},
			pokemon : ["ninetales"],
		},
		safeguard : {
			name : "Safeguard",
			type : "Normal",
			category : "Status",
			power : "",
			accuracy : "",
			pp : "25",
			effects : {
				condition : [],
				percentage : [],
				increase : [],
			},
			pokemon : ["ninetales"],
		},
	}

	root.dev = dev;
})(this);
(function(root){

	var utill = {};

	utill.statFormula = function(level, base, iv, ev, nature, isHp){
		if(isHp){
			return Math.floor((((2*base+iv+(ev/4))*level)/100)+level+10);
		}else{
			return Math.floor(Math.floor((((2*base+iv+(ev/4))*level)/100)+5)*nature);
		}
	}
	utill.regex = function(input, regex){
		return regex.test(input);
	}

	root.utill = utill;
})(this);
(function(root){
})(this);
(function(root){
	var R = {};
	root.R = R;
})(this);
(function(root){
	R.colors = {};
	R.colors.types = {
		bug : "#A8B820",
		dark : "#705848",
		dragon : "#7038F8",
		electric : "#F8D030",
		fairy : "#EE99AC",
		fire : "#F08030",
		fighting : "#C03028",
		flying : "#A890F0",
		ghost : "#705898",
		grass : "#78C850",
		ground : "#E0C068",
		ice : "#98D8D8",
		normal : "#A8A878",
		poison : "#A040A0",
		psychic : "#F85888",
		rock : "#B8A038",
		steel : "#B8B8D0",
		water : "#6890F0",
	};
})(this);
(function(root){
	R.stats = {};
	R.stats.max = {
		HP : 255,
		ATTACK : 190,
		DEFENSE : 230,
		SPATTACK : 194,
		SPDEFENSE : 230,
		SPEED : 180,
	}
})(this);
(function(root){
	var pages = {};

	pages.elements = document.querySelectorAll(".poke_page");
	pages.elements.forEach(function(page){
		pageId = page.getAttribute("id");
		pages[pageId] = page;
	});
	pages.pageIds = {
		POKEMONPROFILE : "pokemonProfile",
	} 

	pages.loadPage = function(page){
		var pageElement = pages[page];
		var langElements = pageElement.querySelectorAll("[lang]")
		langElements.forEach(function(langElement){
			langElement.innerHTML = lang[page][lang.userLanguage][langElement.getAttribute("lang")];
		})
		if(!!page.activePage){
			onBeforeHide(page);
		}else{
			onBeforeShow(page);
		}
	}
	function onBeforeHide(page){
		!!pages.activePage.onBeforeHide && pages.activePage.onBeforeHide();
		onHide(page);
	};
	function onHide(page){
		pages.activePage.style.display = "none";
		!!pages.activePage.onHide && pages.activePage.onHide();
		onBeforeShow(page);
	};
	function onBeforeShow(page){
		pages.activePage = pages[page];
		pageUIs = pages.activePage.querySelectorAll("[pre-insert]");
		pageUIs.forEach(function(UI){
			html.load(UI, UI.getAttribute("pre-insert"));
		});
		!!pages.activePage.onBeforeShow && pages.activePage.onBeforeShow();
		onShow();
	};
	function onShow(){
		pages.activePage.style.display = "block";
		!!pages.activePage.onShow && pages.activePage.onShow();
	};

	root.pages = pages;
})(this);
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
(function(root){
	var lang = {};

	lang.getUserLanguage = function(){
		lang.userLanguage = lang.types[window.navigator.userLanguage || window.navigator.language];
	}
	lang.pokemon ={};
	lang.types = {};
	lang.types["en-US"] = "en";

	
	root.lang = lang;
})(this);
(function(root){
	lang.pokemonProfile = {};
	lang.pokemonProfile.en = {
		breeder: "For Breeders",
		trainer: "For Trainers",
		battler: "For Battlers",
		pokedex: "Pokedex Entries",
		stats: "Stats",
		moves: "Moves",
	}
})(this);

(function(root){
	lang.pokemon.types = {}
	lang.pokemon.types.en = {
		bug: "Bug",
		dark: "Dark",
		dragon: "Dragon",
		electric: "Electric",
		fairy: "Fairy",
		fire: "Fire",
		fighting: "Fighting",
		flying: "Flying",
		ghost: "Ghost",
		grass: "Grass",
		ground: "Ground",
		ice: "Ice",
		normal: "Normal",
		poison: "Poison",
		psychic: "Psychic",
		rock: "Rock",
		steel: "Steel",
		water: "Water",
	}
})(this);
(function(root){
	var html = {};

	html.load = function(parent, type, input){
		var UI = html[type]();
		$(parent).append(UI.html(input));
		!!UI.hasLoaded && UI.hasLoaded(parent);
		return UI;
	};

	root.html = html;
})(this);
(function(root){
	html.siteHeader = function(){
		var html = function(){
			return ""+
				"	<div class=\"header\">"+
				"		<p>POKEDEX</p>"+
				"	</div>"+
				"	<ul class=\"mainBarMenu webBackground fireBorder\">"+
				"		<li><a href=\"#\">Home</a></li>"+
				"		<li><a id=\"p38\" href=\"#\">Ninetails</a></li>"+
				"		<li><a id=\"p282\" href=\"#\">Gardevoir</a></li>"+
				"	</ul>";
		}
		return{
			html: html,
		}
	}
})(this);
(function(root){
	html.checkBox = function(title, background){
		return ""+
		"<div class=\"checkBox\">"+
		"	<input class=\"checkbox\" type=\"checkbox\">"+
		"	<div class=\"title\" background=\""+background+"\">"+title+"</div>"+
		"</div>";
	}
})(this);
(function(root){
	html.pokedexEntry = function(){
		var html = function(input){
			return "<p class=\"pokedexEntry\"><b>"+input[0]+"</b>: "+input[1]+"</p>";
		}
		return{
			html : html,
		}
	}
})(this);

(function(root){
	html.movesFilter = function(){
		var movesFilter;
		var movesList;
		var filteredList;

		var filterCategories = {
			type: [],
			category: [],
			status: [],
			battle: [],
			stat: [],
			statDir: [],
			statChange: [],
			learn: [],
			power: [],
			accuracy: [],
			pp: [],
		}
		var html = function(moves){
			movesList = moves;
			return ""+
			"	<div class=\"movesFilter\">"+
			"		<div class=\"row\">"+
			"			<div class=\"cell category\" filterCategory=\"type\">"+
			"				<h3>Types</h3>"+
			"				<div class=\"table\">"+
			"					<div class=\"row\">"+
			"						<div class=\"cell name\" filterName=\"bug\">"+ html.checkBoxObject(lang.pokemon.types.bug, R.colors.types.bug) +"</div>"+
			"						<div class=\"cell name\" filterName=\"fighting\">"+ html.checkBoxObject(lang.pokemon.types.fighting, R.colors.types.fighting) +"</div>"+
			"						<div class=\"cell name\" filterName=\"normal\">"+ html.checkBoxObject(lang.pokemon.types.normal, R.colors.types.normal) +"</div>"+
			"					</div>"+
			"					<div class=\"row\">"+
			"						<div class=\"cell name\" filterName=\"dark\">"+ html.checkBoxObject(lang.pokemon.types.dark, R.colors.types.dark) +"</div>"+
			"						<div class=\"cell name\" filterName=\"flying\">"+ html.checkBoxObject(lang.pokemon.types.flying, R.colors.types.flying) +"</div>"+
			"						<div class=\"cell name\" filterName=\"poison\">"+ html.checkBoxObject(lang.pokemon.types.poison, R.colors.types.poison) +"</div>"+
			"					</div>"+
			"					<div class=\"row\">"+
			"						<div class=\"cell name\" filterName=\"dragon\">"+ html.checkBoxObject(lang.pokemon.types.dragon, R.colors.types.dragon) +"</div>"+
			"						<div class=\"cell name\" filterName=\"ghost\">"+ html.checkBoxObject(lang.pokemon.types.ghost, R.colors.types.ghost) +"</div>"+
			"						<div class=\"cell name\" filterName=\"psychic\">"+ html.checkBoxObject(lang.pokemon.types.psychic, R.colors.types.psychic) +"</div>"+
			"					</div>"+
			"					<div class=\"row\">"+
			"						<div class=\"cell name\" filterName=\"electric\">"+ html.checkBoxObject(lang.pokemon.types.electric, R.colors.types.electric) +"</div>"+
			"						<div class=\"cell name\" filterName=\"grass\">"+ html.checkBoxObject(lang.pokemon.types.grass, R.colors.types.grass) +"</div>"+
			"						<div class=\"cell name\" filterName=\"rock\">"+ html.checkBoxObject(lang.pokemon.types.rock, R.colors.types.rock) +"</div>"+
			"					</div>"+
			"					<div class=\"row\">"+
			"						<div class=\"cell name\" filterName=\"fairy\">"+ html.checkBoxObject(lang.pokemon.types.fairy, R.colors.types.fairy) +"</div>"+
			"						<div class=\"cell name\" filterName=\"ground\">"+ html.checkBoxObject(lang.pokemon.types.ground, R.colors.types.ground) +"</div>"+
			"						<div class=\"cell name\" filterName=\"steel\">"+ html.checkBoxObject(lang.pokemon.types.steel, R.colors.types.steel) +"</div>"+
			"						</div>"+
			"					<div class=\"row\">"+
			"						<div class=\"cell name\" filterName=\"fire\">"+ html.checkBoxObject(lang.pokemon.types.fire, R.colors.types.fire) +"</div>"+
			"						<div class=\"cell name\" filterName=\"ice\">"+ html.checkBoxObject(lang.pokemon.types.ice, R.colors.types.ice) +"</div>"+
			"						<div class=\"cell name\" filterName=\"water\">"+ html.checkBoxObject(lang.pokemon.types.water, R.colors.types.water) +"</div>"+
			"					</div>"+
			"				</div>"+
			"			</div>"+
			"			<div class=\"cell category\" filterCategory=\"category\">"+
			"				<h3>Category</h3>"+
			"				<div class=\"name\" filterName=\"physical\">"+ html.checkBoxObject("Physical") +"</div>"+
			"				<div class=\"name\" filterName=\"special\">"+ html.checkBoxObject("Special") +"</div>"+
			"				<div class=\"name\" filterName=\"status\">"+ html.checkBoxObject("Status") +"</div>"+
			"			</div>"+
			"			<div class=\"cell category\" filterCategory=\"status\">"+
			"				<h3>Status Effects</h3>"+
			"				<div class=\"name\" filterName=\"burn\">"+ html.checkBoxObject("Burn") +"</div>"+
			"				<div class=\"name\" filterName=\"freeze\">"+ html.checkBoxObject("Freeze") +"</div>"+
			"				<div class=\"name\" filterName=\"paralysis\">"+ html.checkBoxObject("Paralysis") +"</div>"+
			"				<div class=\"name\" filterName=\"poison\">"+ html.checkBoxObject("Poison") +"</div>"+
			"				<div class=\"name\" filterName=\"sleep\">"+ html.checkBoxObject("Sleep") +"</div>"+
			"			</div>"+
			"			<div class=\"cell category\" filterCategory=\"battle\">"+
			"				<h3>Battle Effects</h3>"+
			"				<div class=\"name\" filterName=\"confusion\">"+ html.checkBoxObject("Confusion") +"</div>"+
			"				<div class=\"name\" filterName=\"crit\">"+ html.checkBoxObject("Crit") +"</div>"+
			"				<div class=\"name\" filterName=\"flinch\">"+ html.checkBoxObject("Flinch") +"</div>"+
			"				<div class=\"name\" filterName=\"heal\">"+ html.checkBoxObject("Heal") +"</div>"+
			"				<div class=\"name\" filterName=\"priority\">"+ html.checkBoxObject("Priority") +"</div>"+
			"				<div class=\"name\" filterName=\"trap\">"+ html.checkBoxObject("Trap") +"</div>"+
			"			</div>"+
			"		</div>"+
			"		<div class=\"row\">"+
			"			<div class=\"cell\">"+
			"				<h3>Stat Changes</h3>"+
			"				<div class=\"cell category\" filterCategory=\"stat\">"+
			"					<div class=\"name\" filterName=\"attack\">"+ html.checkBoxObject("Attack") +"</div>"+
			"					<div class=\"name\" filterName=\"defense\">"+ html.checkBoxObject("Defense") +"</div>"+
			"					<div class=\"name\" filterName=\"spAttack\">"+ html.checkBoxObject("Sp. Attack") +"</div>"+
			"					<div class=\"name\" filterName=\"spDefense\">"+ html.checkBoxObject("Sp. Defense") +"</div>"+
			"					<div class=\"name\" filterName=\"speed\">"+ html.checkBoxObject("Speed") +"</div>"+
			"					<div class=\"name\" filterName=\"accuracy\">"+ html.checkBoxObject("Accuracy") +"</div>"+
			"					<div class=\"name\" filterName=\"evasion\">"+ html.checkBoxObject("Evasion") +"</div>"+
			"				</div>"+
			"				<div class=\"cell category\" filterCategory=\"statDir\">"+
			"					<div class=\"name\" filterName=\"statIncrease\">"+ html.checkBoxObject("+") +"</div>"+
			"					<div class=\"name\" filterName=\"statDecrease\">"+ html.checkBoxObject("-") +"</div>"+
			"				</div>"+
			"				<div class=\"cell category\" filterCategory=\"statChange\">"+
			"					<div class=\"name\" filterName=\"statOne\">"+ html.checkBoxObject("1") +"</div>"+
			"					<div class=\"name\" filterName=\"statTwo\">"+ html.checkBoxObject("2") +"</div>"+
			"					<div class=\"name\" filterName=\"statThree\">"+ html.checkBoxObject("3") +"</div>"+
			"					<div class=\"name\" filterName=\"statFour\">"+ html.checkBoxObject("4") +"</div>"+
			"					<div class=\"name\" filterName=\"statFive\">"+ html.checkBoxObject("5") +"</div>"+
			"					<div class=\"name\" filterName=\"statSix\">"+ html.checkBoxObject("6") +"</div>"+
			"				</div>"+
			"			</div>"+
			"			<div class=\"cell category\" filterCategory=\"learn\">"+
			"				<h3>Learned By</h3>"+
			"				<div class=\"name\" filterName=\"egg\">"+ html.checkBoxObject("Egg") +"</div>"+
			"				<div class=\"name\" filterName=\"hm\">"+ html.checkBoxObject("HM") +"</div>"+
			"				<div class=\"name\" filterName=\"level\">"+ html.checkBoxObject("Level") +"</div>"+
			"				<div class=\"name\" filterName=\"preEvolution\">"+ html.checkBoxObject("Pre-Evolution") +"</div>"+
			"				<div class=\"name\" filterName=\"tm\">"+ html.checkBoxObject("TM") +"</div>"+
			"				<div class=\"name\" filterName=\"transfer\">"+ html.checkBoxObject("Transfer") +"</div>"+
			"				<div class=\"name\" filterName=\"tutor\">"+ html.checkBoxObject("Tutor") +"</div>"+
			"			</div>"+
			"			<div class=\"cell\">"+
			"				<div class=\"category\" filterCategory=\"power\"><h3>Power</h3>"+html.minMaxTextBoxObject()+"</div>"+
			"				<div class=\"category\" filterCategory=\"accuracy\"><h3>Accuracy</h3>"+html.minMaxTextBoxObject()+"</div>"+
			"				<div class=\"category\" filterCategory=\"pp\"><h3>PP</h3>"+html.minMaxTextBoxObject()+"</div>"+
			"			</div>"+
			"			<div class=\"cell\">"+
			"				<button class=\"clearButton\" type=\"button\">Clear</button>"+
			"				<button class=\"removeButton\" type=\"button\">Remove</button>"+
			"			</div>"+
			"		</div>"+
			"	</div>";
		}
		var hasLoaded = function(parent){
			movesFilter = parent.querySelector(".movesFilter");
			addEventListeners();
		}
		addEventListeners = function(){
			var checkboxs = movesFilter.querySelectorAll(".checkbox");
			checkboxs.forEach(function(checkbox){
				$(checkbox).on("click", checkboxClick);
			});
			var buttons = movesFilter.querySelectorAll(".submitButton");
			buttons.forEach(function(button){
				$(button).on("click", submitClick);
			});
		}
		checkboxClick = function(e){
			var category = $(e.target).parents(".category")[0].getAttribute("filterCategory");
			var name = $(e.target).parents(".name")[0].getAttribute("filterName");
			if(e.target.checked){
				filterCategories[category].push(name);
			}else{
				filterCategories[category] = _.without(filterCategories[category], name);
			}
			filterMoves();
		}
		submitClick = function(e){
			var regex;
			var category = $(e.target).parents(".category")[0].getAttribute("filterCategory");
			if(category == "power"){
				regex = /^([0-9]|[1-9][0-9]|[1][0-9][0-9]|[2][0-4][0-9]|250)$/;
			}else if(category == "accuracy"){
				regex = /^([0-9]|[1-9][0-9]|100)$/;
			}else if(category == "pp"){
				regex = /^([0-9]|[1-3][0-9]|40)$/;
			}
			var parent = $(e.target).parent()[0];
			var minInput = parent.querySelector(".minInput");
			var maxInput = parent.querySelector(".maxInput");
			var minValue = utill.regex(minInput.value,regex);
			var maxValue = utill.regex(maxInput.value,regex);
			if(minValue || maxValue){
				if(minValue){
					minValue=parseInt(minInput.value);
				}else{
					minValue=0;
				}
				if(maxValue){
					maxValue=parseInt(maxInput.value);
				}else{
					maxValue=250;
				}
				filterCategories[category] = {min: minValue, max: maxValue};
			}else{
				filterCategories[category] = {};
			}
			filterMoves();
		}
		var filterMoves = function(){
			console.log(filterCategories.type);
			filteredList = movesList;
			filterByCategory("type");
			console.log(filteredList);
		}
		filterByCategory = function(category){
			var temp = [];
			filterCategories[category].forEach(function(filterItem){
				filteredList.forEach(function(move){
					console.log(dev.moves[move][category]+" : "+filterItem);
					if(dev.moves[move][category] === filterItem){
						temp.push(move);
					}
				});
			});
			if(temp.length>0){
				filteredList = temp;
			}
		}
		filterTypes = function(){
			var temp = [];
			filters.types.forEach(function(type){
				filteredList.forEach(function(move){
					if(dev.moves[move].type == category){
						temp.push(move);
					}
				});
			});
			if(temp.length>0){
				filteredList = temp;
			}
		}
		// filterCategories = function(){
		// 	var temp = []
		// 	filters.category.forEach(function(category){
		// 		filteredList.forEach(function(move){
		// 			if(dev.moves[move].category == category){
		// 				temp.push(move);
		// 			}
		// 		});
		// 	});
		// 	if(temp.length>0){
		// 		filteredList = temp;
		// 	}
		// }
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
							list.push(move);
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
				var list = [];
				movesLists[num].isFiltered = true;
				primaryPokemon.moves.all.forEach(function(move){
					var movePower = parseInt(dev.moves[move].power);
					if(movePower>=movesLists[num].power[0] && movePower<=movesLists[num].power[1]){
						list.push(move);
					}
				});
				return list;
			}
		}
		filterAccuracy = function(num){
			if(movesLists[num].accuracy.length == 0){
				return primaryPokemon.moves.all;
			}else{
				var list = [];
				movesLists[num].isFiltered = true;
				primaryPokemon.moves.all.forEach(function(move){
					var moveAcc = parseInt(dev.moves[move].accuracy);
					if(moveAcc>=movesLists[num].accuracy[0] && moveAcc<=movesLists[num].accuracy[1]){
						list.push(move);
					}
				});
				return list;
			}
		}
		filterPP = function(num){
			if(movesLists[num].pp.length == 0){
				return primaryPokemon.moves.all;
			}else{
				var list = [];
				movesLists[num].isFiltered = true;
				primaryPokemon.moves.all.forEach(function(move){
					var movePP = parseInt(dev.moves[move].pp);
					if(movePP>=movesLists[num].pp[0] && movePP<=movesLists[num].pp[1]){
						list.push(move);
					}
				});
				return list;
			}
		}
		filterTable = function(movesTable, num){
			movesLists[num].isFiltered = false;
			
			var typeFilterList = filterTypes(num);
			var categoryFilterList = filterCategories(num);
			var statusFilterList = filterStatus(num);
			var battleFilterList = filterBattle(num);
			var statFilterList = filterStat(num);
			var statDirFilterList = filterStatDir(num);
			var statNumFilterList = filterStatNum(num);
			var learnFilterList = filterLearn(num);
			var powerFilterList = filterPower(num);
			var accuracyFilterList = filterAccuracy(num);
			var ppFilterList = filterPP(num);

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

		return {
			html: html,
			hasLoaded : hasLoaded,
			filterMoves: filterMoves,
		}
	}
})(this);
(function(root){

	html.movesTable = function(){


		var html = function(type){
			return ""+
			"	<div class=\"movesTable\" type-insert=\"moves\">"+
			"		<div class=\"table\">"+header(type)+"</div>"+
			"	</div>";
		}
		var addMoves = function(moves){

		}
		header = function(type){
			return ""+
			"	<div class=\"row\" background=\""+type+"\">"+
			"		<div class=\"cell\" type=\"move\" border=\""+type+"\">Move</div>"+
			"		<div class=\"cell\" type=\"type\" border=\""+type+"\">Type</div>"+
			"		<div class=\"cell\" type=\"category\" border=\""+type+"\">Category</div>"+
			"		<div class=\"cell\" type=\"power\" border=\""+type+"\">Pwr</div>"+
			"		<div class=\"cell\" type=\"accuracy\" border=\""+type+"\">Acc</div>"+
			"		<div class=\"cell\" type=\"effect\" border=\""+type+"\">Effect</div>"+
			"		<div class=\"cell\" type=\"pp\" border=\""+type+"\">PP</div>"+
			"	</div>";
		}
		move = function(move, type){
			return ""+
			"	<div class=\"row\">"+
			"		<div class=\"cell\" type=\"move\" border=\""+type+"\">"+move.name+"</div>"+
			"		<div class=\"cell\" type=\"type\" border=\""+type+"\"><div class=\"text\" background=\""+move.type+"\">"+move.type+"</div></div>"+
			"		<div class=\"cell\" type=\"category\" border=\""+type+"\">"+move.category+"</div>"+
			"		<div class=\"cell\" type=\"power\" border=\""+type+"\">"+move.power+"</div>"+
			"		<div class=\"cell\" type=\"accuracy\" border=\""+type+"\">"+move.accuracy+"</div>"+
			"		<div class=\"cell\" type=\"effect\" border=\""+type+"\">"+move.effects+"</div>"+
			"		<div class=\"cell\" type=\"pp\" border=\""+type+"\">"+move.pp+"</div>"+
			"	</div>";
		}
		return {
			html: html,
			addMoves: addMoves,
		}
	}
})(this);
(function(root){
	html.pokemonStatsTable = function(input){
		var html = function(input){
			var min = utill.statFormula(input.level, input.stat, 0, 0, 0.9, input.isHp);
			var iv = utill.statFormula(input.level, input.stat, 31, 0, 1, input.isHp);
			var ivEv = utill.statFormula(input.level, input.stat, 31, 252, 1, input.isHp);
			var max = utill.statFormula(input.level, input.stat, 31, 252, 1.1, input.isHp);
			return ""+
				"<div class=\"pokemonStatsTable\">"+
					"<h2 class=\"tableTitle\">"+input.name+"</h2>"+
					"<div class=\"tableData\">"+
						"<div class=\"row\">"+
						"	<div class=\"cell col0\">Min</div>"+
						"	<div class=\"cell col1\">"+min+"</div>"+
						"</div>"+
						"<div class=\"row\">"+
						"	<div class=\"cell col0\">Max IV/Min EV</div>"+
						"	<div class=\"cell col1\">"+iv+"</div>"+
						"</div>"+
						"<div class=\"row\">"+
						"	<div class=\"cell col0\">Max IV/Max EV</div>"+
						"	<div class=\"cell col1\">"+ivEv+"</div>"+
						"</div>"+
						"<div class=\"row\">"+
						"	<div class=\"cell col0\">Max</div>"+
						"	<div class=\"cell col1\">"+max+"</div>"+
						"</div>"+
					"</div>"+
				"</div>";
		}
		return{
			html : html,
		}
	}
})(this);
(function(root){
	html.pokemonStatsBarGraph = function(){
		var STATMODIFIER = 3;
		var barGraph;

		var html = function(input){
			return ""+
			"	<div class=\"pokemonStatsBarGraph\">"+
			"		<h1 class=\"graphTitle\">Base Stats</h1>"+
			"		<div class=\"graphData\">"+
			"			<div class=\"row\">"+
			"				<div class=\"cell col0\">HP</div>"+
			"				<div id = \"baseHPStat\" class=\"cell col1\">"+input.HP+"</div>"+
			"				<div class=\"cell col2\">"+
			"					<div class=\"statBar hpBar\"></div>"+
			"					<div class=\"statBar barCover hpBarCover\"></div>"+
			"				</div>"+
			"			</div>"+
			"			<div class=\"row\">"+
			"				<div class=\"cell col0\">Attack</div>"+
			"				<div id = \"baseAttackStat\" class=\"cell col1\">"+input.ATTACK+"</div>"+
			"				<div class=\"cell col2\">"+
			"					<div class=\"statBar attackBar\"></div>"+
			"					<div class=\"statBar barCover attackBarCover\"></div>"+
			"				</div>"+
			"			</div>"+
			"			<div class=\"row\">"+
			"				<div class=\"cell col0\">Defense</div>"+
			"				<div id = \"baseDefenseStat\" class=\"cell col1\">"+input.DEFENSE+"</div>"+
			"				<div class=\"cell col2\">"+
			"					<div class=\"statBar defenseBar\"></div>"+
			"					<div class=\"statBar barCover defenseBarCover\"></div>"+
			"				</div>"+
			"			</div>"+
			"			<div class=\"row\">"+
			"				<div class=\"cell col0\">Sp. Attack</div>"+
			"				<div id = \"baseSpAttackStat\" class=\"cell col1\">"+input.SPATTACK+"</div>"+
			"				<div class=\"cell col2\">"+
			"					<div class=\"statBar spAttackBar\"></div>"+
			"					<div class=\"statBar barCover spAttackBarCover\"></div>"+
			"				</div>"+
			"			</div>"+
			"			<div class=\"row\">"+
			"				<div class=\"cell col0\">Sp. Defense</div>"+
			"				<div id = \"baseSpDefenseStat\" class=\"cell col1\">"+input.SPDEFENSE+"</div>"+
			"				<div class=\"cell col2\">"+
			"					<div class=\"statBar spDefenseBar\"></div>"+
			"					<div class=\"statBar barCover spDefenseBarCover\"></div>"+
			"				</div>"+
			"			</div>"+
			"			<div class=\"row\">"+
			"				<div class=\"cell col0\">Speed</div>"+
			"				<div id = \"baseSpeedStat\" class=\"cell col1\">"+input.SPEED+"</div>"+
			"				<div class=\"cell col2\">"+
			"					<div class=\"statBar speedBar\"></div>"+
			"					<div class=\"statBar barCover speedBarCover\"></div>"+
			"				</div>"+
			"			</div>"+
			"		</div>"+
			"	</div>";
		}
		var hasLoaded = function(parent){
			barGraph = parent.querySelector(".pokemonStatsBarGraph");
		}
		var setBarLength = function(stats){
			var hpCover = barGraph.querySelector(".hpBarCover");
			var attackCover = barGraph.querySelector(".attackBarCover");
			var defenseCover = barGraph.querySelector(".defenseBarCover");
			var spAttackCover = barGraph.querySelector(".spAttackBarCover");
			var spDefenseCover = barGraph.querySelector(".spDefenseBarCover");
			var speedCover = barGraph.querySelector(".speedBarCover");

			hpCover.style.width = (R.maxStats.HP-stats.HP)*R.STATMODIFIER+"px";
			attackCover.style.width = (R.maxStats.ATTACK-stats.ATTACK)*R.STATMODIFIER+"px";
			defenseCover.style.width = (R.maxStats.DEFENSE-stats.DEFENSE)*R.STATMODIFIER+"px";
			spAttackCover.style.width = (R.maxStats.SPATTACK-stats.SPATTACK)*R.STATMODIFIER+"px";
			spDefenseCover.style.width = (R.maxStats.SPDEFENSE-stats.SPDEFENSE)*R.STATMODIFIER+"px";
			speedCover.style.width = (R.maxStats.SPEED-stats.SPEED)*R.STATMODIFIER+"px";

			hpCover.style.marginLeft = -1*(R.maxStats.HP-stats.HP)*R.STATMODIFIER+"px";
			attackCover.style.marginLeft = -1*(R.maxStats.ATTACK-stats.ATTACK)*R.STATMODIFIER+"px";
			defenseCover.style.marginLeft = -1*(R.maxStats.DEFENSE-stats.DEFENSE)*R.STATMODIFIER+"px";
			spAttackCover.style.marginLeft = -1*(R.maxStats.SPATTACK-stats.SPATTACK)*R.STATMODIFIER+"px";
			spDefenseCover.style.marginLeft = -1*(R.maxStats.SPDEFENSE-stats.SPDEFENSE)*R.STATMODIFIER+"px";
			speedCover.style.marginLeft = -1*(R.maxStats.SPEED-stats.SPEED)*R.STATMODIFIER+"px";
		}
		return{
			html : html,
			hasLoaded : hasLoaded,
			setBarLength : setBarLength,
		}
		
	}


})(this);
(function(root){
	html.minMaxTextBox = function(){
		return""+
		"<div class=\"minMaxTextBox\">"+
		"	<div class=\"minText\">Min</div>"+
		"	<input class=\"minInput\" type=\"text\">"+
		"	<div class=\"maxText\">Max</div>"+
		"	<input class=\"maxInput\" type=\"text\">"+
		"	<button class=\"submitButton\" type=\"button\">Submit</button>"+
		"</div>";
	}
})(this);
(function(root){
	lang.getUserLanguage();
	pages.loadPage(pages.pageIds.POKEMONPROFILE);
})(this);