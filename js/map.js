import { getMarkupSimilarAnnouncements } from './card.js';
import { announcements } from './data.js';
import { activePopupForm } from './popup-form.js';

const map = L.map('map-canvas').on('load', () => {
  activePopupForm();
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
  iconUrl: '../img/main-pin.svg',
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

const setPins = () => {
  announcements.map((card) => {
    const icon = L.icon({
      iconUrl: '../img/pin.svg',
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
      .bindPopup(getMarkupSimilarAnnouncements(card));
  });
};
const addressInput = document.querySelector('#address');
document.querySelector('#address').value = '35.6895, 139.692';
const setMainMarkerAddress = () => mainPin.on('moveend', (evt) => {
  const mainPinCoordinates = (evt.target.getLatLng());
  addressInput.value = `${mainPinCoordinates.lat.toFixed(5)}, ${mainPinCoordinates.lng.toFixed(5)}`;
});

export { setPins, setMainMarkerAddress };

