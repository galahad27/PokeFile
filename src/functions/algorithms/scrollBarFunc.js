(function(root){
	utill.scrollBar = function(scrollbarElement){
		var parent = $(scrollbarElement).parent();
		var totalHeight = $(parent).scrollHeight;
		var visibleHight = $(parent).innerHeight();
		var barHeight = visibleHight;
		if(visibleHight<totalHeight){
			barHeight = visibleHight*(visibleHight/totalHeight);
		}
		var init = function(){
			scrollbarElement.style.height = barHeight;
		}
		var move = function(){

		}
		return {
			init: init,
			move: move,
		}
	}
})(this);