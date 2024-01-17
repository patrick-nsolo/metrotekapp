//NAVIGATION SCRIPT START
const hamburger = document.querySelector(".hamburger");
const navMenu = document.querySelector(".menu");
const btn = document.querySelector(".btn");

hamburger.addEventListener("click", () => {
    hamburger.classList.toggle("active");
    navMenu.classList.toggle("active");
    btn.classList.toggle("active");
});

document.querySelectorAll(".menu-link a").forEach(n =>
n.addEventListener("click", () => {
    hamburger.classList.remove("active");
    navMenu.classList.remove("active");
    btn.classList.toggle("active");
}));
//NAVIGATION SCRIPT END

const mobileDropdownFeatures = document.querySelector(".features")

//PARALLAX SCROLLING EFFECT START
const parallax = document.getElementsByClassName('hero');
window.addEventListener('scroll', function(){
  let offset = window.pageYOffset;
  parallax.style.backgroundPositionY = offset * 0.7 + 'px'
});
//PARALLAX SCROLLING EFFECT END

//GALLERY SLIDE START
var img = document.getElementById('img');
var slides = ['/images/2.webp','/images/3.webp', '/images/4.webp', '/images/5.webp', '/images/6.webp', '/images/7.webp', '/images/8.webp']
var Start = 0;

function slider(){
  if (Start < slides.length){
    Start = Start + 1;
  } else {
    Start = 1;
  }
  console.log(img);
  img.innerHTML = "<img src="+slides[Start-1]+">";
}
setInterval(slider,3000);
//GALLERY SLIDE END