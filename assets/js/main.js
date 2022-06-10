
/*
// #conWrap의 높이(세로길이) 구하기 (전체 화면이 이동해야 하는 레이아웃이면 좋은 방법은 아님.)
var footerTop = $('footer').offset().top; //푸터가 위로부터 떨어진 거리
var conWrapTop = $('#conWrap').offset().top; //#conWrap 위로부터의 거리

var conWrapH = footerTop - conWrapTop; //#conWrap의 높이(세로길이)

$('#conWrap').css({height: conWrapH}); //#conWrap에 높이 적용

$(window).resize(function(){
   var footerTop = $('footer').offset().top;
   var conWrapTop = $('#conWrap').offset().top;
   var conWrapH = footerTop - conWrapTop;
   $('#conWrap').css({height: conWrapH});
});
*/

const elFooter = document.querySelector('footer');

// #conWrap의 높이(세로길이) 구하기 (footer-아래쪽 fixed 사용 안할때)
var winH = $(window).height(); //열려져 있는 윈도우 높이
var headerH = $('header').height(); //헤더의 높이
var footerH = elFooter.offsetHeight; //푸터의 높이
//주의! box-sizing에 border-box 적용 시 padding, border를 제외한 값

console.log('현재 윈도우의 높이: '+winH+' / 현재 헤더의 높이: '+headerH+' / 현재 푸터의 높이: '+footerH);

var conWrapH = winH - (headerH + footerH);
//#conWrap의 높이는 화면전체의 세로에서 헤더, 푸터 높이를 빼준값

$('#conWrap').css({height:conWrapH});

$(window).resize(function(){
   var winH = $(window).height(); 
   var conWrapH = winH - (headerH + footerH);
   $('#conWrap').css({height:conWrapH});
});


//lnb 슬라이드 메뉴
var du = 300;
var open = 0; //화면이 열리자마자 open이라는 변수 안에 0을 넣음. 즉, 메뉴가 닫혀있는 상태일 때(처음)

$('.lnb_btn').click(function(){

   if(open == 0){  //화면이 처음 열렸을 때. 즉, 메뉴가 닫혀있을때
      $('#lnb').animate({left:0},du,'swing');
      $('#wrap').animate({left:274},du,'swing'); //#wrap에 position 값이 지정되어 있어야 해당 함수가 작동함.
      $('.cover').fadeIn(du);
      $(this).find('img').attr({'src':'assets/img/bg_header_lnb_active.png','alt':'메뉴닫기'});
      open = '열림';
   } else {
      $('#lnb').animate({left:-274},du,'swing');
      $('#wrap').animate({left:0},du,'swing'); //#wrap에 position 값이 지정되어 있어야 해당 함수가 작동함.
      $('.cover').fadeOut(du);
      $(this).find('img').attr({'src':'assets/img/bg_header_lnb.png','alt':'메뉴열기'});
      $(this).css({'z-index':'120'});
      open = '0';
   }
});
