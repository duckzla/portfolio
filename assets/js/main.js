const header = document.querySelector('header'),
main = document.querySelector('main'),
burger = document.querySelector('.burger'),
nav = document.querySelector('#menu')

burger.addEventListener('click', function(){
    header.classList.toggle('is-open');
    main.classList.toggle('menu-is-open');
})

