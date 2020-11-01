
'use strict';

//Function responsible for class addition
(function () {
    const nav = document.querySelector('.navbar');
    window.addEventListener('scroll',function () {
        if(window.pageYOffset > 0){
            nav.classList.add('sticky');
        } else{
            nav.classList.remove('sticky');
        }
    });
})();


//MobileMenu handler
(function () {
    var hamburger = document.querySelector('.hamburger');
    var nav = document.querySelector('.navbar');

    var toggleMenu = function toggleMenu(e) {
        var menuList = document.querySelector('.menuList');
        if (!menuList.classList.contains('mobile') && e.target == hamburger) {
            menuList.classList.add('mobile');
            hamburger.classList.add('animatedMobileMenu');
        } else {
            menuList.classList.remove('mobile');
            hamburger.classList.remove('animatedMobileMenu');
        }
    };
    document.body.addEventListener('click', toggleMenu);
})();