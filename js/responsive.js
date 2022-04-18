/* SUB-MENU */
const moGnb = document.querySelector('.mo-gnb');
const bgGnb = document.querySelector('.gnb-bg');
const menuOpen = document.querySelector('.mo-header .sub-menu nav .menu');
const menuClose = document.querySelector('.btn-gnb-close');


/* 서브 메뉴 활성화 */
menuOpen.addEventListener('click', function(){
  // 배경 활성화
  gsap.to(bgGnb, .3, {
    display: 'block',
  });
  // 메뉴 활성화
  gsap.to(moGnb, .3, {
    display: 'block',
    right: 0,
  });
  // 닫힘 버튼 회전
  gsap.to(menuClose, .4, {
    transform: 'rotate(270deg)' ,
  });
  
});

/* 서브 메뉴 비활성화 */ 
menuClose.addEventListener('click', function(){
  // 배경 비활성화
  gsap.to(bgGnb, .2, {
    display: 'none',
  });
  // 메뉴 비활성화
  gsap.to(moGnb, .3, {
    display: 'none',
    right: '-100%',
  });
  // 닫힘 버튼 기본상태로 돌아옴
  gsap.to(menuClose, {
    transform: 'rotate(-270deg)' ,
  });
});

/* 메뉴 리스트 펼침 */
const $toggleBtns = document.querySelectorAll('.gnb-menu .toggle-list');
const $deepToggleBtns = document.querySelectorAll('.gnb-menu .deep-toggle-list');

// 토글 버튼 리스트 이벤트함수
function subListOpen({target}) {
  console.log('현재 노드 :' ,target);
  console.log('현재 노드의 .toggle-list 존재 유무 : ' + target.classList.contains('toggle-list'));
  console.log('현재노드의 자식노드 존재 유무:' ,target.hasChildNodes());
  console.log('arrow 버튼노드:' ,target.children[1]);
  console.log('형제노드 :' ,target.nextElementSibling);

  // if(!target.classList.contains('toggle-list')){}
  if(target.nextElementSibling.style.display !== 'block'){
    // sub-list 열림
    target.nextElementSibling.style.display = 'block';
    
    // arrow btn 위로 회전
    gsap.to(target.children[1], .4, {
      transform: 'rotateX(-180deg)',
    });
  } else {
    // sub-list 닫힘
    target.nextElementSibling.style.display = 'none';
    console.log('!!!!!!display: none!!!!!')
    // arrow btn 아래로 회전
    gsap.to(target.children[1], .4, {
      transform: 'rotateX(0deg)',
    });
  }
  
  // 4/19: 이벤트 전파 오류 해결해야함
  // target.stopPropagation();

  console.log('!!!success!!!');
}


// 얕은 토글 버튼 리스트 이벤트부여
[...$toggleBtns].forEach(function(toggleBtn){
  console.log(toggleBtn);
  toggleBtn.onclick = subListOpen;
});

// 깊은 토글 버튼 리스트 이벤트부여
[...$deepToggleBtns].forEach(function(toggleBtn){
  console.log(toggleBtn);
  toggleBtn.onclick = subListOpen;
});


