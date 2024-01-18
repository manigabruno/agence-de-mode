// section animation
const sections = document.querySelectorAll('section');
window.addEventListener('scroll', checkSections);

function checkSections() {
    const triggerBottom = windows.innerHeight;

    sections.foreach(section => {
        const sectionTop = section.getBoundingClientRect().top;

        if(sectionTop < triggerBottom) {
            section.classList.add('active');

        }else {
            section.classList.remove('active');
        }
    })
}

let menu = document.querySelector('.menu');
let nav = document.querySelector('.nav');
menu.onclick = function() {
    menu.classList.toggle('show');
    nav.classList.toggle('show');
}
 