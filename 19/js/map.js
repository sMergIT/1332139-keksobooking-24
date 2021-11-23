import { getData } from './backend.js';
import { getCardMarkup } from './card.js';
import { onFilterChangeSelect } from './filter.js';
import { onResetForm, onSetFormReset } from './form.js';
import { activatePopupForm, activateMapFilters } from './popup-form.js';

const markersLayer = L.layerGroup();
const addressInput = document.querySelector('#address');
const map = L.map('map-canvas').on('load', () => {
  addressInput.value = '35.681729, 139.753927';
  activatePopupForm();
  getData(onSuccess, onFilterChangeSelect);
})
  .setView({
    lat: 35.681729,
    lng: 139.753927,
  }, 13);

L.tileLayer(
  'https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png',
  {
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
  },
).addTo(map);

const mainPinIcon = L.icon({
  iconUrl: 'img/main-pin.svg',
  iconSize: [52, 52],
  iconAnchor: [26, 52],
});

const mainPin = L.marker(
  {
    lat: 35.6895,
    lng: 139.692,
  },
  {
    draggable: true,
    icon: mainPinIcon,
  },
);
mainPin.addTo(map);


const createMarkers = (cards) => {
  cards.map((card) => {
    const icon = L.icon({
      iconUrl: 'img/pin.svg',
      iconSize: [40, 40],
      iconAnchor: [20, 40],
    });
    const marker = L.marker({
      lat: card.location.lat,
      lng: card.location.lng,
    },
    {
      icon,
    });
    marker
      .addTo(markersLayer)
      .bindPopup(getCardMarkup(card));
  });
  markersLayer.addTo(map);
};

const resetMapAndMarker = () => {
  mainPin.setLatLng({
    lat: 35.6895,
    lng: 139.692,
  });

  map.setView({
    lat: 35.6895,
    lng: 139.692,
  }, 10);
  map.closePopup();
  addressInput.value = `${mainPin.getLatLng().lat.toFixed(5)}, ${mainPin.getLatLng().lng.toFixed(5)}`;
};

function onSuccess(cards) {
  createMarkers(cards);
  activateMapFilters();
}

//Нужно добавить текст ошибки
const onError = (message) => {
  const mainPage = document.querySelector('main)');
  const errorTemplate = document.querySelector('#error').content.querySelector('.error');
  const errorElement = errorTemplate.cloneNode(true);
  const errorMessage = errorElement.querySelector('.error__message');
  const errorButton = errorElement.querySelector('.error__button');

  errorElement.classList.add('notification');
  errorMessage.textContent = message;
  errorButton.addEventListener('keybord', onSetFormReset);
  mainPage.appendChild(errorElement);
};

const removePins = () => {
  markersLayer.clearLayers();
};

mainPin.on('move', (evt) => {
  const mainPinCoordinates = (evt.target.getLatLng());
  addressInput.value = `${mainPinCoordinates.lat.toFixed(5)}, ${mainPinCoordinates.lng.toFixed(5)}`;
});
onResetForm();

export { resetMapAndMarker, createMarkers, removePins, onError };
