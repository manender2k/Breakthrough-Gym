

jQuery(document).ready(function() {
    "use strict"
    // Ripple jQuery effect for slider
        // $('.slider').ripples({
        //     dropRadius: 15,
        //     perturbance: .01
        // });
        //Collapse Navbar after clicking it 
        $('.navbar-nav>li>a').on('click', function(){
            $('.navbar-collapse').collapse('hide');
        });

        //Sticky Navigation 
        $(window).scroll(function() {
            var top = $(window).scrollTop();
            if (top >= 200) {
                $(".navbar").addClass('secondary');
            } else if ($(".navbar").hasClass('secondary')) {
                $(".navbar").removeClass('secondary');
            }
        });
      //Food Gallery image pop up using magnific popup
        $('.gallery').magnificPopup({
            delegate: 'a', // child items selector, by clicking on it popup will open
            type: 'image',
            gallery: {
                enabled: true
              }
          });
          //Owl Carousel slider
        $(".owl-carousel").owlCarousel({
            items: 3,
            autoplay: true,
            smartSpeed: 700,
            loop: true,
            autoplayHoverPause: true,
            responsive: {
            0:{
                items:1
            },
            480:{
                items:2
            },
            768: {
                items:3
            }
        }
        });
       //Counter Up Stats
        $('.counter').counterUp({
                delay: 10,
                time: 1000
            });
        //Smooth Scroll
        $("a").on('click', function(event) {
            if (this.hash !== "") {
    
            event.preventDefault();
            var hash = this.hash;
            
            $('html, body').animate({
                scrollTop: $(hash).offset().top
            }, 800, function(){
        
                window.location.hash = hash;
            });
            } 
         }); 
         // WoW animate scroll down effect
         new WOW().init();
        
         //Lazy Load
         $(function() {
            $('.lazy').lazy();
        });
});



// Writing over the slider with text using js
let options = {
    strings: ["Best <strong class='primary'>Products!</strong>", "<strong class='primary'>Top</strong> Reviews!"],
    typeSpeed: 70,
    loop: true
  }
  
let typed = new Typed(".text", options);





