(function(root){
	html.checkBoxObject = function(title, background){
		return ""+
		"<div class=\"checkBoxObject\">"+
		"	<input class=\"checkbox\" type=\"checkbox\">"+
		"	<div class=\"title\" background=\""+background+"\">"+title+"</div>"+
		"</div>";
	}
	html.minMaxTextBoxObject = function(){
		return""+
		"<div class=\"minMaxTextBoxObject\">"+
		"	<div class=\"minText\">Min</div>"+
		"	<input class=\"minInput\" type=\"text\">"+
		"	<div class=\"maxText\">Max</div>"+
		"	<input class=\"maxInput\" type=\"text\">"+
		"	<button class=\"submitButton\" type=\"button\">Submit</button>"+
		"</div>";
	}
})(this);