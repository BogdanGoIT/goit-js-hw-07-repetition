import { galleryItems } from './gallery-items.js';
// Change code below this line
console.log(galleryItems);

const galleryEl = document.querySelector('.gallery');

galleryEl.addEventListener('click', onClick)

function onClick(evt){
    console.log(evt.target)
}


const gallery = galleryItems.map(({preview, description, original}) => {
    return(
        `<li class="gallery__item">
  <a class="gallery__link" href="${original}">
    <img
      class="gallery__image"
      src="${preview}"
      data-source="${original}"
      alt="${description}"
    />
  </a>
</li>`
    )
}).join("");


galleryEl.insertAdjacentHTML('beforebegin', gallery);


