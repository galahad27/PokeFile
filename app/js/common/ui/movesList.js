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