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
document.addEventListener("scroll", function () {
  const mainTextElements = document.querySelectorAll(".main-text-box");

  mainTextElements.forEach(function (mainTextBox) {
    const bounding = mainTextBox.getBoundingClientRect();

    if (bounding.top >= 0 && bounding.bottom <= window.innerHeight) {
      mainTextBox.classList.add("active");
    } else {
      mainTextBox.classList.remove("active");
    }
  });
});

document.addEventListener("scroll", function () {
  const body = document.body;
  const scrolled = window.scrollY > 0;
  body.classList.toggle("scrolled", scrolled);
});

// 스크롤하면 컨텐츠 나타남
window.addEventListener("scroll", function () {
  var scrolled = window.scrollY;
  var mainContainers = document.querySelectorAll("section");

  mainContainers.forEach(function (mainContainer) {
    if (scrolled > mainContainer.offsetTop - window.innerHeight / 4) {
      mainContainer.classList.add("active");
    }
  });
});
