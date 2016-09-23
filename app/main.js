(function(root){
	var dev = {};

	dev.pokemon = {
		ninetales : {
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
			},
			moves : {
				all : ["flamethrower","extrasensory","heatWave"],
				level : ["flamethrower"],
				egg : ["extrasensory","heatWave"],
				tutor : ["heatWave"],
				preEvolution : ["extrasensory"],
				hm : [],
				tm : ["flamethrower"],
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
				condition : ["burn"],
				percentage : ["10"],
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
				condition : ["flinch"],
				percentage : ["10"],
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
				condition : ["burn"],
				percentage : ["10"],
			},
			pokemon : ["ninetales"],
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
		MOVESLIST : function(id){return "<div id=\""+id+"\" class=\"container movesList\" type-insert=\"movesList\"></div>";},
	}

	root.html = html;
})(this);

(function(root){

	var R = {
		STATMODIFIER : 3,
		maxStats : {
			HP : 255,
			ATTACK : 190,
			DEFENSE : 230,
			SPATTACK : 194,
			SPDEFENSE : 230,
			SPEED : 180,
		},
		typeColors : {
			Bug : "#A8B820",
			Dark : "#705848",
			Dragon : "#7038F8",
			Electric : "#F8D030",
			Fairy : "#EE99AC",
			Fire : "#F08030",
			Fighting : "#C03028",
			Flying : "#A890F0",
			Ghost : "#705898",
			Grass : "#78C850",
			Ground : "#E0C068",
			Ice : "#98D8D8",
			Normal : "#A8A878",
			Poison : "#A040A0",
			Psychic : "#F85888",
			Rock : "#B8A038",
			Steel : "#B8B8D0",
			Water : "#6890F0",
		},
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
	html.movesList = function(pokemon){
		return ""+
		"	<div class=\"movesFilter\">"+
		"		<div>"+
		"			<div class=\"col checkBoxCatagory\">"+
		"				<h3>Types</h3>"+
		"				<div class=\"col\">"+
		"					<div class=\"checkbox\">"+
		"						<input class=\"box ccol\" type=\"checkbox\">"+
		"						<div class=\"typeText ccol\" background=\"Bug\">Bug</div>"+
		"					</div>"+
		"					<div class=\"checkbox\">"+
		"						<input class=\"box ccol\" type=\"checkbox\">"+
		"						<div class=\"typeText ccol\" background=\"Dark\">Dark</div>"+
		"					</div>"+
		"					<div class=\"checkbox\">"+
		"						<input class=\"box ccol\" type=\"checkbox\">"+
		"						<div class=\"typeText ccol\" background=\"Dragon\">Dragon</div>"+
		"					</div>"+
		"					<div class=\"checkbox\">"+
		"						<input class=\"box ccol\" type=\"checkbox\">"+
		"						<div class=\"typeText ccol\" background=\"Electric\">Electric</div>"+
		"					</div>"+
		"					<div class=\"checkbox\">"+
		"						<input class=\"box ccol\" type=\"checkbox\">"+
		"						<div class=\"typeText ccol\" background=\"Fairy\">Fairy</div>"+
		"					</div>"+
		"					<div class=\"checkbox\">"+
		"						<input class=\"box ccol\" type=\"checkbox\" section=\"type\" catagory=\"Fire\">"+
		"						<div class=\"typeText ccol\" background=\"Fire\">Fire</div>"+
		"					</div>"+
		"				</div>"+
		"				<div class=\"col\">"+
		"					<div class=\"checkbox\">"+
		"						<input class=\"box ccol\" type=\"checkbox\">"+
		"						<div class=\"typeText ccol\" background=\"Fighting\">Fighting</div>"+
		"					</div>"+
		"					<div class=\"checkbox\">"+
		"						<input class=\"box ccol\" type=\"checkbox\">"+
		"						<div class=\"typeText ccol\" background=\"Flying\">Flying</div>"+
		"					</div>"+
		"					<div class=\"checkbox\">"+
		"						<input class=\"box ccol\" type=\"checkbox\">"+
		"						<div class=\"typeText ccol\" background=\"Ghost\">Ghost</div>"+
		"					</div>"+
		"					<div class=\"checkbox\">"+
		"						<input class=\"box ccol\" type=\"checkbox\">"+
		"						<div class=\"typeText ccol\" background=\"Grass\">Grass</div>"+
		"					</div>"+
		"					<div class=\"checkbox\">"+
		"						<input class=\"box ccol\" type=\"checkbox\">"+
		"						<div class=\"typeText ccol\" background=\"Ground\">Ground</div>"+
		"					</div>"+
		"					<div class=\"checkbox\">"+
		"						<input class=\"box ccol\" type=\"checkbox\">"+
		"						<div class=\"typeText ccol\" background=\"Ice\">Ice</div>"+
		"					</div>"+
		"				</div>"+
		"				<div class=\"col\">"+
		"					<div class=\"checkbox\">"+
		"						<input class=\"box ccol\" type=\"checkbox\">"+
		"						<div class=\"typeText ccol\" background=\"Normal\">Normal</div>"+
		"					</div>"+
		"					<div class=\"checkbox\">"+
		"						<input class=\"box ccol\" type=\"checkbox\">"+
		"						<div class=\"typeText ccol\" background=\"Poison\">Poison</div>"+
		"					</div>"+
		"					<div class=\"checkbox\">"+
		"						<input class=\"box ccol\" type=\"checkbox\">"+
		"						<div class=\"typeText ccol\" background=\"Psychic\">Psychic</div>"+
		"					</div>"+
		"					<div class=\"checkbox\">"+
		"						<input class=\"box ccol\" type=\"checkbox\">"+
		"						<div class=\"typeText ccol\" background=\"Rock\">Rock</div>"+
		"					</div>"+
		"					<div class=\"checkbox\">"+
		"						<input class=\"box ccol\" type=\"checkbox\">"+
		"						<div class=\"typeText ccol\" background=\"Steel\">Steel</div>"+
		"					</div>"+
		"					<div class=\"checkbox\">"+
		"						<input class=\"box ccol\" type=\"checkbox\">"+
		"						<div class=\"typeText ccol\" background=\"Water\">Water</div>"+
		"					</div>"+
		"				</div>"+
		"			</div>"+
		"			<div class=\"col checkBoxCatagory\">"+
		"				<h3>Category</h3>"+
		"				<div class=\"checkbox\">"+
		"					<input class=\"box ccol\" type=\"checkbox\">"+
		"					<div class=\"text ccol\">Physical</div>"+
		"				</div>"+
		"				<div class=\"checkbox\">"+
		"					<input class=\"box ccol\" type=\"checkbox\">"+
		"					<div class=\"text ccol\">Special</div>"+
		"				</div>"+
		"				<div class=\"checkbox\">"+
		"					<input class=\"box ccol\" type=\"checkbox\">"+
		"					<div class=\"text ccol\">Status</div>"+
		"				</div>"+
		"			</div>"+
		"			<div class=\"col checkBoxCatagory\">"+
		"				<h3>Status Effect</h3>"+
		"				<div class=\"checkbox\">"+
		"					<input class=\"box ccol\" type=\"checkbox\">"+
		"					<div class=\"text ccol\">Burn</div>"+
		"				</div>"+
		"				<div class=\"checkbox\">"+
		"					<input class=\"box ccol\" type=\"checkbox\">"+
		"					<div class=\"text ccol\">Freeze</div>"+
		"				</div>"+
		"				<div class=\"checkbox\">"+
		"					<input class=\"box ccol\" type=\"checkbox\">"+
		"					<div class=\"text ccol\">Paralysis</div>"+
		"				</div>"+
		"				<div class=\"checkbox\">"+
		"					<input class=\"box ccol\" type=\"checkbox\">"+
		"					<div class=\"text ccol\">Poison</div>"+
		"				</div>"+
		"				<div class=\"checkbox\">"+
		"					<input class=\"box ccol\" type=\"checkbox\">"+
		"					<div class=\"text ccol\">Sleep</div>"+
		"				</div>"+
		"			</div>"+
		"			<div class=\"col checkBoxCatagory\">"+
		"				<h3>Battle Effects</h3>"+
		"				<div class=\"checkbox\">"+
		"					<input class=\"box ccol\" type=\"checkbox\">"+
		"					<div class=\"text ccol\">Confusion</div>"+
		"				</div>"+
		"				<div class=\"checkbox\">"+
		"					<input class=\"box ccol\" type=\"checkbox\">"+
		"					<div class=\"text ccol\">Crit</div>"+
		"				</div>"+
		"				<div class=\"checkbox\">"+
		"					<input class=\"box ccol\" type=\"checkbox\">"+
		"					<div class=\"text ccol\">Flinch</div>"+
		"				</div>"+
		"				<div class=\"checkbox\">"+
		"					<input class=\"box ccol\" type=\"checkbox\">"+
		"					<div class=\"text ccol\">Heal</div>"+
		"				</div>"+
		"				<div class=\"checkbox\">"+
		"					<input class=\"box ccol\" type=\"checkbox\">"+
		"					<div class=\"text ccol\">Priority</div>"+
		"				</div>"+
		"				<div class=\"checkbox\">"+
		"					<input class=\"box ccol\" type=\"checkbox\">"+
		"					<div class=\"text ccol\">Trap</div>"+
		"				</div>"+
		"			</div>"+
		"		</div>"+
		"		<div>"+
		"			<div class=\"col checkBoxCatagory\">"+
		"				<h3>Stat Changes</h3>"+
		"				<div class=\"col\">"+
		"					<div class=\"checkbox\">"+
		"						<input class=\"box ccol\" type=\"checkbox\">"+
		"						<div class=\"text ccol\">Attack</div>"+
		"					</div>"+
		"					<div class=\"checkbox\">"+
		"						<input class=\"box ccol\" type=\"checkbox\">"+
		"						<div class=\"text ccol\">Defense</div>"+
		"					</div>"+
		"					<div class=\"checkbox\">"+
		"						<input class=\"box ccol\" type=\"checkbox\">"+
		"						<div class=\"text ccol\">Sp. Attack</div>"+
		"					</div>"+
		"					<div class=\"checkbox\">"+
		"						<input class=\"box ccol\" type=\"checkbox\">"+
		"						<div class=\"text ccol\">Sp. Defense</div>"+
		"					</div>"+
		"					<div class=\"checkbox\">"+
		"						<input class=\"box ccol\" type=\"checkbox\">"+
		"						<div class=\"text ccol\">Speed</div>"+
		"					</div>"+
		"					<div class=\"checkbox\">"+
		"						<input class=\"box ccol\" type=\"checkbox\">"+
		"						<div class=\"text ccol\">Accuracy</div>"+
		"					</div>"+
		"					<div class=\"checkbox\">"+
		"						<input class=\"box ccol\" type=\"checkbox\">"+
		"						<div class=\"text ccol\">Evasion</div>"+
		"					</div>"+
		"				</div>"+
		"				<div class=\"col\">"+
		"					<div class=\"checkbox\">"+
		"						<input class=\"box ccol\" type=\"checkbox\">"+
		"						<div class=\"text ccol\">+</div>"+
		"					</div>"+
		"					<div class=\"checkbox\">"+
		"						<input class=\"box ccol\" type=\"checkbox\">"+
		"						<div class=\"text ccol\">-</div>"+
		"					</div>"+
		"				</div>"+
		"				<div class=\"col\">"+
		"					<div class=\"checkbox\">"+
		"						<input class=\"box ccol\" type=\"checkbox\">"+
		"						<div class=\"text ccol\">1</div>"+
		"					</div>"+
		"					<div class=\"checkbox\">"+
		"						<input class=\"box ccol\" type=\"checkbox\">"+
		"						<div class=\"text ccol\">2</div>"+
		"					</div>"+
		"					<div class=\"checkbox\">"+
		"						<input class=\"box ccol\" type=\"checkbox\">"+
		"						<div class=\"text ccol\">3</div>"+
		"					</div>"+
		"					<div class=\"checkbox\">"+
		"						<input class=\"box ccol\" type=\"checkbox\">"+
		"						<div class=\"text ccol\">4</div>"+
		"					</div>"+
		"					<div class=\"checkbox\">"+
		"						<input class=\"box ccol\" type=\"checkbox\">"+
		"						<div class=\"text ccol\">5</div>"+
		"					</div>"+
		"					<div class=\"checkbox\">"+
		"						<input class=\"box ccol\" type=\"checkbox\">"+
		"						<div class=\"text ccol\">6</div>"+
		"					</div>"+
		"				</div>"+
		"			</div>"+
		"			<div class=\"col checkBoxCatagory\">"+
		"				<h3>Learned By</h3>"+
		"				<div class=\"checkbox\">"+
		"					<input class=\"box ccol\" type=\"checkbox\">"+
		"					<div class=\"text ccol\">Egg</div>"+
		"				</div>"+
		"				<div class=\"checkbox\">"+
		"					<input class=\"box ccol\" type=\"checkbox\">"+
		"					<div class=\"text ccol\">HM</div>"+
		"				</div>"+
		"				<div class=\"checkbox\">"+
		"					<input class=\"box ccol\" type=\"checkbox\">"+
		"					<div class=\"text ccol\">Level</div>"+
		"				</div>"+
		"				<div class=\"checkbox\">"+
		"					<input class=\"box ccol\" type=\"checkbox\">"+
		"					<div class=\"text ccol\">Pre-Evolution</div>"+
		"				</div>"+
		"				<div class=\"checkbox\">"+
		"					<input class=\"box ccol\" type=\"checkbox\">"+
		"					<div class=\"text ccol\">TM</div>"+
		"				</div>"+
		"				<div class=\"checkbox\">"+
		"					<input class=\"box ccol\" type=\"checkbox\">"+
		"					<div class=\"text ccol\">Transfer</div>"+
		"				</div>"+
		"				<div class=\"checkbox\">"+
		"					<input class=\"box ccol\" type=\"checkbox\">"+
		"					<div class=\"text ccol\">Tutor</div>"+
		"				</div>"+
		"			</div>"+
		"			<div class=\"col\">"+
		"				<div class=\"standardTextbox\">"+
		"					<h3>Power</h3>"+
		"					<div class=\"textBox ccol\">"+
		"						<div class=\"text ccol\">Min</div>"+
		"						<input class=\"box ccol\" type=\"text\">"+
		"					</div>"+
		"					<div class=\"textBox ccol\">"+
		"						<div class=\"text ccol\">Max</div>"+
		"						<input class=\"box ccol\" type=\"text\">"+
		"					</div>"+
		"				</div>"+
		"				<div class=\"standardTextbox\">"+
		"					<h3>Accuracy</h3>"+
		"					<div class=\"textBox ccol\">"+
		"						<div class=\"text ccol\">Min</div>"+
		"						<input class=\"box ccol\" type=\"text\">"+
		"					</div>"+
		"					<div class=\"textBox ccol\">"+
		"						<div class=\"text ccol\">Max</div>"+
		"						<input class=\"box ccol\" type=\"text\">"+
		"					</div>"+
		"				</div>"+
		"				<div class=\"standardTextbox\">"+
		"					<h3>PP</h3>"+
		"					<div class=\"textBox ccol\">"+
		"						<div class=\"text ccol\">Min</div>"+
		"						<input class=\"box ccol\" type=\"text\">"+
		"					</div>"+
		"					<div class=\"textBox ccol\">"+
		"						<div class=\"text ccol\">Max</div>"+
		"						<input class=\"box ccol\" type=\"text\">"+
		"					</div>"+
		"				</div>"+
		"			</div>"+
		"		</div>"+
		"	</div>"+
		"	<div class=\"movesTable\" type-insert=\"moves\">"+
		"		<div class=\"row\" background=\""+pokemon.battle.primaryType+"\">"+
		"			<div class=\"move cell\" border=\""+pokemon.battle.primaryType+"\">Move</div>"+
		"			<div class=\"type cell\" border=\""+pokemon.battle.primaryType+"\">Type</div>"+
		"			<div class=\"category cell\" border=\""+pokemon.battle.primaryType+"\">Category</div>"+
		"			<div class=\"power cell\" border=\""+pokemon.battle.primaryType+"\">Pwr</div>"+
		"			<div class=\"accuracy cell\" border=\""+pokemon.battle.primaryType+"\">Acc</div>"+
		"			<div class=\"effect cell\" border=\""+pokemon.battle.primaryType+"\">Effect</div>"+
		"			<div class=\"pp cell\" border=\""+pokemon.battle.primaryType+"\">PP</div>"+
		"		</div>"+
		"	</div>";
	}
	html.moves = function(move){
		return ""+
		"		<div class=\"row\">"+
		"			<div class=\"move cell\" border=\""+move.type+"\">"+move.move.name+"</div>"+
		"			<div class=\"type cell\" border=\""+move.type+"\">"+
		"				<div class=\"text\" background=\""+move.move.type+"\">"+move.move.type+"</div>"+
		"			</div>"+
		"			<div class=\"category cell\" border=\""+move.type+"\">"+move.move.category+"</div>"+
		"			<div class=\"power cell\" border=\""+move.type+"\">"+move.move.power+"</div>"+
		"			<div class=\"accuracy cell\" border=\""+move.type+"\">"+move.move.accuracy+"</div>"+
		"			<div class=\"effect cell\" border=\""+move.type+"\">"+move.effect+"</div>"+
		"			<div class=\"pp cell\" border=\""+move.type+"\">"+move.move.pp+"</div>"+
		"		</div>";
	}
	html.movesHeader = function(type){
		return ""+
		"	<div class=\"row\" background=\""+type+"\">"+
		"		<div class=\"move cell\" border=\""+type+"\">Move</div>"+
		"		<div class=\"type cell\" border=\""+type+"\">Type</div>"+
		"		<div class=\"category cell\" border=\""+type+"\">Category</div>"+
		"		<div class=\"power cell\" border=\""+type+"\">Pwr</div>"+
		"		<div class=\"accuracy cell\" border=\""+type+"\">Acc</div>"+
		"		<div class=\"effect cell\" border=\""+type+"\">Effect</div>"+
		"		<div class=\"pp cell\" border=\""+type+"\">PP</div>"+
		"	</div>";
	}
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
	var currImageIndex;
	var movesListNum;
	var typeFilter = [];

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
				checkBoxClick(box, movesTable);
			}
			box.addEventListener("click", callback);
		});
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
					if(!!effects.percentage[index]){
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
	checkBoxClick = function(box, movesTable){
		$(movesTable).empty();
		$(movesTable).append(html.movesHeader(primaryPokemon.battle.primaryType));
		console.log(box);
		if(box.getAttribute("section") == "type"){
			if(box.checked == true){
				typeFilter.push(box.getAttribute("catagory"));
			}else{
				
			}
			typeFilter.forEach(function(type){
				primaryPokemon.moves.all.forEach(function(move){
					if(dev.moves[move].type == type){
						var input = {
							type : primaryPokemon.battle.primaryType,
							move : dev.moves[move],
							effect : moveEffectsToString(dev.moves[move].effects),
						};
						html.load(movesTable, input);
					}
				})
			});
		}
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
		primaryPokemon.moves.all.forEach(function(move){
			var input = {
				type : primaryPokemon.battle.primaryType,
				move : dev.moves[move],
				effect : moveEffectsToString(dev.moves[move].effects),
			};
			html.load(movesTable, input);
		});
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
})(this);
(function(root){
	loadPage(pages.pageIds.POKEMONPROFILE);
})(this);