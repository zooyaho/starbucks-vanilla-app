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

/* Copyright 연도 자동 갱신 */
const thisYear = document.querySelector('.this-year');

thisYear.textContent = new Date().getFullYear(); // textContent: 요소의 글자 내용을 알아내거나 값을 지정하는 용도로 사용