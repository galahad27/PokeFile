(function(root){
	html.pokedexEntry = function(){
		var html = function(input){
			return "<p class=\"pokedexEntry\"><b>"+input[0]+"</b>: "+input[1]+"</p>";
		}
		return{
			html : html,
		}
	}
})(this);