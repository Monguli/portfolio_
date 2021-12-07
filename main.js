'use strict';



// 네비바가 고정되면서 색이 바뀌는거 //
const navbar = document.querySelector('#navbar');
const navbarHeight = navbar.getBoundingClientRect().height;
document.addEventListener('scroll', () => {
    if(window.scrollY > navbarHeight){
        navbar.classList.add('navbar--dark');
    } else {
        navbar.classList.remove('navbar--dark');
    }
});
// 



// 클릭하면 바로 해당메뉴로 스크롤링되는 네비메뉴//
const navbarMenu = document.querySelector('.navbar__menu');
navbarMenu.addEventListener('click', () => {
   
    const target = event.target;
    const link = target.dataset.link;
    if(link == null){
        return;
    }
    console.log(event.target.dataset.link);
    const scrollTo = document.querySelector(link);
    scrollTo.scrollIntoView({behavior:"smooth"});
});


//클릭하면 바로 헤당메뉴로 스크롤링되는 컨텍트미 버튼//
const contact = document.querySelector('.home__contact');
contact.addEventListener('click', () => {
    console.log(event.target.dataset.link);
    const scrollTo = document.querySelector('#contact');
    scrollTo.scrollIntoView({behavior:"smooth"});
});



// 스크롤다운하면 점점 투명해지는거 //
const home = document.querySelector('#home');
const homeHeight = home.getBoundingClientRect().height;
document.addEventListener('scroll', () => {
    home.style.opacity = 1 - window.scrollY / homeHeight;
});
