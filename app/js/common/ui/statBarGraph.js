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