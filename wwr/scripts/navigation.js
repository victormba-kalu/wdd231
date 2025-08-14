const navButton = document.querySelector('#nav-button');
const navBar = document.querySelector('#nav-bar');
const navLinks = navBar.querySelectorAll('ul li a');

navButton.addEventListener('click', () => {
    navButton.classList.toggle('open'); 
    navBar.classList.toggle('open');
});

document.addEventListener('DOMContentLoaded', () => {
    const currentPagePath = window.location.pathname;

    navLinks.forEach(link => {
        link.closest('li').classList.remove('current'); 

        const linkPath = new URL(link.href).pathname;

        if (currentPagePath === linkPath || 
            (currentPagePath === '/' && linkPath === '/index.html')) {
            link.closest('li').classList.add('current');
        }
    });
});
