import { getRandomInteger, getRandomFractional } from './util.js';
const types = ['palace', 'flat', 'house', 'bungalow', 'hotel'];
const checkIns = ['12:00', '13:00', '14:00'];
const checkOuts = ['12:00', '13:00', '14:00'];
const features = ['wifi', 'dishwasher', 'parking', 'washer', 'elevator', 'conditioner'];
const photography = ['https://assets.htmlacademy.ru/content/intensive/javascript-1/keksobooking/duonguyen-8LrGtIxxa4w.jpg', 'https://assets.htmlacademy.ru/content/intensive/javascript-1/keksobooking/brandon-hoogenboom-SNxQGWxZQi0.jpg', 'https://assets.htmlacademy.ru/content/intensive/javascript-1/keksobooking/claire-rendall-b6kAwr1i0Iw.jpg'];
const serviceTitle = ['Cамый дружественный сервис по поиску кексо-попутчиков', 'Варламов точно одобрит', 'Дом в стиле многоэтажки', 'Отель Оверлук', 'Милый домик в Твин Пикс'];
const descriptionEnumeration = ['Квартира в стиле модерн', 'Квартира без ремонта, но в стиле LOFT', 'Дизайнер слишком долго игрался с красками, но проиграл', 'В данной команте был найден молот Тора, но это не точно'];
function generateOffers() {
  const offers = [];
  for (let i = 0; i < 10; i++) {
    const avatarNumber = i < 9 ? 'img/avatars/user0' : 'img/avatars/user';
    const indexType = getRandomInteger(0, types.length - 1);
    const indexTitle = getRandomInteger(0, serviceTitle.length - 1);
    const indexDescription = getRandomInteger(0, descriptionEnumeration.length - 1);
    const indexCheckin = getRandomInteger(0, checkIns.length - 1);
    const indexCheckout = getRandomInteger(0, checkOuts.length - 1);
    const lat = getRandomFractional(35.65000, 35.70000, 5);
    const lng = getRandomFractional(139.70000, 139.80000, 5);

    offers[i] = {
      author: {
        avatar: avatarNumber + (i + 1) + '.png',
      },
      offer: {
        title: serviceTitle[indexTitle],
        adress: (`${lat}, ${lng}`),
        type: types[indexType],
        checkin: checkIns[indexCheckin],
        checkout: checkOuts[indexCheckout],
        description: descriptionEnumeration[indexDescription],
        price: getRandomInteger(0, 999999),
        rooms: getRandomInteger(0, 1111),
        guests: getRandomInteger(0, 999),
        features: generateFeatures(),
        photos: generatePhotos(),
      },
      location: {
        lat: lat,
        lng: lng,
      },
    };
  }
  return offers;
}

function generateFeatures() {
  const conveniences = [];
  const maxLength = features.length;
  const lengthOfArray = getRandomInteger(1, maxLength);
  while (conveniences.length < lengthOfArray) {
    const indexOfFeatures = getRandomInteger(0, maxLength - 1);
    const indexFeatures = features[indexOfFeatures];
    if (!conveniences.includes(indexFeatures)) {
      conveniences.push(indexFeatures);
    }
  }
  return conveniences;
}

function generatePhotos() {
  const pictures = [];
  const maxLengthPhoto = photography.length;
  const lengthOfArrays = getRandomInteger(1, maxLengthPhoto);
  while (pictures.length < lengthOfArrays) {
    const indexOfPhotos = getRandomInteger(0, maxLengthPhoto - 1);
    const indexPhotos = photography[indexOfPhotos];
    if (!pictures.includes(indexPhotos)) {
      pictures.push(indexPhotos);
    }
  }
  return pictures;
}

const announcements = generateOffers();
export { types, checkIns, checkOuts, features, photography, generateOffers, generateFeatures, generatePhotos, announcements };
