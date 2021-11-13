const MIN_AD_LENGTH = 30;
const MAX_AD_LENGTH = 100;
const MAX_PRICE_VALUE = 1e6;
const adForm = document.querySelector('.ad-form');
const adTitle = adForm.querySelector('#title');
const adPrice = adForm.querySelector('#price');
const adRoomsNumber = adForm.querySelector('#room_number');
const adGuestsNumber = adForm.querySelector('#capacity');

// Проверяем заголовок на валидность
adTitle.addEventListener('input', () => {
  const titleLength = adTitle.value.length;
  if (titleLength < MIN_AD_LENGTH) {
    adTitle.setCustomValidity((`Мин. длина заголовка - ${MIN_AD_LENGTH} симв. Введите еще ${MIN_AD_LENGTH - titleLength} симв.`));
    adTitle.style = 'box-shadow: 0 0 7px 6px green';
  } else if (titleLength > MAX_AD_LENGTH) {
    adTitle.setCustomValidity(`Макс. длина заголовка - ${MAX_AD_LENGTH} симв. Удалите еще ${titleLength - MAX_AD_LENGTH} симв.`);
  } else {
    adTitle.setCustomValidity('');
    adTitle.style = '';
  }
  adTitle.reportValidity();
});

// Проверяем цену на валидность
adPrice.addEventListener('input', () => {
  const priceLength = adPrice.value;
  if (priceLength > MAX_PRICE_VALUE) {
    adPrice.setCustomValidity(`Макс. цена за ночь - ${MAX_PRICE_VALUE}`);
    adPrice.style = 'box-shadow: 0 0 9px 11px black';
  } else {
    adPrice.setCustomValidity('');
    adPrice.style = '';
  }
  adPrice.reportValidity();
});

// Проверяем количество комнат и количество мест
const ifRoomCapacityChange = () => {
  const rooms = +adRoomsNumber.value;
  const capacity = +adGuestsNumber.value;
  adGuestsNumber.style = 'box-shadow: 0 0 3px 5px gold';
  if (rooms < capacity) {
    adGuestsNumber.setCustomValidity('Кол-во гостей превышает кол-во комнат');
  } else if (rooms === 100 && capacity !== 0) {
    adGuestsNumber.setCustomValidity('Для 100 комнат доступен только вариант "Не для гостей"');
  } else if (rooms === 100 && capacity === 0) {
    adGuestsNumber.setCustomValidity('Вариант "Не для гостей" доступен только для 100 комнат');
  } else {
    adGuestsNumber.setCustomValidity('');
    adGuestsNumber.style = '';
  }
  adGuestsNumber.reportValidity();
};

adRoomsNumber.addEventListener('change', ifRoomCapacityChange);
adGuestsNumber.addEventListener('change', ifRoomCapacityChange);

adForm.addEventListener('submit', (evt) => {
  if (!adGuestsNumber.checkValidity()) {
    adGuestsNumber.style = 'box-shadow: 0 0 2px 2px red';
    evt.preventDefault();
  }
});
