document.addEventListener('DOMContentLoaded', () => {
    fixedNavigation();
    createGallery();
    linkHeaderColor();
    scrollNav();
});
scrollNav = () => {
    const navLinks = document.querySelectorAll('.main-navigation a');
    navLinks.forEach(link => {
        link.addEventListener('click', e => {
            e.preventDefault();
            const sectionScroll = e.target.getAttribute('href');
            const section = document.querySelector(sectionScroll);
            section.scrollIntoView({ behavior: 'smooth' });
        })
    })
}
linkHeaderColor = () => {
    document.addEventListener('scroll', () => {
        const sections = document.querySelectorAll('section');
        const navLinks = document.querySelectorAll('.main-navigation a');
        let actualSection = '';
        sections.forEach(section => {
            const sectionTop = section.offsetTop;
            const sectionHeight = section.clientHeight;
            if (window.scrollY >= (sectionTop - sectionHeight / 3)) {
                actualSection = section.id;
            }
        });

        navLinks.forEach(link => {
            if (link.getAttribute('href') === '#' + actualSection) {
                link.classList.add('active');
            }
            else {
                link.classList.remove('active');
            }
        })
    })
}

fixedNavigation = () => {
    const header = document.querySelector('.header');
    const about = document.querySelector('.about-festival');
    window.addEventListener('scroll', () => {
        if (about.getBoundingClientRect().bottom < 1) {
            header.classList.add('fixed')
        }
        else {
            header.classList.remove('fixed')
        }
    })
}

createGallery = () => {
    const gallery = document.querySelector('.gallery-images');
    const imageQuantity = 16;

    for (let i = 1; i <= imageQuantity; i++) {
        const image = document.createElement('IMG');
        image.src = `src/img/gallery/full/${i}.jpg`;
        image.alt = 'imagen galería';

        //Event handler
        image.onclick = function () {
            showImage(i)
        }

        gallery.appendChild(image);
    }
};

showImage = (i) => {
    const image = document.createElement('IMG');
    image.src = `src/img/gallery/full/${i}.jpg`;
    image.alt = 'imagen galería';

    const closeButton = document.createElement('BUTTON');
    closeButton.textContent = 'X';
    closeButton.classList.add('close-button');
    closeButton.onclick = closeModal;

    const modal = document.createElement('DIV');
    modal.classList.add('modal');
    modal.onclick = closeModal;

    modal.appendChild(image);
    modal.appendChild(closeButton);

    const body = document.querySelector('body');
    body.classList.add('overflow-hidden');
    body.appendChild(modal);

}

closeModal = () => {
    const modal = document.querySelector('.modal');
    modal.classList.add('fade-out');
    setTimeout(() => {
        modal?.remove();
        const body = document.querySelector('body');
        body.classList.remove('overflow-hidden');
    }, 500);


}