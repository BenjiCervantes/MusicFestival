document.addEventListener('DOMContentLoaded', () => {
    createGallery();
})

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