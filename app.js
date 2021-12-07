const menu = document.querySelector('#mobile-menu');
const menuLinks = document.querySelector('.navbar__menu');
const navLogo = document.querySelector('#navbar__logo');

//display mobile menu
const mobileMenu = () => {
menu.classList.toggle('is-active')
menuLinks.classList.toggle('active')
};

menu.addEventListener('click', mobileMenu);

//show active menu when scrolling
const highlightMenu = () => {
    const elem = document.querySelector('.highLight');
    const homeMenu = document.querySelector('#hero-page');
    const productsMenu = document.querySelector('#products-page');
    const companyMenu = document.querySelector('#company-page');
    const resourcesMenu = document.querySelector('#resources-page');
    let scrollPos = window.scrollY
    //console.log(scrollPos);
    console.log(scrollPos);

    //adds 'highlight' class to my menu items
    if(window.innerWidth > 960 && scrollPos < 200){
        homeMenu.classList.add('highlight');
       productsMenu.classList.remove('highlight');
        companyMenu.classList.remove('highlight');
        return;
    } 
    else if(window.innerWidth > 960 && scrollPos < 1500){
       
        productsMenu.classList.add('highlight');
        homeMenu.classList.remove('highlight');
        companyMenu.classList.remove('highlight');
          resourcesMenu.classList.remove('highlight');
          return;
    }

    else if(window.innerWidth > 960 && scrollPos < 2340){
      companyMenu.classList.add('highlight');
      productsMenu.classList.remove('highlight');
        resourcesMenu.classList.remove('highlight');
        return;
    } else if(window.innerWidth > 960 && scrollPos < 2500){
        resourcesMenu.classList.add('highlight');
        companyMenu.classList.remove('highlight');
        return;

}

if((elem && window.innerWidth < 980 && scrollPos > 800) || elem){
    elem.classList.remove('highlight');
}

};

window.addEventListener('scroll', highlightMenu);
window.addEventListener('click',highlightMenu);

//close mobile menu when clicking on a menu item

const hideMobileMenu = () => {
    const menuBars = document.querySelector('.is-active')
    if(window.innerWidth <= 768 && menuBars){
        menu.classList.toggle('is-active');
        menuLinks.slassList.remove('active');
    }

};

menuLinks.addEventListener('click',hideMobileMenu);
navLogo.addEventListener('click',hideMobileMenu);
