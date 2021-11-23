const cardTemplate = document.querySelector('#card').content;
const popupContent = cardTemplate.querySelector('.popup');

const signaturesName = {
  flat: 'Квартира',
  bungalow: 'Бунгало',
  house: 'Дом',
  palace: 'Дворец',
  hotel: 'Отель',
};
const checkForAvailability = (value, card) => value || card.classList.add('visually-hidden');
// Генерация разметки похожих объявлений
export const getCardMarkup = (card) => {
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
  const popupPhoto = cardElement.querySelector('.popup__photo');
  const popupAvatar = cardElement.querySelector('.popup__avatar');

  popupTitle.textContent = checkForAvailability(card.offer.title, popupTitle);
  popupAddress.textContent = checkForAvailability(card.offer.address, popupAddress);
  popupPrice.textContent = `${checkForAvailability(card.offer.price, popupPrice)} ₽/ночь`;
  popupType.textContent = checkForAvailability(signaturesName[card.offer.type], popupType);
  popupCapacity.textContent = `${checkForAvailability(card.offer.rooms, popupCapacity)} комнаты для ${checkForAvailability(card.offer.guests, popupCapacity)} гостей`;
  popupTime.textContent = `Заезд после ${checkForAvailability(card.offer.checkin, popupTime)}, выезд до ${checkForAvailability(card.offer.checkout, popupTime)}`;
  popupDescription.textContent = checkForAvailability(card.offer.description, popupDescription);
  popupAvatar.src = checkForAvailability(card.author.avatar, popupAvatar);


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

  if (!card.offer.photos) {
    popupPhotos.classList.add('visually-hidden');
  } else {
    popupPhotos.innerHTML = '';
    card.offer.photos.forEach((photoItem) => {
      const photo = popupPhoto.cloneNode(true);
      if (photoItem) {
        photo.src = photoItem;
        popupPhotos.append(photo);
      } else {
        popupPhotos.classList.add('visually-hidden');
        photo.alt = '';
      }
    });
  }
  return cardElement;
};
