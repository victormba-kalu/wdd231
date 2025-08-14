const navButton = document.querySelector('#nav-button');
const navBar = document.querySelector('#nav-bar');
const navLinks = navBar.querySelectorAll('ul li a');

navButton.addEventListener('click', () => {
    navButton.classList.toggle('show');
    navBar.classList.toggle('show');
});

document.addEventListener('DOMContentLoaded', () => {
    const currentPagePath = window.location.pathname;

    navLinks.forEach(link => {
        link.closest('li').classList.remove('current');

        const linkPath = new URL(link.href).pathname;

        // Normalize paths for comparison
        const normalizedCurrentPath = currentPagePath === '/' || currentPagePath === '/index.html' ? '/index.html' : currentPagePath;
        const normalizedLinkPath = linkPath === '/' || linkPath === '/index.html' ? '/index.html' : linkPath;

        if (normalizedCurrentPath === normalizedLinkPath) {
            link.closest('li').classList.add('current');
        }
    });
});
