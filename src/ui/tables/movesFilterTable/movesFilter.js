(function(root){
	html.movesFilter = function(){
		var movesFilter;
		var movesList;
		var filteredList;

		var filterCategories = {
			type: [],
			category: [],
			status: [],
			battle: [],
			stat: [],
			statDir: [],
			statChange: [],
			learn: [],
			power: [],
			accuracy: [],
			pp: [],
		}
		var html = function(moves){
			movesList = moves;
			return ""+
			"	<div class=\"movesFilter\">"+
			"		<div class=\"row\">"+
			"			<div class=\"cell category\" filterCategory=\"type\">"+
			"				<h3>Types</h3>"+
			"				<div class=\"table\">"+
			"					<div class=\"row\">"+
			"						<div class=\"cell name\" filterName=\"bug\">"+ html.checkBoxObject(lang.pokemon.types.bug, R.colors.types.bug) +"</div>"+
			"						<div class=\"cell name\" filterName=\"fighting\">"+ html.checkBoxObject(lang.pokemon.types.fighting, R.colors.types.fighting) +"</div>"+
			"						<div class=\"cell name\" filterName=\"normal\">"+ html.checkBoxObject(lang.pokemon.types.normal, R.colors.types.normal) +"</div>"+
			"					</div>"+
			"					<div class=\"row\">"+
			"						<div class=\"cell name\" filterName=\"dark\">"+ html.checkBoxObject(lang.pokemon.types.dark, R.colors.types.dark) +"</div>"+
			"						<div class=\"cell name\" filterName=\"flying\">"+ html.checkBoxObject(lang.pokemon.types.flying, R.colors.types.flying) +"</div>"+
			"						<div class=\"cell name\" filterName=\"poison\">"+ html.checkBoxObject(lang.pokemon.types.poison, R.colors.types.poison) +"</div>"+
			"					</div>"+
			"					<div class=\"row\">"+
			"						<div class=\"cell name\" filterName=\"dragon\">"+ html.checkBoxObject(lang.pokemon.types.dragon, R.colors.types.dragon) +"</div>"+
			"						<div class=\"cell name\" filterName=\"ghost\">"+ html.checkBoxObject(lang.pokemon.types.ghost, R.colors.types.ghost) +"</div>"+
			"						<div class=\"cell name\" filterName=\"psychic\">"+ html.checkBoxObject(lang.pokemon.types.psychic, R.colors.types.psychic) +"</div>"+
			"					</div>"+
			"					<div class=\"row\">"+
			"						<div class=\"cell name\" filterName=\"electric\">"+ html.checkBoxObject(lang.pokemon.types.electric, R.colors.types.electric) +"</div>"+
			"						<div class=\"cell name\" filterName=\"grass\">"+ html.checkBoxObject(lang.pokemon.types.grass, R.colors.types.grass) +"</div>"+
			"						<div class=\"cell name\" filterName=\"rock\">"+ html.checkBoxObject(lang.pokemon.types.rock, R.colors.types.rock) +"</div>"+
			"					</div>"+
			"					<div class=\"row\">"+
			"						<div class=\"cell name\" filterName=\"fairy\">"+ html.checkBoxObject(lang.pokemon.types.fairy, R.colors.types.fairy) +"</div>"+
			"						<div class=\"cell name\" filterName=\"ground\">"+ html.checkBoxObject(lang.pokemon.types.ground, R.colors.types.ground) +"</div>"+
			"						<div class=\"cell name\" filterName=\"steel\">"+ html.checkBoxObject(lang.pokemon.types.steel, R.colors.types.steel) +"</div>"+
			"						</div>"+
			"					<div class=\"row\">"+
			"						<div class=\"cell name\" filterName=\"fire\">"+ html.checkBoxObject(lang.pokemon.types.fire, R.colors.types.fire) +"</div>"+
			"						<div class=\"cell name\" filterName=\"ice\">"+ html.checkBoxObject(lang.pokemon.types.ice, R.colors.types.ice) +"</div>"+
			"						<div class=\"cell name\" filterName=\"water\">"+ html.checkBoxObject(lang.pokemon.types.water, R.colors.types.water) +"</div>"+
			"					</div>"+
			"				</div>"+
			"			</div>"+
			"			<div class=\"cell category\" filterCategory=\"category\">"+
			"				<h3>Category</h3>"+
			"				<div class=\"name\" filterName=\"physical\">"+ html.checkBoxObject("Physical") +"</div>"+
			"				<div class=\"name\" filterName=\"special\">"+ html.checkBoxObject("Special") +"</div>"+
			"				<div class=\"name\" filterName=\"status\">"+ html.checkBoxObject("Status") +"</div>"+
			"			</div>"+
			"			<div class=\"cell category\" filterCategory=\"status\">"+
			"				<h3>Status Effects</h3>"+
			"				<div class=\"name\" filterName=\"burn\">"+ html.checkBoxObject("Burn") +"</div>"+
			"				<div class=\"name\" filterName=\"freeze\">"+ html.checkBoxObject("Freeze") +"</div>"+
			"				<div class=\"name\" filterName=\"paralysis\">"+ html.checkBoxObject("Paralysis") +"</div>"+
			"				<div class=\"name\" filterName=\"poison\">"+ html.checkBoxObject("Poison") +"</div>"+
			"				<div class=\"name\" filterName=\"sleep\">"+ html.checkBoxObject("Sleep") +"</div>"+
			"			</div>"+
			"			<div class=\"cell category\" filterCategory=\"battle\">"+
			"				<h3>Battle Effects</h3>"+
			"				<div class=\"name\" filterName=\"confusion\">"+ html.checkBoxObject("Confusion") +"</div>"+
			"				<div class=\"name\" filterName=\"crit\">"+ html.checkBoxObject("Crit") +"</div>"+
			"				<div class=\"name\" filterName=\"flinch\">"+ html.checkBoxObject("Flinch") +"</div>"+
			"				<div class=\"name\" filterName=\"heal\">"+ html.checkBoxObject("Heal") +"</div>"+
			"				<div class=\"name\" filterName=\"priority\">"+ html.checkBoxObject("Priority") +"</div>"+
			"				<div class=\"name\" filterName=\"trap\">"+ html.checkBoxObject("Trap") +"</div>"+
			"			</div>"+
			"		</div>"+
			"		<div class=\"row\">"+
			"			<div class=\"cell\">"+
			"				<h3>Stat Changes</h3>"+
			"				<div class=\"cell category\" filterCategory=\"stat\">"+
			"					<div class=\"name\" filterName=\"attack\">"+ html.checkBoxObject("Attack") +"</div>"+
			"					<div class=\"name\" filterName=\"defense\">"+ html.checkBoxObject("Defense") +"</div>"+
			"					<div class=\"name\" filterName=\"spAttack\">"+ html.checkBoxObject("Sp. Attack") +"</div>"+
			"					<div class=\"name\" filterName=\"spDefense\">"+ html.checkBoxObject("Sp. Defense") +"</div>"+
			"					<div class=\"name\" filterName=\"speed\">"+ html.checkBoxObject("Speed") +"</div>"+
			"					<div class=\"name\" filterName=\"accuracy\">"+ html.checkBoxObject("Accuracy") +"</div>"+
			"					<div class=\"name\" filterName=\"evasion\">"+ html.checkBoxObject("Evasion") +"</div>"+
			"				</div>"+
			"				<div class=\"cell category\" filterCategory=\"statDir\">"+
			"					<div class=\"name\" filterName=\"statIncrease\">"+ html.checkBoxObject("+") +"</div>"+
			"					<div class=\"name\" filterName=\"statDecrease\">"+ html.checkBoxObject("-") +"</div>"+
			"				</div>"+
			"				<div class=\"cell category\" filterCategory=\"statChange\">"+
			"					<div class=\"name\" filterName=\"statOne\">"+ html.checkBoxObject("1") +"</div>"+
			"					<div class=\"name\" filterName=\"statTwo\">"+ html.checkBoxObject("2") +"</div>"+
			"					<div class=\"name\" filterName=\"statThree\">"+ html.checkBoxObject("3") +"</div>"+
			"					<div class=\"name\" filterName=\"statFour\">"+ html.checkBoxObject("4") +"</div>"+
			"					<div class=\"name\" filterName=\"statFive\">"+ html.checkBoxObject("5") +"</div>"+
			"					<div class=\"name\" filterName=\"statSix\">"+ html.checkBoxObject("6") +"</div>"+
			"				</div>"+
			"			</div>"+
			"			<div class=\"cell category\" filterCategory=\"learn\">"+
			"				<h3>Learned By</h3>"+
			"				<div class=\"name\" filterName=\"egg\">"+ html.checkBoxObject("Egg") +"</div>"+
			"				<div class=\"name\" filterName=\"hm\">"+ html.checkBoxObject("HM") +"</div>"+
			"				<div class=\"name\" filterName=\"level\">"+ html.checkBoxObject("Level") +"</div>"+
			"				<div class=\"name\" filterName=\"preEvolution\">"+ html.checkBoxObject("Pre-Evolution") +"</div>"+
			"				<div class=\"name\" filterName=\"tm\">"+ html.checkBoxObject("TM") +"</div>"+
			"				<div class=\"name\" filterName=\"transfer\">"+ html.checkBoxObject("Transfer") +"</div>"+
			"				<div class=\"name\" filterName=\"tutor\">"+ html.checkBoxObject("Tutor") +"</div>"+
			"			</div>"+
			"			<div class=\"cell\">"+
			"				<div class=\"category\" filterCategory=\"power\"><h3>Power</h3>"+html.minMaxTextBoxObject()+"</div>"+
			"				<div class=\"category\" filterCategory=\"accuracy\"><h3>Accuracy</h3>"+html.minMaxTextBoxObject()+"</div>"+
			"				<div class=\"category\" filterCategory=\"pp\"><h3>PP</h3>"+html.minMaxTextBoxObject()+"</div>"+
			"			</div>"+
			"			<div class=\"cell\">"+
			"				<button class=\"clearButton\" type=\"button\">Clear</button>"+
			"				<button class=\"removeButton\" type=\"button\">Remove</button>"+
			"			</div>"+
			"		</div>"+
			"	</div>";
		}
		var hasLoaded = function(parent){
			movesFilter = parent.querySelector(".movesFilter");
			addEventListeners();
		}
		addEventListeners = function(){
			var checkboxs = movesFilter.querySelectorAll(".checkbox");
			checkboxs.forEach(function(checkbox){
				$(checkbox).on("click", checkboxClick);
			});
			var buttons = movesFilter.querySelectorAll(".submitButton");
			buttons.forEach(function(button){
				$(button).on("click", submitClick);
			});
		}
		checkboxClick = function(e){
			var category = $(e.target).parents(".category")[0].getAttribute("filterCategory");
			var name = $(e.target).parents(".name")[0].getAttribute("filterName");
			if(e.target.checked){
				filterCategories[category].push(name);
			}else{
				filterCategories[category] = _.without(filterCategories[category], name);
			}
			filterMoves();
		}
		submitClick = function(e){
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
				filterCategories[category] = {};
			}
			filterMoves();
		}
		var filterMoves = function(){
			console.log(filterCategories.type);
			filteredList = movesList;
			filterByCategory("type");
			console.log(filteredList);
		}
		filterByCategory = function(category){
			var temp = [];
			filterCategories[category].forEach(function(filterItem){
				filteredList.forEach(function(move){
					console.log(dev.moves[move][category]+" : "+filterItem);
					if(dev.moves[move][category] === filterItem){
						temp.push(move);
					}
				});
			});
			if(temp.length>0){
				filteredList = temp;
			}
		}
		filterTypes = function(){
			var temp = [];
			filters.types.forEach(function(type){
				filteredList.forEach(function(move){
					if(dev.moves[move].type == category){
						temp.push(move);
					}
				});
			});
			if(temp.length>0){
				filteredList = temp;
			}
		}
		// filterCategories = function(){
		// 	var temp = []
		// 	filters.category.forEach(function(category){
		// 		filteredList.forEach(function(move){
		// 			if(dev.moves[move].category == category){
		// 				temp.push(move);
		// 			}
		// 		});
		// 	});
		// 	if(temp.length>0){
		// 		filteredList = temp;
		// 	}
		// }
		filterStatus = function(num){
			if(movesLists[num].status.length == 0){
				return  primaryPokemon.moves.all;
			}else{
				var list = [];
				movesLists[num].isFiltered = true;
				movesLists[num].status.forEach(function(status){
					primaryPokemon.moves.all.forEach(function(move){
						if(_.contains(dev.moves[move].effects.condition, status)){
							list.push(move);
						}
					});
				});
				return list;
			}
		}
		filterBattle = function(num){
			if(movesLists[num].battle.length == 0){
				return primaryPokemon.moves.all;
			}else{
				var list = [];
				movesLists[num].isFiltered = true;
				movesLists[num].battle.forEach(function(battle){
					primaryPokemon.moves.all.forEach(function(move){
						if(_.contains(dev.moves[move].effects.condition, battle)){
							list.push(move);
						}
					});
				});
				return list;
			}
		}
		filterStat = function(num){
			if(movesLists[num].stat.length == 0){
				return primaryPokemon.moves.all;
			}else{
				var list = [];
				movesLists[num].isFiltered = true;
				movesLists[num].stat.forEach(function(stat){
					primaryPokemon.moves.all.forEach(function(move){
						var contains = _.some(dev.moves[move].effects.condition, function(el){
							if(!!el.stat){
								return el.stat == stat;
							}else{
								return false;
							}
						});
						if(contains){
							list.push(move);
						}
					});
				});
				return list;
			}
		}
		filterStatDir = function(num){
			if(movesLists[num].statDir.length == 0){
				return primaryPokemon.moves.all;
			}else{
				var list = [];
				movesLists[num].isFiltered = true;
				movesLists[num].statDir.forEach(function(dir){
					primaryPokemon.moves.all.forEach(function(move){
						var contains = _.some(dev.moves[move].effects.condition, function(el){
							if(!!el.dir){
								return el.dir == dir;
							}else{
								return false;
							}
						});
						if(contains){
							list.push(move);
						}
					});
				});
				return list;
			}
		}
		filterStatNum = function(num){
			if(movesLists[num].statNum.length == 0){
				return primaryPokemon.moves.all;
			}else{
				var list = [];
				movesLists[num].isFiltered = true;
				movesLists[num].statNum.forEach(function(num){
					primaryPokemon.moves.all.forEach(function(move){
						var contains = _.some(dev.moves[move].effects.condition, function(el){
							if(!!el.num){
								return el.num == num;
							}else{
								return false;
							}
						});
						if(contains){
							list.push(move);
						}
					});
				});
				return list;
			}
		}
		filterLearn = function(num){
			if(movesLists[num].learn.length == 0){
				return primaryPokemon.moves.all;
			}else{
				var list = [];
				movesLists[num].isFiltered = true;
				movesLists[num].learn.forEach(function(learn){
					primaryPokemon.moves[learn].forEach(function(move){
						list.push(move);
					});
				});
				return list;
			}
		}
		filterPower = function(num){
			if(movesLists[num].power.length == 0){
				return primaryPokemon.moves.all;
			}else{
				var list = [];
				movesLists[num].isFiltered = true;
				primaryPokemon.moves.all.forEach(function(move){
					var movePower = parseInt(dev.moves[move].power);
					if(movePower>=movesLists[num].power[0] && movePower<=movesLists[num].power[1]){
						list.push(move);
					}
				});
				return list;
			}
		}
		filterAccuracy = function(num){
			if(movesLists[num].accuracy.length == 0){
				return primaryPokemon.moves.all;
			}else{
				var list = [];
				movesLists[num].isFiltered = true;
				primaryPokemon.moves.all.forEach(function(move){
					var moveAcc = parseInt(dev.moves[move].accuracy);
					if(moveAcc>=movesLists[num].accuracy[0] && moveAcc<=movesLists[num].accuracy[1]){
						list.push(move);
					}
				});
				return list;
			}
		}
		filterPP = function(num){
			if(movesLists[num].pp.length == 0){
				return primaryPokemon.moves.all;
			}else{
				var list = [];
				movesLists[num].isFiltered = true;
				primaryPokemon.moves.all.forEach(function(move){
					var movePP = parseInt(dev.moves[move].pp);
					if(movePP>=movesLists[num].pp[0] && movePP<=movesLists[num].pp[1]){
						list.push(move);
					}
				});
				return list;
			}
		}
		filterTable = function(movesTable, num){
			movesLists[num].isFiltered = false;
			
			var typeFilterList = filterTypes(num);
			var categoryFilterList = filterCategories(num);
			var statusFilterList = filterStatus(num);
			var battleFilterList = filterBattle(num);
			var statFilterList = filterStat(num);
			var statDirFilterList = filterStatDir(num);
			var statNumFilterList = filterStatNum(num);
			var learnFilterList = filterLearn(num);
			var powerFilterList = filterPower(num);
			var accuracyFilterList = filterAccuracy(num);
			var ppFilterList = filterPP(num);

			var filteredList = primaryPokemon.moves.all;
			if(movesLists[num].isFiltered){
				filteredList = _.intersection(typeFilterList,categoryFilterList,statusFilterList,battleFilterList,statFilterList,statDirFilterList,statNumFilterList,learnFilterList,powerFilterList,accuracyFilterList,ppFilterList);
			}
			$(movesTable).empty();
			$(movesTable).append(html.movesHeader(primaryPokemon.battle.primaryType));
			filteredList.forEach(function(move){
				var input = {
					type : primaryPokemon.battle.primaryType,
					move : dev.moves[move],
					effect : moveEffectsToString(dev.moves[move].effects),
				};
				html.load(movesTable, input);
			});
		}

		return {
			html: html,
			hasLoaded : hasLoaded,
			filterMoves: filterMoves,
		}
	}
})(this);