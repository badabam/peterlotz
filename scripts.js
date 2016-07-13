(function() {
  document.addEventListener('DOMContentLoaded', init);

  var current = 0,
  imageContainer, images, total;

  function init() {
    var left = document.querySelector('.btn-left');
    var right = document.querySelector('.btn-right');

    images = document.querySelectorAll('main img');
    total = images.length;
    imageContainer = document.querySelector('.image-container');
    imageContainer.style.width = (total * images[0].width) + 'px';

    left.addEventListener('click', onLeftClick.bind(this));
    right.addEventListener('click', onRightClick.bind(this));
  }

  function onLeftClick() {
    current = current === 0 ? total - 1 : current - 1;
    moveImages(current);
  }

  function onRightClick() {
    current = current === total - 1 ? 0 : current + 1;
    moveImages(current);
  }

  function moveImages(index) {
    var newStyle = (index * -750) + 'px';
    console.log(newStyle);
    imageContainer.style.left = newStyle;
  }

})();
