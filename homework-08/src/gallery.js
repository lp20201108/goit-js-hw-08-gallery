 import gallery from './gallery-items.js';



const refs = {
  galleryList: document.querySelector('.gallery'),
  backDrop: document.querySelector('.js-lightbox'),
  closeModalBtn: document.querySelector('button[data-action="close-lightbox"]'),
  imgModal: document.querySelector('.lightbox__image'),
  // imgGallery: document.querySelector('.gallery__image'),
  overlay: document.querySelector('.lightbox__overlay'),
};


const addImages = (gallery)=>{
   
    gallery.forEach(({ preview, original,description, index}) => {
        
       const template= `<li class="gallery__item">
  <a
    class="gallery__link"
    href="${original}"
  >
    <img
      class="gallery__image"
      src="${preview}"
      data-source="${original}"
      data-index="${index}"
      alt="${description}"
    />
  </a>
</li>`;
      
      refs.galleryList.insertAdjacentHTML("beforeend", template);      
    });
    console.log(refs.galleryList);
  };

addImages(gallery);


refs.galleryList.addEventListener('click', onImageClick );

function onImageClick(event) {
  event.preventDefault();

  if (event.target.nodeName !== 'IMG') {
    return;
  }
  else {
  
    refs.backDrop.classList.add('is-open');
    refs.imgModal.setAttribute('src', event.target.dataset.source);
    const alter = refs.imgModal.alt = event.target.alt;
  }
  
  window.addEventListener('keydown', event => {
    if (event.code === 'Escape') {
      refs.backDrop.classList.remove('is-open');
    }
  });
};


refs.closeModalBtn.addEventListener('click', closeModalWindow);
  
function closeModalWindow(event) {
  refs.backDrop.classList.remove('is-open');
  refs.imgModal.setAttribute('src', '');
 
};


refs.overlay.addEventListener('click', closeBackdrop);

function closeBackdrop(event) {
   event.preventDefault();
   if (event.target === event.currentTarget) {
   refs.backDrop.classList.remove('is-open');
  } 
};




// const imgGallery = [ ... refs.galleryList.querySelectorAll('.gallery__image')];

// console.log(imgGallery);

// window.addEventListener('keydown', photoSlide);

//   let value = 0;

// function photoSlide(event) {

//   if (event.code === 'ArrowRight') {
//     console.log('right');
//     let counter = event.target.dataset.index;
     
//   } 
  
//   if (event.code === 'ArrowLeft') {
//     console.log('left');
//     counter -= 1;
//    console.log(counter);
//   };

// };

// let currentImgSlide = imgGallery[0].dataset.source;
// console.log(currentImgSlide);


