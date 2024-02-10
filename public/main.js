
// Create a ScrollMagic controller
var controller = new ScrollMagic.Controller();

// Select the navbar
var navbar = document.querySelector('#navbar');

// Create a tween that scales up the navbar and fades it in when you scroll to it
var tween = gsap.fromTo(navbar, 1, {scale: 0.8, autoAlpha: 0}, {scale: 1, autoAlpha: 1, ease: "power3.inOut"});

// Create a scene that triggers the tween
new ScrollMagic.Scene({
    triggerElement: navbar,
    duration: '100%', // the scene should last for a scroll distance of 100% of the viewport height
    triggerHook: 0.5 // trigger the animation in the middle of the viewport
})
.setTween(tween) // apply the tween to the scene
.addTo(controller); // add the scene to the controller

$(document).on('mousemove', function(event) {
    if (event.pageX < 50) { // if the mouse is within 50px of the left edge
        $('#navbar ul li a').stop().animate({color: '#fff'}, 750); // make the links visible
    } else {
        $('#navbar ul li a').stop().animate({color: 'transparent'}, 750); // make the links invisible
    }
});

document.getElementById('enterGallery').addEventListener('click', function() {
    // Add your code here to handle the "Enter gallery" button click
});

