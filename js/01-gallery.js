
import { galleryItems } from './gallery-items.js';
// Change code below this line

console.log(galleryItems);

const galleryEl = document.querySelector('.gallery');
console.log(galleryEl);

const galleryItemsEl = galleryItems.map(({original, preview, description}) => (`<li class="gallery__item">
<a class="gallery__link" href="${original}">
  <img
    class="gallery__image"
    src="${preview}"
    data-source="${original}"
    alt="${description}"
  />
</a>
</li>`)
).join("");

// console.log(galleryItemsEl);

// galleryEl.insertAdjacentHTML("beforeend", galleryItemsEl);

galleryEl.innerHTML = galleryItemsEl;


galleryEl.addEventListener('click', onOpenModal)

function onOpenModal(e){
  e.preventDefault();

  const imageOriginal = e.target.dataset.source;
  if(!imageOriginal){
    return;
  }

  const instance = basicLightbox.create(`
    <img src="${imageOriginal}">
  `)

  instance.show()

  window.addEventListener('keydown', showModal);

  function showModal(e) {
    if(e.code === "Escape"){
      instance.close()
      window.removeEventListener('keydown', showModal)
    }
  
    console.log(e)
    
  }

  

}








{/* <li class="gallery__item">
  <a class="gallery__link" href="large-image.jpg">
    <img
      class="gallery__image"
      src="small-image.jpg"
      data-source="large-image.jpg"
      alt="Image description"
    />
  </a>
</li> */}
