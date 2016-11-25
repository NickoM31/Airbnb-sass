(function(){
	"use strict";
	var app = {
		init : function(){
			$('select').on('click', app.showMenu);
		},
		hideMenu : function(){
			$('.header').hide();

		},
		showMenu : function(){
			$('.form').prepend("<div>"+"Page D'accueil"+"</div");
		}




	};
	$(document).ready(function(){
		app.init();
	});
})();