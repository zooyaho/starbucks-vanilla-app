const searchEl = document.querySelector('.search');
const searchInputEl = searchEl.querySelector('input');

searchEl.addEventListener('click', function() {
  searchInputEl.focus();
});

searchInputEl.addEventListener('focus', function() {
  searchEl.classList.add('focused');
  searchInputEl.setAttribute('placeholder','통합검색');
});
// focus해재 시 실행 됨
searchInputEl.addEventListener('blur', function() { 
  searchEl.classList.remove('focused');
  searchInputEl.setAttribute('placeholder','');
});

const badgeEl = document.querySelector('header .badges');

// _.throttle(핸들러(함수),시간(ms)): ms단위로 부하는 줘서 함수가 우루루 실행되는 것을 방지함
window.addEventListener('scroll', _.throttle(function() {
  //scrollY : 스크롤 시 y축 값을 알수 있음
  if(window.scrollY > 500){
    // 배지 숨기기
    // badgeEl.style.display = 'none';
    // gsap.to(요소, 지속시간, 옵션); 옵션으로 객체({})형태를 사용함!
    gsap.to(badgeEl, .6, {
      opacity: 0, //opacity만 사용하면 시각적으로만 보이지 않게 되고 위치에는 있게됨.
      display: 'none' //값이 아닌 속성은 중간값이 존재하지 않아 자연스럽게 사라지지 않음.
    });
  } else {
    // 배지 보이기
    // badgeEl.style.display = 'block';
    gsap.to(badgeEl, .6, {
      opacity: 1,
      display: 'block'
    });
  }

}, 300)); // 300 = 0.3s

const fadeEls = document.querySelectorAll('.visual .fade-in');

fadeEls.forEach( function(fadeEl, index) {
  //gsap.to(요소, 지속시간, 옵션)
  gsap.to(fadeEl, 1, { //gsap.to에서 제공하는 delay속성!
    delay: (index + 1) * .7, // 0.7, 1.4, 2.1, 2.8
    opacity: 1
  });

});

/* Notice-line Swiper */
// new Swiper(선택자, 옵션)
new Swiper('.notice-line .swiper', {
  direction: 'vertical',
  autoplay: true, // 자동 재생 여부
  loop: true // 반복 재생 여부 
});

/* Promotion Swiper */
new Swiper('.promotion .swiper', {
  slidesPerView: 3, // 한번에 보여줄 슬라이드 개수
  spaceBetween: 10, // 슬라이드 사이 여백
  centeredSlides: true, // 1번 슬라이드가 가운데 보이기
  loop: true,
  autoplay: {
    delay: 5000 // default 3000(3초)
  },
  pagination: {
    el: '.promotion .swiper-pagination', // 페이지 번호 요소 선택자
    clickable: true // 사용자의 페이지 번호 요소 제어 가능 여부
  },
  navigation: {
    prevEl: '.promotion .swiper-prev',
    nextEl: '.promotion .swiper-next'
  }
});

/* Awards Swiper */
new Swiper('.awards .swiper', {
  slidesPerView: 5,
  loop: true,
  autoplay: true,
  spaceBetween: 30,
  navigation: {
    prevEl: '.awards .swiper-prev',
    nextEl: '.awards .swiper-next'
  }
});


/*  토글버튼으로 프로모션 숨김 동작 구현 */
const promotionEl = document.querySelector('.promotion');
const poromotionTogglebtn = document.querySelector('.toggle-promotion');
let isHidePromotion = false;

poromotionTogglebtn.addEventListener('click', function() {
  isHidePromotion = !isHidePromotion;
  if (isHidePromotion) {
    // 숨김 처리!
    promotionEl.classList.add('hide');
  } else {
    // 보임 처리!
    promotionEl.classList.remove('hide');
  }

});

// 범위 랜덤 함수(소수점 2자리까지)
function random(min, max) {
  // `.toFixed()`를 통해 반환된 문자 데이터를,
  // `parseFloat()`을 통해 소수점을 가지는 숫자 데이터로 변환
  return parseFloat((Math.random() * (max - min) + min).toFixed(2))
}

function floatingObject(selector, delay, size) {
  // gsap.to(요소, 시간, 옵션)
  gsap.to(selector, random(1.5, 2.5), {
    y: size, // y축으로 움직이는 값
    repeat: -1, // -1: 무한
    yoyo: true, // 한번 재생된 애니메이션을 뒤로 다시 재생함 -> 둥둥뜨는 느낌이 됨
    ease: Power1.easeInOut, // easing 사이트 참고, 더욱 자연스럽게 됨
    delay: random(0, delay)
  });
}

floatingObject('.floating1', 1, 15);
floatingObject('.floating2', .5, 15);
floatingObject('.floating3', 1.5, 20);


/* ScrollMagic */
const spyEls = document.querySelectorAll('section.scroll-spy');

spyEls.forEach( function (spyEl) {

  new ScrollMagic // Scene(): 감시, addTo(): 컨트롤러?라는걸 추가함
    .Scene({
      triggerElement: spyEl, // 보여짐 여부를 감시할 요소를 지정
      triggerHook: .8 // 뷰포트에서 실행 시작할 요소의 위치 지정
    })
    .setClassToggle(spyEl, 'show') // 인수 (클래스를 토글할 요소, 토글할 클래스 이름)
    .addTo(new ScrollMagic.Controller()); // 우리가 추가한 옵션들을 내부 컨트롤러에 내용을 할당해서 실제로 동작할 수 있는 구조를 만들어주는 용도

});

/* Copyright 연도 자동 갱신 */
const thisYear = document.querySelector('.this-year');

thisYear.textContent = new Date().getFullYear(); // textContent: 요소의 글자 내용을 알아내거나 값을 지정하는 용도로 사용