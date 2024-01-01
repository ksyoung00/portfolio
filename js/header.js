const globalMenu = document.querySelector(".global-menu");
const openBtn = document.querySelector("#open-btn");
const closeBtn = document.querySelector("#close-btn");

openBtn.addEventListener("click", (evt) => {
  evt.preventDefault();
  globalMenu.style.transform = "translateY(0)";
});
closeBtn.addEventListener("click", (evt) => {
  evt.preventDefault();
  globalMenu.style.transform = "translateY(-200px)";
});
