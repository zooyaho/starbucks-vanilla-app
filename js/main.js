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