(function(root){
	html.statBarGraph = function(input){
		return ""+
			"<h1 class=\"tableTitle\">Base Stats</h1>"+
			"<div class=\"row\">"+
			"	<div class=\"cell\">HP</div>"+
			"	<div id = \"baseHPStat\" class=\"cell col1\">"+input.HP+"</div>"+
			"	<div class=\"cell\">"+
			"		<div class=\"statBar rangeBackgroundHp\"></div>"+
			"		<div class=\"statBar barCover\"></div>"+
			"	</div>"+
			"</div>"+
			"<div class=\"row\">"+
			"	<div class=\"cell\">Attack</div>"+
			"	<div id = \"baseAttackStat\" class=\"cell col1\">"+input.ATTACK+"</div>"+
			"	<div class=\"cell\">"+
			"		<div class=\"statBar rangeBackgroundHp\"></div>"+
			"		<div class=\"statBar barCover\"></div>"+
			"	</div>"+
			"</div>"+
			"<div class=\"row\">"+
			"	<div class=\"cell\">Defense</div>"+
			"	<div id = \"baseDefenseStat\" class=\"cell col1\">"+input.DEFENSE+"</div>"+
			"	<div class=\"cell\">"+
			"		<div class=\"statBar rangeBackgroundHp\"></div>"+
			"		<div class=\"statBar barCover\"></div>"+
			"	</div>"+
			"</div>"+
			"<div class=\"row\">"+
			"	<div class=\"cell\">Sp. Attack</div>"+
			"	<div id = \"baseSpAttackStat\" class=\"cell col1\">"+input.SPATTACK+"</div>"+
			"	<div class=\"cell\">"+
			"		<div class=\"statBar rangeBackgroundHp\"></div>"+
			"		<div class=\"statBar barCover\"></div>"+
			"	</div>"+
			"</div>"+
			"<div class=\"row\">"+
			"	<div class=\"cell\">Sp. Defense</div>"+
			"	<div id = \"baseSpDefenseStat\" class=\"cell col1\">"+input.SPDEFENSE+"</div>"+
			"	<div class=\"cell\">"+
			"		<div class=\"statBar rangeBackgroundHp\"></div>"+
			"		<div class=\"statBar barCover\"></div>"+
			"	</div>"+
			"</div>"+
			"<div class=\"row\">"+
			"	<div class=\"cell\">Speed</div>"+
			"	<div id = \"baseSpeedStat\" class=\"cell col1\">"+input.SPEED+"</div>"+
			"	<div class=\"cell\">"+
			"		<div class=\"statBar rangeBackgroundHp\"></div>"+
			"		<div class=\"statBar barCover\"></div>"+
			"	</div>"+
			"</div>";
	}
})(this);