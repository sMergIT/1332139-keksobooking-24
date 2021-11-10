import { announcements } from './data.js';

const cardTemplate = document.querySelector('#card').content;
const mapTemplate = document.querySelector('#map-canvas');
const popupContent = cardTemplate.querySelector('.popup');

const signaturesName = {
  flat: 'Квартира',
  bungalow: 'Бунгало',
  house: 'Дом',
  palace: 'Дворец',
  hotel: 'Отель',
};

// Генерация разметки похожих объявлений
const getMarkupSimilarAnnouncements = (renderCard) => {
  const cardElement = popupContent.cloneNode(true);

  const popupTitle = cardElement.querySelector('.popup__title');
  const popupAddress = cardElement.querySelector('.popup__text--address');
  const popupPrice = cardElement.querySelector('.popup__text--price');
  const popupType = cardElement.querySelector('.popup__type');
  const popupFeatures = cardElement.querySelector('.popup__features');
  const popupCapacity = cardElement.querySelector('.popup__text--capacity');
  const popupTime = cardElement.querySelector('.popup__text--time');
  const popupDescription = cardElement.querySelector('.popup__description');
  const popupPhotos = cardElement.querySelector('.popup__photos');
  const popupAvatar = cardElement.querySelector('.popup__avatar');

  popupTitle.textConent = renderCard.offer.title;
  popupAddress.textConent = renderCard.offer.address;
  popupPrice.textConent = `${renderCard.offer.price} ₽/ночь`;
  popupType.textConent = signaturesName[renderCard.offer.type];
  popupCapacity.textConent = `${renderCard.offer.rooms} комнаты для ${renderCard.offer.guests} гостей`;
  popupTime.textContent = `Заезд после ${renderCard.offer.checkin}, выезд до ${renderCard.offer.checkout}`;
  popupDescription.textContent = renderCard.offer.description;
  popupAvatar.src = renderCard.author.avatar;


  if (!renderCard.offer.features) {
    popupFeatures.classList.add('visually-hidden');
  } else {
    const bookingFeatures = renderCard.offer.features;
    const containerFeatures = popupFeatures;
    const catalogueFeature = containerFeatures.querySelectorAll('.popup__feature');
    catalogueFeature.forEach((featuresListItem) => {
      const isNecessary = bookingFeatures.some((bookingFeature) => featuresListItem.classList.contains(`popup__feature--${bookingFeature}`),
      );
      if (!isNecessary) {
        featuresListItem.remove();
      }
    });
  }
  const popUpPhotoElement = popupPhotos;
  popUpPhotoElement.innerHTML = '';
  renderCard.offer.photos.forEach((photoList) => {
    const img = document.createElement('img');
    img.classList.add('popup__photo');
    img.src = photoList;
    img.width = 40;
    img.height = 45;
    popUpPhotoElement.appendChild(img);
  });
  mapTemplate.appendChild(cardElement);
};

getMarkupSimilarAnnouncements(announcements[0]);
