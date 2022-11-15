import SimpleLightbox from "simplelightbox";
// Дополнительный импорт стилей
import "simplelightbox/dist/simple-lightbox.min.css";
// Add imports above this line
import { galleryItems } from './gallery-items';
// Change code below this line

console.log(galleryItems);

const newGallery = document.querySelector('.gallery');

newGallery.addEventListener('click', onNewGalleryClick);

const galleryMarkup = createGalLeryMarkup (galleryItems);

function createGalLeryMarkup (galleryItems) {
    return galleryItems
    .map(({ preview, original, description }) => {
        return `
        <div class="gallery__item">
        <a class="gallery__item" href="${original}">
        <img class="gallery__image" src="${preview}" alt="${description}" />
        </a>
        </div>`
    })
    .join('');
}

newGallery.insertAdjacentHTML('afterbegin', galleryMarkup);
console.log(newGallery);

const gallery = new SimpleLightbox('.gallery a', {
    captionsData: 'alt', 
    captionDelay: 250,
});

gallery.on('show.simplelightbox', function () {
	
});

function onNewGalleryClick (event) {
    event.preventDefault();

}