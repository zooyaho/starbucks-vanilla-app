

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


