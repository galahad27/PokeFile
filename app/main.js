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
	var html = {};

	html.load = function(parent, type, input){
		var UI = html[type]();
		$(parent).append(UI.el(input));
		!!UI.hasLoaded && UI.hasLoaded(parent);
		return UI;
	};

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
	utill.regex = function(input, regex){
		return regex.test(input);
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
		pageUIs = pages.activePage.querySelectorAll("[pre-insert]");
		pageUIs.forEach(function(UI){
			html.load(UI, UI.getAttribute("pre-insert"));
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
	html.checkBoxObject = function(title, background){
		return ""+
		"<div class=\"checkBoxObject\">"+
		"	<input class=\"checkbox\" type=\"checkbox\">"+
		"	<div class=\"title\" background=\""+background+"\">"+title+"</div>"+
		"</div>";
	}
	html.minMaxTextBoxObject = function(){
		return""+
		"<div class=\"minMaxTextBoxObject\">"+
		"	<div class=\"minText\">Min</div>"+
		"	<input class=\"minInput\" type=\"text\">"+
		"	<div class=\"maxText\">Max</div>"+
		"	<input class=\"maxInput\" type=\"text\">"+
		"	<button class=\"submitButton\" type=\"button\">Submit</button>"+
		"</div>";
	}
})(this);
(function(root){
	html.movesFilter = function(){
		var el = function(){
			return ""+
			"	<div class=\"movesFilter\">"+
			"		<div class=\"row\">"+
			"			<div class=\"cell\" filterCategory=\"types\">"+
			"				<h3>Types</h3>"+
			"				<div class=\"table\">"+
			"					<div class=\"row\">"+
			"						<div class=\"cell\" filterName=\"bug\">"+ html.checkBoxObject("Bug", "Bug") +"</div>"+
			"						<div class=\"cell\" filterName=\"fighting\">"+ html.checkBoxObject("Fighting", "Fighting") +"</div>"+
			"						<div class=\"cell\" filterName=\"normal\">"+ html.checkBoxObject("Normal", "Normal") +"</div>"+
			"					</div>"+
			"					<div class=\"row\">"+
			"						<div class=\"cell\" filterName=\"dark\">"+ html.checkBoxObject("Dark", "Dark") +"</div>"+
			"						<div class=\"cell\" filterName=\"flying\">"+ html.checkBoxObject("Flying", "Flying") +"</div>"+
			"						<div class=\"cell\" filterName=\"poison\">"+ html.checkBoxObject("Poison", "Poison") +"</div>"+
			"					</div>"+
			"					<div class=\"row\">"+
			"						<div class=\"cell\" filterName=\"dragon\">"+ html.checkBoxObject("Dragon", "Dragon") +"</div>"+
			"						<div class=\"cell\" filterName=\"ghost\">"+ html.checkBoxObject("Bug", "Bug") +"</div>"+
			"						<div class=\"cell\" filterName=\"psychic\">"+ html.checkBoxObject("Psychic", "Psychic") +"</div>"+
			"					</div>"+
			"					<div class=\"row\">"+
			"						<div class=\"cell\" filterName=\"electric\">"+ html.checkBoxObject("Electric", "Electric") +"</div>"+
			"						<div class=\"cell\" filterName=\"grass\">"+ html.checkBoxObject("Grass", "Grass") +"</div>"+
			"						<div class=\"cell\" filterName=\"rock\">"+ html.checkBoxObject("Rock", "Rock") +"</div>"+
			"					</div>"+
			"					<div class=\"row\">"+
			"						<div class=\"cell\" filterName=\"fairy\">"+ html.checkBoxObject("Fairy", "Fairy") +"</div>"+
			"						<div class=\"cell\" filterName=\"ground\">"+ html.checkBoxObject("Ground", "Ground") +"</div>"+
			"						<div class=\"cell\" filterName=\"steel\">"+ html.checkBoxObject("Steel", "Steel") +"</div>"+
			"						</div>"+
			"					<div class=\"row\">"+
			"						<div class=\"cell\" filterName=\"fire\">"+ html.checkBoxObject("Fire", "Fire") +"</div>"+
			"						<div class=\"cell\" filterName=\"ice\">"+ html.checkBoxObject("Ice", "Ice") +"</div>"+
			"						<div class=\"cell\" filterName=\"water\">"+ html.checkBoxObject("Water", "Water") +"</div>"+
			"					</div>"+
			"				</div>"+
			"			</div>"+
			"			<div class=\"cell\" filterCategory=\"category\">"+
			"				<h3>Category</h3>"+
			"				<div filterName=\"physical\">"+ html.checkBoxObject("Physical") +"</div>"+
			"				<div filterName=\"special\">"+ html.checkBoxObject("Special") +"</div>"+
			"				<div filterName=\"status\">"+ html.checkBoxObject("Status") +"</div>"+
			"			</div>"+
			"			<div class=\"cell\" filterCategory=\"statusEffects\">"+
			"				<h3>Status Effects</h3>"+
			"				<div filterName=\"burn\">"+ html.checkBoxObject("Burn") +"</div>"+
			"				<div filterName=\"freeze\">"+ html.checkBoxObject("Freeze") +"</div>"+
			"				<div filterName=\"paralysis\">"+ html.checkBoxObject("Paralysis") +"</div>"+
			"				<div filterName=\"poison\">"+ html.checkBoxObject("Poison") +"</div>"+
			"				<div filterName=\"sleep\">"+ html.checkBoxObject("Sleep") +"</div>"+
			"			</div>"+
			"			<div class=\"cell\" filterCategory=\"battleEffects\">"+
			"				<h3>Battle Effects</h3>"+
			"				<div filterName=\"confusion\">"+ html.checkBoxObject("Confusion") +"</div>"+
			"				<div filterName=\"crit\">"+ html.checkBoxObject("Crit") +"</div>"+
			"				<div filterName=\"flinch\">"+ html.checkBoxObject("Flinch") +"</div>"+
			"				<div filterName=\"heal\">"+ html.checkBoxObject("Heal") +"</div>"+
			"				<div filterName=\"priority\">"+ html.checkBoxObject("Priority") +"</div>"+
			"				<div filterName=\"trap\">"+ html.checkBoxObject("Trap") +"</div>"+
			"			</div>"+
			"		</div>"+
			"		<div class=\"row\">"+
			"			<div class=\"cell\" filterCategory=\"statChanges\">"+
			"				<h3>Stat Changes</h3>"+
			"				<div class=\"table\">"+
			"					<div class=\"row\">"+
			"						<div class=\"cell\" filterName=\"attack\">"+ html.checkBoxObject("Attack") +"</div>"+
			"						<div class=\"cell\" filterName=\"statIncrease\">"+ html.checkBoxObject("+") +"</div>"+
			"						<div class=\"cell\" filterName=\"statOne\">"+ html.checkBoxObject("1") +"</div>"+
			"					</div>"+
			"					<div class=\"row\">"+
			"						<div class=\"cell\" filterName=\"defense\">"+ html.checkBoxObject("Defense") +"</div>"+
			"						<div class=\"cell\" filterName=\"statDecrease\">"+ html.checkBoxObject("-") +"</div>"+
			"						<div class=\"cell\" filterName=\"statTwo\">"+ html.checkBoxObject("2") +"</div>"+
			"					</div>"+
			"					<div class=\"row\">"+
			"						<div class=\"cell\" filterName=\"spAttack\">"+ html.checkBoxObject("Sp. Attack") +"</div>"+
			"						<div class=\"cell\"></div>"+
			"						<div class=\"cell\" filterName=\"statThree\">"+ html.checkBoxObject("3") +"</div>"+
			"					</div>"+
			"					<div class=\"row\">"+
			"						<div class=\"cell\" filterName=\"spDefense\">"+ html.checkBoxObject("Sp. Defense") +"</div>"+
			"						<div class=\"cell\"></div>"+
			"						<div class=\"cell\" filterName=\"statFour\">"+ html.checkBoxObject("4") +"</div>"+
			"					</div>"+
			"					<div class=\"row\">"+
			"						<div class=\"cell\" filterName=\"speed\">"+ html.checkBoxObject("Speed") +"</div>"+
			"						<div class=\"cell\"></div>"+
			"						<div class=\"cell\" filterName=\"statFive\">"+ html.checkBoxObject("5") +"</div>"+
			"					</div>"+
			"					<div class=\"row\">"+
			"						<div class=\"cell\" filterName=\"accuracy\">"+ html.checkBoxObject("Accuracy") +"</div>"+
			"						<div class=\"cell\"></div>"+
			"						<div class=\"cell\" filterName=\"statSix\">"+ html.checkBoxObject("6") +"</div>"+
			"					</div>"+
			"					<div class=\"row\">"+
			"						<div class=\"cell\" filterName=\"evasion\">"+ html.checkBoxObject("Evasion") +"</div>"+
			"						<div class=\"cell\"></div>"+
			"						<div class=\"cell\"></div>"+
			"					</div>"+
			"				</div>"+
			"			</div>"+
			"				<div class=\"cell\" filterCategory=\"learnedBy\">"+
			"				<h3>Learned By</h3>"+
			"				<div filterName=\"egg\">"+ html.checkBoxObject("Egg") +"</div>"+
			"				<div filterName=\"hm\">"+ html.checkBoxObject("HM") +"</div>"+
			"				<div filterName=\"level\">"+ html.checkBoxObject("Level") +"</div>"+
			"				<div filterName=\"preEvolution\">"+ html.checkBoxObject("Pre-Evolution") +"</div>"+
			"				<div filterName=\"tm\">"+ html.checkBoxObject("TM") +"</div>"+
			"				<div filterName=\"transfer\">"+ html.checkBoxObject("Transfer") +"</div>"+
			"				<div filterName=\"tutor\">"+ html.checkBoxObject("Tutor") +"</div>"+
			"			</div>"+
			"			<div class=\"cell\">"+
			"				<div filterCategory=\"power\"><h3>Power</h3>"+html.minMaxTextBoxObject()+"</div>"+
			"				<div filterCategory=\"accuracy\"><h3>Accuracy</h3>"+html.minMaxTextBoxObject()+"</div>"+
			"				<div filterCategory=\"pp\"><h3>PP</h3>"+html.minMaxTextBoxObject()+"</div>"+
			"			</div>"+
			"			<div class=\"cell\">"+
			"				<button class=\"clearButton\" type=\"button\">Clear</button>"+
			"				<button class=\"removeButton\" type=\"button\">Remove</button>"+
			"			</div>"+
			"		</div>"+
			"	</div>";
		}
		var filterMoves = function(moves){

		}

		return {
			el: el,
			filterMoves: filterMoves,
		}
	}
})(this);
(function(root){

	html.movesTable = function(){


		var el = function(type){
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
			el: el,
			addMoves: addMoves,
		}
	}
})(this);
(function(root){
	html.pageHeader = function(){
		var el = function(){
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
			el: el,
		}
	}
})(this);
(function(root){
	html.pokedexEntry = function(){
		var el = function(input){
			return "<p class=\"pokedexEntry\"><b>"+input[0]+"</b>: "+input[1]+"</p>";
		}
		return{
			el : el,
		}
	}
})(this);

(function(root){
	html.statBarGraph = function(){
		var barGraph;

		var el = function(input){
			return ""+
				"<div class=\"statBarGraph\">"+
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
					"</div>"+
				"</div>";
			}
			var hasLoaded = function(parent){
				barGraph = parent.querySelector(".statBarGraph");
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
				el : el,
				hasLoaded : hasLoaded,
				setBarLength : setBarLength,
			}
		
	}


})(this);
(function(root){
	html.statTable = function(input){
		var el = function(input){
			var min = utill.statFormula(input.level, input.stat, 0, 0, 0.9, input.isHp);
			var iv = utill.statFormula(input.level, input.stat, 31, 0, 1, input.isHp);
			var ivEv = utill.statFormula(input.level, input.stat, 31, 252, 1, input.isHp);
			var max = utill.statFormula(input.level, input.stat, 31, 252, 1.1, input.isHp);
			return ""+
				"<div class=\"statTable\">"+
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
			el : el,
		}
	}
})(this);
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
(function(root){
	loadPage(pages.pageIds.POKEMONPROFILE);
})(this);