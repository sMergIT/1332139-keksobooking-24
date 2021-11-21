import { sendData } from './backend.js';
import { resetMapAndMarker } from './map.js';
import { onShowPopupError, onShowPopupSuccess } from './popupuser.js';

const selectionOfGuestRooms = {
  1: [1],
  2: [1, 2],
  3: [1, 2, 3],
  100: [0],
};

const MIN_RENT_PRICE = {
  bungalow: 0,
  flat: 1000,
  hotel: 3000,
  house: 5000,
  palace: 10000,
};

const PRICE_DEFAULT = 1000;

const adForm = document.querySelector('.ad-form');
const adRoomsNumber = adForm.querySelector('#room_number');
const adType = adForm.querySelector('#type');
const adPrice = adForm.querySelector('#price');
const adTimeIn = adForm.querySelector('#timein');
const adTimeOut = adForm.querySelector('#timeout');
const adGuestsNumber = adForm.querySelector('#capacity');
export const adClearForm = adForm.querySelector('.ad-form__reset');

//Проверка валидности гостей/комнат
const onRoomCapacityChange = () => {
  const roomsNumber = +adRoomsNumber.value;
  const capacityNumber = +adGuestsNumber.value;
  if (!selectionOfGuestRooms[roomsNumber].includes(capacityNumber)) {
    adGuestsNumber.setCustomValidity('Выберите верное количество гостей или комнат');
  } else {
    adGuestsNumber.setCustomValidity('');
  }

  adGuestsNumber.reportValidity();
};

// Выбор опции(время заезда и выезда) одного поля автоматически изменят значение другого
const onChangeTime = (evt) => {
  adTimeOut.value = evt.target.value;
  adTimeIn.value === evt.target.value;
};

adForm.addEventListener('submit', (evt) => {
  evt.preventDefault();
  const formData = new FormData(evt.target);
  sendData(onShowPopupSuccess, onShowPopupError, formData);
});

// Проверка присвоения минимальной цены в зависимости от типа жилья
const onChangePrice = () => {
  adPrice.placeholder = MIN_RENT_PRICE[adType.value];
  adPrice.min = MIN_RENT_PRICE[adType.value];
};

// Итоговая функция проверка валидности
const adFormValidition = () => {
  adGuestsNumber.addEventListener('change', onRoomCapacityChange);
  adRoomsNumber.addEventListener('change', onRoomCapacityChange);
  adType.addEventListener('change', onChangePrice);
  adTimeIn.addEventListener('change', onChangeTime);
  adTimeOut.addEventListener('change', onChangeTime);
};
adFormValidition();

//Сброс плейсхолдера и формы
const onSetFormReset = () => {
  adForm.reset();
  adPrice.placeholder = PRICE_DEFAULT;
  adPrice.min = PRICE_DEFAULT;
  resetMapAndMarker();
};

//Событие на очищение формы
const onResetForm = () => {
  adClearForm.addEventListener('click', onSetFormReset);
};
export { onSetFormReset, onResetForm };
