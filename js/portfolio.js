// 부드러운 이동
document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
  anchor.addEventListener("click", function (e) {
    e.preventDefault();

    document.querySelector(this.getAttribute("href")).scrollIntoView({
      behavior: "smooth",
    });
  });
});

// main에 글자 색 채워짐
// 스크롤 이벤트 감지
document.addEventListener("scroll", function () {
  // 현재 스크롤 위치 가져오기
  const scrollPosition = window.scrollY;

  // 시작 색상 및 종료 색상 설정
  const startColor = [175, 185, 170]; // #AFB9AA
  const endColor = [42, 97, 18]; // #2A6112

  // 현재 스크롤 위치에 따라 중간 색상 계산
  const currentColor = startColor.map((start, i) =>
    Math.round(start + (endColor[i] - start) * (scrollPosition / 1000))
  );

  // RGB 값을 Hex로 변환
  const textColor = `#${currentColor
    .map((color) => color.toString(16).padStart(2, "0"))
    .join("")}`;

  // 글자 색상 적용
  document.querySelectorAll(".main-text-box span").forEach(function (div) {
    div.style.color = textColor;
  });
});
