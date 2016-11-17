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

	var pokedexElement = page.querySelector("#pokedex");
	var statsElement = page.querySelector("#stats");
	var movesElement = page.querySelector("#moves");

	var statsPageWrapperElement = page.querySelector("#statsPageWrapper");
	var verticalScrollbarElement = statsPageWrapperElement.querySelector("#vert");
	var horizontalScrollbarElement = statsPageWrapperElement.querySelector("#horz");
	var statsPageElement = page.querySelector("#statsPage");
	var moreButtonElement;

	var pokemonImageWrapperElement = page.querySelector("#pokemonImageWrapper");
	var pokemonImageElement = page.querySelector("#pokemonImage");

	var basicInfoElement = page.querySelector("#basicInfo");
	var nameElement = basicInfoElement.querySelector("#name");
	var altNameElement = basicInfoElement.querySelector("#altName");
	var nationalNumElement = basicInfoElement.querySelector("#nationalNum");
	var speciesElement = basicInfoElement.querySelector("#species");
	var heightElement = basicInfoElement.querySelector("#height");
	var weightElement = basicInfoElement.querySelector("#weight");
	var eggGroupElement = basicInfoElement.querySelector("#eggGroup");
	var genderElement = basicInfoElement.querySelector("#gender");
	var eggCycleElement = basicInfoElement.querySelector("#eggCycle");
	var evYieldsElement = basicInfoElement.querySelector("#evYields");
	var catchRateElement = basicInfoElement.querySelector("#catchRate");
	var happinessElement = basicInfoElement.querySelector("#happiness");
	var expElement = basicInfoElement.querySelector("#exp");
	var growthRateElement = basicInfoElement.querySelector("#growthRate");
	var typesElement = basicInfoElement.querySelector("#types");
	var abilitiesElement = basicInfoElement.querySelector("#abilities");
	var hiddenAbilityElement = basicInfoElement.querySelector("#hiddenAbility");
	//***************************FINAL***************************//
	const FILENAME = "pokemonProfile";
	const LEVEL100 = "<h1 id=\"level100\">Level 100</h1>";
	const LEVEL50 = "<h1 id=\"level50\">Level 50</h1>";
	const TABLEROW0 = "<div id=\"row0\" class=\"tableRow\"></div>";
	const TABLEROW1 = "<div id=\"row1\" class=\"tableRow\"></div>";
	const TABLEROW2 = "<div id=\"row2\" class=\"tableRow\"></div>";
	const TABLEROW3 = "<div id=\"row3\" class=\"tableRow\"></div>";
	const MOVESSET = function(index){return "<div class=\"movesSet\" index=\""+index+"\"></div>"};
	const MORE = "<button id=\"more\"type=\"button\">+</button>"
	const STATPAGETABS = {pokedex: pokedexElement, stats: statsElement, moves: movesElement};
	const MOVESFILTERSLIMIT = 3;
	//***************************SUBJECTS***************************//
	//***************************LOCAL***************************//
	var primaryPokemon;
	var primaryTypes;
	var primaryAbilities;

	var currImageIndex;
	var filters;
	var moveslists;
	var disp;

	var verticalScrollBarHelper;
	var horizontalScrollBarHelper;

	//***************************PAGE***************************//
	page.onBeforeShow = function(){
		initVariables();
		initPage();
		initUI();
		initEventListeners();
	};
	page.onShow = function(){
		verticalScrollBarHelper = utill.scrollBar(verticalScrollbarElement, "virtical", "#rgba(0, 0, 0, 0)", primaryTypes.primaryType.colors.main);
		horizontalScrollBarHelper = utill.scrollBar(horizontalScrollbarElement, "horizontal", "#rgba(0, 0, 0, 0)", primaryTypes.primaryType.colors.main);
		verticalScrollBarHelper.startScroller();
		horizontalScrollBarHelper.startScroller();
	};
	page.onBeforeHide = function(){
		destroyEventListeners();
		destroyDisposables();
		verticalScrollBarHelper.destroy();
		horizontalScrollBarHelper.destroy();
	};
	page.onHide = function(){

	};

	//***************************INITIALIZE***************************//
	function initPage(){
		utill.printFunctionName(FILENAME, arguments.callee.name);
	}
	function initEventListeners(){
		utill.printFunctionName(FILENAME, arguments.callee.name);
		$(pokedexElement).on("click", pokedexClick);
		$(statsElement).on("click", statsClick);
		$(movesElement).on("click", movesClick);
		$(pokemonImageElement).on("click", pokemonImageClick);
	}
	function initUI(){
		utill.printFunctionName(FILENAME, arguments.callee.name);
		setImage(pokemonImageElement, primaryPokemon.img.url, 0);
		setBasicInfo(primaryPokemon);
		setColorTheme(primaryTypes);
		pokedexClick();
		//statsClick();
	}
	function initVariables(){
		utill.printFunctionName(FILENAME, arguments.callee.name);
		getPokemonData();
		currImageIndex = 0;
		filters = [];
		moveslists = [];
		disp = {};
	}
	//***************************DESTROY***************************//
	function destroyEventListeners(){
		utill.printFunctionName(FILENAME, arguments.callee.name);
		$(pokedexElement).off("click", pokedexClick);
		$(statsElement).off("click", statsClick);
		$(movesElement).off("click", movesClick);
		$(pokemonImageElement).on("click", nextImage);
	}
	function destroyDisposables(){
		utill.printFunctionName(FILENAME, arguments.callee.name);
		for(var key in disp){
			if(disp.hasOwnProperty(key)){
				disp[key].dispose();
				disp[key] = null;
				delete disp[key];
			}
		}
	}
	//***************************GETTERS***************************//
	function getPokemonData(){
		utill.printFunctionName(FILENAME, arguments.callee.name);
		primaryPokemon = R.pokemon.ninetales;
		primaryTypes = {
			primaryType: R.types[primaryPokemon.battle.types.primaryType],
			secondaryType: R.types[primaryPokemon.battle.types.secondaryType], 
		};
		primaryAbilities = {
			firstAbility: R.abilities[primaryPokemon.battle.abilities.firstAbility],
			secondAbility: R.abilities[primaryPokemon.battle.abilities.secondAbility],
			hiddenAbility: R.abilities[primaryPokemon.battle.abilities.hiddenAbility],
		};
	}
	//***************************SETTERS***************************//
	function setBasicInfo(pokemon){
		utill.printFunctionName(FILENAME, arguments.callee.name);
		nameElement.innerHTML = pokemon.name.en;
		altNameElement.innerHTML = pokemon.name.jap;
		nationalNumElement.innerHTML = lang.pokemonProfile[lang.userLanguage].nationalNum + pokemon.basic.nationalNum;
		speciesElement.innerHTML =  lang.pokemonProfile[lang.userLanguage].species + pokemon.basic.species;
		heightElement.innerHTML = lang.pokemonProfile[lang.userLanguage].height + pokemon.basic.height;
		weightElement.innerHTML = lang.pokemonProfile[lang.userLanguage].weight + pokemon.basic.weight;

		eggGroupElement.innerHTML =  lang.pokemonProfile[lang.userLanguage].eggGroup + pokemon.breeding.eggGroup;
		eggCycleElement.innerHTML = lang.pokemonProfile[lang.userLanguage].eggCycle + pokemon.breeding.eggCycle;
		genderElement.innerHTML = lang.pokemonProfile[lang.userLanguage].gender+
							pokemon.breeding.genders.male+lang.pokemonProfile[lang.userLanguage].male+" | "+
							pokemon.breeding.genders.female+lang.pokemonProfile[lang.userLanguage].female;

		evYieldsElement.innerHTML =  lang.pokemonProfile[lang.userLanguage].ev + evsToString(pokemon.training.evs);
		catchRateElement.innerHTML = lang.pokemonProfile[lang.userLanguage].catchRate + pokemon.training.catchRate;
		happinessElement.innerHTML = lang.pokemonProfile[lang.userLanguage].happiness + pokemon.training.happiness;
		expElement.innerHTML =  lang.pokemonProfile[lang.userLanguage].exp + pokemon.training.exp;
		growthRateElement.innerHTML = lang.pokemonProfile[lang.userLanguage].growthRate + pokemon.training.growthRate;
		typesElement.innerHTML =  lang.pokemonProfile[lang.userLanguage].types + typesToString(primaryTypes);
		abilitiesElement.innerHTML = lang.pokemonProfile[lang.userLanguage].abilities + abilitiesToString(primaryAbilities);
		hiddenAbilityElement.innerHTML = lang.pokemonProfile[lang.userLanguage].hiddenAbility + hiddenAbilityToString(primaryAbilities);
	}
	function setBorderWidth(current){
		utill.printFunctionName(FILENAME, arguments.callee.name);
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
		utill.printFunctionName(FILENAME, arguments.callee.name);
		pokemonImageWrapperElement.style.background = types.primaryType.colors.main;
		basicInfoElement.style.background = types.primaryType.colors.main;
		pokedexElement.style.background = types.primaryType.colors.main;
		statsElement.style.background = types.primaryType.colors.main;
		movesElement.style.background = types.primaryType.colors.main;

		pokemonImageWrapperElement.style.borderColor = types.primaryType.colors.border;
		basicInfoElement.style.borderColor = types.primaryType.colors.border;
		pokedexElement.style.borderColor = types.primaryType.colors.border;
		statsElement.style.borderColor = types.primaryType.colors.border;
		movesElement.style.borderColor = types.primaryType.colors.border;
		statsPageWrapperElement.style.borderColor = types.primaryType.colors.border;

		if(!!types.secondaryType){
			pokemonImageWrapperElement.style.background = "linear-gradient("+types.primaryType.colors.main+","+types.secondaryType.colors.main+")";
			basicInfoElement.style.background = "linear-gradient("+types.primaryType.colors.main+","+types.secondaryType.colors.main+")";
		}
	}
	function setImage(img, url, index){
		utill.printFunctionName(FILENAME, arguments.callee.name);
		img.setAttribute("src", url[index]);
		currImageIndex = index;
	}
	function setMoreButtonVisibility(){
		utill.printFunctionName(FILENAME, arguments.callee.name);
		if(filters.length<MOVESFILTERSLIMIT){
			moreButtonElement.style.display = "";
		}else{
			moreButtonElement.style.display = "none";
		}
	}
	//***************************ADD***************************//
	function addBarGraph(){
		utill.printFunctionName(FILENAME, arguments.callee.name);
		var input = primaryPokemon.base;
		var statsBarGraph = html.load(statsPage, "pokemonStatsBarGraph", input);
	}
	function addMoreButton(){
		utill.printFunctionName(FILENAME, arguments.callee.name);
		$(statsPageElement).append(MORE);
		moreButtonElement = page.querySelector("#more");
		setMoreButtonVisibility();
		var callback = function(){
			addMoves(filters.length);
			setMoreButtonVisibility();
		}
		$(moreButtonElement).on("click", callback);
	}
	function addMoves(index, filterList){
		utill.printFunctionName(FILENAME, arguments.callee.name);
		if(index == 0){
			$(statsPageElement).append(MOVESSET(index));
		}else{
			var preElement = statsPageElement.querySelector("#statsPage [index=\""+(index-1)+"\"]");
			$(preElement).after(MOVESSET(index));
		}
		var movesSetElement = statsPageElement.querySelector("#statsPage [index=\""+index+"\"]");
		movesSetElement.style.borderColor = primaryTypes.primaryType.colors.main;
		var filter  = html.load(movesSetElement, "movesFilterTable", {moves: primaryPokemon.moves.all, pokemonMoves: primaryPokemon.moves});
		if(!!filterList){
			filter.setFilters(filterList.getFilters());
		}
		filters[index] = filter;
		moveslists[index] = html.load(movesSetElement, "movesListTable", {type: primaryPokemon.battle.types.primaryType, filter: filters[index]});
		removeSubscribe(filter, index);
		if(filters.length == 1){
			filters[0].setRemoveVisablity(false);
		}else{
			filters[0].setRemoveVisablity(true);
		}
	}
	function addPokedexEntries(){
		utill.printFunctionName(FILENAME, arguments.callee.name);
		var keys = _.keys(primaryPokemon.pokedex);
		keys.forEach(function(key){
			var input = [lang.site.games[lang.userLanguage][key], primaryPokemon.pokedex[key]];
			html.load(statsPage, "pokedexEntry", input);
		});
	}
	function addTables(){
		utill.printFunctionName(FILENAME, arguments.callee.name);
		$(statsPageElement).append(LEVEL100);
		$(statsPageElement).append(TABLEROW0);
		$(statsPageElement).append(TABLEROW1);
		$(statsPageElement).append(LEVEL50);
		$(statsPageElement).append(TABLEROW2);
		$(statsPageElement).append(TABLEROW3);

		var row0Element = statsPage.querySelector("#row0");
		var row1Element = statsPage.querySelector("#row1");
		var row2Element = statsPage.querySelector("#row2");
		var row3Element = statsPage.querySelector("#row3");

		var setInput = function(name, stat, level, isHp){
			return {
				name: name,
				level: level,
				stat: stat,
				isHp: isHp,
			};
		}
		html.load(row0Element, "pokemonStatsTable", setInput(lang.pokemon.stats[lang.userLanguage].hp, primaryPokemon.base.hp, 100, true));
		html.load(row0Element, "pokemonStatsTable", setInput(lang.pokemon.stats[lang.userLanguage].defense, primaryPokemon.base.defense, 100, false));
		html.load(row0Element, "pokemonStatsTable", setInput(lang.pokemon.stats[lang.userLanguage].spDefense, primaryPokemon.base.spDefense, 100, false));
		html.load(row1Element, "pokemonStatsTable", setInput(lang.pokemon.stats[lang.userLanguage].speed, primaryPokemon.base.speed, 100, false));
		html.load(row1Element, "pokemonStatsTable", setInput(lang.pokemon.stats[lang.userLanguage].attack, primaryPokemon.base.attack, 100, false));
		html.load(row1Element, "pokemonStatsTable", setInput(lang.pokemon.stats[lang.userLanguage].spAttack, primaryPokemon.base.spAttack, 100, false));
		html.load(row2Element, "pokemonStatsTable", setInput(lang.pokemon.stats[lang.userLanguage].hp, primaryPokemon.base.hp, 50, true));
		html.load(row2Element, "pokemonStatsTable", setInput(lang.pokemon.stats[lang.userLanguage].defense, primaryPokemon.base.defense, 50, false));
		html.load(row2Element, "pokemonStatsTable", setInput(lang.pokemon.stats[lang.userLanguage].spDefense, primaryPokemon.base.spDefense, 50, false));
		html.load(row3Element, "pokemonStatsTable", setInput(lang.pokemon.stats[lang.userLanguage].speed, primaryPokemon.base.speed, 50, false));
		html.load(row3Element, "pokemonStatsTable", setInput(lang.pokemon.stats[lang.userLanguage].attack, primaryPokemon.base.attack, 50, false));
		html.load(row3Element, "pokemonStatsTable", setInput(lang.pokemon.stats[lang.userLanguage].spAttack, primaryPokemon.base.spAttack, 50, false));
	}
	//***************************REMOVE***************************//
	function removeMoreButton(){
		utill.printFunctionName(FILENAME, arguments.callee.name);
		if(!!moreButtonElement){
			$(moreButtonElement).off();
			$(moreButtonElement).remove();
			moreButtonElement = null;
		};
	}
	//***************************SUBSCRIBE EVENTS***************************//
	function removeSubscribe(filter, index){
		utill.printFunctionName(FILENAME, arguments.callee.name);
		disp["remove"+index] = filter.removeSubject
		.subscribe(function(removeIndex){
			var movesSetElement = statsPageElement.querySelector("#statsPage [index=\""+removeIndex+"\"]");
			$(movesSetElement).remove();
			filters[removeIndex].destroy();
			moveslists[removeIndex].destroy();
			filters.splice(removeIndex, 1);
			moveslists.splice(removeIndex, 1);
			var movesSetElements = statsPageElement.querySelectorAll(".movesSet");
			movesSetElements.forEach(function(element){
				var oldIndex = element.getAttribute("index");
				if(oldIndex>removeIndex){
					var newIndex = oldIndex-1;
					element.setAttribute("index", newIndex);
				}
			});
			setMoreButtonVisibility();
			if(filters.length == 1){
				filters[0].setRemoveVisablity(false);
			}
		});
	}
	//***************************CLICK EVENTS***************************//
	function movesClick(){
		utill.printFunctionName(FILENAME, arguments.callee.name);
		tabClick("move");
		if(filters.length>0){
			filters.forEach(function(filterList, index){
				addMoves(index, filterList);		
			});
		}else{
			addMoves(0);
		}
		addMoreButton();
		!!verticalScrollBarHelper && verticalScrollBarHelper.resize();
		!!horizontalScrollBarHelper && horizontalScrollBarHelper.resize();
	}
	function pokedexClick(){
		utill.printFunctionName(FILENAME, arguments.callee.name);
		tabClick("pokedex");
		addPokedexEntries();
		!!verticalScrollBarHelper && verticalScrollBarHelper.resize();
		!!horizontalScrollBarHelper && horizontalScrollBarHelper.resize();
	}
	function pokemonImageClick(){
		utill.printFunctionName(FILENAME, arguments.callee.name);
		var index = 0
		if(currImageIndex<primaryPokemon.img.url.length-1){
			index = currImageIndex+1;	
		}
		setImage(pokemonImageElement, primaryPokemon.img.url, index);
	}
	function statsClick(){
		utill.printFunctionName(FILENAME, arguments.callee.name);
		tabClick("stats");
		addBarGraph();
		addTables();
		!!verticalScrollBarHelper && verticalScrollBarHelper.resize();
		!!horizontalScrollBarHelper && horizontalScrollBarHelper.resize();
	}
	function tabClick(tab){
		utill.printFunctionName(FILENAME, arguments.callee.name);
		setBorderWidth(tab);
		$(statsPageElement).empty();
		filters.forEach(function(filter){
			filter.destroy();
		});
		moveslists.forEach(function(moveslist){
			moveslist.destroy();
		})
		removeMoreButton();
	}
	//***************************OTHER EVENTS***************************//
	//***************************TO STRING***************************//
	function abilitiesToString(abilities){
		utill.printFunctionName(FILENAME, arguments.callee.name);
		tempAbilities = abilities.firstAbility.name;
		if(!!abilities.secondAbility){
			tempAbilities = tempAbilities + " | " + abilities.secondAbility.name;
		}
		return tempAbilities;
	}
	function evsToString(evs){
		utill.printFunctionName(FILENAME, arguments.callee.name);
		var tempEv="";
		var keys = _.keys(evs);
		keys.forEach(function(key, index){
			if(!!evs[key]){
				if(tempEv != ""){
					tempEv = tempEv + " | ";
				}
				tempEv = tempEv+evs[key]+" "+lang.pokemon.stats[lang.userLanguage][key];
			}
		});
		return tempEv;
	}
	function hiddenAbilityToString(abilities){
		utill.printFunctionName(FILENAME, arguments.callee.name);
		tempHidden = "";
		if(!!abilities.hiddenAbility){
			tempHidden = abilities.hiddenAbility.name;
		}
		return tempHidden;
	}
	function typesToString(types){
		utill.printFunctionName(FILENAME, arguments.callee.name);
		tempTypes = types.primaryType.name;
		if(!!types.secondaryType){
			tempTypes = tempTypes + " | " + types.secondaryType.name;
		}
		return tempTypes;
	}
	//***************************MISC***************************//
})(this);