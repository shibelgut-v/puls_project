/* $(document).ready(function(){
    $('.carousel__inner').slick({
        prevArrow: '<button type="button" class="slick-prev"><img src="icons/left.svg" alt="prew arrow"></button>',
        nextArrow: '<button type="button" class="slick-next"><img src="icons/right.svg" alt="next arrow"></button>',
        fade: true,
        responsive: [
            {
                breakpoint: 992,
                settings: {
                dots: true,
                arrows: false
              }
            },
        ]
      });
  }); */

var slider = tns({
  container: '.carousel__inner',
  items: 1,
  slideBy: 'page',
  autoplay: false,
  controlsText: [
    '<img src="icons/left.svg" alt="prew arrow">',
    '<img src="icons/right.svg" alt="prew arrow">'
  ]
}); 