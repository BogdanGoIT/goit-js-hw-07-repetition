import { galleryItems } from './gallery-items.js';
// Change code below this line
const gallery = document.querySelector(".gallery");

console.log(galleryItems);

const galleryItemsEl = galleryItems.map(({original, description, preview}) => `<li class="gallery__item">
<a class="gallery__link" href="${original}">
   <img class="gallery__image" src="${preview}" alt="${description}" title="${description}"/>
</a>
</li>`).join("");


gallery.innerHTML = galleryItemsEl;

var lightbox = new SimpleLightbox('.gallery a', { captionDelay: 250,  });

    


{/* <li class="gallery__item">
   <a class="gallery__link" href="large-image.jpg">
      <img class="gallery__image" src="small-image.jpg" alt="Image description" />
   </a>
</li> */}