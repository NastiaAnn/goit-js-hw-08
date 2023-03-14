// Add imports above this line
import { galleryItems } from './gallery-items';
// Change code below this line
import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';

const galleryContainerEl = document.querySelector('.gallery');

const makeGalleryCard = ({ preview, original, description }) =>
  `<li style="list-style:none">
        <a class="gallery__item" href="${original}">
		    <img 
				class="gallery__image" 
				src="${preview}" 
				alt="${description}"
			/>
		</a>
	</li>`;
const galleryMarkup = galleryItems.map(data => makeGalleryCard(data)).join('');

galleryContainerEl.innerHTML = galleryMarkup;

const gallery = new SimpleLightbox('.gallery a', {
  captions: true,
  captionSelector: 'img',
  captionType: 'attr',
  captionsData: 'alt',
  captionPosition: 'bottom',
  captionDelay: 250,
});
console.log(galleryItems);

console.log(galleryItems);
