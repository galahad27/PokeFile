(function(root){

	html.movesListTable = function(){

		var HTML = function(type){
			return ""+
			"	<div class=\"movesListTable\" type-insert=\"moves\">"+
			"		<div class=\"table\">"+header(type)+"</div>"+
			"	</div>";
		}
		var addMoves = function(moves){

		}
		header = function(type){
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
		move = function(move, type){
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
		return {
			HTML: HTML,
			addMoves: addMoves,
		}
	}
})(this);