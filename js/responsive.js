

const moGnb = document.querySelector('.mo-gnb');
const menuOpen = document.querySelector('.mo-header .sub-menu nav .menu');
const menuClose = document.querySelector('.btn-gnb-close');

menuOpen.addEventListener('click', function(){
  moGnb.classList.remove('hide');
  menuClose.classList.add('rotate');
});
menuClose.addEventListener('click', function(){
  moGnb.classList.add('hide');
  menuClose.classList.remove('rotate');
});

// const btnMenuList = document.querySelectorAll('.btn-menulist');

/* Promotion Swiper */
new Swiper('.promotion .mo .swiper', {
  slidesPerView: 1, // 한번에 보여줄 슬라이드 개수
  // spaceBetween: 10, // 슬라이드 사이 여백
  centeredSlides: true, // 1번 슬라이드가 가운데 보이기
  loop: true,
  autoplay: {
    delay: 5000 // default 3000(3초)
  },
  pagination: {
    el: '.promotion .mo .swiper-pagination', // 페이지 번호 요소 선택자
    clickable: true // 사용자의 페이지 번호 요소 제어 가능 여부
  },
});

