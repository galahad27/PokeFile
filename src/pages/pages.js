(function(root){
	var pages = {};

	pages.elements = document.querySelectorAll(".poke_page");
	pages.elements.forEach(function(page){
		pageId = page.getAttribute("id");
		pages[pageId] = page;
	});
	pages.pageIds = {
		POKEMONPROFILE : "pokemonProfile",
	} 

	pages.loadPage = function(page){
		if(!!page.activePage){
			onBeforeHide(page);
		}else{
			onBeforeShow(page);
		}
	}
	function onBeforeHide(page){
		!!pages.activePage.onBeforeHide && pages.activePage.onBeforeHide();
		onHide(page);
	};
	function onHide(page){
		pages.activePage.style.display = "none";
		!!pages.activePage.onHide && pages.activePage.onHide();
		onBeforeShow(page);
	};
	function onBeforeShow(page){
		pages.activePage = pages[page];
		pageUIs = pages.activePage.querySelectorAll("[pre-insert]");
		pageUIs.forEach(function(UI){
			html.load(UI, UI.getAttribute("pre-insert"));
		});
		!!pages.activePage.onBeforeShow && pages.activePage.onBeforeShow();
		onShow();
	};
	function onShow(){
		pages.activePage.style.display = "block";
		!!pages.activePage.onShow && pages.activePage.onShow();
	};

	root.pages = pages;
})(this);