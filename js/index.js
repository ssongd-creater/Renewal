
  let current = 0;
  const btn=document.querySelectorAll('.btns button');
  const slideBoxes=document.querySelector('.main-slide');
  const slideBox = document.querySelectorAll('.slide');

  console.log(slideBox);

  function slider(n){
    //1차 시도
    //  slideBoxes.animate(
    //    [{ left: -100 *n+ "%" }]
    //    ),{
    //      duration:300,
    //      iterations:1,
    //      fill:"forward"
    //    }

    //2차 시도
    // slideBoxes.style.left = -100 * n + "%";

    //유명한 플러그인 slick slider, light slider, owl carousel
    
    slideBoxes.animate(
       [{ transform:'translateX('+(-100 * n) +'%)'}]
       ,{
         duration:300,
         iterations:1,
         fill:"forwards"
       });
     current = n;
  }

  btn.forEach(function(elm){
    //console.log(elm);
    elm.addEventListener('click', function () {
      //console.log(this); //this=elm
      if(this.classList.contains('banner_prev')){
        //console.log("true")
        if (current == 0) {
          return false
        }else{
          slider(current - 1);
          //console.log(current);
        };
      }else{
        if(current == slideBox.length-1){
          return false
        }else{
          slider(current + 1);
        };
      }
      //slideBoxes.animate({left:-100 + "%"},500);
      
    });

  });

  // btn.addEventListener('click', function(){
  //   //slideBoxes.animate({left:-100 + "%"},500);
  //   if(current == slideBox.length - 1){
  //     return false
  //   }else{
  //     slider(current+1);
  //   };
  //   console.log(this);
  // });

  slider(current);

// const slideBox = document.querySelector('.banner_container');
// let slider = document.querySelector('.main-slide');
// const slide = document.querySelectorAll('.slide');
// const slidelength = slide.length;
// const prevBtn = document.querySelector('#banner_prev');
// const nextBtn = document.querySelector('#banner_next');
// const mainSlide = document.querySelector(".banner_container .main-slide");

// let slideImg = 0;

// // function slideImgbox(n) {
// //   slideImg = n;
// // }


// prevBtn.addEventListener('click', function () {
//   //alert("hi");
//   slider = 0;
//   slideImg--;
//   slider = slideImg * -100 + '%';
//   // console.log(slider);
//   mainSlide.style.left = slider;
// });

// nextBtn.addEventListener('click', function () {
//   slider = 0;
//   slideImg++
//   slider = slideImg * -100 + '%';
//    //console.log(slider);
//   mainSlide.style.left = slider;
// });

// //console.log(slider);

// function removeBtn() {
//   //let removeBtn = document.querySelector(".banner_container .main-slide");                  
//   //removeBtn = 1;
//   const abc = abc.length;
  
//   if (mainSlide.style.left == 0) {
//     prevBtn.classList.add('disabled');
//   }else{
//     prevBtn.classList.remove('disabled');
//   };
// };

// removeBtn();

//------------------
const myslides = document.querySelectorAll(".my_slides");
console.log(myslides);
const dot = document.querySelectorAll(".dot-item .dot");

let slideIndex = 0;

function currentSlide(n) {
  showSlides(slideIndex = n);
}
function showSlides() {
  let i;
  for (let i = 0; i < myslides.length; i++){
 // console.log(myslides.length);
  myslides[i].style.display = "none";
}
slideIndex++;
if (slideIndex > myslides.length) { slideIndex = 1 }
  for (i = 0; i < dot.length; i++){
    //console.log(dot);
    dot[i].className = dot[i].className.replace(" active", "");
    //myslides[i].className = myslides[i].className.replace("my_slides fade-in", "my_slides fade_out");
}
  myslides[slideIndex - 1].style.display = "flex";
  //myslides[slideIndex - 1].className = "my_slides fade-in";

  dot[slideIndex - 1].className += " active";
  //myslides[slideIndex - 1].className.replace ("my_slides fade-in", "my_slides fade_out");
  
  // let start = setInterval(showSlides, 3500);
  // document.querySelector('.dot').addEventListener("mouseover", () => {
  //   clearInterval(start);
  // });

  // document.querySelector(".dot").addEventListener("mouseout", () => {
  //   start = setInterval(showSlides, 3500);
  // });
  // clearTimeout(start);
}

let start;

function startSlide() {
  start = setInterval(function () {
    showSlides();
  }, 3500);
}


document.querySelector(".item-box").addEventListener("mouseenter", () => {
  clearTimeout(start);
});

document.querySelector(".item-box").addEventListener("mouseleave", () => {
  startSlide();
  //start = setInterval(showSlides, 3500);
});

showSlides();

  

