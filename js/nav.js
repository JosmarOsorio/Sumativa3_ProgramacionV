$(document).ready(function(){
    $(window).scroll(function(){
      if ($(this).scrollTop() > 10) { 
        $('.navbar').addClass('sticky-top');
      } else {
        $('.navbar').removeClass('sticky-top');
      }
    });
  });