const menuIcon = document.getElementById('menuIcon');
const closeIcon = document.getElementById('closeIcon');
const dropdown = document.getElementById('dropdown');
let isDropdownVisible = false;

menuIcon.addEventListener('click', function() {
    dropdown.classList.toggle('show');
    isDropdownVisible = !isDropdownVisible;
    menuIcon.classList.toggle('hide');
    closeIcon.classList.toggle('show');
});

closeIcon.addEventListener('click', function() {
    dropdown.classList.toggle('show');
    isDropdownVisible = !isDropdownVisible;
    closeIcon.classList.toggle('show');
    menuIcon.classList.toggle('hide');
});

document.addEventListener('click', function(event) {
    if (!event.target.closest('.menu-icon-wrapper')) {
        dropdown.classList.remove('show');
        isDropdownVisible = false;
        closeIcon.classList.remove('show');
        menuIcon.classList.remove('hide');
    }
});
