let toggleMobileMenu = document.querySelector('#toggle-mobile-menu');
let MobileMenu = document.querySelector('.mobile-menu nav');

toggleMobileMenu.addEventListener('click', (event) => {
    MobileMenu.classList.toggle('hidden');
})