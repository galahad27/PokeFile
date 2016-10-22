(function(root){
	html.movesTable = function(type){
		return ""+
		"	<div class=\"movesTable\" type-insert=\"moves\">"+
		"		<div class=\"table\">"+html.movesHeader(type)+"</div>"+
		"	</div>";
	}
	html.movesHeader = function(type){
		return ""+
		"	<div class=\"row\" background=\""+type+"\">"+
		"		<div class=\"cell\" type=\"move\" border=\""+type+"\">Move</div>"+
		"		<div class=\"cell\" type=\"type\" border=\""+type+"\">Type</div>"+
		"		<div class=\"cell\" type=\"category\" border=\""+type+"\">Category</div>"+
		"		<div class=\"cell\" type=\"power\" border=\""+type+"\">Pwr</div>"+
		"		<div class=\"cell\" type=\"accuracy\" border=\""+type+"\">Acc</div>"+
		"		<div class=\"cell\" type=\"effect\" border=\""+type+"\">Effect</div>"+
		"		<div class=\"cell\" type=\"pp\" border=\""+type+"\">PP</div>"+
		"	</div>";
	}
	html.moves = function(move, type){
		return ""+
		"	<div class=\"row\">"+
		"		<div class=\"cell\" type=\"move\" border=\""+type+"\">"+move.name+"</div>"+
		"		<div class=\"cell\" type=\"type\" border=\""+type+"\"><div class=\"text\" background=\""+move.type+"\">"+move.type+"</div></div>"+
		"		<div class=\"cell\" type=\"category\" border=\""+type+"\">"+move.category+"</div>"+
		"		<div class=\"cell\" type=\"power\" border=\""+type+"\">"+move.power+"</div>"+
		"		<div class=\"cell\" type=\"accuracy\" border=\""+type+"\">"+move.accuracy+"</div>"+
		"		<div class=\"cell\" type=\"effect\" border=\""+type+"\">"+move.effects+"</div>"+
		"		<div class=\"cell\" type=\"pp\" border=\""+type+"\">"+move.pp+"</div>"+
		"	</div>";
	}
})(this);