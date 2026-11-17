const header = document.querySelector('header'),
main = document.querySelector('main'),
burger = document.querySelector('.burger'),
nav = document.querySelector('#menu'),
cv = document.querySelector('.cv_view')

burger.addEventListener('click', function(){
    header.classList.toggle('is-open');
    main.classList.toggle('menu-is-open');
})

cv.addEventListener('click', function(){
    cv.classList.toggle('cv_page-2');
    console.log("hi")
})