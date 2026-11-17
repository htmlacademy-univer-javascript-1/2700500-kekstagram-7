// 1. Создание одной миниатюры (DOM-элемента)
const createPictureElement = (pictureData) => {
  const template = document.querySelector('#picture').content;
  const pictureElement = template.cloneNode(true);

  const img = pictureElement.querySelector('.picture__img');
  const likes = pictureElement.querySelector('.picture__likes');
  const comments = pictureElement.querySelector('.picture__comments');

  img.src = pictureData.url;
  img.alt = pictureData.description;
  likes.textContent = pictureData.likes;
  comments.textContent = pictureData.comments;

  return pictureElement;
};

const renderThumbnails = (pictures) => {
  const picturesContainer = document.querySelector('.pictures');
  const fragment = document.createDocumentFragment();

  pictures.forEach((picture) => {
    fragment.append(createPictureElement(picture));
  });

  picturesContainer.append(fragment);
};

export { renderThumbnails };
