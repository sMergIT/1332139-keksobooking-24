import { getRandomInteger, getRandomFractional } from './util';
export const types = ['palace', 'flat', 'house', 'bungalow', 'hotel'];
export const checkIns = ['12:00', '13:00', '14:00'];
export const checkOuts = ['12:00', '13:00', '14:00'];
export const features = ['wifi', 'dishwasher', 'parking', 'washer', 'elevator', 'conditioner'];
export const photos = ['https://assets.htmlacademy.ru/content/intensive/javascript-1/keksobooking/duonguyen-8LrGtIxxa4w.jpg', 'https://assets.htmlacademy.ru/content/intensive/javascript-1/keksobooking/brandon-hoogenboom-SNxQGWxZQi0.jpg', 'https://assets.htmlacademy.ru/content/intensive/javascript-1/keksobooking/claire-rendall-b6kAwr1i0Iw.jpg'];

export function generateOffers() {
  const offers = [];
  for (let i = 0; i < 10; i++) {
    const avatarNumber = i < 9 ? 'img/avatars/user0' : 'img/avatars/user';
    const index = getRandomInteger(0, types.length - 1);
    const indexCheckin = getRandomInteger(0, checkIns.length - 1);
    const indexCheckout = getRandomInteger(0, checkOuts.length - 1);
    const lat = getRandomFractional(35.65000, 35.70000, 5);
    const lng = getRandomFractional(139.70000, 139.80000, 5);

    offers[i] = {
      author: {
        avatar: avatarNumber + (i + 1) + '.png',
      },
      offer: {
        title: 'Cамый дружественный сервис по поиску кексо-попутчиков',
        adress: lat + ', ' + lng,
        type: types[index],
        checkin: checkIns[indexCheckin],
        checkout: checkOuts[indexCheckout],
        description: 'Настолько светлого и прострорного помещения просто не найти на других сервисах',
        price: getRandomInteger(0, 99),
        rooms: getRandomInteger(0, 111),
        guests: getRandomInteger(0, 999),
        features: generateFeatures(),
        photo: generatePhotos(),
      },
      location: {
        lat: lat,
        lng: lng,
      },
    };
  }
  return offers;
}

export function generateFeatures() {
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

export function generatePhotos() {
  const pictures = [];
  const maxLengthPhoto = photos.length;
  const lengthOfArrays = getRandomInteger(1, maxLengthPhoto);
  while (pictures.length < lengthOfArrays) {
    const indexOfPhotos = getRandomInteger(0, maxLengthPhoto - 1);
    const indexPhotos = photos[indexOfPhotos];
    if (!pictures.includes(indexPhotos)) {
      pictures.push(indexPhotos);
    }
  }
  return pictures;
}

export const announcements = generateOffers();
