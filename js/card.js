import { announcements } from './data.js';

const cardTemplate = document.querySelector('#card').content;
const popUpContent = cardTemplate.querySelector('.popup');
const mapTemplate = document.querySelector('#map-canvas');
const recoveryData = announcements[0];
const signaturesName = {
  flat: 'Квартира',
  bungalow: 'Бунгало',
  house: 'Дом',
  palace: 'Дворец',
  hotel: 'Отель',
};
// Генерация разметки похожих объявлений
const getMarkupSimilarAnnouncements = () => {

  const cardElement = popUpContent.cloneNode(true);

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

  popupTitle.textConent = recoveryData.offer.title;
  popupAddress.textConent = recoveryData.offer.adress;
  popupPrice.textConent = `${recoveryData.offer.price} ₽/ночь`;
  popupType.textConent = signaturesName[recoveryData.offer.type];
  popupCapacity.textConent = `${recoveryData.offer.rooms} комнаты для ${recoveryData.offer.guests} гостей`;
  popupTime.textContent = `Заезд после ${recoveryData.offer.checkin}, выезд до ${recoveryData.offer.checkout}`;
  popupDescription.textContent = recoveryData.offer.description;
  popupAvatar.src = recoveryData.author.avatar;

  if (!recoveryData.offer.features) {
    popupFeatures.classList.add('visually-hidden');
  } else {
    const bookingFeatures = recoveryData.offer.features;
    const containerFeatures = popupFeatures;
    const catalogueFeature = containerFeatures.querySelectorAll('.popup__feature');
    catalogueFeature.forEach((featuresListItem) => {
      const isNecessary = bookingFeatures.some((bookingFeatures) => featuresListItem.classList.contains(`popup__feature--${bookingFeatures}`),
      );
      if (!isNecessary) {
        featuresListItem.remove();
      }
    });
  }
  const popUpPhotoElement = popupPhotos;
  popUpPhotoElement.innerHTML = '';
  recoveryData.offer.photos.forEach((photoList) => {
    const pic = document.createElement('pic');
    pic.classList.add('popup__photo');
    pic.src = photoList;
    popUpPhotoElement.appendChild(pic);
  });
  mapTemplate.appendChild(cardElement);
};

getMarkupSimilarAnnouncements();
