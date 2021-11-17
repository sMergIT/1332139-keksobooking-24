import { announcements } from './data.js';
const cardTemplate = document.querySelector('#card').content;
const popupContent = cardTemplate.querySelector('.popup');

const signaturesName = {
  flat: 'Квартира',
  bungalow: 'Бунгало',
  house: 'Дом',
  palace: 'Дворец',
  hotel: 'Отель',
};

// Генерация разметки похожих объявлений
export const getMarkupSimilarAnnouncements = (card) => {
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

  popupTitle.textContent = card.offer.title;
  popupAddress.textContent = card.offer.address;
  popupPrice.textContent = `${card.offer.price} ₽/ночь`;
  popupType.textContent = signaturesName[card.offer.type];
  popupCapacity.textContent = `${card.offer.rooms} комнаты для ${card.offer.guests} гостей`;
  popupTime.textContent = `Заезд после ${card.offer.checkin}, выезд до ${card.offer.checkout}`;
  popupDescription.textContent = card.offer.description;
  popupAvatar.src = card.author.avatar;


  if (!card.offer.features) {
    popupFeatures.classList.add('visually-hidden');
  } else {
    const bookingFeatures = card.offer.features;
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
  card.offer.photos.forEach((photoList) => {
    const img = document.createElement('img');
    img.classList.add('popup__photo');
    img.src = photoList;
    img.width = 40;
    img.height = 45;
    popUpPhotoElement.appendChild(img);
  });

  return cardElement;
};

getMarkupSimilarAnnouncements(announcements[0]);
