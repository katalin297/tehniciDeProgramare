var slideIndex = 1;

function showImage(n) {
    'use strict';

    var slide = document.getElementsByClassName('slides'),
        dots = document.getElementsByClassName('dots'),
        i;

    if (n > slide.length) {
        slideIndex = 1;
    }

    if (n < 1) {
        slideIndex = slide.length;
    }

    for (i = 0; i < slide.length; i++) {
        slide[i].style.display = 'none';
    }
    slide[slideIndex - 1].style.display = 'block';

    for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(' active', '');
    }

    dots[slideIndex - 1].className += ' active';
}

showImage(slideIndex);

function plusIndex(n) {
    'use strict';

    showImage((slideIndex += n));
}

function currentSlide(n) {
    'use strict';

    showImage((slideIndex = n));
}
/* nav */
var menubtn = document.getElementById('menubtn');
var nav = document.getElementById('nav');


console.log(nav.style.right);
// menubtn.onmouseenter = function () {
//     nav.style.right = '0';
// }
// menubtn.onmouseleave = function () {
//     nav.style.right = '-250px';
// };

// menubtn.onclick = function () {
//     if (nav.style.right == '-250px') {
//         nav.style.right = '0';
//     }
//     if (nav.style.right == '0') {
//         nav.style.right = '-250px';
//     }
// };

menubtn.addEventListener('click', function () {
    if (nav.style.right == '-250px') {
        nav.style.right = '0';
    } else if(nav.style.right!='-250px') {
        nav.style.right = '-250px';
    }
});

