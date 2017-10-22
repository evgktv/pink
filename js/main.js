var navMain = document.querySelector('.main-nav');
var navToggle = document.querySelector('.main-nav__toggle');

navMain.classList.remove('main-nav--nojs');

navToggle.addEventListener('click', function() {
    if (navMain.classList.contains('main-nav--closed')) {
        navMain.classList.remove('main-nav--closed');
        navMain.classList.add('main-nav--open');
    }
    else    {
        navMain.classList.add('main-nav--closed');
        navMain.classList.remove('main-nav--open');
    }
});


var map = document.querySelector(".button-map");
var popup_map = document.querySelector(".modal-map");
var closePPmap = popup_map.querySelector(".modal-close");

map.addEventListener("click", function() {
    event.preventDefault();
    overlay.classList.add("modal-overlay-show");
    popup_map.classList.add("modal-show");

});

window.addEventListener("keydown", function(event) {
    if (event.keyCode === 27) {
        if (popup_map.classList.contains("modal-show")) {
            popup_map.classList.remove("modal-show");
            overlay.classList.remove("modal-overlay-show");
        }
    }
});

closePPmap.addEventListener("click", function(event) {
    event.preventDefault();
    popup_map.classList.remove("modal-show");
    overlay.classList.remove("modal-overlay-show");
});

