(function(root){

	html.movesListTable = function(){
		var movesListTable;
		var table;
		var tableType;
		var tableFilter;
		var disp = {}
		const FILENAME = "movesListTable";

		var HTML = function(input){
			utill.printFunctionName(FILENAME, arguments.callee.name);
			tableType = input.type;
			tableFilter = input.filter;
			return ""+
			"	<div class=\"movesListTable\" type-insert=\"moves\">"+
			"		<div class=\"table\"></div>"+
			"	</div>";
		}
		var hasLoaded = function(parent){
			utill.printFunctionName(FILENAME, arguments.callee.name);
			movesListTable = parent.querySelector(".movesListTable");
			table = movesListTable.querySelector(".table");
			if(tableFilter){
				disp.filterDisp = tableFilter.filterSubject
				.subscribe(function(filteredMoves){
					addMoves(filteredMoves);
				});
				tableFilter.filterMoves();
			}
		}
		function addMoves(moves){
			utill.printFunctionName(FILENAME, arguments.callee.name);
			$(table).empty();
			$(table).append(headerHtml);
			moves.forEach(function(move){
				$(table).append(moveHtml(R.moves[move]));
			});
		}
		function destroy(){
			utill.printFunctionName(FILENAME, arguments.callee.name);
			utill.printVariable("disp", disp);
			for(var key in disp){
				if(disp.hasOwnProperty(key)){
					disp[key].dispose();
					disp[key] = null;
					delete disp[key];
				}
			}
		}
		function effectsToString(effects){
			utill.printFunctionName(FILENAME, arguments.callee.name);
			var string = "";
			effects.forEach(function(effect, index){
				if(!!effect.chance){
					string = string+effect.chance+"% "+lang.moves.effects[lang.userLanguage][effect.condition];
				}else if(!!effect.disp){
					string = string+effect.dir+effect.disp+" "+(lang.pokemon.stats[lang.userLanguage][effect.stat]||lang.moves.effects[lang.userLanguage][effect.condition]);
				}
				if(index<effects.length-1){
					string = string+", ";
				}
			});
			return string;
		}
		function headerHtml(){
			utill.printFunctionName(FILENAME, arguments.callee.name);
			return ""+
			"	<div class=\"row\" background=\""+tableType+"\">"+
			"		<div class=\"cell\" type=\"move\" border=\""+tableType+"\">"+lang.moves.general[lang.userLanguage].move+"</div>"+
			"		<div class=\"cell\" type=\"type\" border=\""+tableType+"\">"+lang.moves.general[lang.userLanguage].type+"</div>"+
			"		<div class=\"cell\" type=\"category\" border=\""+tableType+"\">"+lang.moves.general[lang.userLanguage].category+"</div>"+
			"		<div class=\"cell\" type=\"power\" border=\""+tableType+"\">"+lang.moves.stats[lang.userLanguage].powerShort+"</div>"+
			"		<div class=\"cell\" type=\"accuracy\" border=\""+tableType+"\">"+lang.moves.stats[lang.userLanguage].accuracyShort+"</div>"+
			"		<div class=\"cell\" type=\"effect\" border=\""+tableType+"\">"+lang.moves.general[lang.userLanguage].effect+"</div>"+
			"		<div class=\"cell right\" type=\"pp\" border=\""+tableType+"\">"+lang.moves.stats[lang.userLanguage].pp+"</div>"+
			"	</div>";
		}
		function moveHtml(move){
			utill.printFunctionName(FILENAME, arguments.callee.name);
			return ""+
			"	<div class=\"row\">"+
			"		<div class=\"cell\" type=\"move\" border=\""+tableType+"\">"+move.name+"</div>"+
			"		<div class=\"cell\" type=\"type\" border=\""+tableType+"\"><div class=\"text\" background=\""+move.type+"\">"+R.types[move.type].name+"</div></div>"+
			"		<div class=\"cell\" type=\"category\" border=\""+tableType+"\">"+lang.moves.category[lang.userLanguage][move.category]+"</div>"+
			"		<div class=\"cell\" type=\"power\" border=\""+tableType+"\">"+move.power+"</div>"+
			"		<div class=\"cell\" type=\"accuracy\" border=\""+tableType+"\">"+move.accuracy+"</div>"+
			"		<div class=\"cell\" type=\"effect\" border=\""+tableType+"\">"+effectsToString(move.effects)+"</div>"+
			"		<div class=\"cell right\" type=\"pp\" border=\""+tableType+"\">"+move.pp+"</div>"+
			"	</div>";
		}
		return {
			HTML: HTML,
			hasLoaded: hasLoaded,
			destroy: destroy,
		}
	}
})(this);