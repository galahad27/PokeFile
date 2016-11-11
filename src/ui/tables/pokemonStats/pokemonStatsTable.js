(function(root){
	html.pokemonStatsTable = function(input){
		var HTML = function(input){
			var min = utill.statFormula(input.level, input.stat, 0, 0, 0.9, input.isHp);
			var iv = utill.statFormula(input.level, input.stat, 31, 0, 1, input.isHp);
			var ivEv = utill.statFormula(input.level, input.stat, 31, 252, 1, input.isHp);
			var max = utill.statFormula(input.level, input.stat, 31, 252, 1.1, input.isHp);
			return ""+
				"<div class=\"pokemonStatsTable\">"+
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
			HTML : HTML,
		}
	}
})(this);