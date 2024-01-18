// section animation
const sections = document.querySelectorAll('section');
window.addEventListener('scroll', checkSections);

function checkSections() {
    const triggerBottom = windows.innerHeight;

    sections.foreach(section => {
        const sectionTop = section.getBoudingClientRect().top;

        if(sectionTop < triggerBottom) {
            section.classList.add('active');

        }else {
            section.classList.remove('active');
        }
    })
}