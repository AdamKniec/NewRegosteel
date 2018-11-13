// //Function responsible for class addition
// (function(){
//     const nav = document.querySelector('.navbar');
//     let animeteNavbar = () => (window.scrollY > 0) ? (nav.classList.add('sticky')) : (nav.classList.remove('sticky'));
//     window.addEventListener('scroll', animeteNavbar);
// }());

// //MobileMenu handler
// (function(){
//     const hamburger = document.querySelector('.hamburger');
//     const nav = document.querySelector('.navbar');

//     const toggleMenu = (e) => {
//         let menuList = document.querySelector('.menuList');
//         if(!(menuList.classList.contains('mobile')) && (e.target == hamburger)){
//             menuList.classList.add('mobile');
//             hamburger.classList.add('animatedMobileMenu');
//         } else {
//             menuList.classList.remove('mobile');
//             hamburger.classList.remove('animatedMobileMenu');
//         }
//     }
//     document.body.addEventListener('click', toggleMenu);
// }());
// //GalleryHandler
// (function (){
//     const currentImage = document.querySelectorAll(".main-img img");
//     const images = document.querySelectorAll('.imgs');
//     images.forEach((element)=>{
//         element.addEventListener('click', function(e) {
//             let boxNumber = this.className.slice(-1)-1;
//             if (e.target.nodeName === ("IMG")) {
//                     currentImage[boxNumber].src = e.target.src;
//             };
//         })
//     })
// }());
// //gallerySwitcher mobile
// (function(){
//     let select = document.querySelector('.select');
//     select.addEventListener('change', function(a) {
//         let valueSelected = select.selectedIndex;
//         let galleries = document.querySelectorAll('.galleryWrapper');
//             galleries.forEach((a,i) => {
//                 if(i == valueSelected) {
//                     a.className = "galleryWrapper active";
//                 } else {
//                     a.className = "galleryWrapper";
//                 }
//             })
//     })
// }());

// //gallerySwitcher desktop

// (function(){
//     let galleryCategories = document.querySelectorAll('.gallerySwitcher ul li');
//     let galleryWrapper = document.querySelectorAll('.galleryWrapper');
//     galleryCategories.forEach((singleCategory,i) => {
//         singleCategory.addEventListener('click', ()=> {
//             galleryWrapper.forEach(singleBox => singleBox.classList.remove('active'));
//             galleryWrapper[i].classList.add('active');
//         })
        
//     })
// })();
// //smoothScroll
// (function() {
//    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
//         anchor.addEventListener('click', function (e) {
//             e.preventDefault();
//             document.querySelector(this.getAttribute('href')).scrollIntoView({
//                 behavior: 'smooth'
//             });
//         });
// }   ); 
// }());
// //gallery category selector underline
// (function() {
//     let galleryCategories = document.querySelectorAll('.gallerySwitcher ul li');
//         galleryCategories.forEach((singleCategory) => {singleCategory.addEventListener('click', ()=>{
//             galleryCategories.forEach((activatedCategory) => 
//             activatedCategory.classList.remove("currentlyActive"));
//             singleCategory.classList.add("currentlyActive");
//         })})
// }());
'use strict';

//Function responsible for class addition
(function () {
    var nav = document.querySelector('.navbar');
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
//gallery handler
(function () {
    var currentImage = document.querySelectorAll('.main-img img');
    var images = document.querySelectorAll('.imgs');
        images = [].slice.call(images);
        images.forEach(function(element) {
            element.addEventListener('click', function(e) {
                var boxNumber = this.className.slice(-1)-1;
                if(e.target.nodeName === "IMG") {
                    currentImage[boxNumber].src = e.target.src;
                };
            });
        });
})();
//smooth scroll
(function($) {
$(document).ready(function(){
    $("a").on('click', function(event) {
        if (this.hash !== "") {
            event.preventDefault();

            var hash = this.hash;
            var targetOffset = $(hash).offset().top - 80;
            if(hash ==="#aboutUs"){
                targetOffset += 80;
            }

            $('html, body').animate({
                scrollTop: targetOffset
            }, 800, function(){

            });
        }
    });
});
})(jQuery);

//mobile gallery switcher
// (function () {
//     var select = document.querySelector('.select-active');
//     var selectList = document.querySelector('.select');
//     //dropdown header change state and show/hide dropdown menu
//     select.addEventListener('click', function () {
//         select.querySelector('.triangle').classList.toggle('clicked');
//         if(select.querySelector('.clicked')){
//             select.querySelector('.triangle').innerHTML = "&#9650;";
//             selectList.style.display = 'block';
//         } else {
//             select.querySelector('.triangle').innerHTML = "&#9660;";
//             selectList.style.display = 'none';
//         }
//     });
//     var options = selectList.querySelectorAll('.select-option');
//     for ( var i = 0 ; i < options.length ; i++ ){
//         options[i].addEventListener('click', function () {
//             for ( var i = 0 ; i < options.length ; i++){
//                 if( this === options[i]){
//                     changeGallery(i);
//                 }
//             }
//         })
//     }
//     function changeGallery (index) {
//         var galleries = document.querySelectorAll('.galleryWrapper');
//         galleries.forEach(function (a, i) {
//             if (i == index) {
//                 a.className = "galleryWrapper active";
//             } else {
//                 a.className = "galleryWrapper";
//             }
//         })
//     }
// })();
//FIXXXXXXXX
(function(){
    var gallerySection = document.querySelector('.products');
          gallerySection.addEventListener('click',function(e){
            var select = document.querySelector('.select-active');
            var selectList = document.querySelector('.select');
              if(e.target === select && !(e.target.classList.contains('clicked'))){
                    select.querySelector('.triangle').classList.toggle('clicked');
                    select.querySelector('.triangle').innerHTML = "&#9650;";
                    selectList.style.display = 'block';
                            
              } else {
                    select.querySelector('.triangle').innerHTML = "&#9660;";
                    selectList.style.display = 'none';
              }

    var options = selectList.querySelectorAll('.select-option');

    for ( var i = 0 ; i < options.length ; i++ ){
            options[i].addEventListener('click', function () {
                for ( var i = 0 ; i < options.length ; i++){
                    if( this === options[i]){
                        changeGallery(i);
                    }
                }
            })
        }
    function changeGallery (index) {
                var galleries = document.querySelectorAll('.galleryWrapper');
                galleries.forEach(function (a, i) {
                    if (i == index) {
                        a.className = "galleryWrapper active";
                    } else {
                        a.className = "galleryWrapper";
                    }
                })
            }
          })
          

})();
//gallerySwitcher desktop
(function(){
    var galleryCategories = document.querySelectorAll('.gallerySwitcher ul li');
    var galleryWrapper = document.querySelectorAll('.galleryWrapper');
        galleryCategories = [].slice.call(galleryCategories);
        galleryCategories.forEach(function(singleCategory,i) {
            singleCategory.addEventListener('click', function (){
                galleryWrapper = [].slice.call(galleryWrapper);
                galleryWrapper.forEach(function(singleBox) {
                    return singleBox.classList.remove('active');
                })
                galleryWrapper[i].classList.add('active');
            })
        })
})();
//activated category underline
(function(){
    var galleryCategories = document.querySelectorAll('.gallerySwitcher ul li');
        galleryCategories = [].slice.call(galleryCategories);
        galleryCategories.forEach(function(singleCategory) {
            singleCategory.addEventListener('click', function(){
                galleryCategories.forEach(function(activatedCategory){
                    activatedCategory.classList.remove("currentlyActive");
                })
                singleCategory.classList.add("currentlyActive");
            })
        })
})();

 //smoothScroll
// (function () {
//     document.querySelectorAll('a[href^="#"]').forEach(function (anchor) {
//         anchor.addEventListener('click', function (e) {
//             e.preventDefault();
//             document.querySelector(this.getAttribute('href')).scrollIntoView({
//                 behavior: 'smooth'
//             });
//         });
//     });
// })();