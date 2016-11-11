(function(root){
	var lang = {};

	lang.getUserLanguage = function(){
		lang.userLanguage = lang.types[window.navigator.userLanguage || window.navigator.language];
	}
	lang.items = {};
	lang.moves = {};
	lang.pokemon = {};
	lang.site = {};

	lang.types = {};
	lang.types["en-US"] = "en";

	
	root.lang = lang;
})(this);