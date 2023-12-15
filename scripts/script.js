//NAVIGATION SCRIPT START
const hamburger = document.querySelector(".hamburger");
const navMenu = document.querySelector(".menu");
const btn = document.querySelector(".btn");

hamburger.addEventListener("click", () => {
    hamburger.classList.toggle("active");
    navMenu.classList.toggle("active");
    btn.classList.toggle("active");
})

document.querySelectorAll(".nav-link").forEach(n =>
n.addEventListener("click", () => {
    hamburger.classList.remove("active");
    navMenu.classList.remove("active");
    btn.classList.toggle("active");
}))
//NAVIGATION SCRIPT END


//PARALLAX SCROLLING EFFECT START
const parallax = document.getElementsByClassName('hero');
window.addEventListener('scroll', function(){
  let offset = window.pageYOffset;
  parallax.style.backgroundPositionY = offset * 0.7 + 'px'
})
//PARALLAX SCROLLING EFFECT END


// LOAD MORE BUTTON START


// LOAD MORE BUTTON END

//GALLERY SLIDE START
let slideIndex = 0;
function showSlides() {
  const slides = document.querySelector('.gallery-slide');
  if (slideIndex === -1) {
    slideIndex = slides.children.length - 3;
  } else if (slideIndex === slides.children.length - 2) {
    slideIndex = 0;
  }
  slides.style.transform = `translateX(-${slideIndex * 33.333}%)`;
}

function nextSlide(){
  slideIndex++;
  showSlides();
}
function prevSlide(){
  slideIndex--;
  showSlides();
}
showSlides();
//GALLERY SLIDE END