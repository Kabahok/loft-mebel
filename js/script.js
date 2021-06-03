new Swiper('.card__slider', {
  // Стрелки 
  navigation: {
    nextEl: '.card__slider-next',
    prevEl: '.card__slider-prev'
  },

  keyboard: {
    enabled: true,
    onlyInViewport: true,
    pageUpDown: true,
  },

  thumbs: {
    swiper: {
      el: '.card__slider-mini',
      slidesPerView: 5,
    }
  }
});

new Swiper('.menu__mobile-swiper', {
  slidesPerView: 5,
});


new Swiper('.tablet__slider', {
  navigation: {
    nextEl: '.tablet__next',
    prevEl: '.tablet__prev'
  },
});

new Swiper('.mob__swiper', {
  loop: true,
});

new Swiper('.mob-swiper__container', {
  thumbs: {
    swiper: {
      el: '.mob-swiper__mini-container',
      slidesPerView: 3,
    },
  }
  
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



let subColor = document.querySelector('.sub__color'),
    color = document.querySelector('.card__item-subcolor'),
    colorItem = document.querySelector('.card__item-color-img'),
    subCount = document.querySelector('.sub__count'),
    count = document.querySelector('.card__item-subcount'),
    countItem = document.querySelector('.card__item-count-img');


color.addEventListener('click', function() {
  subColor.classList.toggle('sub__color-active');
  colorItem.classList.toggle('card__item-color-img-active');
  subCount.classList.remove('sub__count-active');
  countItem.classList.remove('card__item-color-count-active');
});

count.addEventListener('click', function() {
  subCount.classList.toggle('sub__count-active');
  countItem.classList.toggle('card__item-color-count-active');
  subColor.classList.remove('sub__color-active');
  colorItem.classList.remove('card__item-color-img-active');
});


let btn = document.querySelector('.subcard__btn-info'),
    info = document.querySelector('.subcard__info'),
    button = document.querySelector('.subcard__btn-comment'),
    comment = document.querySelector('.subcard__comment');

btn.addEventListener('click', function() {
  info.classList.add('subcard__info-active');
  comment.classList.remove('subcard__comment-active');
  button.classList.remove('subcard__btn-comment-active');
  btn.classList.add('subcard__btn-info-active');

});

button.addEventListener('click', function() {
  comment.classList.add('subcard__comment-active');
  info.classList.remove('subcard__info-active');
  btn.classList.remove('subcard__btn-info-active');
  button.classList.add('subcard__btn-comment-active');
});




