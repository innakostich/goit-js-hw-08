// import SimpleLightbox from 'simplelightbox';
// import 'simplelightbox/dist/simple-lightbox.min.css';
// import { galleryItems } from './gallery-items';
// // Описаний в документації
// import SimpleLightbox from "simplelightbox";
// // Додатковий імпорт стилів
// import "simplelightbox/dist/simple-lightbox.min.css";

// // Change code below this line

// // const galleryContainer = document.querySelector(".gallery");
// //  createImagesMarkup(galleryItems);
// const galleryContainer = document.querySelector(".gallery");
// const imagesMarkup = createImagesMarkup(galleryItems);
// galleryContainer.insertAdjacentHTML("beforeend", imagesMarkup);

// function createImagesMarkup(items) {
//   return items
//     .map(({ preview, original, description }) => {
//       return `<div class="gallery__item">
//         <a class="gallery__link" href="${original}" >
//           <img
//             class="gallery__image"
//             src="${preview}"
//             data-source="${original}"
//             alt="${description}"
//           />
//         </a>
//       </div>`;
//     })
//     .join("");
// }

// const onContainerClick = (e) => {
//   e.preventDefault();

//   if (e.target.classList.contains("gallery")) return;
//   const source = e.target.dataset.source;

//   const instance = basicLightbox.create(`
//     <img src="${source}"width="800" height="600">`);

//   instance.show();

  
//   document.addEventListener("keydown", onDocumentKeyDown);


//   instance.element().addEventListener("keydown", onInstanceKeyDown);

//   function onDocumentKeyDown(e) {
//     if (e.code === "Escape") {
//       instance.close();
//     }
//   }

//   function onInstanceKeyDown(e) {
//     if (e.code === "Escape") {
//       instance.close();
//     }
//   }
// };

// galleryContainer.addEventListener("click", onContainerClick);
import { galleryItems } from './gallery-items';
import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';
import '../css/common.css';
import '../css/01-gallery.css';

const createItemsMarkup = galleryItems
  .map(({ preview, original, description }) => {
    return `
    <a class="gallery__item" href="${original}">
    <img class="gallery__image" src="${preview}" alt="${description}" />
  </a>
      `;
  })
  .join('');

const galleryContainerEl = document.querySelector('.gallery');
galleryContainerEl.insertAdjacentHTML('beforeend', createItemsMarkup);
let lightbox = new SimpleLightbox('.gallery a', {
  scrollZoom: false,
  captionDelay: 250,
  captionsData: 'alt',
  doubleTapZoom: 1,
});
galleryContainerEl.addEventListener('click', event => {
  event.preventDefault();
  if (!event.target.classList.contains('gallery__image')) {
    return;
  }
});