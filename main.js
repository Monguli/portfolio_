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





const arrowUp = document.querySelector('.arrowbtn')
document.addEventListener('scroll', () => {
    if (window.scrollY > homeHeight / 2){
    arrowUp.classList.add('visible');
} else {
    arrowUp.classList.remove('visible');
}
});

arrowUp.addEventListener('click', () => {
    scrollIntoView('#home');
});



// 클릭하면 바로 해당메뉴로 스크롤링되는 네비메뉴//
const navbarMenu = document.querySelector('.navbar__menu');
navbarMenu.addEventListener('click', () => {
   
    const target = event.target;
    const link = target.dataset.link;
    if(link == null){
        return;
    }
    navbarMenu.classList.remove('open');
    const scrollTo = document.querySelector(link);
    scrollTo.scrollIntoView({behavior:"smooth"});
});




// nav bar media screen
const navbarToggleBtn = document.querySelector('.navbar__toggle-btn');
navbarToggleBtn.addEventListener('click',() => {
    navbarMenu.classList.toggle('open');
});




// work click 
const workbtn = document.querySelector('.work__categories');
const project = document.querySelector('.work__projects');
const projects = document.querySelectorAll('.project');

workbtn.addEventListener('click', (e) => {
    const filter = e.target.dataset.filter || e.target.parentNode.dataset.filter;
    if(filter == null) {
         return;
    }

    // selecting //
const active = document.querySelector('.category__btn.active');
active.classList.remove('active');
const target = e.target.nodeName === 'BUTTON' ? e.target : 
                e.target.parentNode;
target.classList.add('active');


    project.classList.add('animationout');
    setTimeout(()=>{
        projects.forEach((project) => {
            console.log(project.dataset.type);
            if(filter ==='*' || filter === project.dataset.type){
                project.classList.remove('invisible');
            } else{
             project.classList.add('invisible');
            }
         });
        project.classList.remove('animationout');
    },300);
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




