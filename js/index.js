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
  if (slide.length = 0) {
    console.log(removeBtn);
    prevBtn.classList.add('disabled');
    //prevBtn.style.display = 'none';
    //console.log(mainSlide);
  }else{
    prevBtn.classList.remove('disabled');
   // prevBtn.style.display = 'block';
   };

  // if (slide<=1) {
  //   nextBtn.classList.add('disabled');
  // } else {
  //   nextBtn.classList.remove('disabled');
  // };
};

removeBtn();




// nextBtn.addEventListener('click', function () {
//   for (let i = 0; i < slidelength; i++){
//     slide[i].style.left = i * 100 + '%';
//   };
// });

// let position = 0;

// prevBtn.addEventListener('click', function() {
//   if (position < 0) return position = 0;
//   position -= 1;
//   slider.style.transform = `translateX(-${position}00%)`;
// });

// nextBtn.addEventListener('click', function() {
//   if (position > 4) return position = 5;
//   position += 1;
//   slider.style.transform = `translateX(-${position}00%)`;
// });
