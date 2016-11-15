(function(root){
	var dev = {};

	dev.pokemon = {
		ninetales : {
			id: "ninetales",
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
			id: "flamethrower",
			name : "Flamethrower",
			type : "fire",
			category : "special",
			power : "90",
			accuracy : "100",
			pp : "15",
			effects : [
				{
					type : "status",
					condition : "burn",
					chance : "10",
				},
			],
			pokemon : ["ninetales"],
		},
		extrasensory : {
			id: "extrasensory",
			name : "Extrasensory",
			type : "psychic",
			category : "special",
			power : "80",
			accuracy : "100",
			pp : "20",
			effects : [
				{
					type : "battle",
					condition : "flinch",
					chance : "10",
				},
			],
			pokemon : ["ninetales"],	
		},
		heatWave : {
			id: "heatWave",
			name : "Heat Wave",
			type : "fire",
			category : "special",
			power : "95",
			accuracy : "90",
			pp : "10",
			effects : [
				{
					type : "status",
					condition : "burn",
					chance : "10",
				},
			],
			pokemon : ["ninetales"],
		},
		confuseRay : {
			id: "confuseRay",
			name : "Confuse Ray",
			type : "ghost",
			category : "status",
			power : "",
			accuracy : "100",
			pp : "10",
			effects : [
				{
					type : "battle",
					condition : "confusion",
					chance : "100",
				},
			],
			pokemon : ["ninetales"],
		},
		imprison : {
			id: "imprison",
			name : "Imprison",
			type : "psychic",
			category : "status",
			power : "",
			accuracy : "",
			pp : "10",
			effects : [],
			pokemon : ["ninetales"],
		},
		nastyPlot : {
			id: "nastyPlot",
			name : "Nasty Plot",
			type : "dark",
			category : "status",
			power : "",
			accuracy : "",
			pp : "20",
			effects : [
				{
					type : "stat",
					stat : "spAttack",
					dir : "+",
					disp : "2",
				},
			],
			pokemon : ["ninetales"],
		},
		quickAttack : {
			id: "quickAttack",
			name : "Quick Attack",
			type : "normal",
			category : "physical",
			power : "40",
			accuracy : "100",
			pp : "30",
			effects : [
				{
					type : "battle",
					condition : "priority",
					dir : "+",
					disp : "1",
				},
			],
			pokemon : ["ninetales"],
		},
		safeguard : {
			id: "safeguard",
			name : "Safeguard",
			type : "normal",
			category : "status",
			power : "",
			accuracy : "",
			pp : "25",
			effects : [],
			pokemon : ["ninetales"],
		},
	}

	dev.abilities = {
		flashFire : {
			id: "flashFire",
			name : "Flash Fire",
		},
		drought : {
			id: "drought",
			name : "Drought",
		},
	}

	dev.types = {
		bug: {
			id: "bug",
			name : "Bug",
			colors :{
				main : "#A8B820",
				border : "#A88820",
			},
		},
		dark: {
			id: "dark",
			name : "Dark",
			colors :{
				main : "#705848",
				border : "#702848",
			},
		},
		dragon: {
			id: "dragon",
			name : "Dragon",
			colors :{
				main : "#7038F8",
				border : "#7008F8",
			},
		},
		electric: {
			id: "electric",
			name : "Electric",
			colors :{
				main : "#F8D030",
				border : "#F8A030",
			},
		},
		fairy: {
			id: "fairy",
			name : "Fairy",
			colors :{
				main : "#EE99AC",
				border : "#EE69AC",
			},
		},
		fire: {
			id: "fire",
			name : "Fire",
			colors :{
				main : "#F08030",
				border : "#F05030",
			},
		},
		fighting: {
			id: "fighting",
			name : "Fighting",
			colors :{
				main : "#C03028",
				border : "#C00028",
			},
		},
		flying: {
			id: "flying",
			name : "Flying",
			colors :{
				main : "#A890F0",
				border : "#A860F0",
			},
		},
		ghost: {
			id: "ghost",
			name : "Ghost",
			colors :{
				main : "#705898",
				border : "#702898",
			},
		},
		grass: {
			id: "grass",
			name : "Grass",
			colors :{
				main : "#78C850",
				border : "#789850",
			},
		},
		ground: {
			id: "ground",
			name : "Ground",
			colors :{
				main : "#E0C068",
				border : "#E09068",
			},
		},
		ice: {
			id: "ice",
			name : "Ice",
			colors :{
				main : "#98D8D8",
				border : "#98A8D8",
			},
		},
		normal: {
			id: "normal",
			name : "Normal",
			colors :{
				main : "#A8A878",
				border : "#A87878",
			},
		},
		poison: {
			id: "poison",
			name : "Poison",
			colors :{
				main : "#A040A0",
				border : "#A010A0",
			},
		},
		psychic: {
			id: "psychic",
			name : "Psychic",
			colors :{
				main : "#F85888",
				border : "#F82888",
			},
		},
		rock: {
			id: "rock",
			name : "Rock",
			colors :{
				main : "#B8A038",
				border : "#B87038",
			},
		},
		steel: {
			id: "steel",
			name : "Steel",
			colors :{
				main : "#B8B8D0",
				border : "#B888D0",
			},
		},
		water: {
			id: "water",
			name : "Water",
			colors :{
				main : "#6890F0",
				border : "#6860F0",
			},
		},
	}

	root.dev = dev;
})(this);