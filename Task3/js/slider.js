$(function() {
	var currentIndex = 0;
	var itemCount    = $('.carousel > li').length;

	$('.carousel > li:eq(' + currentIndex + ')').addClass('active');

	$('nav a').on('click', function() {
		var $active  = $('.carousel > li.active');
		var position = $(this).attr('href')
		position = position.substring(1);
		
		currentIndex = position % itemCount;
		var $next = $('.carousel > li:eq(' + currentIndex + ')');
		$active.addClass('next-out');
		$next.addClass('active').addClass('next-in');
		setTimeout(function() { 
			$active.removeClass('active next-out prev-out');
			$next.removeClass(' next-in prev-in')
		}, 1);
	})

	$('.carousel-nav').on('click', function() {
		var $active  = $('.carousel > li.active');
		var isNext   = $(this).hasClass('next');
		currentIndex = (currentIndex + (isNext ? 1 : -1)) % itemCount;
		if (currentIndex === -1) {
			currentIndex = itemCount - 1;
		}

		var $next = $('.carousel > li:eq(' + currentIndex + ')');
		if(isNext){
			$active.addClass('next-out');
			$next.addClass('active').addClass('next-in');
		}else{
			$active.addClass('prev-out');
			$next.addClass('active').addClass('prev-in');
		}
		setTimeout(function() { 
			$active.removeClass('active next-out prev-out');
			$next.removeClass('next-in prev-in')
		}, 1);
	});
});