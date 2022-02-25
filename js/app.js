const hamburgerButton = document.getElementById('hamburger');
const navList = document.getElementById('nav-list');
const logo = document.getElementsByClassName('.logo');

function toggleButton() {
    navList.classList.toggle('show')
};

function toggleLogo() {
    logo.classList.toggle('show')
};

hamburgerButton.addEventListener('click', toggleButton, toggleLogo)

