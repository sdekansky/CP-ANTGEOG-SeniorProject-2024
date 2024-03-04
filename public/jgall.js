var slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
  showSlides(slideIndex += n);
}

function showSlides(n) {
    var i;
    var slides = document.getElementsByClassName("mySlides");
    var texts = document.getElementsByClassName("text");
    var numberText = document.getElementsByClassName("numbertext")[0]; // get the numbertext element

    if (n > slides.length) {slideIndex = 1}    
    if (n < 1) {slideIndex = slides.length}
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";  
        texts[i].style.display = "none";  
    }
    slides[slideIndex-1].style.display = "block";  
    texts[slideIndex-1].style.display = "block";  
    numberText.innerHTML = slideIndex + "/" + slides.length;
  }

