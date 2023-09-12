const burgerMenu = document.querySelector('.burger-menu');
const menu = document.querySelector('.menu__second');
const body = document.body;

burgerMenu.addEventListener('click', () => {
    menu.classList.toggle('active');

    if (menu.classList.contains('active')) {
        // Когда меню открыто, заменяем бургер на крестик
        burgerMenu.innerHTML = '<div class="cross"></div>';
        // Предотвращаем прокрутку страницы
        body.style.overflow = 'hidden';
    } else {
        // Когда меню закрыто, восстанавливаем бургер
        burgerMenu.innerHTML = '<div class="bar"></div><div class="bar"></div><div class="bar"></div><div class="bar"></div>';
        // Разрешаем прокрутку страницы
        body.style.overflow = 'auto';
    }
});


function closeDropdown(dropdownId) {
    var dropdown = document.querySelector(dropdownId);
    var bsDropdown = new bootstrap.Dropdown(dropdown);
    bsDropdown.hide();
}

window.addEventListener('scroll', function() {
    const header = document.querySelector('.second__header');
    const content = document.querySelector('.body');
    const scrollPosition = window.scrollY;

    if (scrollPosition >= content.offsetTop) {
        header.classList.add('fixed-header');
        
    } else {
        header.classList.remove('fixed-header');
    }
});
