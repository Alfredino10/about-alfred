var navBar = document.querySelector('nav');
var navOpenBtn = document.querySelector('.open-btn');
var navCloseBtn = document.querySelector('.nav-close-btn');


navOpenBtn.addEventListener('click', function(evt) {
     navBar.classList.add('open-nav');
});

navCloseBtn.addEventListener('click', function(evt) {
    navBar.classList.remove('open-nav');
})

