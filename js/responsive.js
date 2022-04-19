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

/* 메뉴 리스트 */
const $toggleBtns = document.querySelectorAll('.gnb-menu .toggle-list');

[...$toggleBtns].forEach(function(toggleBtn){
  console.log('toggle-list 요소: ',toggleBtn);

  // click 이벤트 부여
  toggleBtn.addEventListener('click',function(e){
    
    let $parent = e.target.parentNode; // 클릭 범위에 해당하는 노드

    // console.log('target: ',e.target);
    // console.log('target 부모요소: ',e.target.parentNode);
    // console.log('target 자식요소: ',$parent.children);
    // console.log('arrow 버튼 요소: ',$parent.children[1]);

    // 서브 메뉴 리스트가 있으면 실행
    if($parent.nextElementSibling){
      
      if($parent.nextElementSibling.style.display !== 'block'){
  
        // sub-list 열림
        $parent.nextElementSibling.style.display = 'block';
  
        // arrow btn 위로 회전
        gsap.to($parent.children[1], .4, {
          transform: 'rotateX(-180deg)',
        });
  
      } else {
  
        // sub-list 닫힘
        $parent.nextElementSibling.style.display = 'none';
  
        // arrow btn 아래로 회전
        gsap.to($parent.children[1], .4, {
          transform: 'rotateX(0deg)',
        });
  
      }
    }

  });
});


