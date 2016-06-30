/* globals jQuery */
(function($) {
  'use strict';

  /*=======================
    Video
    =========================*/

	$(function() {

		$('.popup-vimeo').magnificPopup({
		  disableOn: 700,
		  type: 'iframe',
		  mainClass: 'mfp-fade',
		  removalDelay: 160,
		  preloader: false,

		  fixedContentPos: false
		});


	    /*=======================
	    	scrool do site
	    =========================*/
		$('.scrol a').on('click', function(){

			$('html, body').stop().animate({
			  scrollTop: $($(this).attr('href')).offset().top - 0
			},1000);
			return false;
		});

		$('.scroltop a').on('click', function(){

	        $('html, body').stop().animate({
	          scrollTop: $($(this).attr('href')).offset().top - 0
	        },1000);
	        return false;
	    });

        var secoes = [];

	    $('.container').each(function(i){
	        secoes.push({
	          top : $(this).offset().top,
	          index : i
	        });
	    });


      	$('nav li a').on('click', function(){
	      	$('html, body').stop().animate({
		        scrollTop: $($(this).attr('href')).offset().top - 80
		    },1000);
		    return false;
	    });

    	var secoes = [];

	    $('.sec').each(function(i){
	      secoes.push({
	        top : $(this).offset().top,
	        index : i
	      });
	    });

	    $(window).on('scroll',function(){
	      	$('nav li').removeClass('ativo');
		    var st = $(this).scrollTop() + 200;
		    for (var i = secoes.length - 1; i >= 0; i--) {
		        if( st >= secoes[i].top) {
			        marcaMenu( secoes[i].index );
			        break;
		        }
		    }
    	});

	    function marcaMenu(index) {
		    $('nav li').removeClass('ativo');
		    $('nav li').eq(index).addClass('ativo');
	    }

	    var controller = $.superscrollorama({
	      triggerAtCenter: true,
	      playoutAnimations: true
	    });

	    var todosElementos = $('#gallery, #technology, #video, footer').find('.cycle-slideshow, .descricao, h2, p, .carro-tesla, .video');

	    if(!jQuery.browser.mobile){
	        todosElementos.each(function(i){
		        if( $(this).offset().top > 750 ) {
		          controller.addTween($(this),
		            TweenMax.fromTo($(this), 0.9, { autoAlpha : 0}, { autoAlpha : 1,  ease : Power1.easeOut })
		            , 0, -300, false
		          );
		        } else {
		          TweenMax.fromTo($(this), 0.9, { autoAlpha : 0}, { autoAlpha : 1,  ease : Power1.easeOut, delay : ( i * 0.15 ) });
		        }
	        });
	    }else{
	      todosElementos.css('opacity', 1);
	    }

  	});
}(jQuery));
