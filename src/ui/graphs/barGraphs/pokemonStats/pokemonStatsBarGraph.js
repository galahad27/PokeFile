(function(root){
	html.pokemonStatsBarGraph = function(){
		var STATMODIFIER = 3;
		var barGraph;

		var html = function(input){
			return ""+
			"	<div class=\"pokemonStatsBarGraph\">"+
			"		<h1 class=\"graphTitle\">Base Stats</h1>"+
			"		<div class=\"graphData\">"+
			"			<div class=\"row\">"+
			"				<div class=\"cell col0\">HP</div>"+
			"				<div id = \"baseHPStat\" class=\"cell col1\">"+input.HP+"</div>"+
			"				<div class=\"cell col2\">"+
			"					<div class=\"statBar hpBar\"></div>"+
			"					<div class=\"statBar barCover hpBarCover\"></div>"+
			"				</div>"+
			"			</div>"+
			"			<div class=\"row\">"+
			"				<div class=\"cell col0\">Attack</div>"+
			"				<div id = \"baseAttackStat\" class=\"cell col1\">"+input.ATTACK+"</div>"+
			"				<div class=\"cell col2\">"+
			"					<div class=\"statBar attackBar\"></div>"+
			"					<div class=\"statBar barCover attackBarCover\"></div>"+
			"				</div>"+
			"			</div>"+
			"			<div class=\"row\">"+
			"				<div class=\"cell col0\">Defense</div>"+
			"				<div id = \"baseDefenseStat\" class=\"cell col1\">"+input.DEFENSE+"</div>"+
			"				<div class=\"cell col2\">"+
			"					<div class=\"statBar defenseBar\"></div>"+
			"					<div class=\"statBar barCover defenseBarCover\"></div>"+
			"				</div>"+
			"			</div>"+
			"			<div class=\"row\">"+
			"				<div class=\"cell col0\">Sp. Attack</div>"+
			"				<div id = \"baseSpAttackStat\" class=\"cell col1\">"+input.SPATTACK+"</div>"+
			"				<div class=\"cell col2\">"+
			"					<div class=\"statBar spAttackBar\"></div>"+
			"					<div class=\"statBar barCover spAttackBarCover\"></div>"+
			"				</div>"+
			"			</div>"+
			"			<div class=\"row\">"+
			"				<div class=\"cell col0\">Sp. Defense</div>"+
			"				<div id = \"baseSpDefenseStat\" class=\"cell col1\">"+input.SPDEFENSE+"</div>"+
			"				<div class=\"cell col2\">"+
			"					<div class=\"statBar spDefenseBar\"></div>"+
			"					<div class=\"statBar barCover spDefenseBarCover\"></div>"+
			"				</div>"+
			"			</div>"+
			"			<div class=\"row\">"+
			"				<div class=\"cell col0\">Speed</div>"+
			"				<div id = \"baseSpeedStat\" class=\"cell col1\">"+input.SPEED+"</div>"+
			"				<div class=\"cell col2\">"+
			"					<div class=\"statBar speedBar\"></div>"+
			"					<div class=\"statBar barCover speedBarCover\"></div>"+
			"				</div>"+
			"			</div>"+
			"		</div>"+
			"	</div>";
		}
		var hasLoaded = function(parent){
			barGraph = parent.querySelector(".pokemonStatsBarGraph");
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
			html : html,
			hasLoaded : hasLoaded,
			setBarLength : setBarLength,
		}
		
	}


})(this);