(function ($) {

    'use strict';

    jQuery(document).ready(function () {
    /*

         * ----------------------------------------------------------------------------------------

         *  CHANGE MENU BACKGROUND JS

         * ----------------------------------------------------------------------------------------

         */
        $(window).on('scroll', function () {

            if ($(window).scrollTop() > 200) {

                $('#header').addClass("positionFixed");

            } else {

                $('#header').removeClass("positionFixed");

            }

        });
        
         /*

         * ----------------------------------------------------------------------------------------

         *  SMOOTH SCROOL JS

         * ----------------------------------------------------------------------------------------

         */


    $("nav").on('click','a',function (event) {

        event.preventDefault();

        var elAttr = $(this).attr('href');

        $('body,html').animate({

            scrollTop: $(elAttr).offset().top -125

        },1000);
    });
        
         /*

         * ----------------------------------------------------------------------------------------

         *  ISOTOP  JS

         * ----------------------------------------------------------------------------------------

         */
        
        
/* ===================================
   Isotope js
====================================== */
   var $grid = $('.grid').isotope({
        itemSelector: '.element-item',
        layoutMode: 'fitRows',
        getSortData: {
            name: '.name',
            symbol: '.symbol',
            number: '.number parseInt',
            category: '[data-category]',
            weight: function( itemElem ) {
                var weight = $( itemElem ).find('.weight').text();
                return parseFloat( weight.replace( /[\(\)]/g, '') );
            }
        }
    });

    // filter functions
    var filterFns = {
        // show if number is greater than 50
        numberGreaterThan50: function() {
            var number = $(this).find('.number').text();
            return parseInt( number, 10 ) > 50;
        },
        // show if name ends with -ium
        ium: function() {
            var name = $(this).find('.name').text();
            return name.match( /ium$/ );
        }
    };

    $(document).on('click', '#filters-ul li a', function(){
        var filterValue = $( this ).attr('data-filter');
        filterValue = filterFns[ filterValue ] || filterValue;
        $grid.isotope({ filter: filterValue });
        return false;
    });
          
    $(document).on('click', '#filters-ul li a', function(){

        var filterValue = $( this ).attr('data-filter');

        filterValue = filterFns[ filterValue ] || filterValue;

        $grid.isotope({ filter: filterValue });

        return false;

    });  
        
 /* ===================================
    link color setup  JS
====================================== */
$('a.cp-btns').click(function(e) {
 $("a.cp-btns.active").removeClass("active");
    $(this).addClass("active");
});

$('a.filter-btns').click(function(e) {
 $("a.filter-btns.active").removeClass("active");
    $(this).addClass("active");
});
        
        $('a.cpp-btns').click(function(e) {
 $("a.cpp-btns.active").removeClass("active");
    $(this).addClass("active");
});

$('a.filter-btns').click(function(e) {
 $("a.filter-btns.active").removeClass("active");
    $(this).addClass("active");
});

    });
  })(jQuery);




 