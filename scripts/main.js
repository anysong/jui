$(function(){
	var bind = function(){
		$('.list-li').on('click', function(ev){
			var target = $(ev.target);
			$('.list-li').removeClass('active');
			target.addClass('active');
		})
	};
	var init = function(){
		bind();
	};
	init()
})