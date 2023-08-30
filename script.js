const toggleButton = document.getElementById('toggleNavButton');
const navbar = document.querySelector('.navbar');

toggleButton.addEventListener('click', () => {
    navbar.classList.toggle('nav-active');
});
