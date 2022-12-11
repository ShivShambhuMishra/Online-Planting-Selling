// ======= menu bar ======== //

let menu = document.querySelector("#menu-bar");
let navbar = document.querySelector(".navbar");
let header = document.querySelector(".header-3");
let scrollTop = document.querySelector(".scroll-top");

menu.addEventListener('click', () => {
    menu.classList.toggle('fa-time');
    navbar.classList.toggle('active');
})

window.onscroll = () => {
    menu.classList.remove('fa-time');
    navbar.classList.remove('active');

    if(window.scrollY > 250){
        header.classList.add('active')
    }else{
        header.classList.remove('active')
    }

    if(window.scrollY > 250){
      scrollTop.style.display = 'initial'
  }else{
    scrollTop.style.display = 'none'
  }
}

var swiper = new Swiper(".home-slider", {
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  autoplay: {
    delay: 3000,
    desaibleOnInteraction: false,
  },
  loop: true,
});

let daysItem = document.querySelector("#day");
let hoursItem = document.querySelector("#hour");
let minItem = document.querySelector("#minute");
let secItem = document.querySelector("#second");

let countDown = () => {
  let futureDate = new Date ("1 feb 2022");
  let currentDate = new Date ();
  let myDate = futureDate - currentDate;

  let days = Math.floor(myDate / 1000 / 60 / 60 / 24);
  let hours = Math.floor(myDate / 1000 / 60 / 60) % 24;
  let min = Math.floor(myDate / 1000 / 60) % 60;
  let sec = Math.floor(myDate / 1000) % 60;

  daysItem.innerHTML = days;
  hoursItem.innerHTML = hours;
  minItem.innerHTML = min;
  secItem.innerHTML = sec;
}

countDown();

setInterval(countDown , 1000);
