const galleryItems = document.querySelectorAll('.gallery img');
const header = document.querySelector('header');

galleryItems.forEach(item => {
  item.addEventListener('click', () => {
    const overlay = document.createElement('div');
    overlay.classList.add('gallery-overlay');
    overlay.innerHTML = `<div class="caption">${item.alt}</div><img src="${item.src}" />`;
    document.body.appendChild(overlay);
    header.classList.add('hidden');
    overlay.classList.add('active');
    overlay.addEventListener('click', () => {
      overlay.classList.remove('active');
      setTimeout(() => {
        overlay.remove();
        header.classList.remove('hidden');
      }, 500);
    });
  });
});


