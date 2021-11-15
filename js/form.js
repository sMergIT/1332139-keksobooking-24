const selectionOfGuestRooms = {
  1: [1],
  2: [1, 2],
  3: [1, 2, 3],
  100: [0],
};

const adForm = document.querySelector('.ad-form');
const adRoomsNumber = adForm.querySelector('#room_number');
const adGuestsNumber = adForm.querySelector('#capacity');

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
adGuestsNumber.addEventListener('change', onRoomCapacityChange);
adRoomsNumber.addEventListener('change', onRoomCapacityChange);


adForm.addEventListener('submit', (evt) => {
  if (!adGuestsNumber.checkValidity()) {
    evt.preventDefault();
  }
});
