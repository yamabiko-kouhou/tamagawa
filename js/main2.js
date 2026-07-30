// ヘッダーの読み込みとハンバーガーメニュー
fetch("header.html")
  .then(response => response.text())
  .then(data => {
    document.querySelector("#header").innerHTML = data;

    initHamburger();
  });

function initHamburger() {

  const $body = $('body');
  const $btn  = $('#nav-btn');
  const $nav  = $('#header-nav');
  const open  = 'open';

  $btn.on('click', function(e) {
    e.stopPropagation();

    $body.toggleClass(open);
    $btn.toggleClass('active');
  });

  $nav.on('click', function(e) {
    e.stopPropagation();
  });

  $(document).on('click', function() {
    $body.removeClass(open);
    $btn.removeClass('active');
  });

  $('.accordion').on('click', function() {
    $(this).toggleClass('active');
    $(this).next('.submenu').slideToggle();
  });

}



//スライドショー
$(function() {
  $('.slider').slick({
    autoplay: true, //自動再生ON
	fade: true, // fedeオン
	speed: 1000,//スライドのスピード。初期値は300。
	arrows: false, //左右矢印OFF
    dots: false, //ドットインジケーターOFF
    centerMode: true, //両サイドに前後のスライド表示
    centerPadding: '0px', //左右のスライドのpadding
    slidesToShow: 1, //一度に表示するスライド数
  });
});



//ヒーロー画像の文の大きさ調整
function fitText(el) {
  const maxWidth = el.clientWidth;

  let min = 24;
  let max = 300;

  el.style.whiteSpace = 'nowrap';

  while (max - min > 1) {
    let mid = Math.floor((min + max) / 2);
    el.style.fontSize = mid + 'px';

    if (el.scrollWidth > maxWidth) {
      max = mid;
    } else {
      min = mid;
    }
  }
  el.style.fontSize = min + 'px';
}

function init() {
  const el = document.querySelector('.hero p');

  if (window.innerWidth >= 768) {
    fitText(el);
  } else {
    el.style.fontSize = '';
  }
}
window.addEventListener('load', init);
window.addEventListener('resize', init);



//フォトギャラリー(当院についてページ)
const swiper = new Swiper('.swiper', {
  loop: true,

  slidesPerView: 1.4, // スマホは少し見切れる
  centeredSlides: true, // ← 中央寄せ（重要）
  spaceBetween: 15,

  pagination: {
    el: '.swiper-pagination',
    clickable: true,
  },

  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },

  breakpoints: {
    768: {
      slidesPerView: 3,
      centeredSlides: true
    }
  }
});



// スクロールした時ふわっと出現するエフェクト
$(function() {
  $(window).scroll(function() {
    $(".scroll-anime").each(function() {
      let scroll = $(window).scrollTop();
      let blockPosition = $(this).offset().top;
      let windowHeihgt = $(window).height();
      if (scroll > blockPosition - windowHeihgt + 250) {
        $(this).addClass("blockIn");
      }
    });
  });
});



// サイトアクセス時フェードイン 
$(function(){
    $('body').hide();
    $('body').fadeIn(300);
});
$(window).fadeThis();