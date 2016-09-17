(function(root){
	var dev = {};

	dev.ninetales = {
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
			HP : "73",
			ATTACK : "76",
			DEFENSE : "75",
			SPATTACK : "81",
			SPDEFENSE : "100",
			SPEED : "100",
		},
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
		POKEDEX : "<div class=\"container\" type-insert=\"pokedexEntry\"></div>",
		STATBARGRAPH : "<div class=\"container statBarGraph\" type-insert=\"statBarGraph\"></div>",
	}

	root.html = html;
})(this);

(function(root){
	
})(this);
(function(root){
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
			"<h1 class=\"tableTitle\">Base Stats</h1>"+
			"<div class=\"row\">"+
			"	<div class=\"cell\">HP</div>"+
			"	<div id = \"baseHPStat\" class=\"cell col1\">"+input.HP+"</div>"+
			"	<div class=\"cell\">"+
			"		<div class=\"statBar rangeBackgroundHp\"></div>"+
			"		<div class=\"statBar barCover\"></div>"+
			"	</div>"+
			"</div>"+
			"<div class=\"row\">"+
			"	<div class=\"cell\">Attack</div>"+
			"	<div id = \"baseAttackStat\" class=\"cell col1\">"+input.ATTACK+"</div>"+
			"	<div class=\"cell\">"+
			"		<div class=\"statBar rangeBackgroundHp\"></div>"+
			"		<div class=\"statBar barCover\"></div>"+
			"	</div>"+
			"</div>"+
			"<div class=\"row\">"+
			"	<div class=\"cell\">Defense</div>"+
			"	<div id = \"baseDefenseStat\" class=\"cell col1\">"+input.DEFENSE+"</div>"+
			"	<div class=\"cell\">"+
			"		<div class=\"statBar rangeBackgroundHp\"></div>"+
			"		<div class=\"statBar barCover\"></div>"+
			"	</div>"+
			"</div>"+
			"<div class=\"row\">"+
			"	<div class=\"cell\">Sp. Attack</div>"+
			"	<div id = \"baseSpAttackStat\" class=\"cell col1\">"+input.SPATTACK+"</div>"+
			"	<div class=\"cell\">"+
			"		<div class=\"statBar rangeBackgroundHp\"></div>"+
			"		<div class=\"statBar barCover\"></div>"+
			"	</div>"+
			"</div>"+
			"<div class=\"row\">"+
			"	<div class=\"cell\">Sp. Defense</div>"+
			"	<div id = \"baseSpDefenseStat\" class=\"cell col1\">"+input.SPDEFENSE+"</div>"+
			"	<div class=\"cell\">"+
			"		<div class=\"statBar rangeBackgroundHp\"></div>"+
			"		<div class=\"statBar barCover\"></div>"+
			"	</div>"+
			"</div>"+
			"<div class=\"row\">"+
			"	<div class=\"cell\">Speed</div>"+
			"	<div id = \"baseSpeedStat\" class=\"cell col1\">"+input.SPEED+"</div>"+
			"	<div class=\"cell\">"+
			"		<div class=\"statBar rangeBackgroundHp\"></div>"+
			"		<div class=\"statBar barCover\"></div>"+
			"	</div>"+
			"</div>";
	}
})(this);
(function(root){
	html.statTable = ""+
		"<h1 class=\"tableTitle\"></h1>"+
		"<div class=\"row\">"+
		"	<div class=\"cell\">Min</div>"+
		"	<div id=\"minStatData\" class=\"cell\"></div>"+
		"</div>"+
		"<div class=\"row\">"+
		"	<div class=\"cell\">Max IV/Min EV</div>"+
		"	<div id=\"maxMinStatData\" class=\"cell\"></div>"+
		"</div>"+
		"<div class=\"row\">"+
		"	<div class=\"cell\">Max IV/Max EV</div>"+
		"	<div id=\"maxMaxStatData\" class=\"cell\"></div>"+
		"</div>"+
		"<div class=\"row\">"+
		"	<div class=\"cell\">Max</div>"+
		"	<div id=\"maxStatData\" class=\"cell\"></div>"+
		"</div>";
})(this);
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
		insertBaseStats();
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
		statsContainers = page.querySelector(".container");
		var keys = _.keys(dev.ninetales.pokedex);
		keys.forEach(function(key){
			var input = [key, dev.ninetales.pokedex[key]];
			html.load(statsContainers, input);
		})
	}
	insertBaseStats = function(){
		statsPage.innerHTML = html.containers.STATBARGRAPH;
		statsContainers = [];
		statsContainers.push(page.querySelector(".container"));
		var input = dev.ninetales.base;
		statsContainers.forEach(function(container){
			html.load(container, input)
		});
	}
})(this);
(function(root){
	loadPage(pages.pageIds.POKEMONPROFILE);
})(this);