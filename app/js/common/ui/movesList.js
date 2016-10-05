(function(root){
	html.movesList = function(pokemon){
		return ""+
		"	<div class=\"movesFilter\">"+
		"		<div>"+
		"			<div class=\"col checkBoxCatagory\">"+
		"				<h3>Types</h3>"+
		"				<div class=\"col\">"+
		"					<div class=\"checkbox\">"+
		"						<input class=\"box ccol\" type=\"checkbox\" filterType=\"type\" filter=\"Bug\">"+
		"						<div class=\"typeText ccol\" background=\"Bug\">Bug</div>"+
		"					</div>"+
		"					<div class=\"checkbox\">"+
		"						<input class=\"box ccol\" type=\"checkbox\" filterType=\"type\" filter=\"Dark\">"+
		"						<div class=\"typeText ccol\" background=\"Dark\">Dark</div>"+
		"					</div>"+
		"					<div class=\"checkbox\">"+
		"						<input class=\"box ccol\" type=\"checkbox\" filterType=\"type\" filter=\"Dragon\">"+
		"						<div class=\"typeText ccol\" background=\"Dragon\">Dragon</div>"+
		"					</div>"+
		"					<div class=\"checkbox\">"+
		"						<input class=\"box ccol\" type=\"checkbox\" filterType=\"type\" filter=\"Electric\">"+
		"						<div class=\"typeText ccol\" background=\"Electric\">Electric</div>"+
		"					</div>"+
		"					<div class=\"checkbox\">"+
		"						<input class=\"box ccol\" type=\"checkbox\" filterType=\"type\" filter=\"Fairy\">"+
		"						<div class=\"typeText ccol\" background=\"Fairy\">Fairy</div>"+
		"					</div>"+
		"					<div class=\"checkbox\">"+
		"						<input class=\"box ccol\" type=\"checkbox\" filterType=\"type\" filter=\"Fire\">"+
		"						<div class=\"typeText ccol\" background=\"Fire\">Fire</div>"+
		"					</div>"+
		"				</div>"+
		"				<div class=\"col\">"+
		"					<div class=\"checkbox\">"+
		"						<input class=\"box ccol\" type=\"checkbox\" filterType=\"type\" filter=\"Fighting\">"+
		"						<div class=\"typeText ccol\" background=\"Fighting\">Fighting</div>"+
		"					</div>"+
		"					<div class=\"checkbox\">"+
		"						<input class=\"box ccol\" type=\"checkbox\" filterType=\"type\" filter=\"Flying\">"+
		"						<div class=\"typeText ccol\" background=\"Flying\">Flying</div>"+
		"					</div>"+
		"					<div class=\"checkbox\">"+
		"						<input class=\"box ccol\" type=\"checkbox\" filterType=\"type\" filter=\"Ghost\">"+
		"						<div class=\"typeText ccol\" background=\"Ghost\">Ghost</div>"+
		"					</div>"+
		"					<div class=\"checkbox\">"+
		"						<input class=\"box ccol\" type=\"checkbox\" filterType=\"type\" filter=\"Grass\">"+
		"						<div class=\"typeText ccol\" background=\"Grass\">Grass</div>"+
		"					</div>"+
		"					<div class=\"checkbox\">"+
		"						<input class=\"box ccol\" type=\"checkbox\" filterType=\"type\" filter=\"Ground\">"+
		"						<div class=\"typeText ccol\" background=\"Ground\">Ground</div>"+
		"					</div>"+
		"					<div class=\"checkbox\">"+
		"						<input class=\"box ccol\" type=\"checkbox\" filterType=\"type\" filter=\"Ice\">"+
		"						<div class=\"typeText ccol\" background=\"Ice\">Ice</div>"+
		"					</div>"+
		"				</div>"+
		"				<div class=\"col\">"+
		"					<div class=\"checkbox\">"+
		"						<input class=\"box ccol\" type=\"checkbox\" filterType=\"type\" filter=\"Normal\">"+
		"						<div class=\"typeText ccol\" background=\"Normal\">Normal</div>"+
		"					</div>"+
		"					<div class=\"checkbox\">"+
		"						<input class=\"box ccol\" type=\"checkbox\" filterType=\"type\" filter=\"Poison\">"+
		"						<div class=\"typeText ccol\" background=\"Poison\">Poison</div>"+
		"					</div>"+
		"					<div class=\"checkbox\">"+
		"						<input class=\"box ccol\" type=\"checkbox\" filterType=\"type\" filter=\"Psychic\">"+
		"						<div class=\"typeText ccol\" background=\"Psychic\">Psychic</div>"+
		"					</div>"+
		"					<div class=\"checkbox\">"+
		"						<input class=\"box ccol\" type=\"checkbox\" filterType=\"type\" filter=\"Rock\">"+
		"						<div class=\"typeText ccol\" background=\"Rock\">Rock</div>"+
		"					</div>"+
		"					<div class=\"checkbox\">"+
		"						<input class=\"box ccol\" type=\"checkbox\" filterType=\"type\" filter=\"Steel\">"+
		"						<div class=\"typeText ccol\" background=\"Steel\">Steel</div>"+
		"					</div>"+
		"					<div class=\"checkbox\">"+
		"						<input class=\"box ccol\" type=\"checkbox\" filterType=\"type\" filter=\"Water\">"+
		"						<div class=\"typeText ccol\" background=\"Water\">Water</div>"+
		"					</div>"+
		"				</div>"+
		"			</div>"+
		"			<div class=\"col checkBoxCatagory\">"+
		"				<h3>Category</h3>"+
		"				<div class=\"checkbox\">"+
		"					<input class=\"box ccol\" type=\"checkbox\" filterType=\"category\" filter=\"Physical\">"+
		"					<div class=\"text ccol\">Physical</div>"+
		"				</div>"+
		"				<div class=\"checkbox\">"+
		"					<input class=\"box ccol\" type=\"checkbox\" filterType=\"category\" filter=\"Special\">"+
		"					<div class=\"text ccol\">Special</div>"+
		"				</div>"+
		"				<div class=\"checkbox\">"+
		"					<input class=\"box ccol\" type=\"checkbox\" filterType=\"category\" filter=\"Status\">"+
		"					<div class=\"text ccol\">Status</div>"+
		"				</div>"+
		"			</div>"+
		"			<div class=\"col checkBoxCatagory\">"+
		"				<h3>Status Effect</h3>"+
		"				<div class=\"checkbox\">"+
		"					<input class=\"box ccol\" type=\"checkbox\" filterType=\"status\" filter=\"Burn\">"+
		"					<div class=\"text ccol\">Burn</div>"+
		"				</div>"+
		"				<div class=\"checkbox\">"+
		"					<input class=\"box ccol\" type=\"checkbox\" filterType=\"status\" filter=\"Freeze\">"+
		"					<div class=\"text ccol\">Freeze</div>"+
		"				</div>"+
		"				<div class=\"checkbox\">"+
		"					<input class=\"box ccol\" type=\"checkbox\" filterType=\"status\" filter=\"Paralysis\">"+
		"					<div class=\"text ccol\">Paralysis</div>"+
		"				</div>"+
		"				<div class=\"checkbox\">"+
		"					<input class=\"box ccol\" type=\"checkbox\" filterType=\"status\" filter=\"Poison\">"+
		"					<div class=\"text ccol\">Poison</div>"+
		"				</div>"+
		"				<div class=\"checkbox\">"+
		"					<input class=\"box ccol\" type=\"checkbox\" filterType=\"status\" filter=\"Sleep\">"+
		"					<div class=\"text ccol\">Sleep</div>"+
		"				</div>"+
		"			</div>"+
		"			<div class=\"col checkBoxCatagory\">"+
		"				<h3>Battle Effects</h3>"+
		"				<div class=\"checkbox\">"+
		"					<input class=\"box ccol\" type=\"checkbox\" filterType=\"battle\" filter=\"Confusion\">"+
		"					<div class=\"text ccol\">Confusion</div>"+
		"				</div>"+
		"				<div class=\"checkbox\">"+
		"					<input class=\"box ccol\" type=\"checkbox\" filterType=\"battle\" filter=\"Crit\">"+
		"					<div class=\"text ccol\">Crit</div>"+
		"				</div>"+
		"				<div class=\"checkbox\">"+
		"					<input class=\"box ccol\" type=\"checkbox\" filterType=\"battle\" filter=\"Flinch\">"+
		"					<div class=\"text ccol\">Flinch</div>"+
		"				</div>"+
		"				<div class=\"checkbox\">"+
		"					<input class=\"box ccol\" type=\"checkbox\" filterType=\"battle\" filter=\"Heal\">"+
		"					<div class=\"text ccol\">Heal</div>"+
		"				</div>"+
		"				<div class=\"checkbox\">"+
		"					<input class=\"box ccol\" type=\"checkbox\" filterType=\"battle\" filter=\"Priority\">"+
		"					<div class=\"text ccol\">Priority</div>"+
		"				</div>"+
		"				<div class=\"checkbox\">"+
		"					<input class=\"box ccol\" type=\"checkbox\" filterType=\"battle\" filter=\"Trap\">"+
		"					<div class=\"text ccol\">Trap</div>"+
		"				</div>"+
		"			</div>"+
		"		</div>"+
		"		<div>"+
		"			<div class=\"col checkBoxCatagory\">"+
		"				<h3>Stat Changes</h3>"+
		"				<div class=\"col\">"+
		"					<div class=\"checkbox\">"+
		"						<input class=\"box ccol\" type=\"checkbox\" filterType=\"stat\" filter=\"Attack\">"+
		"						<div class=\"text ccol\">Attack</div>"+
		"					</div>"+
		"					<div class=\"checkbox\">"+
		"						<input class=\"box ccol\" type=\"checkbox\" filterType=\"stat\" filter=\"Defense\">"+
		"						<div class=\"text ccol\">Defense</div>"+
		"					</div>"+
		"					<div class=\"checkbox\">"+
		"						<input class=\"box ccol\" type=\"checkbox\" filterType=\"stat\" filter=\"Special Attack\">"+
		"						<div class=\"text ccol\">Sp. Attack</div>"+
		"					</div>"+
		"					<div class=\"checkbox\">"+
		"						<input class=\"box ccol\" type=\"checkbox\" filterType=\"stat\" filter=\"Special Defense\">"+
		"						<div class=\"text ccol\">Sp. Defense</div>"+
		"					</div>"+
		"					<div class=\"checkbox\">"+
		"						<input class=\"box ccol\" type=\"checkbox\" filterType=\"stat\" filter=\"Speed\">"+
		"						<div class=\"text ccol\">Speed</div>"+
		"					</div>"+
		"					<div class=\"checkbox\">"+
		"						<input class=\"box ccol\" type=\"checkbox\" filterType=\"stat\" filter=\"Accuracy\">"+
		"						<div class=\"text ccol\">Accuracy</div>"+
		"					</div>"+
		"					<div class=\"checkbox\">"+
		"						<input class=\"box ccol\" type=\"checkbox\" filterType=\"stat\" filter=\"Evasion\">"+
		"						<div class=\"text ccol\">Evasion</div>"+
		"					</div>"+
		"				</div>"+
		"				<div class=\"col\">"+
		"					<div class=\"checkbox\">"+
		"						<input class=\"box ccol\" type=\"checkbox\" filterType=\"statDir\" filter=\"+\">"+
		"						<div class=\"text ccol\">+</div>"+
		"					</div>"+
		"					<div class=\"checkbox\">"+
		"						<input class=\"box ccol\" type=\"checkbox\" filterType=\"statDir\" filter=\"-\">"+
		"						<div class=\"text ccol\">-</div>"+
		"					</div>"+
		"				</div>"+
		"				<div class=\"col\">"+
		"					<div class=\"checkbox\">"+
		"						<input class=\"box ccol\" type=\"checkbox\" filterType=\"statNum\" filter=\"1\">"+
		"						<div class=\"text ccol\">1</div>"+
		"					</div>"+
		"					<div class=\"checkbox\">"+
		"						<input class=\"box ccol\" type=\"checkbox\" filterType=\"statNum\" filter=\"2\">"+
		"						<div class=\"text ccol\">2</div>"+
		"					</div>"+
		"					<div class=\"checkbox\">"+
		"						<input class=\"box ccol\" type=\"checkbox\" filterType=\"statNum\" filter=\"3\">"+
		"						<div class=\"text ccol\">3</div>"+
		"					</div>"+
		"					<div class=\"checkbox\">"+
		"						<input class=\"box ccol\" type=\"checkbox\" filterType=\"statNum\" filter=\"4\">"+
		"						<div class=\"text ccol\">4</div>"+
		"					</div>"+
		"					<div class=\"checkbox\">"+
		"						<input class=\"box ccol\" type=\"checkbox\" filterType=\"statNum\" filter=\"5\">"+
		"						<div class=\"text ccol\">5</div>"+
		"					</div>"+
		"					<div class=\"checkbox\">"+
		"						<input class=\"box ccol\" type=\"checkbox\" filterType=\"statNum\" filter=\"6\">"+
		"						<div class=\"text ccol\">6</div>"+
		"					</div>"+
		"				</div>"+
		"			</div>"+
		"			<div class=\"col checkBoxCatagory\">"+
		"				<h3>Learned By</h3>"+
		"				<div class=\"checkbox\">"+
		"					<input class=\"box ccol\" type=\"checkbox\" filterType=\"learn\" filter=\"egg\">"+
		"					<div class=\"text ccol\">Egg</div>"+
		"				</div>"+
		"				<div class=\"checkbox\">"+
		"					<input class=\"box ccol\" type=\"checkbox\" filterType=\"learn\" filter=\"hm\">"+
		"					<div class=\"text ccol\">HM</div>"+
		"				</div>"+
		"				<div class=\"checkbox\">"+
		"					<input class=\"box ccol\" type=\"checkbox\" filterType=\"learn\" filter=\"level\">"+
		"					<div class=\"text ccol\">Level</div>"+
		"				</div>"+
		"				<div class=\"checkbox\">"+
		"					<input class=\"box ccol\" type=\"checkbox\" filterType=\"learn\" filter=\"preEvolution\">"+
		"					<div class=\"text ccol\">Pre-Evolution</div>"+
		"				</div>"+
		"				<div class=\"checkbox\">"+
		"					<input class=\"box ccol\" type=\"checkbox\" filterType=\"learn\" filter=\"tm\">"+
		"					<div class=\"text ccol\">TM</div>"+
		"				</div>"+
		"				<div class=\"checkbox\">"+
		"					<input class=\"box ccol\" type=\"checkbox\" filterType=\"learn\" filter=\"transfer\">"+
		"					<div class=\"text ccol\">Transfer</div>"+
		"				</div>"+
		"				<div class=\"checkbox\">"+
		"					<input class=\"box ccol\" type=\"checkbox\" filterType=\"learn\" filter=\"tutor\">"+
		"					<div class=\"text ccol\">Tutor</div>"+
		"				</div>"+
		"			</div>"+
		"			<div class=\"col\">"+
		"				<div class=\"standardTextbox\">"+
		"					<h3>Power</h3>"+
		"					<div class=\"textBox ccol\">"+
		"						<div class=\"text ccol\">Min</div>"+
		"						<input class=\"box ccol minBox powerMin\" type=\"text\">"+
		"					</div>"+
		"					<div class=\"textBox ccol\">"+
		"						<div class=\"text ccol\">Max</div>"+
		"						<input class=\"box ccol maxBox powerMax\" type=\"text\">"+
		"					</div>"+
		"					<button class=\"submitButton ccol\" type=\"button\" filterType=\"power\">Submit</button>"+
		"				</div>"+
		"				<div class=\"standardTextbox\">"+
		"					<h3>Accuracy</h3>"+
		"					<div class=\"textBox ccol\">"+
		"						<div class=\"text ccol\">Min</div>"+
		"						<input class=\"box ccol minBox accuracyMin\" type=\"text\">"+
		"					</div>"+
		"					<div class=\"textBox ccol\">"+
		"						<div class=\"text ccol\">Max</div>"+
		"						<input class=\"box ccol maxBox accuracyMax\" type=\"text\">"+
		"					</div>"+
		"					<button class=\"submitButton ccol\" type=\"button\" filterType=\"accuracy\">Submit</button>"+
		"				</div>"+
		"				<div class=\"standardTextbox\">"+
		"					<h3>PP</h3>"+
		"					<div class=\"textBox ccol\">"+
		"						<div class=\"text ccol\">Min</div>"+
		"						<input class=\"box ccol minBox ppMin\" type=\"text\">"+
		"					</div>"+
		"					<div class=\"textBox ccol\">"+
		"						<div class=\"text ccol\">Max</div>"+
		"						<input class=\"box ccol maxBox ppMax\" type=\"text\">"+
		"					</div>"+
		"					<button class=\"submitButton ccol\" type=\"button\" filterType=\"pp\">Submit</button>"+
		"				</div>"+
		"			</div>"+
		"			<div class=\"col\">"+
		"				<button class=\"clearButton\" type=\"button\">Clear</button>"+
		"				<button class=\"removeButton\" type=\"button\">Remove</button>"+
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
	html.addButton = function(){
		return ""+
		"	<button class=\"addButton\" type=\"button\"><img src=\"./res/img/stock/plus.png\"></button>";
	}
})(this);