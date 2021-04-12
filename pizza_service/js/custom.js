let instance = M.Carousel.init({
    fullWidth: true
  });

  // Or with jQuery

  $('.carousel.carousel-slider').carousel({
    fullWidth: true
  });


  document.addEventListener('DOMContentLoaded', function() {
    var elems = document.querySelectorAll('.parallax');
    var instances = M.Parallax.init(elems, null);
  });

  // Or with jQuery

  $(document).ready(function(){
    $('.parallax').parallax();
  });

  mybutton = document.getElementById("back-to-top");

  $(window).scroll(function(){
    if($(this).scrollTop()> 20){
      mybutton.style.display = "block";;
    }
    else{
      mybutton.style.display = "none";
    }
  })

  function topFunction() {
    document.documentElement.scrollTop = 0; 

  }