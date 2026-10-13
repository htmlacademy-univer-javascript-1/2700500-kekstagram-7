import { getRandomInteger, getRandomArrayElement } from './util.js';
import { NAMES, MESSAGES, DESCRIPTIONS } from './data.js';

const createComment = (id) => ({
  id: id,
  avatar: `img/avatar-${getRandomInteger(1, 6)}.svg`,
  message: Array.from({ length: getRandomInteger(1, 2) }, () => getRandomArrayElement(MESSAGES)).join(' '),
  name: getRandomArrayElement(NAMES),
});

const createComments = () => {
  const commentsCount = getRandomInteger(0, 30);
  const comments = [];

  for (let i = 0; i < commentsCount; i++) {
    comments.push(createComment(i + 1));
  }

  return comments;
};

const createPhoto = (index) => {
  const id = index + 1;

  return {
    id: id,
    url: `photos/${id}.jpg`,
    description: getRandomArrayElement(DESCRIPTIONS),
    likes: getRandomInteger(15, 200),
    comments: createComments(),
  };
};

// eslint-disable-next-line no-unused-vars
const photos = Array.from({ length: 25 }, (_, index) => createPhoto(index));
