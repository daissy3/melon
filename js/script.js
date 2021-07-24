/* 실시간 급상승(검색어)*/
$(function() {
    var count = $('#rank-list li').length;
    var height = $('#rank-list li').height();

    function step(index) {
        $('#rank-list ul').delay(2000).animate({
            top: -height * index,
        }, 500, function() {
            step((index + 1) % count);
        });
    }

    step(1);
});

/*리모컨 플레이어 재생 */

const BUTTON_P = document.querySelector('#pbtn');
const PLAY_ICON = document.querySelector('.fa-play');
const PAUSE_ICON = document.querySelector('.fa-pause');
const DISC_ICON = document.querySelector('.fa-compact-disc');

BUTTON_P.addEventListener('click', ()=>{
    PLAY_ICON.classList.toggle('visible');
    PAUSE_ICON.classList.toggle('visible');
    
});


/*이미지 슬라이더 1*/
$(function(){
    var $slider1 = $('.slider1'),
        $firstSlide = $slider1.find('li').first() // 첫번째 슬라이드
        .stop(true).animate({'opacity':1},200); // 첫번째 슬라이드만 보이게 하기
        
    function PrevSlide(){ // 이전버튼 함수
      stopSlide();startSlide(); //타이머 초기화
      var $lastSlide = $slider1.find('li').last() //마지막 슬라이드
      .prependTo($slider1); //마지막 슬라이드를 맨 앞으로 보내기  
      $secondSlide = $slider1.find('li').eq(1)//두 번째 슬라이드 구하기
      .stop(true).animate({'opacity':0},400); //밀려난 두 번째 슬라이드는 fadeOut 시키고
      $firstSlide = $slider1.find('li').first() //맨 처음 슬라이드 다시 구하기
      .stop(true).animate({'opacity':1},400);//새로 들어온 첫 번째 슬라이드는 fadeIn 시키기
    }
    
    function NextSlide(){ // 다음 버튼 함수
      stopSlide();startSlide(); //타이머 초기화
      $firstSlide = $slider1.find('li').first() // 첫 번째 슬라이드
      .appendTo($slider1); // 맨 마지막으로 보내기
      var $lastSlide = $slider1.find('li').last() // 맨 마지막으로 보낸 슬라이드
      .stop(true).animate({'opacity':0},400); // fadeOut시키기
      $firstSlide = $slider1.find('li').first()// 맨 처음 슬라이드
      .stop(true).animate({'opacity':1},400);// fadeIn 시키기
    }
    
    $('#next1').on('click', function(){ //다음버튼 클릭
      NextSlide();
    });
    $('#prev1').on('click', function(){ //이전 버튼 클릭
      PrevSlide();
    });
  
    startSlide(); // 자동 슬라이드 시작
    
    var theInterval;
  
    function startSlide() {
      theInterval = setInterval(NextSlide, 5000); //자동 슬라이드 설정
    }
  
    function stopSlide() { //자동 멈추기
      clearInterval(theInterval);
    }
    
    $('.slider1').hover(function(){ //마우스 오버시 슬라이드 멈춤
      stopSlide();
    }, function (){
      startSlide();
    });
  });

  /*이미지 슬라이더 2*/
$(function(){
    var $slider2 = $('.slider2'),
        $firstSlide2 = $slider2.find('li').first() // 첫번째 슬라이드
        .stop(true).animate({'opacity':1},200); // 첫번째 슬라이드만 보이게 하기
        
    function PrevSlide(){ // 이전버튼 함수
      stopSlide();startSlide(); //타이머 초기화
      var $lastSlide2 = $slider2.find('li').last() //마지막 슬라이드
      .prependTo($slider2); //마지막 슬라이드를 맨 앞으로 보내기  
      $secondSlide2 = $slider2.find('li').eq(1)//두 번째 슬라이드 구하기
      .stop(true).animate({'opacity':0},400); //밀려난 두 번째 슬라이드는 fadeOut 시키고
      $firstSlide2 = $slider2.find('li').first() //맨 처음 슬라이드 다시 구하기
      .stop(true).animate({'opacity':1},400);//새로 들어온 첫 번째 슬라이드는 fadeIn 시키기
    }
    
    function NextSlide(){ // 다음 버튼 함수
      stopSlide();startSlide(); //타이머 초기화
      $firstSlide2 = $slider2.find('li').first() // 첫 번째 슬라이드
      .appendTo($slider2); // 맨 마지막으로 보내기
      var $lastSlide2 = $slider2.find('li').last() // 맨 마지막으로 보낸 슬라이드
      .stop(true).animate({'opacity':0},400); // fadeOut시키기
      $firstSlide2 = $slider2.find('li').first()// 맨 처음 슬라이드
      .stop(true).animate({'opacity':1},400);// fadeIn 시키기
    }
    
    $('.btn2 #next2').on('click', function(){ //다음버튼 클릭
      NextSlide();
    });
    $('.btn2 #prev2').on('click', function(){ //이전 버튼 클릭
      PrevSlide();
    });
  
    startSlide(); // 자동 슬라이드 시작
    
    var theInterval;
  
    function startSlide() {
      theInterval = setInterval(NextSlide, 5000); //자동 슬라이드 설정
    }
  
    function stopSlide() { //자동 멈추기
      clearInterval(theInterval);
    }
    
    $('.slider2').hover(function(){ //마우스 오버시 슬라이드 멈춤
      stopSlide();
    }, function (){
      startSlide();
    });
  });


/* 24시간 랭킹*/

let moving=$('#rank-list2 ul'),
imgHeight=moving.find('.tab-box1').height()-30

function sliding(){
setIntervalId=setInterval(function(){
    moving.animate({top: -imgHeight},1000, function(){
        $(this).children('li:first').insertAfter($(this).children('li:last'));
    });
}, 1000);
}
sliding();

/*최신 앨범 슬라이드*/
let move=$('.album_list ul'),
imgwidth=move.find('.tab-album').width()-156

function slider(){
  setIntervalId=setInterval(function(){
    move.animate({left: -imgwidth},1000, function(){
      $(this).children('li:first').insertAfter($(this).children('li:last'));
    });
}, 1000);
}
slider();