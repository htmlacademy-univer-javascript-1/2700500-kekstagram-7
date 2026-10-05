const getRandomInteger = (min, max) => Math.floor(Math.random() * (max - min + 1)) + min;

const getRandomArrayElement = (elements) => elements[getRandomInteger(0, elements.length - 1)];

const NAMES = [
  'Мария',
  'Игорь',
  'Максим',
  'Петр',
  'Дмитрий',
  'Татьяна',
  'Сергей',
  'Анастасия',
  'Павел',
  'Анна',
];

const MESSAGES = [
  'Всё отлично!',
  'В целом всё неплохо. Но не всё.',
  'Когда вы делаете фотографию, хорошо бы убирать палец из кадра. В конце концов это просто непрофессионально.',
  'Моя бабушка случайно чихнула с фотоаппаратом в руках и у неё получилась фотография лучше.',
  'Я поскользнулся на банановой кожуре и уронил фотоаппарат на кота и у меня получилась фотография лучше.',
  'Лица у людей на фотке перекошены, как будто их избивают. Как можно было поймать такой неудачный момент?!',
];

const DESCRIPTIONS = [
  'Закат на берегу океана.',
  'Утренний туман в лесу.',
  'Горные вершины в лучах солнца.',
  'Цветущий сад весной.',
  'Тихая гладь озера.',
  'Звёздное небо над палаткой.',
  'Прогулка по осеннему парку.'
];

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
