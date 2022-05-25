// Add imports above this line
import SimpleLightbox from "simplelightbox";
import "simplelightbox/dist/simple-lightbox.min.css";
import { galleryItems } from './gallery-items';
// Change code below this line

console.log(galleryItems);


const galleryEl = document.querySelector('.gallery');

galleryEl.insertAdjacentHTML(
  'afterbegin',
  galleryItems
    .map(galleryItem => {
      return `
        <li>
          <a class="gallery__item" href="${galleryItem.original}">
              <img class="gallery__image" src="${galleryItem.preview}" alt="${galleryItem.description}" />
          </a> 
        </li>  
    `;
    })
    .join('')
);

const lightbox = new SimpleLightbox('.gallery a', {
  captionsData: 'alt',
  captionPosition: 'bottom',
  captionDelay: 250,
});