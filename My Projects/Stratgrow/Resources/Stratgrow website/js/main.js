const modal = document.querySelector('.modal');
const openModalBtns = document.querySelectorAll('.open-modal');
// const closeBtn = document.querySelector('.modal .close');
const closeBtn = modal.querySelector('.close');

// const openModal = () => {
//   modal.classList.add('open');
// }

// const closeModal = () => {
//   modal.classList.remove('open');
// }

openModalBtns.forEach(btn => {
  // btn.addEventListener('click', openModal);
  btn.addEventListener('click', () => modal.classList.add('open'));
});

// closeBtn.addEventListener('click', closeModal);
closeBtn.addEventListener('click', () => modal.classList.remove('open'));