$(function(){
	
	"use strict";
	
    $('a[href^="#"]').click(function(){
        var target = $(this).attr('href');
        $('html, body').animate({scrollTop: $(target).offset().top - 100}, 800);
        console.log("sddfs");
        return false;
    });

    jQuery(window).scroll(function(){
        var $sections = $('.main');
        $sections.each(function(i,el){
            var top  = $(el).offset().top-110;
            var bottom = top +$(el).height();
            var scroll = $(window).scrollTop();
            var id = $(el).attr('id');
            if( scroll > top && scroll < bottom){
                $('a.active').removeClass('active');
                $('a[href="#'+id+'"]').addClass('active');

            }
        })
		var $sections_dop = $('.dop');
        $sections_dop.each(function(i,el){
            var top  = $(el).offset().top-110;
            var bottom = top +$(el).height();
            var scroll = $(window).scrollTop();
            var id = $(el).attr('id');
            if( scroll > top && scroll < bottom){
                $('a.active1').removeClass('active1');
                $('a[href="#'+id+'"]').addClass('active1');

            }
        })
    });
	
   var isMobile = false;
	
	$(document).on('mousemove', function (e) {
		$('.magnetic').each(function () {
			if (!isMobile) {
				magnetic(this, e);
			}
		});
	});

	function magnetic(el, e) {
		var mX = e.pageX,
			mY = e.pageY;
			const obj = $(el);

		const customDist = 20 * obj.data('dist') || 25,
			centerX = obj.offset().left + obj.width() / 2,
			centerY = obj.offset().top + obj.height() / 2;

		var deltaX = Math.floor((centerX - mX)) * -.4,
			deltaY = Math.floor((centerY - mY)) * -.4;

		var distance = calcDistance(obj, mX, mY);

		if (distance < customDist) {
			TweenMax.to(obj, .4, {
				y: deltaY,
				x: deltaX
		});
		} else {
			TweenMax.to(obj, .4, {
				y: 0,
				x: 0
			});
		}
	}

	function calcDistance(elem, mouseX, mouseY) {
		return Math.floor(Math.sqrt(Math.pow(mouseX - (elem.offset().left + (elem.width() / 2)), 2) + Math.pow(mouseY - (elem.offset().top + (elem.height() / 2)), 2)));
	}
	
});