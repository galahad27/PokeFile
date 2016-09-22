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
				all : ["flamethrower"],
				level : ["flamethrower"],
				egg : [],
				tutor : [],
				preEvolution : [],
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
				burn : "10",
			},
			pokemon : ["ninetales"],
		}
	}

	root.dev = dev;
})(this);