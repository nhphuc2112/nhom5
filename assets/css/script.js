//Toggle Mobile Menu
const menuToggle = document.querySelector('.menu-toggle');
const mobileMenu = document.querySelector('.mobile-menu');
const body = document.body;

menuToggle.addEventListener('click', () => {
    menuToggle.classList.toggle('active');
    mobileMenu.classList.toggle('active');
    body.classList.toggle('menu-open');
});

// Add submenu toggle
const mobileMenuItems = document.querySelectorAll('.mobile-menu > ul > li');

mobileMenuItems.forEach(item => {
    const submenu = item.querySelector('.mobile-submenu');
    if (submenu) {
        item.querySelector('a').addEventListener('click', (e) => {
            e.preventDefault();
            item.classList.toggle('active');
        });
    }
});
//End Toggle Mobile Menuzzz