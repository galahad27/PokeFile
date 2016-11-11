(function(root){
	var html = {};

	html.load = function(parent, type, input){
		var UI = html[type]();
		$(parent).append(UI.HTML(input));
		!!UI.hasLoaded && UI.hasLoaded(parent);
		return UI;
	};

	root.html = html;
})(this);