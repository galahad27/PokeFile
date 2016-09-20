(function(root){
	html.statTable = function(input){
		return ""+
			"<h1 class=\"tableTitle\">"+input+"</h1>"+
			"<div class=\"row\">"+
			"	<div class=\"cell\">Min</div>"+
			"	<div id=\"minStatData\" class=\"cell\"></div>"+
			"</div>"+
			"<div class=\"row\">"+
			"	<div class=\"cell\">Max IV/Min EV</div>"+
			"	<div id=\"maxMinStatData\" class=\"cell\"></div>"+
			"</div>"+
			"<div class=\"row\">"+
			"	<div class=\"cell\">Max IV/Max EV</div>"+
			"	<div id=\"maxMaxStatData\" class=\"cell\"></div>"+
			"</div>"+
			"<div class=\"row\">"+
			"	<div class=\"cell\">Max</div>"+
			"	<div id=\"maxStatData\" class=\"cell\"></div>"+
			"</div>";
	}
})(this);