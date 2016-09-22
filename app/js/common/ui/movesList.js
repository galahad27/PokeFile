(function(root){
	html.movesList = function(pokemon){
		return ""+
		"	<div class=\"movesFilter\">"+
		"		<div class=\"col types\">"+
		"			<h3>Types</h3>"+
		"			<div class=\"col\">"+
		"				<div class=\"checkbox\">"+
		"					<input class=\"box ccol\" type=\"checkbox\">"+
		"					<div class=\"text ccol\" background=\"Bug\">Bug</div>"+
		"				</div>"+
		"				<div class=\"checkbox\">"+
		"					<input class=\"box ccol\" type=\"checkbox\">"+
		"					<div class=\"text ccol\" background=\"Dark\">Dark</div>"+
		"				</div>"+
		"				<div class=\"checkbox\">"+
		"					<input class=\"box ccol\" type=\"checkbox\">"+
		"					<div class=\"text ccol\" background=\"Dragon\">Dragon</div>"+
		"				</div>"+
		"				<div class=\"checkbox\">"+
		"					<input class=\"box ccol\" type=\"checkbox\">"+
		"					<div class=\"text ccol\" background=\"Electric\">Electric</div>"+
		"				</div>"+
		"				<div class=\"checkbox\">"+
		"					<input class=\"box ccol\" type=\"checkbox\">"+
		"					<div class=\"text ccol\" background=\"Fairy\">Fairy</div>"+
		"				</div>"+
		"				<div class=\"checkbox\">"+
		"					<input class=\"box ccol\" type=\"checkbox\">"+
		"					<div class=\"text ccol\" background=\"Fire\">Fire</div>"+
		"				</div>"+
		"			</div>"+
		"			<div class=\"col\">"+
		"				<div class=\"checkbox\">"+
		"					<input class=\"box ccol\" type=\"checkbox\">"+
		"					<div class=\"text ccol\" background=\"Fighting\">Fighting</div>"+
		"				</div>"+
		"				<div class=\"checkbox\">"+
		"					<input class=\"box ccol\" type=\"checkbox\">"+
		"					<div class=\"text ccol\" background=\"Flying\">Flying</div>"+
		"				</div>"+
		"				<div class=\"checkbox\">"+
		"					<input class=\"box ccol\" type=\"checkbox\">"+
		"					<div class=\"text ccol\" background=\"Ghost\">Ghost</div>"+
		"				</div>"+
		"				<div class=\"checkbox\">"+
		"					<input class=\"box ccol\" type=\"checkbox\">"+
		"					<div class=\"text ccol\" background=\"Grass\">Grass</div>"+
		"				</div>"+
		"				<div class=\"checkbox\">"+
		"					<input class=\"box ccol\" type=\"checkbox\">"+
		"					<div class=\"text ccol\" background=\"Ground\">Ground</div>"+
		"				</div>"+
		"				<div class=\"checkbox\">"+
		"					<input class=\"box ccol\" type=\"checkbox\">"+
		"					<div class=\"text ccol\" background=\"Ice\">Ice</div>"+
		"				</div>"+
		"			</div>"+
		"			<div class=\"col\">"+
		"				<div class=\"checkbox\">"+
		"					<input class=\"box ccol\" type=\"checkbox\">"+
		"					<div class=\"text ccol\" background=\"Normal\">Normal</div>"+
		"				</div>"+
		"				<div class=\"checkbox\">"+
		"					<input class=\"box ccol\" type=\"checkbox\">"+
		"					<div class=\"text ccol\" background=\"Poison\">Poison</div>"+
		"				</div>"+
		"				<div class=\"checkbox\">"+
		"					<input class=\"box ccol\" type=\"checkbox\">"+
		"					<div class=\"text ccol\" background=\"Psychic\">Psychic</div>"+
		"				</div>"+
		"				<div class=\"checkbox\">"+
		"					<input class=\"box ccol\" type=\"checkbox\">"+
		"					<div class=\"text ccol\" background=\"Rock\">Rock</div>"+
		"				</div>"+
		"				<div class=\"checkbox\">"+
		"					<input class=\"box ccol\" type=\"checkbox\">"+
		"					<div class=\"text ccol\" background=\"Steel\">Steel</div>"+
		"				</div>"+
		"				<div class=\"checkbox\">"+
		"					<input class=\"box ccol\" type=\"checkbox\">"+
		"					<div class=\"text ccol\" background=\"Water\">Water</div>"+
		"				</div>"+
		"			</div>"+
		"		</div>"+
		"		<div class=\"col category\">"+
		"			<h3>Category</h3>"+
		"			<div class=\"checkbox\">"+
		"				<input class=\"box ccol\" type=\"checkbox\">"+
		"				<div class=\"text ccol\">Physical</div>"+
		"			</div>"+
		"			<div class=\"checkbox\">"+
		"				<input class=\"box ccol\" type=\"checkbox\">"+
		"				<div class=\"text ccol\">Special</div>"+
		"			</div>"+
		"			<div class=\"checkbox\">"+
		"				<input class=\"box ccol\" type=\"checkbox\">"+
		"				<div class=\"text ccol\">Status</div>"+
		"			</div>"+
		"		</div>"+
		"		<div class=\"col learned\">"+
		"			<h3>Learned By</h3>"+
		"			<div class=\"checkbox\">"+
		"				<input class=\"box ccol\" type=\"checkbox\">"+
		"				<div class=\"text ccol\">Egg</div>"+
		"			</div>"+
		"			<div class=\"checkbox\">"+
		"				<input class=\"box ccol\" type=\"checkbox\">"+
		"				<div class=\"text ccol\">HM</div>"+
		"			</div>"+
		"			<div class=\"checkbox\">"+
		"				<input class=\"box ccol\" type=\"checkbox\">"+
		"				<div class=\"text ccol\">Level</div>"+
		"			</div>"+
		"			<div class=\"checkbox\">"+
		"				<input class=\"box ccol\" type=\"checkbox\">"+
		"				<div class=\"text ccol\">Pre-Evolution</div>"+
		"			</div>"+
		"			<div class=\"checkbox\">"+
		"				<input class=\"box ccol\" type=\"checkbox\">"+
		"				<div class=\"text ccol\">TM</div>"+
		"			</div>"+
		"			<div class=\"checkbox\">"+
		"				<input class=\"box ccol\" type=\"checkbox\">"+
		"				<div class=\"text ccol\">Transfer</div>"+
		"			</div>"+
		"			<div class=\"checkbox\">"+
		"				<input class=\"box ccol\" type=\"checkbox\">"+
		"				<div class=\"text ccol\">Tutor</div>"+
		"			</div>"+
		"		</div>"+
		"		<div>"+
		"			<div class=\"power col\">"+
		"				<h3>Power</h3>"+
		"				<div class=\"textBox ccol\">"+
		"					<div class=\"text ccol\">Min</div>"+
		"					<input class=\"box ccol\" type=\"text\">"+
		"				</div>"+
		"				<div class=\"textBox ccol\">"+
		"					<div class=\"text ccol\">Max</div>"+
		"					<input class=\"box ccol\" type=\"text\">"+
		"				</div>"+
		"			</div>"+
		"			<div class=\"accuracy col\">"+
		"				<h3>Accuracy</h3>"+
		"				<div class=\"textBox ccol\">"+
		"					<div class=\"text ccol\">Min</div>"+
		"					<input class=\"box ccol\" type=\"text\">"+
		"				</div>"+
		"				<div class=\"textBox ccol\">"+
		"					<div class=\"text ccol\">Max</div>"+
		"					<input class=\"box ccol\" type=\"text\">"+
		"				</div>"+
		"			</div>"+
		"			<div class=\"pp col\">"+
		"				<h3>PP</h3>"+
		"				<div class=\"textBox ccol\">"+
		"					<div class=\"text ccol\">Min</div>"+
		"					<input class=\"box ccol\" type=\"text\">"+
		"				</div>"+
		"				<div class=\"textBox ccol\">"+
		"					<div class=\"text ccol\">Max</div>"+
		"					<input class=\"box ccol\" type=\"text\">"+
		"				</div>"+
		"			</div>"+
		"		</div>"+
		"	</div>"+
		"	<div class=\"movesTable\" type-insert=\"moves\">"+
		"		<div class=\"row\" background=\""+pokemon.battle.primaryType+"\">"+
		"			<div class=\"move cell\" border=\""+pokemon.battle.primaryType+"\">Move</div>"+
		"			<div class=\"type cell\" border=\""+pokemon.battle.primaryType+"\">Type</div>"+
		"			<div class=\"category cell\" border=\""+pokemon.battle.primaryType+"\">Category</div>"+
		"			<div class=\"power cell\" border=\""+pokemon.battle.primaryType+"\">Power</div>"+
		"			<div class=\"accuracy cell\" border=\""+pokemon.battle.primaryType+"\">Accuracy</div>"+
		"			<div class=\"effect cell\" border=\""+pokemon.battle.primaryType+"\">Effect</div>"+
		"			<div class=\"chance cell\" border=\""+pokemon.battle.primaryType+"\">Chance</div>"+
		"		</div>"+
		"	</div>";
	}
	html.moves = function(move){
		return ""+
		"		<div class=\"row\">"+
		"			<div class=\"move cell\" border=\""+move.type+"\">"+move.move.name+"</div>"+
		"			<div class=\"type cell\" border=\""+move.type+"\">"+move.move.type+"</div>"+
		"			<div class=\"category cell\" border=\""+move.type+"\">"+move.move.category+"</div>"+
		"			<div class=\"power cell\" border=\""+move.type+"\">"+move.move.power+"</div>"+
		"			<div class=\"accuracy cell\" border=\""+move.type+"\">"+move.move.accuracy+"</div>"+
		"			<div class=\"effect cell\" border=\""+move.type+"\"></div>"+
		"			<div class=\"chance cell\" border=\""+move.type+"\"></div>"+
		"		</div>";
	}
})(this);