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

    // navLinks.style.display = "block"
    navLinks.classList.toggle('nav-link-active')
})


const fadersLeft = document.querySelectorAll('.fade-in-left')
const fadersRight = document.querySelectorAll('.fade-in-right')
const title = document.querySelector('.title')

window.onload = () => {
    fadersLeft.forEach(fader => {
        fader.classList.add('appear');
    })
    fadersRight.forEach(fader => {
        fader.classList.add('appear');
    })
    // title.classList.add('appear');

}

ScrollOut({
    once: true
});