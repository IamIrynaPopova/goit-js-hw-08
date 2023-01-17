// Add imports above this line
import { galleryItems } from './gallery-items';
import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';

const galleryEl = document.querySelector('.gallery');

function createGalleryImages(galleryItems) {
  return galleryItems
    .map(
      ({ original, preview, description }) => `
      <a class="gallery__item"  href=${original}>
  <img class="gallery__image" src=${preview} alt="${description}" />
</a>`
    )
    .join('');
}
const createGallery = createGalleryImages(galleryItems);

galleryEl.innerHTML = createGallery;

const gallery = new SimpleLightbox('.gallery a', {
  captionsData: 'alt',
  captionDelay: 250,
});




