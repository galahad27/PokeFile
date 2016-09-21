(function(root){
	var dev = {};

	dev.ninetales = {
		name : {
			en: "Ninetales",
			jap: "Kyukon",
		},
		localNum : {
			Red : "38",
			Blue : "38",
			Yellow : "38",
			Gold : "126",
			Silver : "126",
			Crystal : "126",
			Ruby : "154",
			Sapphire : "154",
			FireRed : "38",
			LeafGreen : "38",
			Emerald : "154",
			Dimond : null,
			Pearl : null,
			Platinum : null,
			HeartGold : "128",
			SoulSilver : "128",
			Black : null,
			White : null,
			Black2 : "249",
			White2 : "249",
			X : null,
			Y : null,
			OmegaRuby : "161",
			AlphaSapphire : "161",
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
			male : "25",
			female : "75",
		},
		training : {
			ev : {
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
			primaryType : "Fire",
			secondaryType : null,
			firstAbility : "Flash Fire",
			secondAbility : null,
			hiddenAbility : "Drought",
		},
		pokedex : {
			Red : "Very smart and very vengeful. Grabbing one of its many tails could result in a 1000-year curse.",
			Blue : "Very smart and very vengeful. Grabbing one of its many tails could result in a 1000-year curse.",
			Yellow : "According to an enduring legend, 9 noble saints were united and reincarnated as this POKéMON.",
			Gold : "Some legends claim that each of its nine tails has its own unique type of special mystical power.",
			Silver : "Its nine beautiful tails are filled with a wondrous energy that could keep it alive for 1,000 years.",
			Crystal : "It is said to live a thousand years, and each of its tails is loaded with supernatural powers.",
			Ruby : "NINETALES casts a sinister light from its bright red eyes to gain total control over its foe’s mind. This POKéMON is said to live for a thousand years.",
			Sapphire : "Legend has it that NINETALES came into being when nine wizards possessing sacred powers merged into one. This POKéMON is highly intelligent - it can understand human speech.",
			FireRed : "It has nine long tails and fur that gleams gold. It is said to live for 1,000 years.",
			LeafGreen : "Very smart and very vengeful. Grabbing one of its many tails could result in a 1,000-year curse.",
			Emerald : "It has long been said that each of the nine tails embody an enchanted power. A long-lived NINETALES will have fur that shines like gold.",
			Dimond : "Its nine tails are said to be imbued with a mystic power. It can live for a thousand years.",
			Pearl : "Its nine tails are said to be imbued with a mystic power. It can live for a thousand years.",
			Platinum : "Its nine tails are said to be imbued with a mystic power. It can live for a thousand years.",
			HeartGold : "Some legends claim that each of its nine tails has its own unique type of special mystical power.",
			SoulSilver : "Its nine beautiful tails are filled with a wondrous energy that could keep it alive for 1,000 years.",
			Black : "Its nine tails are said to be imbued with a mystic power. It can live for a thousand years.",
			White : "Its nine tails are said to be imbued with a mystic power. It can live for a thousand years.",
			Black2 : "Each of its nine tails is imbued with supernatural power, and it can live for a thousand years.",
			White2 : "Each of its nine tails is imbued with supernatural power, and it can live for a thousand years.",
			X : "It has nine long tails and fur that gleams gold. It is said to live for 1,000 years.",
			Y : "Very smart and very vengeful. Grabbing one of its many tails could result in a 1,000-year curse.",
		},
		base : {
			HP : 73,
			ATTACK : 76,
			DEFENSE : 75,
			SPATTACK : 81,
			SPDEFENSE : 100,
			SPEED : 100,
		},
		img : {
			url: ["./res/img/ninetales/Ninetales.png", "./res/img/ninetales/Ninetales.gif"],
		}
	}

	root.dev = dev;
})(this);
(function(root){
	var html = {};

	html.load = function(element, input){
		var type = element.getAttribute("type-insert");
		if(!!input){
			$(element).append(html[type](input));	
		}else{
			$(element).append(html[type]);
		}
		return element;
	};

	html.containers = {
		POKEDEX : function(id){ return "<div id=\""+id+"\" class=\"container pokedexEntry\" type-insert=\"pokedexEntry\"></div>";},
		STATBARGRAPH : function(id){return "<div id=\""+id+"\" class=\"container statBarGraph\" type-insert=\"statBarGraph\"></div>";},
		STATTABLE : function(stat, name, level){return "<div class=\"container statTable\" stat=\""+stat+"\" name=\""+name+"\" level=\""+level+"\" type-insert=\"statTable\"></div>";},
	}

	root.html = html;
})(this);

(function(root){

	var R = {
		STATMODIFIER : 3,
		HP : 255,
		ATTACK : 190,
		DEFENSE : 230,
		SPATTACK : 194,
		SPDEFENSE : 230,
		SPEED : 180,
	}

	root.R = R;
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

	root.utill = utill;
})(this);
(function(root){
})(this);
(function(root){
	var activePage;

	var loadPage = function(page){
		if(!!activePage){
			onBeforeHide(page);
		}else{
			onBeforeShow(page);
		}
	}
	var onBeforeHide = function(page){
		!!pages.activePage.onBeforeHide && pages.activePage.onBeforeHide();
		onHide(page);
	};
	var onHide = function(page){
		pages.activePage.style.display = "none";
		!!pages.activePage.onHide && pages.activePage.onHide();
		onBeforeShow(page);
	};
	var onBeforeShow = function(page){
		pages.activePage = pages[page];
		elements = pages.activePage.querySelectorAll("[type-insert]");
		elements.forEach(function(element){
			html.load(element);
		});
		!!pages.activePage.onBeforeShow && pages.activePage.onBeforeShow();
		onShow();
	};
	var onShow = function(){
		pages.activePage.style.display = "block";
		!!pages.activePage.onShow && pages.activePage.onShow();
	};
	root.loadPage = loadPage;
})(this);
(function(root){
	var pages = {};
	var elements = document.querySelectorAll(".poke_page");

	elements.forEach(function(page){
		pageId = page.getAttribute("id");
		pages[pageId] = page;
	})

	pages.activePage = null;

	pages.pageIds = {
		POKEMONPROFILE : "pokemonProfile",
	}

	root.pages = pages;
})(this);
(function(root){
	html.pageHeader = ""+
	"	<div class=\"header\">"+
	"		<p>POKEDEX</p>"+
	"	</div>"+
	"	<ul class=\"mainBarMenu webBackground fireBorder\">"+
	"		<li><a href=\"#\">Home</a></li>"+
	"		<li><a id=\"p38\" href=\"#\">Ninetails</a></li>"+
	"		<li><a id=\"p282\" href=\"#\">Gardevoir</a></li>"+
	"	</ul>";
})(this);
(function(root){
	html.pokedexEntry = function(input){
		return "<p class=\"pokedexEntry\"><b>"+input[0]+"</b>: "+input[1]+"</p>"
	}
})(this);
(function(root){
	html.statBarGraph = function(input){
		return ""+
			"<h1 class=\"graphTitle\">Base Stats</h1>"+
			"<div class=\"graphData\">"+
			"	<div class=\"row\">"+
			"		<div class=\"cell col0\">HP</div>"+
			"		<div id = \"baseHPStat\" class=\"cell col1\">"+input.HP+"</div>"+
			"		<div class=\"cell col2\">"+
			"			<div class=\"statBar hpBar\"></div>"+
			"			<div class=\"statBar barCover hpBarCover\"></div>"+
			"		</div>"+
			"	</div>"+
			"	<div class=\"row\">"+
			"		<div class=\"cell col0\">Attack</div>"+
			"		<div id = \"baseAttackStat\" class=\"cell col1\">"+input.ATTACK+"</div>"+
			"		<div class=\"cell col2\">"+
			"			<div class=\"statBar attackBar\"></div>"+
			"			<div class=\"statBar barCover attackBarCover\"></div>"+
			"		</div>"+
			"	</div>"+
			"	<div class=\"row\">"+
			"		<div class=\"cell col0\">Defense</div>"+
			"		<div id = \"baseDefenseStat\" class=\"cell col1\">"+input.DEFENSE+"</div>"+
			"		<div class=\"cell col2\">"+
			"			<div class=\"statBar defenseBar\"></div>"+
			"			<div class=\"statBar barCover defenseBarCover\"></div>"+
			"		</div>"+
			"	</div>"+
			"	<div class=\"row\">"+
			"		<div class=\"cell col0\">Sp. Attack</div>"+
			"		<div id = \"baseSpAttackStat\" class=\"cell col1\">"+input.SPATTACK+"</div>"+
			"		<div class=\"cell col2\">"+
			"			<div class=\"statBar spAttackBar\"></div>"+
			"			<div class=\"statBar barCover spAttackBarCover\"></div>"+
			"		</div>"+
			"	</div>"+
			"	<div class=\"row\">"+
			"		<div class=\"cell col0\">Sp. Defense</div>"+
			"		<div id = \"baseSpDefenseStat\" class=\"cell col1\">"+input.SPDEFENSE+"</div>"+
			"		<div class=\"cell col2\">"+
			"			<div class=\"statBar spDefenseBar\"></div>"+
			"			<div class=\"statBar barCover spDefenseBarCover\"></div>"+
			"		</div>"+
			"	</div>"+
			"	<div class=\"row\">"+
			"		<div class=\"cell col0\">Speed</div>"+
			"		<div id = \"baseSpeedStat\" class=\"cell col1\">"+input.SPEED+"</div>"+
			"		<div class=\"cell col2\">"+
			"			<div class=\"statBar speedBar\"></div>"+
			"			<div class=\"statBar barCover speedBarCover\"></div>"+
			"		</div>"+
			"	</div>"+
			"</div>";
	}
})(this);
(function(root){
	html.statTable = function(input){
		var min = utill.statFormula(input.level, input.stat, 0, 0, 0.9, input.isHp);
		var iv = utill.statFormula(input.level, input.stat, 31, 0, 1, input.isHp);
		var ivEv = utill.statFormula(input.level, input.stat, 31, 252, 1, input.isHp);
		var max = utill.statFormula(input.level, input.stat, 31, 252, 1.1, input.isHp);
		return ""+
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
			"</div>";
	}
})(this);
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
	var currImageIndex = 0;

	page.onBeforeShow = function(){
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
		return dev.ninetales;
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

		hpCover.style.width = (R.HP-primaryPokemon.base.HP)*R.STATMODIFIER+"px";
		attackCover.style.width = (R.ATTACK-primaryPokemon.base.ATTACK)*R.STATMODIFIER+"px";
		defenseCover.style.width = (R.DEFENSE-primaryPokemon.base.DEFENSE)*R.STATMODIFIER+"px";
		spAttackCover.style.width = (R.SPATTACK-primaryPokemon.base.SPATTACK)*R.STATMODIFIER+"px";
		spDefenseCover.style.width = (R.SPDEFENSE-primaryPokemon.base.SPDEFENSE)*R.STATMODIFIER+"px";
		speedCover.style.width = (R.SPEED-primaryPokemon.base.SPEED)*R.STATMODIFIER+"px";

		hpCover.style.marginLeft = -1*(R.HP-primaryPokemon.base.HP)*R.STATMODIFIER+"px";
		attackCover.style.marginLeft = -1*(R.ATTACK-primaryPokemon.base.ATTACK)*R.STATMODIFIER+"px";
		defenseCover.style.marginLeft = -1*(R.DEFENSE-primaryPokemon.base.DEFENSE)*R.STATMODIFIER+"px";
		spAttackCover.style.marginLeft = -1*(R.SPATTACK-primaryPokemon.base.SPATTACK)*R.STATMODIFIER+"px";
		spDefenseCover.style.marginLeft = -1*(R.SPDEFENSE-primaryPokemon.base.SPDEFENSE)*R.STATMODIFIER+"px";
		speedCover.style.marginLeft = -1*(R.SPEED-primaryPokemon.base.SPEED)*R.STATMODIFIER+"px";
	}
	setBorderWidth = function(){
		pokedex.style.borderWidth = "3px";
		stats.style.borderWidth = "3px";
		typeStats.style.borderWidth = "3px";
		moves.style.borderWidth = "3px";
	}
	setColorTheme = function(pokemon){
		if(!!pokemon.battle.secondaryType){
			pokemonImage.setAttribute("background", pokemon.battle.primaryType+pokemon.battle.secondaryType);
			basicInfo.setAttribute("background", pokemon.battle.primaryType+pokemon.battle.secondaryType);
			pokedex.setAttribute("background", pokemon.battle.primaryType+pokemon.battle.secondaryType);
			stats.setAttribute("background", pokemon.battle.primaryType+pokemon.battle.secondaryType);
			typeStats.setAttribute("background", pokemon.battle.primaryType+pokemon.battle.secondaryType);
			moves.setAttribute("background", pokemon.battle.primaryType+pokemon.battle.secondaryType);
			console.log(pokemon.battle.primaryType+pokemon.battle.secondaryType);
		}else{
			pokemonImage.setAttribute("background", pokemon.battle.primaryType);
			basicInfo.setAttribute("background", pokemon.battle.primaryType);
			pokedex.setAttribute("background", pokemon.battle.primaryType);
			stats.setAttribute("background", pokemon.battle.primaryType);
			typeStats.setAttribute("background", pokemon.battle.primaryType);
			moves.setAttribute("background", pokemon.battle.primaryType);
		}

		pokemonImage.setAttribute("border", pokemon.battle.primaryType);
		basicInfo.setAttribute("border", pokemon.battle.primaryType);
		pokedex.setAttribute("border", pokemon.battle.primaryType);
		stats.setAttribute("border", pokemon.battle.primaryType);
		typeStats.setAttribute("border", pokemon.battle.primaryType);
		moves.setAttribute("border", pokemon.battle.primaryType);
		statsPage.setAttribute("border", pokemon.battle.primaryType);
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
		moves.style.borderTopWidth = "6px";
		$(statsPage).empty();
	}
	pokedexClick = function(){
		setBorderWidth();
		pokedex.style.borderTopWidth = "6px";
		$(statsPage).empty();
		addPokedexEntries();
	};
	statsClick = function(){
		setBorderWidth();
		stats.style.borderTopWidth = "6px";
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
		typeStats.style.borderTopWidth = "6px";
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
(function(root){
	loadPage(pages.pageIds.POKEMONPROFILE);
})(this);