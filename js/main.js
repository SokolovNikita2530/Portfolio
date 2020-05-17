function viewportToPixels(value) {
  var parts = value.match(/([0-9\.]+)(vh|vw)/)
  var q = Number(parts[1])
  var side = window[['innerHeight', 'innerWidth'][['vh', 'vw'].indexOf(parts[2])]]
  return side * (q/100)
}

jQuery(function($) {
	$(window).scroll(function(){
		if($(this).scrollTop()>viewportToPixels('100vh')){
			$('#fix').addClass('fixed');
		}
		else if ($(this).scrollTop()<viewportToPixels('100vh')){
			$('#fix').removeClass('fixed');
		}
	});
});



var sections = $('section')
	, nav = $('nav')
	, nav_height = nav.outerHeight();

$(window).on('scroll', function () {
	var cur_pos = $(this).scrollTop();
	  
	sections.each(function() {
		var top = $(this).offset().top - nav_height,
		bottom = top + $(this).outerHeight();
	    
		if (cur_pos >= top && cur_pos <= bottom) {
			nav.find('a').removeClass('active');
			sections.removeClass('active');
	      $(this).addClass('active');
			nav.find('a[href="#'+$(this).attr('id')+'"]').addClass('active');
		}
	});
});

nav.find('a').on('click', function () {
	var $el = $(this)
	, id = $el.attr('href');
	  
	$('html, body').animate({
		scrollTop: $(id).offset().top - nav_height
	}, 500);
	  
	return false;
});

let title,title1,title2,work2,work1,ring1,ring2,ring3,ring4,ring5,ring6,ring7;

title = document.getElementById('title');
title1 = document.getElementById('title1');
title2 = document.getElementById('title2');

work2 = document.getElementById('work2');
work1 = document.getElementById('work1');

ring1 = document.getElementById('ring1');

something1 = document.getElementById('contact1');
something2 = document.getElementById('contact2');
something3 = document.getElementById('contact3');
something4 = document.getElementById('contact4');
something5 = document.getElementById('contact5');

let val1 = 90;
let val2 = 85;
let val3 = 45;
let val4 = 20;
let val5 = 10;
let val6 = 65;
let val7 = 80;

let val0 = 0;

let animate__fadeInUp = "animate__fadeInUp";
let animate__zoomIn = "animate__zoomIn";

function anim(element, animationName) {element.classList.add(animationName); element.style.visibility = 'visible'}
function noAnim(element, animationName) {element.classList.remove(animationName); element.style.visibility = 'hidden'}

function ringOn() {
	$(function() {
    $('.chart').easyPieChart({
    	size: '150',
      barColor: '#f44336',
      scaleColor: false,
      lineWidth: '10',
      animate: 2000
    });
	});
}

function ringOff() {
	/* nothing))) */
}

window.onscroll = function() {

	checkVisible(title) ? anim(title,animate__fadeInUp) : noAnim(title,animate__fadeInUp);
	checkVisible(title1) ? anim(title1,animate__fadeInUp) : noAnim(title1,animate__fadeInUp);
	checkVisible(title2) ? anim(title2,animate__fadeInUp) : noAnim(title2,animate__fadeInUp);

	checkVisible(work2) ? anim(work2,animate__zoomIn) : noAnim(work2,animate__zoomIn);
	checkVisible(work1) ? anim(work1,animate__zoomIn) : noAnim(work1,animate__zoomIn);

	checkVisible(ring1) ? ringOn() : ringOff();

	checkVisible(something1) ? anim(something1,animate__fadeInUp) : noAnim(something1,animate__fadeInUp);
	checkVisible(something2) ? anim(something2,animate__fadeInUp) : noAnim(something2,animate__fadeInUp);
	checkVisible(something3) ? anim(something3,animate__fadeInUp) : noAnim(something3,animate__fadeInUp);
	checkVisible(something4) ? anim(something4,animate__fadeInUp) : noAnim(something4,animate__fadeInUp);
	checkVisible(something5) ? anim(something5,animate__fadeInUp) : noAnim(something5,animate__fadeInUp);

}


function checkVisible(elm) {
	let rect = elm.getBoundingClientRect();
	let viewHeight = Math.max(document.documentElement.clientHeight, window.innerHeight);
	return !(rect.top - viewHeight >= 10);
}


