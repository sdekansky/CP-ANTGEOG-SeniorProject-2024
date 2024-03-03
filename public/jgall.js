// JavaScript for slideshow
var slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
  showSlides(slideIndex += n);
}

function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
    var i;
    var slides = document.getElementsByClassName("mySlides");
    var dots = document.getElementsByClassName("dot");
    if (n > slides.length) {slideIndex = 1}    
    if (n < 1) {slideIndex = slides.length}
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";  
    }
    for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active", "");
    }
    slides[slideIndex-1].style.display = "block";  
    setTimeout(function() {
        slides[slideIndex-1].style.opacity = 1;
    }, 50);
    dots[slideIndex-1].className += " active";
}


var overlays = document.getElementsByClassName("polygon-overlay");
for (var i = 0; i < overlays.length; i++) {
    overlays[i].addEventListener("click", function() {
        // Display information in the information container
    });
}
