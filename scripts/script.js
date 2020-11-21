
'use strict';

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
// gallery switcher
(function(){
    var gallerySection = document.querySelector('.products');
          gallerySection.addEventListener('click',function(e){
            var select = document.querySelector('.select-active');
            var title = document.querySelector('.select-title');
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
                title.innerHTML = this.innerHTML;
                for ( var i = 0 ; i < options.length ; i++){
                    if( this === options[i]){
                        changeGallery(i);
                    }
                }
            })
        }
    function changeGallery (index) {
                var galleries = document.querySelectorAll('.galleryWrapper');
                for ( var i = 0 ; i < galleries.length ; i++){
                    if (i == index) {
                        galleries[i].className = "galleryWrapper active";
                    } else {
                        galleries[i].className = "galleryWrapper";
                    }
                }
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