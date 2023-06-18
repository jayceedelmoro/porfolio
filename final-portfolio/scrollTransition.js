

const scroll = (x, y) => {
    window.scrollTo( x, y );
}

scroll( 0,0 );

const section = document.querySelectorAll( 'section' );
const logo = document.querySelector( '.logo' );
const home = document.querySelector( '.nav-menu-item.home' );
const about = document.querySelector( '.nav-menu-item.about' );
const skills = document.querySelector( '.nav-menu-item.skills' );
const projects = document.querySelector( '.nav-menu-item.projects' );
const contact = document.querySelector( '.nav-menu-item.contact' );
const scrollToTop = document.getElementById( 'scroll-to-top' );

const clientHeight = document.documentElement.clientHeight;

logo.onclick = function() {scroll( 0,0 )};
home.onclick = function() {scroll( 0,0 )};
about.onclick = function() {scroll( 0, clientHeight )};
skills.onclick = function() {scroll( 0, clientHeight * 2 )};
projects.onclick = function() {scroll( 0, clientHeight * 3 )};
contact.onclick = function() {scroll( 0, clientHeight * 4 )};
scrollToTop.onclick = function() {scroll(0,0)};

section[0].classList.add('sectionTranstion');

document.addEventListener('scroll', () => {

    section.forEach((s, index) => {
        let elementHeight = s.offsetHeight;
        let scrollTop = document.documentElement.scrollTop;

        if(elementHeight <= window.innerHeight) {
            s.style.position = 'sticky';
        }

        if( index < section.length - 1 ) {
            if (section[ index + 1 ].getBoundingClientRect().top <= elementHeight) {
                s.style.opacity = 1 - ((scrollTop - ( elementHeight *  index )) / elementHeight );
            }
            else {
                s.style.opacity = 1
            }
        }
    });

    
}, false);