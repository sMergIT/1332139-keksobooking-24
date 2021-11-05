const cardTemplate = document.querySelector('#card').content.querySelector('.popup');
const signaturesName = {
  flat: 'Квартира',
  bungalow: 'Бунгало',
  house: 'Дом',
  palace: 'Дворец',
  hotel: 'Отель',
}
// Генерация разметки похожих объявлений
function renderCard (card) {
const features = ['wifi', 'dishwasher', 'parking', 'washer', 'elevator', 'conditioner'];
const cardElement = cardTemplate.cloneNode(true);
const cardFirstPhotoElement = cardElement.querySelector('.popup__photos').src = card.offer.photos;
const title = cardElement.querySelector('.popup__title').textContent = card.offer.title;
const adress = cardElement.querySelector('.popup__text--address').textContent = card.offer.address;
const price = cardElement.querySelector('.popup__text--price').textContent = (`${card.offer.price} ₽ночь`);
const type = cardElement.querySelector('.popup__type').textContent = signaturesName[card.offer.type];
const capacity = cardElement.querySelector('.popup__text--capacity').textContent =(`${card.offer.rooms} комнаты для`) (`${card.offer.guests} гостей`);
const time = cardElement.querySelector('.popup__text--time').textContent = (`Заезд после ${card.offer.checkin}`) (`выезд до${card.offer.checkout} `);
const description = cardElement.querySelector('.popup__description').textContent = card.offer.description;
const avatar = cardElement.querySelector('.popup__avatar').src = card.author.avatar;
features.forEach((feature) => {
  if (!cardElement.offer.features.includes(feature)) {
    cardElement.querySelector('.popup__feature--' + feature).remove();
  }
})
if (card.offer.photos.length > 0) {
  cardFirstPhotoElement.src = card.offer.photos[0];
}
}
