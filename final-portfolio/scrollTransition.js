

const scroll = (x, y) => {
    window.scrollTo(x, y);
}

scroll(0,0);

const section = document.querySelectorAll('section');
const scrollToTop = document.getElementById('scroll-to-top');

scrollToTop.onclick = function() {scroll(0,0)};

section[0].classList.add('sectionTranstion');

document.addEventListener('scroll', () => {
    const clientHeight = document.documentElement.clientHeight;

    section.forEach((s, index) => {
        let elemY = s.getBoundingClientRect().y;
        let elemHeight = s.getBoundingClientRect().height;

        if (clientHeight > elemY + elemHeight * 2/3) {
            s.classList.add('sectionTranstion');
        }

            let nextElemY = section[ index + 1 ].getBoundingClientRect().y;
            let nextElemHeight = section[ index + 1 ].getBoundingClientRect().height;
            if(nextElemY + nextElemHeight * 1/5 < clientHeight ) {
                s.classList.remove('sectionTranstion');
            }
    });
}, false);