(function(root){
	html.movesFilter = function(){
		var filters = {
			types: [],
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
		var el = function(){
			return ""+
			"	<div class=\"movesFilter\">"+
			"		<div class=\"row\">"+
			"			<div class=\"cell\" filterCategory=\"types\">"+
			"				<h3>Types</h3>"+
			"				<div class=\"table\">"+
			"					<div class=\"row\">"+
			"						<div class=\"cell\" filterName=\"bug\">"+ html.checkBoxObject("Bug", "Bug") +"</div>"+
			"						<div class=\"cell\" filterName=\"fighting\">"+ html.checkBoxObject("Fighting", "Fighting") +"</div>"+
			"						<div class=\"cell\" filterName=\"normal\">"+ html.checkBoxObject("Normal", "Normal") +"</div>"+
			"					</div>"+
			"					<div class=\"row\">"+
			"						<div class=\"cell\" filterName=\"dark\">"+ html.checkBoxObject("Dark", "Dark") +"</div>"+
			"						<div class=\"cell\" filterName=\"flying\">"+ html.checkBoxObject("Flying", "Flying") +"</div>"+
			"						<div class=\"cell\" filterName=\"poison\">"+ html.checkBoxObject("Poison", "Poison") +"</div>"+
			"					</div>"+
			"					<div class=\"row\">"+
			"						<div class=\"cell\" filterName=\"dragon\">"+ html.checkBoxObject("Dragon", "Dragon") +"</div>"+
			"						<div class=\"cell\" filterName=\"ghost\">"+ html.checkBoxObject("Bug", "Bug") +"</div>"+
			"						<div class=\"cell\" filterName=\"psychic\">"+ html.checkBoxObject("Psychic", "Psychic") +"</div>"+
			"					</div>"+
			"					<div class=\"row\">"+
			"						<div class=\"cell\" filterName=\"electric\">"+ html.checkBoxObject("Electric", "Electric") +"</div>"+
			"						<div class=\"cell\" filterName=\"grass\">"+ html.checkBoxObject("Grass", "Grass") +"</div>"+
			"						<div class=\"cell\" filterName=\"rock\">"+ html.checkBoxObject("Rock", "Rock") +"</div>"+
			"					</div>"+
			"					<div class=\"row\">"+
			"						<div class=\"cell\" filterName=\"fairy\">"+ html.checkBoxObject("Fairy", "Fairy") +"</div>"+
			"						<div class=\"cell\" filterName=\"ground\">"+ html.checkBoxObject("Ground", "Ground") +"</div>"+
			"						<div class=\"cell\" filterName=\"steel\">"+ html.checkBoxObject("Steel", "Steel") +"</div>"+
			"						</div>"+
			"					<div class=\"row\">"+
			"						<div class=\"cell\" filterName=\"fire\">"+ html.checkBoxObject("Fire", "Fire") +"</div>"+
			"						<div class=\"cell\" filterName=\"ice\">"+ html.checkBoxObject("Ice", "Ice") +"</div>"+
			"						<div class=\"cell\" filterName=\"water\">"+ html.checkBoxObject("Water", "Water") +"</div>"+
			"					</div>"+
			"				</div>"+
			"			</div>"+
			"			<div class=\"cell\" filterCategory=\"category\">"+
			"				<h3>Category</h3>"+
			"				<div filterName=\"physical\">"+ html.checkBoxObject("Physical") +"</div>"+
			"				<div filterName=\"special\">"+ html.checkBoxObject("Special") +"</div>"+
			"				<div filterName=\"status\">"+ html.checkBoxObject("Status") +"</div>"+
			"			</div>"+
			"			<div class=\"cell\" filterCategory=\"statusEffects\">"+
			"				<h3>Status Effects</h3>"+
			"				<div filterName=\"burn\">"+ html.checkBoxObject("Burn") +"</div>"+
			"				<div filterName=\"freeze\">"+ html.checkBoxObject("Freeze") +"</div>"+
			"				<div filterName=\"paralysis\">"+ html.checkBoxObject("Paralysis") +"</div>"+
			"				<div filterName=\"poison\">"+ html.checkBoxObject("Poison") +"</div>"+
			"				<div filterName=\"sleep\">"+ html.checkBoxObject("Sleep") +"</div>"+
			"			</div>"+
			"			<div class=\"cell\" filterCategory=\"battleEffects\">"+
			"				<h3>Battle Effects</h3>"+
			"				<div filterName=\"confusion\">"+ html.checkBoxObject("Confusion") +"</div>"+
			"				<div filterName=\"crit\">"+ html.checkBoxObject("Crit") +"</div>"+
			"				<div filterName=\"flinch\">"+ html.checkBoxObject("Flinch") +"</div>"+
			"				<div filterName=\"heal\">"+ html.checkBoxObject("Heal") +"</div>"+
			"				<div filterName=\"priority\">"+ html.checkBoxObject("Priority") +"</div>"+
			"				<div filterName=\"trap\">"+ html.checkBoxObject("Trap") +"</div>"+
			"			</div>"+
			"		</div>"+
			"		<div class=\"row\">"+
			"			<div class=\"cell\" filterCategory=\"statChanges\">"+
			"				<h3>Stat Changes</h3>"+
			"				<div class=\"table\">"+
			"					<div class=\"row\">"+
			"						<div class=\"cell\" filterName=\"attack\">"+ html.checkBoxObject("Attack") +"</div>"+
			"						<div class=\"cell\" filterName=\"statIncrease\">"+ html.checkBoxObject("+") +"</div>"+
			"						<div class=\"cell\" filterName=\"statOne\">"+ html.checkBoxObject("1") +"</div>"+
			"					</div>"+
			"					<div class=\"row\">"+
			"						<div class=\"cell\" filterName=\"defense\">"+ html.checkBoxObject("Defense") +"</div>"+
			"						<div class=\"cell\" filterName=\"statDecrease\">"+ html.checkBoxObject("-") +"</div>"+
			"						<div class=\"cell\" filterName=\"statTwo\">"+ html.checkBoxObject("2") +"</div>"+
			"					</div>"+
			"					<div class=\"row\">"+
			"						<div class=\"cell\" filterName=\"spAttack\">"+ html.checkBoxObject("Sp. Attack") +"</div>"+
			"						<div class=\"cell\"></div>"+
			"						<div class=\"cell\" filterName=\"statThree\">"+ html.checkBoxObject("3") +"</div>"+
			"					</div>"+
			"					<div class=\"row\">"+
			"						<div class=\"cell\" filterName=\"spDefense\">"+ html.checkBoxObject("Sp. Defense") +"</div>"+
			"						<div class=\"cell\"></div>"+
			"						<div class=\"cell\" filterName=\"statFour\">"+ html.checkBoxObject("4") +"</div>"+
			"					</div>"+
			"					<div class=\"row\">"+
			"						<div class=\"cell\" filterName=\"speed\">"+ html.checkBoxObject("Speed") +"</div>"+
			"						<div class=\"cell\"></div>"+
			"						<div class=\"cell\" filterName=\"statFive\">"+ html.checkBoxObject("5") +"</div>"+
			"					</div>"+
			"					<div class=\"row\">"+
			"						<div class=\"cell\" filterName=\"accuracy\">"+ html.checkBoxObject("Accuracy") +"</div>"+
			"						<div class=\"cell\"></div>"+
			"						<div class=\"cell\" filterName=\"statSix\">"+ html.checkBoxObject("6") +"</div>"+
			"					</div>"+
			"					<div class=\"row\">"+
			"						<div class=\"cell\" filterName=\"evasion\">"+ html.checkBoxObject("Evasion") +"</div>"+
			"						<div class=\"cell\"></div>"+
			"						<div class=\"cell\"></div>"+
			"					</div>"+
			"				</div>"+
			"			</div>"+
			"				<div class=\"cell\" filterCategory=\"learnedBy\">"+
			"				<h3>Learned By</h3>"+
			"				<div filterName=\"egg\">"+ html.checkBoxObject("Egg") +"</div>"+
			"				<div filterName=\"hm\">"+ html.checkBoxObject("HM") +"</div>"+
			"				<div filterName=\"level\">"+ html.checkBoxObject("Level") +"</div>"+
			"				<div filterName=\"preEvolution\">"+ html.checkBoxObject("Pre-Evolution") +"</div>"+
			"				<div filterName=\"tm\">"+ html.checkBoxObject("TM") +"</div>"+
			"				<div filterName=\"transfer\">"+ html.checkBoxObject("Transfer") +"</div>"+
			"				<div filterName=\"tutor\">"+ html.checkBoxObject("Tutor") +"</div>"+
			"			</div>"+
			"			<div class=\"cell\">"+
			"				<div filterCategory=\"power\"><h3>Power</h3>"+html.minMaxTextBoxObject()+"</div>"+
			"				<div filterCategory=\"accuracy\"><h3>Accuracy</h3>"+html.minMaxTextBoxObject()+"</div>"+
			"				<div filterCategory=\"pp\"><h3>PP</h3>"+html.minMaxTextBoxObject()+"</div>"+
			"			</div>"+
			"			<div class=\"cell\">"+
			"				<button class=\"clearButton\" type=\"button\">Clear</button>"+
			"				<button class=\"removeButton\" type=\"button\">Remove</button>"+
			"			</div>"+
			"		</div>"+
			"	</div>";
		}
		var filterMoves = function(moves){

		}
		filterCategories = function(num){
			if(movesLists[num].category.length == 0){
				return primaryPokemon.moves.all;
			}else{
				var list = [];
				movesLists[num].isFiltered = true;
				movesLists[num].category.forEach(function(category){
					primaryPokemon.moves.all.forEach(function(move){
						if(dev.moves[move].category == category){
							list.push(move);
						}
					});
				});
				return list;
			}
		}
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
			el: el,
			filterMoves: filterMoves,
		}
	}
})(this);