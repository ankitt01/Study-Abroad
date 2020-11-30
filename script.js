const bars = document.querySelector('.bars')
const bar1 = document.querySelector('.bar1')
const bar2 = document.querySelector('.bar2')
const bar3 = document.querySelector('.bar3')

const navLinks = document.querySelector('.nav-links')

bars.addEventListener('click', function() {
    if(bar2.style.display === "none") {
        bar2.style.display = "block"
    }
    else {
        bar2.style.display = "none"
    }
    bar1.classList.toggle('animate1');
    bar3.classList.toggle('animate2');

    navLinks.classList.toggle('nav-link-active')
})