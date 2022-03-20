// 2. This code loads the IFrame Player API code asynchronously.
var tag = document.createElement('script');

tag.src = "https://www.youtube.com/iframe_api"; // script태그에 src속성 값 지정
var firstScriptTag = document.getElementsByTagName('script')[0]; // 첫번째 script태그 할당
firstScriptTag.parentNode.insertBefore(tag, firstScriptTag); 

// 3. This function creates an <iframe> (and YouTube player)
//    after the API code downloads.
function onYouTubeIframeAPIReady() {
  //<div id="palyer"></div>
  new YT.Player('player', {
    videoId: 'An6LvWQuj_8', // 최초 재생할 유튜브 영상 ID
    playerVars: {
      autoplay: true,
      loop: true, // 반복 재생일 경우 playlist 작성 해야함
      playlist: 'An6LvWQuj_8' // 반복 재생할 유튜브 영상 ID 목록
    },
    events: {
      onReady: function(event){
        event.target.mute() // 음소거
      }
    }
  });
}