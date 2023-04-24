const circleImg = document.getElementById("colorful-circle");
window.addEventListener("scroll", (e) => {
  circleImg.style.rotate = `${window.scrollY * 0.1}deg`;
});
