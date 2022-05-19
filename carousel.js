var slides = document.querySelectorAll(".slide");
console.log(slides);
var currentSlide = 0;
slides[currentSlide].style.display = "block";
var slideInterval = setInterval(nextSlide, 4000);
// for (let i = 0; i < slides.length; i++) {
//   slides[i].style.display = "none";
// }
function nextSlide() {
  slides[currentSlide].style.display = "none";
  currentSlide = (currentSlide + 1) % slides.length;
  slides[currentSlide].style.display = "block";
}
