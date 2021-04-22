/* ========================================================================= */
/*	Preloader
/* ========================================================================= */

jQuery(window).load(function(){

	$("#preloader").fadeOut("slow");

});


/* ========================================================================= */
/*  Moje Skrypty
/* ========================================================================= */


function myFunction() {
  document.getElementById("myCheck").required = true;
  document.getElementById("demo").innerHTML = "Zaznacz zgodę na przetwarzanie danych...";
}


    var indicator = document.querySelector('.stefan-indicator');
	var items = document.querySelectorAll('.stefan-item');

    function handleIndicator(el) {
        items.forEach(function (item) {
          item.classList.remove('is-active');
          item.removeAttribute('style');
        });
        indicator.style.width = "".concat(el.offsetWidth, "px");
        indicator.style.left = "".concat(el.offsetLeft, "px");
        indicator.style.backgroundColor = el.getAttribute('active-color');
        el.classList.add('is-active');
        el.style.color = el.getAttribute('active-color');
      }
      
      items.forEach(function (item, index) {
        item.addEventListener('click', function (e) {
          handleIndicator(e.target);
        });
        item.classList.contains('is-active') && handleIndicator(item);
      });

/* ========================================================================= */
/*  Welcome Section Slider
/* ========================================================================= */

$(function() {

    var Page = (function() {

        var $navArrows = $( '#nav-arrows' ),
            $nav = $( '#nav-dots > span' ),
            slitslider = $( '#slider' ).slitslider( {
                onBeforeChange : function( slide, pos ) {

                    $nav.removeClass( 'nav-dot-current' );
                    $nav.eq( pos ).addClass( 'nav-dot-current' );

                }
            } ),

            init = function() {

                initEvents();
                
            },
            initEvents = function() {

                // add navigation events
                $navArrows.children( ':last' ).on( 'click', function() {

                    slitslider.next();
                    return false;

                } );

                $navArrows.children( ':first' ).on( 'click', function() {
                    
                    slitslider.previous();
                    return false;

                } );

                $nav.each( function( i ) {
                
                    $( this ).on( 'click', function( event ) {
                        
                        var $dot = $( this );
                        
                        if( !slitslider.isActive() ) {

                            $nav.removeClass( 'nav-dot-current' );
                            $dot.addClass( 'nav-dot-current' );
                        
                        }
                        
                        slitslider.jump( i + 1 );
                        return false;
                    
                    } );
                    
                } );

            };

            return { init : init };

    })();

    Page.init();

});



$(document).ready(function(){

    
    jQuery('#nav').singlePageNav({
		offset: jQuery('#nav').outerHeight(),
		filter: ':not(.external)',
		speed: 2000,
		currentClass: 'current',
		easing: 'easeInOutExpo',
		updateHash: true,
		beforeStart: function() {
			console.log('begin scrolling');
		},
		onComplete: function() {
			console.log('done scrolling');
		}
	});


    // Reset preference
localStorage.removeItem('__cookiesAccepted__');


(function() {

    'use strict';
    
    
    var storageKey = '__cookiesAccepted__';
    
    
    if (!isStorageAllowed() || isSetPreference()) return;
    
    
    initializeNotice();

    
    function initializeNotice() {
        var el = document.querySelector('.cookie-notice');
        var dismissEl = el.querySelector('.cookie-notice-dismiss');

        el.style.display = 'block';

        dismissEl.addEventListener('click', function() {
            el.style.display = 'none';
            setPreferenceAccepted();
        }, false);
    }
    
    
    function setPreferenceAccepted() {
        localStorage.setItem(storageKey, true);
    }
    
    
    function isSetPreference() {
        return JSON.parse(localStorage.getItem(storageKey) || false);
    }
    
    
    function isStorageAllowed() {
        var test = '__localStorageTest__';

        try {
            localStorage.setItem(test, test);
            localStorage.removeItem(test);

            return true;
        } catch (e) {
            console.warn('Storage not allowed, please allow cookies');
            return false;
        }
    };
}());

	/* ========================================================================= */
	/*	Menu item highlighting
	/* ========================================================================= */

	jQuery('#nav').singlePageNav({
		offset: jQuery('#nav').outerHeight(),
		filter: ':not(.external)',
		speed: 2000,
		currentClass: 'current',
		easing: 'easeInOutExpo',
		updateHash: true,
		beforeStart: function() {
			console.log('begin scrolling');
		},
		onComplete: function() {
			console.log('done scrolling');
		}
	});
	
    $(window).scroll(function () {
        if ($(window).scrollTop() > 100) {

            $(".navbar-brand a").css("color","#fff");
            $("#navigation").removeClass("animated-header");
            $("#responsivelogoIndex").removeClass("widthclassIndex");
            $("#responsivelogoOmnie").removeClass("widthclassOmnie");
            $("#responsivelogoOferta").removeClass("widthclassOferta");
            $("#responsivelogoDok").removeClass("widthclassDok");
            $("#responsivelogoPol").removeClass("widthclassPol");
            $("#responsivelogoIndex").addClass("widthclassIndex2");
            $("#responsivelogoOmnie").addClass("widthclassOmnie2");
            $("#responsivelogoOferta").addClass("widthclassOferta2");
            $("#responsivelogoDok").addClass("widthclassDok2");
            $("#responsivelogoPol").addClass("widthclassPol2");

            $("#navigation").addClass("navbgchanged");
            $(".navcolorRed").removeClass("navbgchanged");
            $(".navcolorRed").addClass("navcolorRed");
            $(".navcolorBlack").removeClass("navbgchanged");
            $(".navcolorBlack").addClass("navcolorBlack");
            $(".ela").removeClass("navbgchanged");
            $(".ela").addClass("navcolorBlack");
            $(".elas").removeClass("navbgchanged");
            $(".elas").addClass("navcolorBlack2");
            $(".zoomnavTest2").addClass("pwhite");
            $(".zoomnavTest").addClass("pwhite");
            $(".o").addClass("pblue");
            $(".zoomnavTest2").removeClass("howerek");
            $(".zoomnavTest2").addClass("howerek2");
            $(".os").addClass("pblue");
            $("#logobottom").fadeOut("slow");
            document.getElementById("responsivelogoIndex").src = 'img/logo/1.png';
            $("#responsivelogoIndex").addClass("disp");
            $("#responsivelogoIndex").fadeIn("slow");

        } else {
            $(".navbar-brand a").css("color","inherit");
            $("#navigation").addClass("animated-header");
            $("#responsivelogoIndex").removeClass("widthclassIndex2");
            $("#responsivelogoOmnie").removeClass("widthclassOmnie2");
            $("#responsivelogoOferta").removeClass("widthclassOferta2");
            $("#responsivelogoPol").removeClass("widthclassPol2");
            $("#responsivelogoDok").removeClass("widthclassDok2");
            $("#responsivelogoIndex").addClass("widthclassIndex");
            $("#responsivelogoOmnie").addClass("widthclassOmnie");
            $("#responsivelogoOferta").addClass("widthclassOferta");
            $("#responsivelogoDok").addClass("widthclassDok");
            $("#responsivelogoPol").addClass("widthclassPol");
            
            $(".zoomnavTest2").addClass("howerek");
            $(".zoomnavTest2").removeClass("howerek2");
            $(".o").removeClass("pblue");
            $("#navigation").removeClass("navbgchanged");
            $(".elas").removeClass("navcolorBlack2");
            $(".ela").removeClass("navcolorBlack");
            $(".zoomnavTest2").removeClass("pwhite");
            $(".zoomnavTest").removeClass("pwhite");
            $("#logobottom").fadeIn("slow");
            document.getElementById("responsivelogoIndex").src = '';


        }
    });
	
	/* ========================================================================= */
	/*	Fix Slider Height
	/* ========================================================================= */	

    // Slider Height
    var slideHeight = $(window).height();
    
    $('#home-slider, #slider, .sl-slider, .sl-content-wrapper').css('height',slideHeight);

    $(window).resize(function(){'use strict',
        $('#home-slider, #slider, .sl-slider, .sl-content-wrapper').css('height',slideHeight);
    });
	
	
	
	$("#works, #testimonial").owlCarousel({	 
		navigation : true,
		pagination : false,
		slideSpeed : 700,
		paginationSpeed : 400,
		singleItem:true,
		navigationText: ["<i class='fa fa-angle-left fa-lg'></i>","<i class='fa fa-angle-right fa-lg'></i>"]
	});
	
	
	/* ========================================================================= */
	/*	Featured Project Lightbox
	/* ========================================================================= */

	$(".fancybox").fancybox({
		padding: 0,

		openEffect : 'elastic',
		openSpeed  : 650,

		closeEffect : 'elastic',
		closeSpeed  : 550,

		closeClick : true,
			
		beforeShow: function () {
			this.title = $(this.element).attr('title');
			this.title = '<h3>' + this.title + '</h3>' + '<p>' + $(this.element).parents('.portfolio-item').find('img').attr('alt') + '</p>';
		},
		
		helpers : {
			title : { 
				type: 'inside' 
			},
			overlay : {
				css : {
					'background' : 'rgba(0,0,0,0.8)'
				}
			}
		}
	});

    
	
});


/* ==========  START GOOGLE MAP ========== */

// When the window has finished loading create our google map below
//google.maps.event.addDomListener(window, 'load', init);

function init() {
    // Basic options for a simple Google Map
    // For more options see: https://developers.google.com/maps/documentation/javascript/reference#MapOptions

	    var myLatLng = new google.maps.LatLng(22.402789, 91.822156);

	    var mapOptions = {
	        zoom: 15,
	        center: myLatLng,
	        disableDefaultUI: true,
	        scrollwheel: false,
	        navigationControl: true,
	        mapTypeControl: false,
	        scaleControl: false,
	        draggable: true,

        // How you would like to style the map. 
        // This is where you would paste any style found on Snazzy Maps.
        styles: [{
            featureType: 'water',
            stylers: [{
                color: '#46bcec'
            }, {
                visibility: 'on'
            }]
        }, {
            featureType: 'landscape',
            stylers: [{
                color: '#f2f2f2'
            }]
        }, {
            featureType: 'road',
            stylers: [{
                saturation: -100
            }, {
                lightness: 45
            }]
        }, {
            featureType: 'road.highway',
            stylers: [{
                visibility: 'simplified'
            }]
        }, {
            featureType: 'road.arterial',
            elementType: 'labels.icon',
            stylers: [{
                visibility: 'off'
            }]
        }, {
            featureType: 'administrative',
            elementType: 'labels.text.fill',
            stylers: [{
                color: '#444444'
            }]
        }, {
            featureType: 'transit',
            stylers: [{
                visibility: 'off'
            }]
        }, {
            featureType: 'poi',
            stylers: [{
                visibility: 'off'
            }]
        }]
    };

    // Get the HTML DOM element that will contain your map 
    // We are using a div with id="map" seen below in the <body>
    var mapElement = document.getElementById('map-canvas');

    // Create the Google Map using our element and options defined above
    var map = new google.maps.Map(mapElement, mapOptions);

    // Let's also add a marker while we're at it
    var marker = new google.maps.Marker({
        position: new google.maps.LatLng(22.402789, 91.822156),
        map: map,
		icon: 'img/icons/map-marker.png',
    });
}

// ========== END GOOGLE MAP ========== //

var wow = new WOW ({
	offset:       75,          // distance to the element when triggering the animation (default is 0)
	mobile:       false,       // trigger animations on mobile devices (default is true)
});
wow.init();


	/* ========================================================================= */

  
	/* ========================================================================= */


