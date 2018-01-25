// Slider

;(function($){
    "use strict";

    $(function(){
        $('.slider').slick({
            slidesToShow: 1,
            slidesToScroll: 1,
            autoplay: true,
            autoplaySpeed: 2000,
        });
    })
})(jQuery);

// Counter 
var time = 2, cc = 1;
$(window).scroll(function(){
  $('#counter').each(function(){
    var
    cPos=$(this).offset().top,
    topWindow=$(window).scrollTop();
    if (cPos < topWindow + 400) {
      if(cc < 2 ){
        $('.number').addClass('viz');
        $('div').each(function(){
          var 
          i = 1,
          num = $(this).data('num'),
          step = 3000 * time / num,
          that = $(this),
          int = setInterval(function(){
            if (i <= num) {
              that.html(i);
            }
            else {
              cc = cc+2;
              clearInterval(int);
            }
            i++;
          },step);
        });
      }
    }
  });
});

// Page scrol 

$(document).ready(function(){
	$("#menu").on("click","a", function (event) {
		//отменяем стандартную обработку нажатия по ссылке
		event.preventDefault();

		//забираем идентификатор бока с атрибута href
		var id  = $(this).attr('href'),

		//узнаем высоту от начала страницы до блока на который ссылается якорь
			top = $(id).offset().top;
		
		//анимируем переход на расстояние - top за 1500 мс
		$('body,html').animate({scrollTop: top}, 1500);
	});
});

var header = document.querySelector('.header');
var sliderContainer = document.querySelector('.slider-container');
var navLink = document.querySelectorAll('.nav__link');
window.onscroll = function() {
  var scrolled = window.pageYOffset || document.documentElement.scrollTop;
  if(scrolled>header.clientHeight){
    header.classList.add('fix');
    sliderContainer.classList.add('fix1');
    for(var i=0; i<navLink.length; i++)
    {navLink[i].classList.add('fix2');}
    header.style.background = 'rgba(255, 255, 255, .3)';
  } else {
    header.classList.remove('fix');
    sliderContainer.classList.remove('fix1');
    for(var i=0; i<navLink.length; i++)
    {navLink[i].classList.remove('fix2');}
    header.style.background = 'transparent';
  }
}