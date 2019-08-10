$(document).ready(function(){
  
  $(window).on("load resize", function(){
    var width = $(document).width();
    
    if (width > 768) {
      $('.carousel').slick('unslick');
    }
    else {
        $('.carousel').not('.slick-initialized').slick({
          infinite: true
        });
    }
  });
});