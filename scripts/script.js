// Getting Hamburger, bars and navlist.
const Hamburger = document.getElementById('ham-burger');
const Bars = document.querySelectorAll('.bar');
const NavList = document.querySelector('.nav-list');

Hamburger.addEventListener('click', () => {
    Bars.forEach(bar => {
        bar.classList.toggle('bar-active');
    })

    NavList.classList.toggle('nav-list-active');
});

NavList.addEventListener('click', () => {
    Bars.forEach(bar => {
        bar.classList.toggle('bar-active');
    })

    NavList.classList.toggle('nav-list-active');
})