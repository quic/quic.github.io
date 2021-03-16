
$(function() {
  $(document).ready(function(){
    // animation
    AOS.init({
      disable: 'mobile',
      duration: 1000,
      once: true
    });

    // menu-link scroll 
    $('.page-link').on('click', function(event) {
      var target = $(this.getAttribute('href'));
     
      if(target.length) {
        event.preventDefault();
        if (target === "#top") {
        $('html, body').stop().animate({
          scrollTop: target.offset().top
        }, 1000);
      } else {
        $('html, body').stop().animate({
          scrollTop: target.offset().top - 110
        }, 1000);
      }
      } 
    });
  });
});

// sticky header
var $window = $(window);

  $window.on('scroll', function () {
      if ($window.scrollTop() > 50 && $window.width() > 800) {
        $(".site-header").addClass("sticky");
        $(".quic-header-logo").addClass("light");
        $(".page-link").addClass("blue");  
      } else {
        $(".site-header").removeClass("sticky");
        $(".quic-header-logo").removeClass("light");
        $(".page-link").removeClass("blue");  
      }
  });
