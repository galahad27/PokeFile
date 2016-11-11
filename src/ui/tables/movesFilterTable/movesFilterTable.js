(function(root){
	html.movesFilterTable = function(){
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
		var HTML = function(moves){
			movesList = moves;
			return ""+
			"	<div class=\"movesFilterTable\">"+
			"		<div class=\"row\">"+
			"			<div class=\"cell category\" filterCategory=\"type\">"+
			"				<h3>Types</h3>"+
			"				<div class=\"table\">"+
			"					<div class=\"row\">"+
			"						<div class=\"cell name\" filterName=\"bug\">"+ html.checkBox(R.types.bug.name, R.types.bug.colors.main) +"</div>"+
			"						<div class=\"cell name\" filterName=\"fighting\">"+ html.checkBox(R.types.fighting.name, R.types.fighting.colors.main) +"</div>"+
			"						<div class=\"cell name\" filterName=\"normal\">"+ html.checkBox(R.types.normal.name, R.types.normal.colors.main) +"</div>"+
			"					</div>"+
			"					<div class=\"row\">"+
			"						<div class=\"cell name\" filterName=\"dark\">"+ html.checkBox(R.types.dark.name, R.types.dark.colors.main) +"</div>"+
			"						<div class=\"cell name\" filterName=\"flying\">"+ html.checkBox(R.types.flying.name, R.types.flying.colors.main) +"</div>"+
			"						<div class=\"cell name\" filterName=\"poison\">"+ html.checkBox(R.types.poison.name, R.types.poison.colors.main) +"</div>"+
			"					</div>"+
			"					<div class=\"row\">"+
			"						<div class=\"cell name\" filterName=\"dragon\">"+ html.checkBox(R.types.dragon.name, R.types.dragon.colors.main) +"</div>"+
			"						<div class=\"cell name\" filterName=\"ghost\">"+ html.checkBox(R.types.ghost.name, R.types.ghost.colors.main) +"</div>"+
			"						<div class=\"cell name\" filterName=\"psychic\">"+ html.checkBox(R.types.psychic.name, R.types.psychic.colors.main) +"</div>"+
			"					</div>"+
			"					<div class=\"row\">"+
			"						<div class=\"cell name\" filterName=\"electric\">"+ html.checkBox(R.types.electric.name, R.types.electric.colors.main) +"</div>"+
			"						<div class=\"cell name\" filterName=\"grass\">"+ html.checkBox(R.types.grass.name, R.types.grass.colors.main) +"</div>"+
			"						<div class=\"cell name\" filterName=\"rock\">"+ html.checkBox(R.types.rock.name, R.types.rock.colors.main) +"</div>"+
			"					</div>"+
			"					<div class=\"row\">"+
			"						<div class=\"cell name\" filterName=\"fairy\">"+ html.checkBox(R.types.fairy.name, R.types.fairy.colors.main) +"</div>"+
			"						<div class=\"cell name\" filterName=\"ground\">"+ html.checkBox(R.types.ground.name, R.types.ground.colors.main) +"</div>"+
			"						<div class=\"cell name\" filterName=\"steel\">"+ html.checkBox(R.types.steel.name, R.types.steel.colors.main) +"</div>"+
			"						</div>"+
			"					<div class=\"row\">"+
			"						<div class=\"cell name\" filterName=\"fire\">"+ html.checkBox(R.types.fire.name, R.types.fire.colors.main) +"</div>"+
			"						<div class=\"cell name\" filterName=\"ice\">"+ html.checkBox(R.types.ice.name, R.types.ice.colors.main) +"</div>"+
			"						<div class=\"cell name\" filterName=\"water\">"+ html.checkBox(R.types.water.name, R.types.water.colors.main) +"</div>"+
			"					</div>"+
			"				</div>"+
			"			</div>"+
			"			<div class=\"cell category\" filterCategory=\"category\">"+
			"				<h3>Category</h3>"+
			"				<div class=\"name\" filterName=\"physical\">"+ html.checkBox("Physical") +"</div>"+
			"				<div class=\"name\" filterName=\"special\">"+ html.checkBox("Special") +"</div>"+
			"				<div class=\"name\" filterName=\"status\">"+ html.checkBox("Status") +"</div>"+
			"			</div>"+
			"			<div class=\"cell category\" filterCategory=\"status\">"+
			"				<h3>Status Effects</h3>"+
			"				<div class=\"name\" filterName=\"burn\">"+ html.checkBox("Burn") +"</div>"+
			"				<div class=\"name\" filterName=\"freeze\">"+ html.checkBox("Freeze") +"</div>"+
			"				<div class=\"name\" filterName=\"paralysis\">"+ html.checkBox("Paralysis") +"</div>"+
			"				<div class=\"name\" filterName=\"poison\">"+ html.checkBox("Poison") +"</div>"+
			"				<div class=\"name\" filterName=\"sleep\">"+ html.checkBox("Sleep") +"</div>"+
			"			</div>"+
			"			<div class=\"cell category\" filterCategory=\"battle\">"+
			"				<h3>Battle Effects</h3>"+
			"				<div class=\"name\" filterName=\"confusion\">"+ html.checkBox("Confusion") +"</div>"+
			"				<div class=\"name\" filterName=\"crit\">"+ html.checkBox("Crit") +"</div>"+
			"				<div class=\"name\" filterName=\"flinch\">"+ html.checkBox("Flinch") +"</div>"+
			"				<div class=\"name\" filterName=\"heal\">"+ html.checkBox("Heal") +"</div>"+
			"				<div class=\"name\" filterName=\"priority\">"+ html.checkBox("Priority") +"</div>"+
			"				<div class=\"name\" filterName=\"trap\">"+ html.checkBox("Trap") +"</div>"+
			"			</div>"+
			"		</div>"+
			"		<div class=\"row\">"+
			"			<div class=\"cell\">"+
			"				<h3>Stat Changes</h3>"+
			"				<div class=\"cell category\" filterCategory=\"stat\">"+
			"					<div class=\"name\" filterName=\"attack\">"+ html.checkBox(lang.pokemon.stats[lang.userLanguage].attack) +"</div>"+
			"					<div class=\"name\" filterName=\"defense\">"+ html.checkBox(lang.pokemon.stats[lang.userLanguage].defense) +"</div>"+
			"					<div class=\"name\" filterName=\"spAttack\">"+ html.checkBox(lang.pokemon.stats[lang.userLanguage].spAttack) +"</div>"+
			"					<div class=\"name\" filterName=\"spDefense\">"+ html.checkBox(lang.pokemon.stats[lang.userLanguage].spDefense) +"</div>"+
			"					<div class=\"name\" filterName=\"speed\">"+ html.checkBox(lang.pokemon.stats[lang.userLanguage].speed) +"</div>"+
			"					<div class=\"name\" filterName=\"accuracy\">"+ html.checkBox(lang.pokemon.stats[lang.userLanguage].accuracy) +"</div>"+
			"					<div class=\"name\" filterName=\"evasion\">"+ html.checkBox(lang.pokemon.stats[lang.userLanguage].evasion) +"</div>"+
			"				</div>"+
			"				<div class=\"cell category\" filterCategory=\"statDir\">"+
			"					<div class=\"name\" filterName=\"statIncrease\">"+ html.checkBox("+") +"</div>"+
			"					<div class=\"name\" filterName=\"statDecrease\">"+ html.checkBox("-") +"</div>"+
			"				</div>"+
			"				<div class=\"cell category\" filterCategory=\"statChange\">"+
			"					<div class=\"name\" filterName=\"statOne\">"+ html.checkBox("1") +"</div>"+
			"					<div class=\"name\" filterName=\"statTwo\">"+ html.checkBox("2") +"</div>"+
			"					<div class=\"name\" filterName=\"statThree\">"+ html.checkBox("3") +"</div>"+
			"					<div class=\"name\" filterName=\"statFour\">"+ html.checkBox("4") +"</div>"+
			"					<div class=\"name\" filterName=\"statFive\">"+ html.checkBox("5") +"</div>"+
			"					<div class=\"name\" filterName=\"statSix\">"+ html.checkBox("6") +"</div>"+
			"				</div>"+
			"			</div>"+
			"			<div class=\"cell category\" filterCategory=\"learn\">"+
			"				<h3>Learned By</h3>"+
			"				<div class=\"name\" filterName=\"egg\">"+ html.checkBox("Egg") +"</div>"+
			"				<div class=\"name\" filterName=\"hm\">"+ html.checkBox("HM") +"</div>"+
			"				<div class=\"name\" filterName=\"level\">"+ html.checkBox("Level") +"</div>"+
			"				<div class=\"name\" filterName=\"preEvolution\">"+ html.checkBox("Pre-Evolution") +"</div>"+
			"				<div class=\"name\" filterName=\"tm\">"+ html.checkBox("TM") +"</div>"+
			"				<div class=\"name\" filterName=\"transfer\">"+ html.checkBox("Transfer") +"</div>"+
			"				<div class=\"name\" filterName=\"tutor\">"+ html.checkBox("Tutor") +"</div>"+
			"			</div>"+
			"			<div class=\"cell\">"+
			"				<div class=\"category\" filterCategory=\"power\"><h3>Power</h3>"+html.minMaxTextBox()+"</div>"+
			"				<div class=\"category\" filterCategory=\"accuracy\"><h3>Accuracy</h3>"+html.minMaxTextBox()+"</div>"+
			"				<div class=\"category\" filterCategory=\"pp\"><h3>PP</h3>"+html.minMaxTextBox()+"</div>"+
			"			</div>"+
			"			<div class=\"cell\">"+
			"				<button class=\"clearButton\" type=\"button\">Clear</button>"+
			"				<button class=\"removeButton\" type=\"button\">Remove</button>"+
			"			</div>"+
			"		</div>"+
			"	</div>";
		}
		var hasLoaded = function(parent){
			movesFilter = parent.querySelector(".movesFilterTable");
			addEventListeners();
		}
		addEventListeners = function(){
			var checkboxs = movesFilter.querySelectorAll(".checkBox");
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
			filteredList = movesList;
			filterByCategory("type");
			filterByCategory("category");
			filterByCategory("");
			filterByCategory("type");
			filterByCategory("type");
			filterByCategory("type");
			filterByCategory("type");
			filterByCategory("type");
			filterByCategory("type");
			filterByCategory("type");
			filterByCategory("type");
			console.log(filteredList);
		}
		filterByCategory = function(category){
			var temp = [];
			filterCategories[category].forEach(function(filterItem){
				filteredList.forEach(function(move){
					if(R.moves[move][category] === filterItem){
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
			HTML: HTML,
			hasLoaded : hasLoaded,
			filterMoves: filterMoves,
		}
	}
})(this);