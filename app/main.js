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
			type : "fire",
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
			type : "psychic",
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
			type : "fire",
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
			type : "ghost",
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
			type : "psychic",
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
			type : "dark",
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
			type : "normal",
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
			type : "normal",
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
	dev.abilities = {
		flashFire : {
			name : "Flash Fire",
		},
		drought : {
			name : "Drought",
		},
	}
	dev.types = {
		bug: {
			name : "Bug",
			colors :{
				main : "#A8B820",
				border : "#A88820",
			},
		},
		dark: {
			name : "Dark",
			colors :{
				main : "#705848",
				border : "#702848",
			},
		},
		dragon: {
			name : "Dragon",
			colors :{
				main : "#7038F8",
				border : "#7008F8",
			},
		},
		electric: {
			name : "Electric",
			colors :{
				main : "#F8D030",
				border : "#F8A030",
			},
		},
		fairy: {
			name : "Fairy",
			colors :{
				main : "#EE99AC",
				border : "#EE69AC",
			},
		},
		fire: {
			name : "Fire",
			colors :{
				main : "#F08030",
				border : "#F05030",
			},
		},
		fighting: {
			name : "Fighting",
			colors :{
				main : "#C03028",
				border : "#C00028",
			},
		},
		flying: {
			name : "Flying",
			colors :{
				main : "#A890F0",
				border : "#A860F0",
			},
		},
		ghost: {
			name : "Ghost",
			colors :{
				main : "#705898",
				border : "#702898",
			},
		},
		grass: {
			name : "Grass",
			colors :{
				main : "#78C850",
				border : "#789850",
			},
		},
		ground: {
			name : "Ground",
			colors :{
				main : "#E0C068",
				border : "#E09068",
			},
		},
		ice: {
			name : "Ice",
			colors :{
				main : "#98D8D8",
				border : "#98A8D8",
			},
		},
		normal: {
			name : "Normal",
			colors :{
				main : "#A8A878",
				border : "#A87878",
			},
		},
		poison: {
			name : "Poison",
			colors :{
				main : "#A040A0",
				border : "#A010A0",
			},
		},
		psychic: {
			name : "Psychic",
			colors :{
				main : "#F85888",
				border : "#F82888",
			},
		},
		rock: {
			name : "Rock",
			colors :{
				main : "#B8A038",
				border : "#B87038",
			},
		},
		steel: {
			name : "Steel",
			colors :{
				main : "#B8B8D0",
				border : "#B888D0",
			},
		},
		water: {
			name : "Water",
			colors :{
				main : "#6890F0",
				border : "#6860F0",
			},
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
		hp : 255,
		attack : 190,
		defense : 230,
		spAttack : 194,
		spDefense : 230,
		speed : 180,
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

	var pokedexElement = page.querySelector("#pokedex");
	var statsElement = page.querySelector("#stats");
	var movesElement = page.querySelector("#moves");

	var statsPageWrapperElement = page.querySelector("#statsPageWrapper");
	var statsPageElement = page.querySelector("#statsPage");

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
	const LEVEL100 = "<h1 id=\"level100\">Level 100</h1>";
	const LEVEL50 = "<h1 id=\"level50\">Level 50</h1>";
	const TABLEROW0 = "<div id=\"row0\" class=\"tableRow\"></div>";
	const TABLEROW1 = "<div id=\"row1\" class=\"tableRow\"></div>";
	const TABLEROW2 = "<div id=\"row2\" class=\"tableRow\"></div>";
	const TABLEROW3 = "<div id=\"row3\" class=\"tableRow\"></div>";
	const MOVESSET = function(index){return "<div class=\"movesSet\" index=\""+index+"\"></div>"};
	const STATPAGETABS = {pokedex: pokedexElement, stats: statsElement, moves: movesElement};
	//***************************LOCAL***************************//
	var primaryPokemon;
	var primaryTypes;
	var primaryAbilities;

	var currImageIndex;
	var movesTableNum;
	var movesTableList;

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
		$(pokedexElement).on("click", pokedexClick);
		$(statsElement).on("click", statsClick);
		$(movesElement).on("click", movesClick);
		$(pokemonImageElement).on("click", pokemonImageClick);
	}
	function initUI(){
		setImage(pokemonImageElement, primaryPokemon.img.url, 0);
		setBasicInfo(primaryPokemon);
		setColorTheme(primaryTypes);
		pokedexClick();
	}
	function initVariables(){
		getPokemonData();
		currImageIndex = 0;
		movesTableNum = 0;
		movesTableList = [];
	}
	//***************************DESTROY***************************//
	function destroyEventListeners(){
		$(pokedexElement).off("click", pokedexClick);
		$(statsElement).off("click", statsClick);
		$(movesElement).off("click", movesClick);
		$(pokemonImageElement).on("click", nextImage);
	}
	//***************************GETTERS***************************//
	function getPokemonData(){
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
		img.setAttribute("src", url[index]);
		currImageIndex = index;
	}
	//***************************ADD***************************//
	function addBarGraph(){
		var input = primaryPokemon.base;
		var statsBarGraph = html.load(statsPage, "pokemonStatsBarGraph", input);
	}
	function addMoves(index){
		$(statsPageElement).append(MOVESSET(index))
		var movesSetElement = statsPageElement.querySelector("#statsPage [index=\""+index+"\"]");
		movesSetElement.style.borderColor = primaryTypes.primaryType.colors.main;
		var movesList = {};
		movesList.filter = html.load(movesSetElement, "movesFilterTable", primaryPokemon.moves.all);
		movesList.list = html.load(movesSetElement, "movesListTable", primaryPokemon.battle.types.primaryType);
		movesTableList[0] = movesList;
		var filteredMoves = movesTableList[0].filter.filterMoves();
		movesTableList[0].list.addMoves(filteredMoves);
	}
	function addPokedexEntries(){
		var keys = _.keys(primaryPokemon.pokedex);
		keys.forEach(function(key){
			var input = [lang.site.games[lang.userLanguage][key], primaryPokemon.pokedex[key]];
			html.load(statsPage, "pokedexEntry", input);
		});
	}
	function addTables(){
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
	//***************************EVENTS***************************//
	function movesClick(){
		setBorderWidth("moves");
		$(statsPageElement).empty();
		addMoves(movesTableNum);
	}
	function pokedexClick(){
		setBorderWidth("pokedex");
		$(statsPageElement).empty();
		addPokedexEntries();
	}
	function pokemonImageClick(){
		var index = 0
		if(currImageIndex<primaryPokemon.img.url.length-1){
			index = currImageIndex+1;	
		}
		setImage(pokemonImageElement, primaryPokemon.img.url, index);
	}
	function statsClick(){
		setBorderWidth("stats");
		$(statsPageElement).empty();
		addBarGraph();
		addTables();
	}
	//***************************TO STRING***************************//
	function abilitiesToString(abilities){
		tempAbilities = abilities.firstAbility.name;
		if(!!abilities.secondAbility){
			tempAbilities = tempAbilities + " | " + abilities.secondAbility.name;
		}
		return tempAbilities;
	}
	function evsToString(evs){
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
		tempHidden = "";
		if(!!abilities.hiddenAbility){
			tempHidden = abilities.hiddenAbility.name;
		}
		return tempHidden;
	}
	function typesToString(types){
		tempTypes = types.primaryType.name;
		if(!!types.secondaryType){
			tempTypes = tempTypes + " | " + types.secondaryType.name;
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
	lang.items = {};
	lang.moves = {};
	lang.pokemon = {};
	lang.site = {};

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
		nationalNum: "National Num: ",
		species: "Species: ",
		height: "Height: ",
		weight: "Weight: ",
		eggGroup: "Egg Groups: ",
		eggCycle: "Egg Cycle: ",
		gender: "Gender: ",
		ev: "EV Yeilds: ",
		catchRate: "Catch Rate: ",
		happiness: "Happiness: ",
		exp: "EXP: ",
		growthRate: "Growth Rate: ",
		types: "Types: ",
		abilities: "Abilities: ",
		hiddenAbility: "Hidden Ability: ",
		male: "% Male",
		female: "% Female",
	}
})(this);

(function(root){
	lang.pokemon.stats = {}
	lang.pokemon.stats.en = {
		hp: "HP",
		attack: "Attack",
		defense: "Defense",
		spAttack: "Sp. Attack",
		spAttackFull: "Special Attack",
		spDefense: "Sp. Defense",
		spDefenseFull: "Special Defense",
		speed: "Speed",
		evasion: "Evasion",
		accuracy: "Accuracy",
	}
})(this);
(function(root){
	lang.site.games = {};
	lang.site.games.en = {
		red : "Red",
		blue : "Blue",
		yellow : "Yellow",
		gold : "Gold",
		silver : "Silver",
		crystal : "Crystal",
		ruby : "Ruby",
		sapphire : "Sapphire",
		fireRed : "Fire Red",
		leafGreen : "Leaf Greed",
		emerald : "Emerald",
		dimond : "Dimond",
		pearl : "Pearl",
		platinum : "Platinum",
		heartGold : "Heart Gold",
		soulSilver : "Soul Silver",
		black : "Black",
		white : "White",
		black2 : "Black 2",
		white2 : "White 2",
		x : "X",
		y : "Y",
		omegaRuby : "Omega Ruby",
		alphaSapphire : "Alpha Sapphire",
		sun : "Sun",
		moon : "Moon",
	}
})(this);
(function(root){
	var html = {};

	html.load = function(parent, type, input){
		var UI = html[type]();
		$(parent).append(UI.HTML(input));
		!!UI.hasLoaded && UI.hasLoaded(parent);
		return UI;
	};

	root.html = html;
})(this);
(function(root){
	html.siteHeader = function(){
		var HTML = function(){
			return ""+
				"	<div class=\"header\">"+
				"		<p>Paul</p>"+
				"	</div>"+
				"	<ul class=\"mainBarMenu webBackground fireBorder\">"+
				"		<li><a href=\"#\">Home</a></li>"+
				"		<li><a id=\"p38\" href=\"#\">Ninetails</a></li>"+
				"		<li><a id=\"p282\" href=\"#\">Gardevoir</a></li>"+
				"	</ul>";
		}
		return{
			HTML: HTML,
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
		var HTML = function(input){
			return "<p class=\"pokedexEntry\"><b>"+input[0]+"</b>: "+input[1]+"</p>";
		}
		return{
			HTML : HTML,
		}
	}
})(this);

(function(root){
	html.movesFilterTable = function(){
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
		var HTML = function(moves){
			movesList = moves;
			return ""+
			"	<div class=\"movesFilterTable\">"+
			"		<div class=\"row\">"+
			"			<div class=\"cell category\" filterCategory=\"type\">"+
			"				<h3>Types</h3>"+
			"				<div class=\"table\">"+
			"					<div class=\"row\">"+
			"						<div class=\"cell name\" filterName=\"bug\">"+ html.checkBox(R.types.bug.name, R.types.bug.colors.main) +"</div>"+
			"						<div class=\"cell name\" filterName=\"fighting\">"+ html.checkBox(R.types.fighting.name, R.types.fighting.colors.main) +"</div>"+
			"						<div class=\"cell name\" filterName=\"normal\">"+ html.checkBox(R.types.normal.name, R.types.normal.colors.main) +"</div>"+
			"					</div>"+
			"					<div class=\"row\">"+
			"						<div class=\"cell name\" filterName=\"dark\">"+ html.checkBox(R.types.dark.name, R.types.dark.colors.main) +"</div>"+
			"						<div class=\"cell name\" filterName=\"flying\">"+ html.checkBox(R.types.flying.name, R.types.flying.colors.main) +"</div>"+
			"						<div class=\"cell name\" filterName=\"poison\">"+ html.checkBox(R.types.poison.name, R.types.poison.colors.main) +"</div>"+
			"					</div>"+
			"					<div class=\"row\">"+
			"						<div class=\"cell name\" filterName=\"dragon\">"+ html.checkBox(R.types.dragon.name, R.types.dragon.colors.main) +"</div>"+
			"						<div class=\"cell name\" filterName=\"ghost\">"+ html.checkBox(R.types.ghost.name, R.types.ghost.colors.main) +"</div>"+
			"						<div class=\"cell name\" filterName=\"psychic\">"+ html.checkBox(R.types.psychic.name, R.types.psychic.colors.main) +"</div>"+
			"					</div>"+
			"					<div class=\"row\">"+
			"						<div class=\"cell name\" filterName=\"electric\">"+ html.checkBox(R.types.electric.name, R.types.electric.colors.main) +"</div>"+
			"						<div class=\"cell name\" filterName=\"grass\">"+ html.checkBox(R.types.grass.name, R.types.grass.colors.main) +"</div>"+
			"						<div class=\"cell name\" filterName=\"rock\">"+ html.checkBox(R.types.rock.name, R.types.rock.colors.main) +"</div>"+
			"					</div>"+
			"					<div class=\"row\">"+
			"						<div class=\"cell name\" filterName=\"fairy\">"+ html.checkBox(R.types.fairy.name, R.types.fairy.colors.main) +"</div>"+
			"						<div class=\"cell name\" filterName=\"ground\">"+ html.checkBox(R.types.ground.name, R.types.ground.colors.main) +"</div>"+
			"						<div class=\"cell name\" filterName=\"steel\">"+ html.checkBox(R.types.steel.name, R.types.steel.colors.main) +"</div>"+
			"						</div>"+
			"					<div class=\"row\">"+
			"						<div class=\"cell name\" filterName=\"fire\">"+ html.checkBox(R.types.fire.name, R.types.fire.colors.main) +"</div>"+
			"						<div class=\"cell name\" filterName=\"ice\">"+ html.checkBox(R.types.ice.name, R.types.ice.colors.main) +"</div>"+
			"						<div class=\"cell name\" filterName=\"water\">"+ html.checkBox(R.types.water.name, R.types.water.colors.main) +"</div>"+
			"					</div>"+
			"				</div>"+
			"			</div>"+
			"			<div class=\"cell category\" filterCategory=\"category\">"+
			"				<h3>Category</h3>"+
			"				<div class=\"name\" filterName=\"physical\">"+ html.checkBox("Physical") +"</div>"+
			"				<div class=\"name\" filterName=\"special\">"+ html.checkBox("Special") +"</div>"+
			"				<div class=\"name\" filterName=\"status\">"+ html.checkBox("Status") +"</div>"+
			"			</div>"+
			"			<div class=\"cell category\" filterCategory=\"status\">"+
			"				<h3>Status Effects</h3>"+
			"				<div class=\"name\" filterName=\"burn\">"+ html.checkBox("Burn") +"</div>"+
			"				<div class=\"name\" filterName=\"freeze\">"+ html.checkBox("Freeze") +"</div>"+
			"				<div class=\"name\" filterName=\"paralysis\">"+ html.checkBox("Paralysis") +"</div>"+
			"				<div class=\"name\" filterName=\"poison\">"+ html.checkBox("Poison") +"</div>"+
			"				<div class=\"name\" filterName=\"sleep\">"+ html.checkBox("Sleep") +"</div>"+
			"			</div>"+
			"			<div class=\"cell category\" filterCategory=\"battle\">"+
			"				<h3>Battle Effects</h3>"+
			"				<div class=\"name\" filterName=\"confusion\">"+ html.checkBox("Confusion") +"</div>"+
			"				<div class=\"name\" filterName=\"crit\">"+ html.checkBox("Crit") +"</div>"+
			"				<div class=\"name\" filterName=\"flinch\">"+ html.checkBox("Flinch") +"</div>"+
			"				<div class=\"name\" filterName=\"heal\">"+ html.checkBox("Heal") +"</div>"+
			"				<div class=\"name\" filterName=\"priority\">"+ html.checkBox("Priority") +"</div>"+
			"				<div class=\"name\" filterName=\"trap\">"+ html.checkBox("Trap") +"</div>"+
			"			</div>"+
			"		</div>"+
			"		<div class=\"row\">"+
			"			<div class=\"cell\">"+
			"				<h3>Stat Changes</h3>"+
			"				<div class=\"cell category\" filterCategory=\"stat\">"+
			"					<div class=\"name\" filterName=\"attack\">"+ html.checkBox(lang.pokemon.stats[lang.userLanguage].attack) +"</div>"+
			"					<div class=\"name\" filterName=\"defense\">"+ html.checkBox(lang.pokemon.stats[lang.userLanguage].defense) +"</div>"+
			"					<div class=\"name\" filterName=\"spAttack\">"+ html.checkBox(lang.pokemon.stats[lang.userLanguage].spAttack) +"</div>"+
			"					<div class=\"name\" filterName=\"spDefense\">"+ html.checkBox(lang.pokemon.stats[lang.userLanguage].spDefense) +"</div>"+
			"					<div class=\"name\" filterName=\"speed\">"+ html.checkBox(lang.pokemon.stats[lang.userLanguage].speed) +"</div>"+
			"					<div class=\"name\" filterName=\"accuracy\">"+ html.checkBox(lang.pokemon.stats[lang.userLanguage].accuracy) +"</div>"+
			"					<div class=\"name\" filterName=\"evasion\">"+ html.checkBox(lang.pokemon.stats[lang.userLanguage].evasion) +"</div>"+
			"				</div>"+
			"				<div class=\"cell category\" filterCategory=\"statDir\">"+
			"					<div class=\"name\" filterName=\"statIncrease\">"+ html.checkBox("+") +"</div>"+
			"					<div class=\"name\" filterName=\"statDecrease\">"+ html.checkBox("-") +"</div>"+
			"				</div>"+
			"				<div class=\"cell category\" filterCategory=\"statChange\">"+
			"					<div class=\"name\" filterName=\"statOne\">"+ html.checkBox("1") +"</div>"+
			"					<div class=\"name\" filterName=\"statTwo\">"+ html.checkBox("2") +"</div>"+
			"					<div class=\"name\" filterName=\"statThree\">"+ html.checkBox("3") +"</div>"+
			"					<div class=\"name\" filterName=\"statFour\">"+ html.checkBox("4") +"</div>"+
			"					<div class=\"name\" filterName=\"statFive\">"+ html.checkBox("5") +"</div>"+
			"					<div class=\"name\" filterName=\"statSix\">"+ html.checkBox("6") +"</div>"+
			"				</div>"+
			"			</div>"+
			"			<div class=\"cell category\" filterCategory=\"learn\">"+
			"				<h3>Learned By</h3>"+
			"				<div class=\"name\" filterName=\"egg\">"+ html.checkBox("Egg") +"</div>"+
			"				<div class=\"name\" filterName=\"hm\">"+ html.checkBox("HM") +"</div>"+
			"				<div class=\"name\" filterName=\"level\">"+ html.checkBox("Level") +"</div>"+
			"				<div class=\"name\" filterName=\"preEvolution\">"+ html.checkBox("Pre-Evolution") +"</div>"+
			"				<div class=\"name\" filterName=\"tm\">"+ html.checkBox("TM") +"</div>"+
			"				<div class=\"name\" filterName=\"transfer\">"+ html.checkBox("Transfer") +"</div>"+
			"				<div class=\"name\" filterName=\"tutor\">"+ html.checkBox("Tutor") +"</div>"+
			"			</div>"+
			"			<div class=\"cell\">"+
			"				<div class=\"category\" filterCategory=\"power\"><h3>Power</h3>"+html.minMaxTextBox()+"</div>"+
			"				<div class=\"category\" filterCategory=\"accuracy\"><h3>Accuracy</h3>"+html.minMaxTextBox()+"</div>"+
			"				<div class=\"category\" filterCategory=\"pp\"><h3>PP</h3>"+html.minMaxTextBox()+"</div>"+
			"			</div>"+
			"			<div class=\"cell\">"+
			"				<button class=\"clearButton\" type=\"button\">Clear</button>"+
			"				<button class=\"removeButton\" type=\"button\">Remove</button>"+
			"			</div>"+
			"		</div>"+
			"	</div>";
		}
		var hasLoaded = function(parent){
			movesFilter = parent.querySelector(".movesFilterTable");
			addEventListeners();
		}
		addEventListeners = function(){
			var checkboxs = movesFilter.querySelectorAll(".checkBox");
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
			filteredList = movesList;
			filterByCategory("type");
			filterByCategory("category");
			filterByCategory("");
			filterByCategory("type");
			filterByCategory("type");
			filterByCategory("type");
			filterByCategory("type");
			filterByCategory("type");
			filterByCategory("type");
			filterByCategory("type");
			filterByCategory("type");
			console.log(filteredList);
		}
		filterByCategory = function(category){
			var temp = [];
			filterCategories[category].forEach(function(filterItem){
				filteredList.forEach(function(move){
					if(R.moves[move][category] === filterItem){
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
			HTML: HTML,
			hasLoaded : hasLoaded,
			filterMoves: filterMoves,
		}
	}
})(this);
(function(root){

	html.movesListTable = function(){

		var HTML = function(type){
			return ""+
			"	<div class=\"movesListTable\" type-insert=\"moves\">"+
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
			HTML: HTML,
			addMoves: addMoves,
		}
	}
})(this);
(function(root){
	html.pokemonStatsTable = function(input){
		var HTML = function(input){
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
			HTML : HTML,
		}
	}
})(this);
(function(root){
	html.pokemonStatsBarGraph = function(){
		var STATMODIFIER = 3;
		var barGraph;
		var base;

		var HTML = function(input){
			base = input;
			return ""+
			"	<div class=\"pokemonStatsBarGraph\">"+
			"		<h1 class=\"graphTitle\">Base Stats</h1>"+
			"		<div class=\"graphData\">"+
			"			<div class=\"row\">"+
			"				<div class=\"cell col0\">HP</div>"+
			"				<div id = \"baseHPStat\" class=\"cell col1\">"+input.hp+"</div>"+
			"				<div class=\"cell col2\">"+
			"					<div class=\"statBar hpBar\"></div>"+
			"					<div class=\"statBar barCover hpBarCover\"></div>"+
			"				</div>"+
			"			</div>"+
			"			<div class=\"row\">"+
			"				<div class=\"cell col0\">Attack</div>"+
			"				<div id = \"baseAttackStat\" class=\"cell col1\">"+input.attack+"</div>"+
			"				<div class=\"cell col2\">"+
			"					<div class=\"statBar attackBar\"></div>"+
			"					<div class=\"statBar barCover attackBarCover\"></div>"+
			"				</div>"+
			"			</div>"+
			"			<div class=\"row\">"+
			"				<div class=\"cell col0\">Defense</div>"+
			"				<div id = \"baseDefenseStat\" class=\"cell col1\">"+input.defense+"</div>"+
			"				<div class=\"cell col2\">"+
			"					<div class=\"statBar defenseBar\"></div>"+
			"					<div class=\"statBar barCover defenseBarCover\"></div>"+
			"				</div>"+
			"			</div>"+
			"			<div class=\"row\">"+
			"				<div class=\"cell col0\">Sp. Attack</div>"+
			"				<div id = \"baseSpAttackStat\" class=\"cell col1\">"+input.spAttack+"</div>"+
			"				<div class=\"cell col2\">"+
			"					<div class=\"statBar spAttackBar\"></div>"+
			"					<div class=\"statBar barCover spAttackBarCover\"></div>"+
			"				</div>"+
			"			</div>"+
			"			<div class=\"row\">"+
			"				<div class=\"cell col0\">Sp. Defense</div>"+
			"				<div id = \"baseSpDefenseStat\" class=\"cell col1\">"+input.spDefense+"</div>"+
			"				<div class=\"cell col2\">"+
			"					<div class=\"statBar spDefenseBar\"></div>"+
			"					<div class=\"statBar barCover spDefenseBarCover\"></div>"+
			"				</div>"+
			"			</div>"+
			"			<div class=\"row\">"+
			"				<div class=\"cell col0\">Speed</div>"+
			"				<div id = \"baseSpeedStat\" class=\"cell col1\">"+input.speed+"</div>"+
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
			setBarLength();
		}
		var setBarLength = function(){
			var hpCover = barGraph.querySelector(".hpBarCover");
			var attackCover = barGraph.querySelector(".attackBarCover");
			var defenseCover = barGraph.querySelector(".defenseBarCover");
			var spAttackCover = barGraph.querySelector(".spAttackBarCover");
			var spDefenseCover = barGraph.querySelector(".spDefenseBarCover");
			var speedCover = barGraph.querySelector(".speedBarCover");

			hpCover.style.width = (R.stats.max.hp-base.hp)*STATMODIFIER+"px";
			attackCover.style.width = (R.stats.max.attack-base.attack)*STATMODIFIER+"px";
			defenseCover.style.width = (R.stats.max.defense-base.defense)*STATMODIFIER+"px";
			spAttackCover.style.width = (R.stats.max.spAttack-base.spAttack)*STATMODIFIER+"px";
			spDefenseCover.style.width = (R.stats.max.spDefense-base.spDefense)*STATMODIFIER+"px";
			speedCover.style.width = (R.stats.max.speed-base.speed)*STATMODIFIER+"px";

			hpCover.style.marginLeft = -1*(R.stats.max.hp-base.hp)*STATMODIFIER+"px";
			attackCover.style.marginLeft = -1*(R.stats.max.attack-base.attack)*STATMODIFIER+"px";
			defenseCover.style.marginLeft = -1*(R.stats.max.defense-base.defense)*STATMODIFIER+"px";
			spAttackCover.style.marginLeft = -1*(R.stats.max.spAttack-base.spAttack)*STATMODIFIER+"px";
			spDefenseCover.style.marginLeft = -1*(R.stats.max.spDefense-base.spDefense)*STATMODIFIER+"px";
			speedCover.style.marginLeft = -1*(R.stats.max.speed-base.speed)*STATMODIFIER+"px";
		}
		return{
			HTML : HTML,
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
	R.getData();
	pages.loadPage(pages.pageIds.POKEMONPROFILE);
})(this);