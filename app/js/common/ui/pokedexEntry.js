(function(root){
	html.pokedexEntry = function(){
		var el = function(input){
			return "<p class=\"pokedexEntry\"><b>"+input[0]+"</b>: "+input[1]+"</p>";
		}
		return{
			el : el,
		}
	}
})(this);