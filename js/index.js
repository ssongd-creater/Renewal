const slideBox = document.querySelector('.banner_container');
let slider = document.querySelector('.main-slide');
const slide = document.querySelectorAll('.slide');
const slidelength = slide.length;
const prevBtn = document.querySelector('#banner_prev');
const nextBtn = document.querySelector('#banner_next');
const mainSlide = document.querySelector(".banner_container .main-slide");

let slideImg = 0;

// function slideImgbox(n) {
//   slideImg = n;
// }


prevBtn.addEventListener('click', function () {
  //alert("hi");
  slider = 0;
  slideImg--;
  slider = slideImg * -100 + '%';
  // console.log(slider);
  mainSlide.style.left = slider;
});

nextBtn.addEventListener('click', function () {
  slider = 0;
  slideImg++
  slider = slideImg * -100 + '%';
   //console.log(slider);
  mainSlide.style.left = slider;
});

//console.log(slider);

function removeBtn() {
  //let removeBtn = document.querySelector(".banner_container .main-slide");
  //removeBtn = 1;
  const abc = abc.length;
  
  if (mainSlide.style.left == 0) {
    prevBtn.classList.add('disabled');
  }else{
    prevBtn.classList.remove('disabled');
  };
};

removeBtn();

//------------------

function showSlides() {
  let i;
  const slides = document.querySelectorAll(".mySlides");
  console.log(slides);
}