(function(root){
	html.pokemonStatsBarGraph = function(){
		const FILENAME = "pokemonStatsBarGraph";
		var STATMODIFIER = 3;
		var barGraph;
		var base;

		var HTML = function(input){
			utill.printFunctionName(FILENAME, arguments.callee.name);
			base = input;
			return ""+
			"	<div class=\"pokemonStatsBarGraph\">"+
			"		<h1 class=\"graphTitle\">Base Stats</h1>"+
			"		<div class=\"graphData\">"+
			"			<div class=\"row\">"+
			"				<div class=\"cell col0\">HP</div>"+
			"				<div id = \"baseHPStat\" class=\"cell col1\">"+input.hp+"</div>"+
			"				<div class=\"cell col2\">"+
			"					<div class=\"statBar hpBar\"></div>"+
			"					<div class=\"statBar barCover hpBarCover\"></div>"+
			"				</div>"+
			"			</div>"+
			"			<div class=\"row\">"+
			"				<div class=\"cell col0\">Attack</div>"+
			"				<div id = \"baseAttackStat\" class=\"cell col1\">"+input.attack+"</div>"+
			"				<div class=\"cell col2\">"+
			"					<div class=\"statBar attackBar\"></div>"+
			"					<div class=\"statBar barCover attackBarCover\"></div>"+
			"				</div>"+
			"			</div>"+
			"			<div class=\"row\">"+
			"				<div class=\"cell col0\">Defense</div>"+
			"				<div id = \"baseDefenseStat\" class=\"cell col1\">"+input.defense+"</div>"+
			"				<div class=\"cell col2\">"+
			"					<div class=\"statBar defenseBar\"></div>"+
			"					<div class=\"statBar barCover defenseBarCover\"></div>"+
			"				</div>"+
			"			</div>"+
			"			<div class=\"row\">"+
			"				<div class=\"cell col0\">Sp. Attack</div>"+
			"				<div id = \"baseSpAttackStat\" class=\"cell col1\">"+input.spAttack+"</div>"+
			"				<div class=\"cell col2\">"+
			"					<div class=\"statBar spAttackBar\"></div>"+
			"					<div class=\"statBar barCover spAttackBarCover\"></div>"+
			"				</div>"+
			"			</div>"+
			"			<div class=\"row\">"+
			"				<div class=\"cell col0\">Sp. Defense</div>"+
			"				<div id = \"baseSpDefenseStat\" class=\"cell col1\">"+input.spDefense+"</div>"+
			"				<div class=\"cell col2\">"+
			"					<div class=\"statBar spDefenseBar\"></div>"+
			"					<div class=\"statBar barCover spDefenseBarCover\"></div>"+
			"				</div>"+
			"			</div>"+
			"			<div class=\"row\">"+
			"				<div class=\"cell col0\">Speed</div>"+
			"				<div id = \"baseSpeedStat\" class=\"cell col1\">"+input.speed+"</div>"+
			"				<div class=\"cell col2\">"+
			"					<div class=\"statBar speedBar\"></div>"+
			"					<div class=\"statBar barCover speedBarCover\"></div>"+
			"				</div>"+
			"			</div>"+
			"		</div>"+
			"	</div>";
		}
		var hasLoaded = function(parent){
			utill.printFunctionName(FILENAME, arguments.callee.name);
			barGraph = parent.querySelector(".pokemonStatsBarGraph");
			setBarLength();
		}
		var setBarLength = function(){
			utill.printFunctionName(FILENAME, arguments.callee.name);
			var hpCover = barGraph.querySelector(".hpBarCover");
			var attackCover = barGraph.querySelector(".attackBarCover");
			var defenseCover = barGraph.querySelector(".defenseBarCover");
			var spAttackCover = barGraph.querySelector(".spAttackBarCover");
			var spDefenseCover = barGraph.querySelector(".spDefenseBarCover");
			var speedCover = barGraph.querySelector(".speedBarCover");

			hpCover.style.width = (R.stats.max.hp-base.hp)*STATMODIFIER+"px";
			attackCover.style.width = (R.stats.max.attack-base.attack)*STATMODIFIER+"px";
			defenseCover.style.width = (R.stats.max.defense-base.defense)*STATMODIFIER+"px";
			spAttackCover.style.width = (R.stats.max.spAttack-base.spAttack)*STATMODIFIER+"px";
			spDefenseCover.style.width = (R.stats.max.spDefense-base.spDefense)*STATMODIFIER+"px";
			speedCover.style.width = (R.stats.max.speed-base.speed)*STATMODIFIER+"px";

			hpCover.style.marginLeft = -1*(R.stats.max.hp-base.hp)*STATMODIFIER+"px";
			attackCover.style.marginLeft = -1*(R.stats.max.attack-base.attack)*STATMODIFIER+"px";
			defenseCover.style.marginLeft = -1*(R.stats.max.defense-base.defense)*STATMODIFIER+"px";
			spAttackCover.style.marginLeft = -1*(R.stats.max.spAttack-base.spAttack)*STATMODIFIER+"px";
			spDefenseCover.style.marginLeft = -1*(R.stats.max.spDefense-base.spDefense)*STATMODIFIER+"px";
			speedCover.style.marginLeft = -1*(R.stats.max.speed-base.speed)*STATMODIFIER+"px";
		}
		return{
			HTML : HTML,
			hasLoaded : hasLoaded,
			setBarLength : setBarLength,
		}
		
	}


})(this);