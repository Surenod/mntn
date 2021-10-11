"use strict"
let sky = document.querySelector('.images-paralax__clouds');
let mountain = document.querySelector('.images-paralax__mountains');
let man = document.querySelector('.images-paralax__human');
let content = document.querySelector('.paralax__container');

window.addEventListener('scroll', function () {
  let value = window.scrollY;
  sky.style.top = -(value/8.2) + '%';
  mountain.style.top = 39 - (value/17)+ '%';
  man.style.top = 58 - (value/50)+ '%';;
  content.style.top = value + 'px';
  content.style.opacity = 1 - (value / 1000);
});