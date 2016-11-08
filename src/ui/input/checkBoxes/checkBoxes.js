(function(root){
	html.checkBox = function(title, background){
		return ""+
		"<div class=\"checkBox\">"+
		"	<input class=\"checkbox\" type=\"checkbox\">"+
		"	<div class=\"title\" background=\""+background+"\">"+title+"</div>"+
		"</div>";
	}
})(this);