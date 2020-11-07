let totalSlides = document.querySelectorAll('.slider-item').length;
let slideWidth = `calc(100vw*${totalSlides})`;
document.querySelector('.slider-width').style.width = slideWidth;
let currentSlide = 0;

function goPrev(){
    currentSlide--;
    if(currentSlide < 0){
        currentSlide = totalSlides - 1;
    }
    updateMargin(currentSlide)
}

function goNext(){
    currentSlide++;
    if(currentSlide == totalSlides){
        currentSlide = 0;
    }
    updateMargin(currentSlide)
}
function updateMargin(n){
    let newMargin = (n * 100);
    document.querySelector('.slider-width').style.marginLeft = `-${newMargin}vw`
}

function passSlide(){
    goNext()
}
setInterval(passSlide, 3000)