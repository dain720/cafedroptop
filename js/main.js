// main.js

// gnb
$(function(){
    $('#gnb > .depth1 > li').hover(
        function(){
            $('.depth2').stop().show();
            $('#gnb_bg').addClass('show');
        },
        function(){
            $('.depth2').stop().hide();
            $('#gnb_bg').removeClass('show');
        }
    )
});


//bxslider
$(document).ready(function(){

    $('#visual').imagesLoaded(function(){
      $('.slider').bxSlider({
        mode : 'horizontal',
        pause : 4000,
        auto : true,  
      });
    });
    
  });
  

// swiper slider
$(function(){
  var mySwiper = new Swiper('.swiper-container', {
      // 설정 옵션
      slidesPerView : '3', // 한 슬라이드에 보여줄 갯수
      spaceBetween : 1, // 슬라이드 사이 여백
      direction: 'horizontal',
      loop: true,  
      // autoplay
      autoplay: {
          delay: 3000,
          disableOnInteraction: false,
      },
        // pagination
      pagination: {
          el: '.swiper-pagination',
          clickable: true
      },
  });
});


// lnb(가맹문의, 매장찾기)
$(function(){
    var menu = 0;
    // $('#lnb > .lnb > li > a').removeClass();
    // $('#lnb > .lnb > li > a').eq(menu).addClass('active');

    $('#lnb > .lnb > li > a').click(function(){
        $('#lnb > .lnb > li > a').removeClass();
        $(this).eq(menu).addClass('active');
    });
})


// 매장찾기
$(function(){
    var menu = 0;
    $('.search > .section > .list > li > a').removeClass();
    $('.search > .section > .list > li > a').eq(menu).addClass('active');

    $('.search > .section > .list > li > a').click(function(){
        $('.search > .section > .list > li > a').removeClass();
        $(this).eq(menu).addClass('active');
    });
})

// 맵
$(function() {
    $('#map > .search').draggable();
  });

