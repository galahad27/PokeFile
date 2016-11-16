(function(root){
	html.movesFilterTable = function(){
		/***************************ELEMENTS***************************/
		var movesFilterElement;
		var checkBoxes;
		var submitButtons;
		var clearButton;
		var removeButton;
		var textBoxes;
		/***************************FINAL***************************/
		const FILENAME = "movesFilterTable";
		var filterSubject = new Rx.Subject();
		var removeSubject = new Rx.Subject();
		/***************************LOCAL***************************/
		var disp;
		var eventListeners;
		var filterCategories;
		var filteredList;
		var movesList;
		var pokemonMovesList;

		var HTML = function(moves){
			utill.printFunctionName(FILENAME, arguments.callee.name);
			movesList = moves.moves;
			pokemonMovesList = moves.pokemonMoves;
			return ""+
			"	<div class=\"movesFilterTable\">"+
			"		<div class=\"row\">"+
			"			<div class=\"cell category\" filterCategory=\"type\">"+
			"				<h3>"+lang.moves.general[lang.userLanguage].types+"</h3>"+
			"				<div class=\"table\">"+
			"					<div class=\"row\">"+
			"						<div class=\"cell name\" filterName=\"bug\">"+ html.checkBox(R.types.bug.name, "bug") +"</div>"+
			"						<div class=\"cell name\" filterName=\"fighting\">"+ html.checkBox(R.types.fighting.name, "fighting") +"</div>"+
			"						<div class=\"cell name\" filterName=\"normal\">"+ html.checkBox(R.types.normal.name, "normal") +"</div>"+
			"					</div>"+
			"					<div class=\"row\">"+
			"						<div class=\"cell name\" filterName=\"dark\">"+ html.checkBox(R.types.dark.name, "dark") +"</div>"+
			"						<div class=\"cell name\" filterName=\"flying\">"+ html.checkBox(R.types.flying.name, "flying") +"</div>"+
			"						<div class=\"cell name\" filterName=\"poison\">"+ html.checkBox(R.types.poison.name, "poison") +"</div>"+
			"					</div>"+
			"					<div class=\"row\">"+
			"						<div class=\"cell name\" filterName=\"dragon\">"+ html.checkBox(R.types.dragon.name, "dragon") +"</div>"+
			"						<div class=\"cell name\" filterName=\"ghost\">"+ html.checkBox(R.types.ghost.name, "ghost") +"</div>"+
			"						<div class=\"cell name\" filterName=\"psychic\">"+ html.checkBox(R.types.psychic.name, "psychic") +"</div>"+
			"					</div>"+
			"					<div class=\"row\">"+
			"						<div class=\"cell name\" filterName=\"electric\">"+ html.checkBox(R.types.electric.name, "electric") +"</div>"+
			"						<div class=\"cell name\" filterName=\"grass\">"+ html.checkBox(R.types.grass.name, "grass") +"</div>"+
			"						<div class=\"cell name\" filterName=\"rock\">"+ html.checkBox(R.types.rock.name, "rock") +"</div>"+
			"					</div>"+
			"					<div class=\"row\">"+
			"						<div class=\"cell name\" filterName=\"fairy\">"+ html.checkBox(R.types.fairy.name, "fairy") +"</div>"+
			"						<div class=\"cell name\" filterName=\"ground\">"+ html.checkBox(R.types.ground.name, "ground") +"</div>"+
			"						<div class=\"cell name\" filterName=\"steel\">"+ html.checkBox(R.types.steel.name, "steel") +"</div>"+
			"						</div>"+
			"					<div class=\"row\">"+
			"						<div class=\"cell name\" filterName=\"fire\">"+ html.checkBox(R.types.fire.name, "fire") +"</div>"+
			"						<div class=\"cell name\" filterName=\"ice\">"+ html.checkBox(R.types.ice.name, "ice") +"</div>"+
			"						<div class=\"cell name\" filterName=\"water\">"+ html.checkBox(R.types.water.name, "water") +"</div>"+
			"					</div>"+
			"				</div>"+
			"			</div>"+
			"			<div class=\"cell category\" filterCategory=\"category\">"+
			"				<h3>"+lang.moves.general[lang.userLanguage].category+"</h3>"+
			"				<div class=\"name\" filterName=\"physical\">"+ html.checkBox(lang.moves.category[lang.userLanguage].physical) +"</div>"+
			"				<div class=\"name\" filterName=\"special\">"+ html.checkBox(lang.moves.category[lang.userLanguage].special) +"</div>"+
			"				<div class=\"name\" filterName=\"status\">"+ html.checkBox(lang.moves.category[lang.userLanguage].status) +"</div>"+
			"			</div>"+
			"			<div class=\"cell category\" filterCategory=\"status\">"+
			"				<h3>"+lang.moves.general[lang.userLanguage].statusEffects+"</h3>"+
			"				<div class=\"name\" filterName=\"burn\">"+ html.checkBox(lang.moves.effects[lang.userLanguage].burn) +"</div>"+
			"				<div class=\"name\" filterName=\"freeze\">"+ html.checkBox(lang.moves.effects[lang.userLanguage].freeze) +"</div>"+
			"				<div class=\"name\" filterName=\"paralysis\">"+ html.checkBox(lang.moves.effects[lang.userLanguage].paralysis) +"</div>"+
			"				<div class=\"name\" filterName=\"poison\">"+ html.checkBox(lang.moves.effects[lang.userLanguage].poison) +"</div>"+
			"				<div class=\"name\" filterName=\"sleep\">"+ html.checkBox(lang.moves.effects[lang.userLanguage].sleep) +"</div>"+
			"			</div>"+
			"			<div class=\"cell category\" filterCategory=\"battle\">"+
			"				<h3>"+lang.moves.general[lang.userLanguage].battleEffects+"</h3>"+
			"				<div class=\"name\" filterName=\"confusion\">"+ html.checkBox(lang.moves.effects[lang.userLanguage].confusion) +"</div>"+
			"				<div class=\"name\" filterName=\"crit\">"+ html.checkBox(lang.moves.effects[lang.userLanguage].crit) +"</div>"+
			"				<div class=\"name\" filterName=\"flinch\">"+ html.checkBox(lang.moves.effects[lang.userLanguage].flinch) +"</div>"+
			"				<div class=\"name\" filterName=\"heal\">"+ html.checkBox(lang.moves.effects[lang.userLanguage].heal) +"</div>"+
			"				<div class=\"name\" filterName=\"priority\">"+ html.checkBox(lang.moves.effects[lang.userLanguage].priority) +"</div>"+
			"				<div class=\"name\" filterName=\"trap\">"+ html.checkBox(lang.moves.effects[lang.userLanguage].trap) +"</div>"+
			"			</div>"+
			"		</div>"+
			"		<div class=\"row\">"+
			"			<div class=\"cell\">"+
			"				<h3>"+lang.moves.general[lang.userLanguage].statChanges+"</h3>"+
			"				<div class=\"cell category\" filterCategory=\"stat\">"+
			"					<div class=\"name\" filterName=\"attack\">"+ html.checkBox(lang.pokemon.stats[lang.userLanguage].attack) +"</div>"+
			"					<div class=\"name\" filterName=\"defense\">"+ html.checkBox(lang.pokemon.stats[lang.userLanguage].defense) +"</div>"+
			"					<div class=\"name\" filterName=\"spAttack\">"+ html.checkBox(lang.pokemon.stats[lang.userLanguage].spAttack) +"</div>"+
			"					<div class=\"name\" filterName=\"spDefense\">"+ html.checkBox(lang.pokemon.stats[lang.userLanguage].spDefense) +"</div>"+
			"					<div class=\"name\" filterName=\"speed\">"+ html.checkBox(lang.pokemon.stats[lang.userLanguage].speed) +"</div>"+
			"					<div class=\"name\" filterName=\"accuracy\">"+ html.checkBox(lang.pokemon.stats[lang.userLanguage].accuracy) +"</div>"+
			"					<div class=\"name\" filterName=\"evasion\">"+ html.checkBox(lang.pokemon.stats[lang.userLanguage].evasion) +"</div>"+
			"				</div>"+
			"				<div class=\"cell category\" filterCategory=\"dir\">"+
			"					<div class=\"name\" filterName=\"+\">"+ html.checkBox("+") +"</div>"+
			"					<div class=\"name\" filterName=\"-\">"+ html.checkBox("-") +"</div>"+
			"				</div>"+
			"				<div class=\"cell category\" filterCategory=\"disp\">"+
			"					<div class=\"name\" filterName=\"1\">"+ html.checkBox("1") +"</div>"+
			"					<div class=\"name\" filterName=\"2\">"+ html.checkBox("2") +"</div>"+
			"					<div class=\"name\" filterName=\"3\">"+ html.checkBox("3") +"</div>"+
			"					<div class=\"name\" filterName=\"4\">"+ html.checkBox("4") +"</div>"+
			"					<div class=\"name\" filterName=\"5\">"+ html.checkBox("5") +"</div>"+
			"					<div class=\"name\" filterName=\"6\">"+ html.checkBox("6") +"</div>"+
			"				</div>"+
			"			</div>"+
			"			<div class=\"cell category\" filterCategory=\"learn\">"+
			"				<h3>"+lang.moves.general[lang.userLanguage].learnedBy+"</h3>"+
			"				<div class=\"name\" filterName=\"egg\">"+ html.checkBox(lang.moves.learn[lang.userLanguage].egg) +"</div>"+
			"				<div class=\"name\" filterName=\"hm\">"+ html.checkBox(lang.moves.learn[lang.userLanguage].hm) +"</div>"+
			"				<div class=\"name\" filterName=\"level\">"+ html.checkBox(lang.moves.learn[lang.userLanguage].level) +"</div>"+
			"				<div class=\"name\" filterName=\"preEvolution\">"+ html.checkBox(lang.moves.learn[lang.userLanguage].preEvolution) +"</div>"+
			"				<div class=\"name\" filterName=\"tm\">"+ html.checkBox(lang.moves.learn[lang.userLanguage].tm) +"</div>"+
			"				<div class=\"name\" filterName=\"transfer\">"+ html.checkBox(lang.moves.learn[lang.userLanguage].transfer) +"</div>"+
			"				<div class=\"name\" filterName=\"tutor\">"+ html.checkBox(lang.moves.learn[lang.userLanguage].tutor) +"</div>"+
			"			</div>"+
			"			<div class=\"cell\">"+
			"				<div class=\"category\" filterCategory=\"power\"><h3>"+lang.moves.stats[lang.userLanguage].power+"</h3>"+html.minMaxTextBox()+"</div>"+
			"				<div class=\"category\" filterCategory=\"accuracy\"><h3>"+lang.moves.stats[lang.userLanguage].accuracy+"</h3>"+html.minMaxTextBox()+"</div>"+
			"				<div class=\"category\" filterCategory=\"pp\"><h3>"+lang.moves.stats[lang.userLanguage].pp+"</h3>"+html.minMaxTextBox()+"</div>"+
			"			</div>"+
			"			<div class=\"cell\">"+
			"				<button class=\"clearButton\" type=\"button\">Clear</button>"+
			"				<button class=\"removeButton\" type=\"button\">Remove</button>"+
			"			</div>"+
			"		</div>"+
			"	</div>";
		}
		var hasLoaded = function(parent){
			utill.printFunctionName(FILENAME, arguments.callee.name);
			initVariables(parent);
			initEventListeners();
		}
		var destroy = function(){
			utill.printFunctionName(FILENAME, arguments.callee.name);
			destroyDisposables();
			destroyEventListeners();
		}
		/***************************GETTERS***************************/
		var getFilters = function(){
			utill.printFunctionName(FILENAME, arguments.callee.name);
			return filterCategories;
		}
		/***************************SETTERS***************************/
		var setFilters = function(filters){
			utill.printFunctionName(FILENAME, arguments.callee.name);
			filterCategories = filters;
			setCheckBoxes();
			setTextBoxes();
			filterMoves();
		}
		function setCheckBoxes(){
			utill.printFunctionName(FILENAME, arguments.callee.name);
			checkBoxes.forEach(function(checkBox){
				var category = $(checkBox).parents(".category")[0].getAttribute("filterCategory");
				var name = $(checkBox).parents(".name")[0].getAttribute("filterName");
				if(_.contains(filterCategories[category], name)){
					checkBox.checked = true;
				}
			});
		}
		function setTextBoxes(){
			utill.printFunctionName(FILENAME, arguments.callee.name);
			var regex;
			textBoxes.forEach(function(textBox){
				var category = $(textBox).parents(".category")[0].getAttribute("filterCategory");
				var name = textBox.getAttribute("name");
				!!filterCategories[category] && (textBox.value = filterCategories[category][name]);
			});
		}
		function setRemoveVisablity(value){
			utill.printFunctionName(FILENAME, arguments.callee.name);
			if(value){
				removeButton.style.visibility = "visible";
			}else{
				removeButton.style.visibility = "hidden";
			}
		}
		/***************************INITIALIZE***************************/
		function initEventListeners(){
			utill.printFunctionName(FILENAME, arguments.callee.name);
			checkBoxes.forEach(function(checkBox){
				eventListeners.push(checkBox);
				$(checkBox).on("click", checkboxClick);
			});
			submitButtons.forEach(function(button){
				eventListeners.push(button);
				$(button).on("click", submitClick);
			});
			$(clearButton).on("click", clearClick);
			$(removeButton).on("click", removeClick);
		}
		function initFilterCategories(){
			utill.printFunctionName(FILENAME, arguments.callee.name);
			filterCategories = {
				type: [],
				category: [],
				status: [],
				battle: [],
				stat: [],
				dir: [],
				disp: [],
				learn: [],
				power: null,
				accuracy: null,
				pp: null,
			}
		}
		function initVariables(parent){	
			utill.printFunctionName(FILENAME, arguments.callee.name);
			disp={};
			eventListeners = [];
			initFilterCategories();
			movesFilterElement = parent.querySelector(".movesFilterTable");
			checkBoxes = movesFilterElement.querySelectorAll(".checkbox");
			clearButton = movesFilterElement.querySelector(".clearButton");
			removeButton = movesFilterElement.querySelector(".removeButton");
			submitButtons = movesFilterElement.querySelectorAll(".submitButton");
			textBoxes = movesFilterElement.querySelectorAll(".textBox");
		}
		/***************************DESTROY***************************/
		function destroyDisposables(){
			utill.printFunctionName(FILENAME, arguments.callee.name);
			for(var key in disp){
				if(disp.hasOwnProperty(key)){
					disp[key].dispose();
					disp[key] = null;
					delete disp[key];
				}
			}
		}
		function destroyEventListeners(){
			utill.printFunctionName(FILENAME, arguments.callee.name);
			eventListeners.forEach(function(event){
				$(event).off();
			});
		}
		/***************************EVENTS***************************/
		function checkboxClick(e){
			utill.printFunctionName(FILENAME, arguments.callee.name);
			var category = $(e.target).parents(".category")[0].getAttribute("filterCategory");
			var name = $(e.target).parents(".name")[0].getAttribute("filterName");
			if(e.target.checked){
				filterCategories[category].push(name);
			}else{
				filterCategories[category] = _.without(filterCategories[category], name);
			}
			filterMoves();
		}
		function clearClick(){
			utill.printFunctionName(FILENAME, arguments.callee.name);
			initFilterCategories();
			checkBoxes.forEach(function(checkBox){
				checkBox.checked = false;
			});
			textBoxes.forEach(function(textBox){
				textBox.value = null;
			});
			filterMoves();
		}
		function removeClick(){
			utill.printFunctionName(FILENAME, arguments.callee.name);
			parent = $(movesFilterElement).parent()[0];
			removeSubject.onNext(parent.getAttribute("index"));
		}
		function submitClick(e){
			utill.printFunctionName(FILENAME, arguments.callee.name);
			var regex;
			var category = $(e.target).parents(".category")[0].getAttribute("filterCategory");
			if(category == "power"){
				regex = /^([0-9]|[1-9][0-9]|[1][0-9][0-9]|[2][0-4][0-9]|250)$/;
			}else if(category == "accuracy"){
				regex = /^([0-9]|[1-9][0-9]|100)$/;
			}else if(category == "pp"){
				regex = /^([0-9]|[1-3][0-9]|40)$/;
			}
			var parent = $(e.target).parent()[0];
			var minInput = parent.querySelector(".minInput");
			var maxInput = parent.querySelector(".maxInput");
			var minValue = utill.regex(minInput.value,regex);
			var maxValue = utill.regex(maxInput.value,regex);
			if(minValue || maxValue){
				if(minValue){
					minValue=parseInt(minInput.value);
				}else{
					minValue=0;
				}
				if(maxValue){
					maxValue=parseInt(maxInput.value);
				}else{
					maxValue=250;
				}
				filterCategories[category] = {min: minValue, max: maxValue};
			}else{
				filterCategories[category] = null;
			}
			filterMoves();
		}
		//***************************MISC***************************//
		var filterMoves = function(){
			utill.printFunctionName(FILENAME, arguments.callee.name);
			filteredList = movesList;
			filterByProperties("type");
			filterByProperties("category");
			filterByEffects("status");
			filterByEffects("battle");
			filterByStatChanges("stat");
			filterByStatChanges("dir");
			filterByStatChanges("disp");
			filterByLearn();
			filterByRange("power");
			filterByRange("accuracy");
			filterByRange("pp");
			filterSubject.onNext(filteredList);
		}
		function filterByProperties(property){
			utill.printFunctionName(FILENAME, arguments.callee.name);
			var temp = [];
			filterCategories[property].forEach(function(filterItem){
				filteredList.forEach(function(move){
					if(R.moves[move][property] === filterItem){
						temp.push(move);
					}
				});
			});
			if(filterCategories[property].length>0){
				filteredList = temp;
			}
		}
		function filterByEffects(effect){
			utill.printFunctionName(FILENAME, arguments.callee.name);
			var temp = [];
			filterCategories[effect].forEach(function(filterItem){
				filteredList.forEach(function(move){
					R.moves[move].effects.forEach(function(moveEffect){
						if(moveEffect.type === effect){
							if(moveEffect.condition === filterItem){
								temp.push(move);
							}
						}
					});
				});
			});
			if(filterCategories[effect].length>0){
				filteredList = temp;
			}
		}
		function filterByStatChanges(statChange){
			utill.printFunctionName(FILENAME, arguments.callee.name);
			var temp = [];
			filterCategories[statChange].forEach(function(filterItem){
				filteredList.forEach(function(move){
					R.moves[move].effects.forEach(function(moveEffect){
						if(moveEffect.type === "stat"){
							console.log(filterItem);
							if(moveEffect[statChange] === filterItem){
								temp.push(move);
							}
						}
					})
				});
			});
			if(filterCategories[statChange].length>0){
				filteredList = temp;
			}
		}
		function filterByLearn(){
			utill.printFunctionName(FILENAME, arguments.callee.name);
			var temp = [];
			filterCategories.learn.forEach(function(filterItem){
				filteredList.forEach(function(move){
					var contains = _.some(pokemonMovesList[filterItem], function(pokemonMove){
						return R.moves[move].name === R.moves[pokemonMove].name
					})
					if(contains){
						temp.push(move)
					}
				});
			});
			if(filterCategories.learn.length>0){
				filteredList = temp;
			}
		}
		function filterByRange(property){
			utill.printFunctionName(FILENAME, arguments.callee.name);
			if(!!filterCategories[property]){
				var temp = [];
				filteredList.forEach(function(move){
					var value = parseInt(R.moves[move][property]);
					if(value>=filterCategories[property].min && value<=filterCategories[property].max){
						temp.push(move);
					}
				});
				filteredList = temp;
			}
		}
		return {
			HTML: HTML,
			hasLoaded : hasLoaded,
			destroy: destroy,
			filterSubject: filterSubject,
			removeSubject: removeSubject,
			filterMoves: filterMoves,
			getFilters: getFilters,
			setFilters: setFilters,
			setRemoveVisablity: setRemoveVisablity,
		}
	}
})(this);