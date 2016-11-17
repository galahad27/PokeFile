(function(root){
	utill.scrollBar = function(scrollbarElement, dir, scrollbarColor, thumbColor){
		const FILENAME = "utill scrollbar";
		const DEFAULTSIZE = 10;
		const MINSIZE = 5;

		var scrollbar = {
			parent : {},
			scrollBar : {},
			thumb : {},

			tick : null,
			first : true,

			startScroller : function(){
				utill.printFunctionName(FILENAME, arguments.callee.name);
				setConst();
				resize();
				$(scrollbar.parent.element).on("scroll", scroll);
				$(window).resize(resize);
			},
			resize : function(){
				utill.printFunctionName(FILENAME, arguments.callee.name);
				setSize();
				scroll();
			},
			destroy : function(){
				utill.printFunctionName(FILENAME, arguments.callee.name);
				$(scrollbarparent.element).off("scroll", scroll);
				$(window).off("resize", resize);
			},
		}
		function resize(){
			scrollbar.resize();
		}
		function scroll(){
			utill.printFunctionName(FILENAME, arguments.callee.name);
			setScrollBarPosition();
			setThumbPosition();
			setUI();
			show();
		}
		function setConst(){
			utill.printFunctionName(FILENAME, arguments.callee.name);
			scrollbar.parent.element = $(scrollbarElement).parent()[0];
			scrollbar.scrollBar.element = scrollbarElement;
			scrollbar.thumb.element = scrollbarElement.querySelector(".thumb");
			scrollbar.parent.width = {};
			scrollbar.parent.height = {};
			if(dir === "horizontal"){
				scrollbar.scrollBar.left = $(scrollbar.parent.element).scrollLeft();
				scrollbar.scrollBar.height = DEFAULTSIZE;
				scrollbar.thumb.height = DEFAULTSIZE;
				scrollbar.thumb.top = 0;
			}else{
				scrollbar.scrollBar.top = $(scrollbar.parent.element).scrollTop();
				scrollbar.scrollBar.width = DEFAULTSIZE;
				scrollbar.thumb.width = DEFAULTSIZE;
				scrollbar.thumb.left = 0;
			}
			scrollbar.scrollBar.element.style.background = scrollbarColor;
			scrollbar.thumb.element.style.background = thumbColor;
		}
		function setSize(){
			utill.printFunctionName(FILENAME, arguments.callee.name);
			scrollbar.parent.width.full = scrollbar.parent.element.scrollWidth;
			scrollbar.parent.height.full = scrollbar.parent.element.scrollHeight;
			scrollbar.parent.width.visible = $(scrollbar.parent.element).innerWidth();
			scrollbar.parent.height.visible = $(scrollbar.parent.element).innerHeight();
			setscrollBarSize();
			setThumbSize();
		}
		function setscrollBarSize(){
			utill.printFunctionName(FILENAME, arguments.callee.name);
			if(dir === "horizontal"){
				scrollbar.scrollBar.width = scrollbar.parent.width.visible;
			}else{
				scrollbar.scrollBar.height = scrollbar.parent.height.visible;	
			}
		}
		function setThumbSize(){
			utill.printFunctionName(FILENAME, arguments.callee.name);
			if(dir === "horizontal"){
				if(scrollbar.parent.width.visible<scrollbar.parent.width.full){
					scrollbar.thumb.width = scrollbar.parent.width.visible*(scrollbar.parent.width.visible/scrollbar.parent.width.full);
					if(scrollbar.thumb.width<MINSIZE){
						scrollbar.thumb.width = MINSIZE;
					}
				}else{
					scrollbar.thumb.width = scrollbar.parent.width.visible;
				}
			}else{
				if(scrollbar.parent.height.visible<scrollbar.parent.height.full){
					scrollbar.thumb.height = scrollbar.parent.height.visible*(scrollbar.parent.height.visible/scrollbar.parent.height.full);
					if(scrollbar.thumb.height<MINSIZE){
						scrollbar.thumb.height = MINSIZE;
					}
				}
				else{
					scrollbar.thumb.height = scrollbar.parent.height.visible;
				}
			}
		}
		function setScrollBarPosition(){
			utill.printFunctionName(FILENAME, arguments.callee.name);
			if(dir === "horizontal"){
				scrollbar.parent.prevPos = scrollbar.scrollBar.left;
				scrollbar.scrollBar.top = $(scrollbar.parent.element).scrollTop()+scrollbar.parent.height.visible-scrollbar.scrollBar.height;
				scrollbar.scrollBar.left = $(scrollbar.parent.element).scrollLeft();
			}else{
				scrollbar.parent.prevPos = scrollbar.scrollBar.top;
				scrollbar.scrollBar.top = $(scrollbar.parent.element).scrollTop();
				scrollbar.scrollBar.left = $(scrollbar.parent.element).scrollLeft()+scrollbar.parent.width.visible-scrollbar.scrollBar.width;
			}
		}
		function setThumbPosition(){
			utill.printFunctionName(FILENAME, arguments.callee.name);
			if(dir === "horizontal"){
				scrollbar.thumb.left = (scrollbar.scrollBar.left*(scrollbar.parent.width.visible - scrollbar.thumb.width))/(scrollbar.parent.width.full-scrollbar.parent.width.visible);
			}else{
				scrollbar.thumb.top = (scrollbar.scrollBar.top*(scrollbar.parent.height.visible - scrollbar.thumb.height))/(scrollbar.parent.height.full-scrollbar.parent.height.visible);
			}
		}
		function setUI(){
			utill.printFunctionName(FILENAME, arguments.callee.name);
			scrollbar.scrollBar.element.style.height = scrollbar.scrollBar.height+"px";
			scrollbar.scrollBar.element.style.width = scrollbar.scrollBar.width+"px";
			scrollbar.scrollBar.element.style.top = scrollbar.scrollBar.top+"px";
			scrollbar.scrollBar.element.style.left = scrollbar.scrollBar.left+"px";
			scrollbar.thumb.element.style.height = scrollbar.thumb.height+"px";
			scrollbar.thumb.element.style.width = scrollbar.thumb.width+"px";
			scrollbar.thumb.element.style.marginTop = scrollbar.thumb.top+"px";
			scrollbar.thumb.element.style.marginLeft = scrollbar.thumb.left+"px";
		}
		function show(){
			utill.printFunctionName(FILENAME, arguments.callee.name);
			var same = true;
			if(dir === "horizontal"){
				if(scrollbar.parent.prevPos != scrollbar.scrollBar.left){
					same = false;
				}else{
					same = true;
				}
			}else{
				if(scrollbar.parent.prevPos != scrollbar.scrollBar.top){
					same = false;
				}else{
					same = true;
				}
			}
			
			if(!scrollbar.first && !same){
				!!scrollbar.tick && clearTimeout(scrollbar.tick);
				scrollbar.tick = null;
				scrollbar.scrollBar.element.style.visibility = "visible";
				scrollbar.tick = setTimeout(function(){
					scrollbar.scrollBar.element.style.visibility = "hidden";
				}, 1000)	
			}else{
				scrollbar.scrollBar.element.style.visibility = "hidden";
				scrollbar.first = false;
			}
		}
		return {
			startScroller: scrollbar.startScroller,
			destroy: scrollbar.destroy,
			resize: scrollbar.resize,
		}
	}
})(this);