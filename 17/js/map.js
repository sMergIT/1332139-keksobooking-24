import { getMarkupInput } from './card.js';
import { inputDataApi } from './main.js';
import { activatePopupForm } from './popup-form.js';
const markerGroup = L.layerGroup();
const addressInput = document.querySelector('#address');
const map = L.map('map-canvas').on('load', () => {
  addressInput.value = '35.681729, 139.753927';
  activatePopupForm();
})
  .setView({
    lat: 35.681729,
    lng: 139.753927,
  }, 10);

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

inputDataApi.map((card) => {
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
    .addTo(map)
    .bindPopup(getMarkupInput(card));
});

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
};

const onRemovePins = () => {
  markerGroup.clearLayers();
};

mainPin.on('move', (evt) => {
  const mainPinCoordinates = (evt.target.getLatLng());
  addressInput.value = `${mainPinCoordinates.lat.toFixed(5)}, ${mainPinCoordinates.lng.toFixed(5)}`;
});

export { resetMapAndMarker, onRemovePins };
