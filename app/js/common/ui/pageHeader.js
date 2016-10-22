(function(root){
	html.pageHeader = function(){
		var html = function(){
			return ""+
				"	<div class=\"header\">"+
				"		<p>POKEDEX</p>"+
				"	</div>"+
				"	<ul class=\"mainBarMenu webBackground fireBorder\">"+
				"		<li><a href=\"#\">Home</a></li>"+
				"		<li><a id=\"p38\" href=\"#\">Ninetails</a></li>"+
				"		<li><a id=\"p282\" href=\"#\">Gardevoir</a></li>"+
				"	</ul>";
		}
		return{
			html: html,
		}
	}
})(this);