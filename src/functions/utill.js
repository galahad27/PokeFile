(function(root){

	var utill = {};

	utill.statFormula = function(level, base, iv, ev, nature, isHp){
		if(isHp){
			return Math.floor((((2*base+iv+(ev/4))*level)/100)+level+10);
		}else{
			return Math.floor(Math.floor((((2*base+iv+(ev/4))*level)/100)+5)*nature);
		}
	}
	utill.regex = function(input, regex){
		return regex.test(input);
	}
	utill.printFunctionName = function(name, func){
		console.log("["+name+" | "+func+"]");
	}
	utill.printVariable = function(name, variable){
		console.log(name.toUpperCase()+": ",variable);
	}

	root.utill = utill;
})(this);