$(function () {
  const duration = 300;

  // 모바일 더보기
  const btnMenu = document.querySelector(".mobile-btn");
  const mobileMenu = document.querySelector(".mobile-menu");
  const btnClose = document.querySelector(".mobile-btn-close");

  btnMenu.addEventListener("click", () => {
    mobileMenu.classList.add("active");
  });

  btnClose.addEventListener("click", () => {
    mobileMenu.classList.remove("active");
  });
  // 모바일 더보기 end

  // 탭 메뉴
  const $tabMenu = $(".lend-tabmenu > button");
  const $tabCon = $(".lend-tabcon-item");

  tabAction(0);

  // 탭메뉴를 클릭 했을때
  $tabMenu.on("click", function (e) {
    // a의 기본 동작막기
    e.preventDefault();

    // 선택한 탭메뉴의 인덱스 구하기
    const tabIdx = $(this).index();
    console.log(tabIdx);

    tabAction(tabIdx);
  });

  // 공통의 동작을 함수로 정의
  function tabAction(index) {
    // 탭메뉴 활성화
    $tabMenu.removeClass("on");
    $tabMenu.eq(index).addClass("on");

    // 인덱스에 해당하는 $tabCon 보이기
    $tabCon.hide();
    $tabCon.eq(index).show();
  }
  // 탭 메뉴 끝
});
