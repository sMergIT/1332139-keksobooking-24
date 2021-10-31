function getRandomInteger(min, max) {
  // случайное число от min до (max+1)
  const number = min + Math.random() * (max + 1 - min);
  return Math.floor(number);
}
console.log(getRandomInteger(0, 99));

function getRandomFractional(min, max, rate) {
  // случайное число от min до (max+1)
  const decimal = min + Math.random() * (max + 1 - min);
  return decimal.toFixed(rate);
  //убирает знаки после запятой
}
console.log(getRandomFractional(0, 3.555, 9));

const types = ['palace', 'flat', 'house', 'bungalow', 'hotel'];
const checkIns = ['12:00', '13:00', '14:00'];
const checkOuts = ['12:00', '13:00', '14:00'];
const lat = getRandomFractional(35.65000, 35.70000, 5);
const lng = getRandomFractional(139.70000, 139.80000, 5);
const offers = generateOffers();
const feature = generateFeatures();
const photo = generatePhoto();

function generateOffers() {
  const offers = [];
  for (let i = 0; i < 10; i++) {
    const avatarNumber = i < 9 ? 'img/avatars/user0' : 'img/avatars/user';
    const index = getRandomInteger(0, types.length - 1);
    const indexCheckin = getRandomInteger(0, checkIns.length - 1);
    const indexCheckout = getRandomInteger(0, checkOuts.length - 1);

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
        photo: generatePhoto(),
      },
      location: {
        lat: lat,
        lng: lng,
      }
    };

  }
  return offers;
};

function generateFeatures() {
  const conveniences = [];
  const features = ['wifi', 'dishwasher', 'parking', 'washer', 'elevator', 'conditioner'];
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
};

function generatePhoto() {
  const pixs = [];
  const photos = ['https://assets.htmlacademy.ru/content/intensive/javascript-1/keksobooking/duonguyen-8LrGtIxxa4w.jpg', 'https://assets.htmlacademy.ru/content/intensive/javascript-1/keksobooking/brandon-hoogenboom-SNxQGWxZQi0.jpg', 'https://assets.htmlacademy.ru/content/intensive/javascript-1/keksobooking/claire-rendall-b6kAwr1i0Iw.jpg'];
  const maxLengthPhoto = photos.length;
  const lengthOfArrays = getRandomInteger(1, maxLengthPhoto);
  while (pixs.length < lengthOfArrays) {
    const indexOfPhotos = getRandomInteger(0, maxLengthPhoto - 1);
    const indexPhotos = photos[indexOfPhotos];
    if (!pixs.includes(indexPhotos)) {
      pixs.push(indexPhotos);
    }
  }
  return pixs;
};

console.log(offers);
console.log(feature);
console.log(photo);
