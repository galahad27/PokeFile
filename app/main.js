(function(root){
	var dev = {};

	dev.ninetales = {
		name : "Ninetales",
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
		POKEDEX : function(id){ return "<div id=\""+id+"\" class=\"container pokedexEntry\" type-insert=\"pokedexEntry\"></div>";},
		STATBARGRAPH : function(id){return "<div id=\""+id+"\" class=\"container statBarGraph\" type-insert=\"statBarGraph\"></div>";},
		STATTABLE : function(id){return "<div id=\""+id+"\" class=\"container statTable\" type-insert=\"statTable\"></div>";},
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
		return ""+
			"<h1 class=\"tableTitle\">"+input+"</h1>"+
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
	}
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
		insertBarGraph();
		insertTables();
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
		var entries = page.querySelector(".pokedexEntry");
		var keys = _.keys(dev.ninetales.pokedex);
		keys.forEach(function(key){
			var input = [key, dev.ninetales.pokedex[key]];
			html.load(entries, input);
		})
	}
	insertBarGraph = function(){
		$(statsPage).append(html.containers.STATBARGRAPH(dev.ninetales.name+"BarGraph"));
		var barGraph = page.querySelector(".statBarGraph");
		var input = dev.ninetales.base;
		html.load(barGraph, input);
		updateBarLength();
	}
	insertTables = function(){
		var hpId = dev.ninetales.name+"HPTable";
		var attackId = dev.ninetales.name+"AttackTable";
		var defenseId = dev.ninetales.name+"DefenseTable";
		var spAttackId = dev.ninetales.name+"SpAttackTable";
		var spDefenseId = dev.ninetales.name+"SpDefenseTable";
		var speedId = dev.ninetales.name+"SpeedTable";
		$(statsPage).append(html.containers.STATTABLE(hpId));
		$(statsPage).append(html.containers.STATTABLE(attackId));
		$(statsPage).append(html.containers.STATTABLE(defenseId));
		$(statsPage).append(html.containers.STATTABLE(spAttackId));
		$(statsPage).append(html.containers.STATTABLE(spDefenseId));
		$(statsPage).append(html.containers.STATTABLE(speedId));

		var tables = page.querySelectorAll(".statTable");
		var titles[hpId] = "HP";
		var titles[attackId] = "Attack";
		var titles[defenseId] = "Defense";
		var titles[spAttackId] = "Sp. Attack";
		var titles[spDefenseId] = "Sp. Defense";
		var titles[speedId] = "Speed";
		var baseName[hpId] = "HP";
		var baseName[attackId] = "ATTACK";
		var baseName[defenseId] = "DEFENSE";
		var baseName[spAttackId] = "SPATTACK";
		var baseName[spDefenseId] = "SPDEFENSE";
		var baseName[speedId] = "SPEED";
	
		tables.forEach(function(table){
			input.title = title[table.getAttribute("id")];
			input.base = dev.ninetales.base[baseName[table.getAttribute("id")]]
			html.load(table, input);
		})
	}
	updateBarLength = function(){
		var barGraph = statsPage.querySelector(".statBarGraph");
		var hpCover = barGraph.querySelector(".hpBarCover");
		var attackCover = barGraph.querySelector(".attackBarCover");
		var defenseCover = barGraph.querySelector(".defenseBarCover");
		var spAttackCover = barGraph.querySelector(".spAttackBarCover");
		var spDefenseCover = barGraph.querySelector(".spDefenseBarCover");
		var speedCover = barGraph.querySelector(".speedBarCover");

		hpCover.style.width = (R.HP-dev.ninetales.base.HP)*R.STATMODIFIER+"px";
		attackCover.style.width = (R.ATTACK-dev.ninetales.base.ATTACK)*R.STATMODIFIER+"px";
		defenseCover.style.width = (R.DEFENSE-dev.ninetales.base.DEFENSE)*R.STATMODIFIER+"px";
		spAttackCover.style.width = (R.SPATTACK-dev.ninetales.base.SPATTACK)*R.STATMODIFIER+"px";
		spDefenseCover.style.width = (R.SPDEFENSE-dev.ninetales.base.SPDEFENSE)*R.STATMODIFIER+"px";
		speedCover.style.width = (R.SPEED-dev.ninetales.base.SPEED)*R.STATMODIFIER+"px";

		hpCover.style.marginLeft = -1*(R.HP-dev.ninetales.base.HP)*R.STATMODIFIER+"px";
		attackCover.style.marginLeft = -1*(R.ATTACK-dev.ninetales.base.ATTACK)*R.STATMODIFIER+"px";
		defenseCover.style.marginLeft = -1*(R.DEFENSE-dev.ninetales.base.DEFENSE)*R.STATMODIFIER+"px";
		spAttackCover.style.marginLeft = -1*(R.SPATTACK-dev.ninetales.base.SPATTACK)*R.STATMODIFIER+"px";
		spDefenseCover.style.marginLeft = -1*(R.SPDEFENSE-dev.ninetales.base.SPDEFENSE)*R.STATMODIFIER+"px";
		speedCover.style.marginLeft = -1*(R.SPEED-dev.ninetales.base.SPEED)*R.STATMODIFIER+"px";
	}
})(this);
(function(root){
	loadPage(pages.pageIds.POKEMONPROFILE);
})(this);