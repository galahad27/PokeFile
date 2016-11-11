(function(root){
	html.pokedexEntry = function(){
		var HTML = function(input){
			return "<p class=\"pokedexEntry\"><b>"+input[0]+"</b>: "+input[1]+"</p>";
		}
		return{
			HTML : HTML,
		}
	}
})(this);