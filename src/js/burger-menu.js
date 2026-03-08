const burgerMenu = document.querySelector('[data-burger]');
const openBtn = document.querySelector('[data-burger-open]');
const closeBtn = document.querySelector('[data-burger-close]');
const overlay = document.querySelector('[data-burger-overlay]');
const burgerLink = document.querySelectorAll('[data-burger-link]');

openBtn.addEventListener('click', openMenu);
closeBtn.addEventListener('click', closeMenu);
overlay.addEventListener('click', closeMenu);

function openMenu() {
    burgerMenu.classList.add('is-open');
    document.body.style.overflow = 'hidden';
}

function closeMenu() {
    burgerMenu.classList.remove('is-open');
    document.body.style.overflow = '';
}

document.addEventListener('keydown', e => {
    if (e.key === 'Escape' && burgerMenu.classList.contains('is-open')) {
        closeMenu();
    }
});

burgerLink.forEach(link => {
    link.addEventListener('click', closeMenu)
});
