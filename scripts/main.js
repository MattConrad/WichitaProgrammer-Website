//makes the slideshow work automatically

var slides = document.querySelectorAll('#slides .slide');
var currentSlide = 0;
var slideInterval = setInterval(nextSlide, 7000);

function nextSlide() {
    goToSlide(currentSlide + 1);
}

function previousSlide() {
    goToSlide(currentSlide - 1);
}

function goToSlide(n) {
    slides[currentSlide].className = 'slide';
    currentSlide = (n + slides.length) % slides.length;
    slides[currentSlide].className = 'slide showing';
}

//shows the control buttons if javascript is working

var controls = document.querySelectorAll('.controls');

for (var i = 0; i < controls.length; i++) {
    controls[i].style.display = 'inline-block';
}

//makes the pause button work
var playing = true;
var pauseButton = document.getElementById('pause');

function pauseSlideShow() {
    pauseButton.innerHTML = '►';
    playing = false;
    clearInterval(slideInterval);
}

function playSlideShow() {
    pauseButton.innerHTML = '❚❚';
    playing = true;
    slideInterval = setInterval(nextSlide, 7000);
}

pauseButton.onclick = function () {
    if (playing) {
        pauseSlideShow();
    } else {
        playSlideShow();
    }
};

//makes the previous and next buttons work
var next = document.getElementById('next');
var previous = document.getElementById('previous');

next.onclick = function () {
    pauseSlideShow();
    nextSlide();
};

previous.onclick = function () {
    pauseSlideShow();
    previousSlide();
};

setTimeout(function () {
    var slides = document.getElementById('slides');
    var controlbuttons = document.getElementById('control-buttons');
    slides.style.display = "block";
    controlbuttons.style.display = "block";
}, 500);