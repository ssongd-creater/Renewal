var slideList = document.getElementsByClassName('main-slide'); // Slide parent dom
var slideContents = document.querySelectorAll('.main-slide li'); // each slide dom
//console.log(slideContents);
var slideBtnNext = document.querySelector('#next'); // next button
var slideBtnPrev = document.querySelector('#prev'); // prev button
var slideLength = slideContents.length; // slide length
//console.log(slideBtnNext,slideBtnPrev);

let slideContainer = document.querySelectorAll('.main-slide li');
//console.log(slideContainer);
var slideWidth = 1280;

let currentIndex = 0; // current slide index
let position = 0;

let DISABLED = 'disabled'; // index가 0일 때 prev에 disabled추가, index가 2일때 next에 disbaled 추가

// Prev Button Event
function prev() {
    if (currentIndex > 0) {
        position += slideWidth;
        slideContainer.style.transform = `translateX(${position}px)`;
        currentIndex = currentIndex - 1;
    }

}

function next() {
    if (currentIndex < 2) {
        // slideBtnPrev.classList.remove(DISABLED);
        position -= slideWidth;
        slideContainer.style.transform = `translateX(${position}px)`;
        currentIndex = currentIndex + 1;
    }

}

slideBtnPrev.addEventListener('click', prev);
slideBtnNext.addEventListener('click', next);