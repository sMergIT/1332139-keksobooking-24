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

const features = ['wifi', 'dishwasher', 'parking', 'washer', 'elevator', 'conditioner'];
const photos = ['https://assets.htmlacademy.ru/content/intensive/javascript-1/keksobooking/duonguyen-8LrGtIxxa4w.jpg', 'https://assets.htmlacademy.ru/content/intensive/javascript-1/keksobooking/brandon-hoogenboom-SNxQGWxZQi0.jpg', 'https://assets.htmlacademy.ru/content/intensive/javascript-1/keksobooking/claire-rendall-b6kAwr1i0Iw.jpg'];
const types = ['palace', 'flat', 'house', 'bungalow', 'hotel'];
const checkIns = ['12:00', '13:00', '14:00'];
const checkOuts = ['12:00', '13:00', '14:00'];
const maxLength = features.length;
const maxLengthPhoto = photos.length;
const lengthOfArray = getRandomInteger(1, maxLength);
const lengthOfArrays = getRandomInteger(1, maxLengthPhoto);
const array = [];
const arrays = [];
const lat = getRandomFractional(35.65000, 35.70000, 5);
const lng = getRandomFractional(139.70000, 139.80000, 5);
function generateOffers() {
  const offers = [];
  for (let i = 0; i < 10; i++) {
    const avatarNumber = i < 9 ? 'img/avatars/user0' : 'img/avatars/user';
    const index = getRandomInteger(0, types.length - 1);
    const indexCheckin = getRandomInteger(0, checkIns.length - 1);
    const indexCheckout = getRandomInteger(0, checkOuts.length - 1);
    offers[i] = {
      author: {
        avatar: avatarNumber + (i + 1) + '.png'
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
      },
      location: {
        lat: getRandomFractional(35.65000, 35.70000, 5),
        lng: getRandomFractional(139.70000, 139.80000, 5),
      }
    };

  }
  return offers;
};


function generateFeatures() {
  while (array.length < lengthOfArray) {
    const indexOfEl = getRandomInteger(0, maxLength - 1);
    const el = features[indexOfEl];
    if (!array.includes(el)) {
      array.push(el);
    }
    return array;
  }
}

function generatePhoto() {
  while (arrays.length < lengthOfArrays) {
    const indexOfLe = getRandomInteger(0, maxLengthPhoto - 1);
    const le = photos[indexOfLe];
    if (!array.includes(le)) {
      array.push(le);
    }
    return arrays;
  }
}
const offers = generateOffers();
const featuress = generateFeatures();
const photosIndex = generatePhoto();
console.log(offers);
console.log(featuress);
console.log(photosIndex);
