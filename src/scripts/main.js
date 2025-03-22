'use strict';

const largeImg = document.querySelector('.gallery__large-img');

function handleClick() {
  event.preventDefault();

  const img = this.querySelector('img');

  if (img) {
    largeImg.src = this.href;
    largeImg.alt = img.alt;
  }
}

const linkList = document.querySelectorAll('a.list-item__link');

linkList.forEach((link) => {
  link.addEventListener('click', handleClick);
});
