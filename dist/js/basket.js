new Swiper('.menu__mobile-swiper', {
  slidesPerView: 5,
});

  // ?Меню 


  let hamburger = document.querySelector(".hamburger"),
  tab = document.querySelector(".tab"),
  close = document.querySelector(".tab__close"),
  overlay = document.querySelector(".overlay"),
  hidden = document.querySelector(".body");

hamburger.addEventListener('click', function() {
  tab.classList.toggle('tab__active');
  overlay.classList.toggle('overlay__active');
  hidden.classList.toggle('body__active');
});

close.addEventListener('click', function() {
tab.classList.toggle('tab__active');
overlay.classList.toggle('overlay__active');
hidden.classList.toggle('body__active');
});