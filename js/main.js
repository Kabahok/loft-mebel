// /*jshint esversion: 6 */

const slider = tns({
    container: '.slider__inner',
    slideBy: 'page',
    autoplay: false,
    controls: false,
    nav: false
  });

  document.querySelector('.prev').addEventListener('click', function () {
    slider.goTo('prev');
  });

document.querySelector('.next').addEventListener('click', function () {
    slider.goTo('next');
  });