//Function responsible for class addition
(function(){
    const nav = document.querySelector('.navbar');
    let animeteNavbar = () => (window.scrollY > 0) ? (nav.classList.add('sticky')) : (nav.classList.remove('sticky'));
    window.addEventListener('scroll', animeteNavbar);
}());

//Hamburger menu handler
(function(){
    const hamburger = document.querySelector('.hamburger');
    const nav = document.querySelector('.navbar');

    const toggleMenu = (e) => {
        let menuList = document.querySelector('.menuList');
        if(!(menuList.classList.contains('mobile')) && (e.target == hamburger)){
            menuList.classList.add('mobile');
        } else {
            menuList.classList.remove('mobile');
        }
    }
    document.body.addEventListener('click', toggleMenu);
}());

// (function() {
//     const hamburger = document.querySelector('.hamburger');
    
//     const toggleMenu = () => {
//         let menuList = document.querySelector('.mobileList');
//         (!(menuList.classList.contains('mobile'))) ? (menuList.classList.add('mobile')) : (menuList.classList.remove('mobile'));
//     }
//         hamburger.addEventListener('click', toggleMenu);
// }());
