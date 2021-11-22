import { createMarkers, removePins } from './map.js';

const RENDER__DELAY = 500;
const QUANTITY__ELEMENTS = 10;
const ANY__RANGE = 'any';
const priceRange = {
  low: { min: 0, max: 10000 },
  middle: { min: 10000, max: 50000 },
  high: { min: 50000, max: 1000000 },
};

const onFilterSelect = document.querySelector('.map__filters');
const housingTypeSelect = onFilterSelect.querySelector('#housing-type');
const housingPriceSelect = onFilterSelect.querySelector('#housing-price');
const housingRoomSelect = onFilterSelect.querySelector('#housing-rooms');
const housingGuestsSelect = onFilterSelect.querySelector('#housing-guests');

const onCheckFeatures = (card) => {
  const featuresSelect = onFilterSelect.querySelectorAll('input[name="features"]:checked');
  if (!card.offer.features) {
    return false;
  }
  return Array.from(featuresSelect).every((feature) => card.offer.features.includes(feature.value));
};

const onCheckType = (card) => {
  if (housingTypeSelect.value === ANY__RANGE) {
    return true;
  }
  return card.offer.type === housingTypeSelect.value;
};

const onCheckPrice = (card) => {
  if (housingPriceSelect.value === ANY__RANGE) {
    return true;
  }
  return card.offer.price >= priceRange[housingPriceSelect.value].min && card.offer.price <= priceRange[housingPriceSelect.value].max;
};

const onCheckNumberRooms = (card) => {
  if (housingRoomSelect.value === ANY__RANGE) {
    return true;
  }
  return card.offer.rooms === +housingRoomSelect.value;
};

const onCheckGuests = (card) => {
  if (housingGuestsSelect.value === ANY__RANGE) {
    return true;
  }
  return card.offer.guests === +housingGuestsSelect.value;
};

const onFilterChangeSelect = (cardArray) => {
  onFilterSelect.addEventListener('change', _.debounce(() => {
    const resultFilter = cardArray.filter((offer) => onCheckFeatures(offer) && onCheckType(offer) && onCheckPrice(offer) && onCheckNumberRooms(offer) && onCheckGuests(offer));
    removePins();
    createMarkers(resultFilter.slince(0, QUANTITY__ELEMENTS));
  },
  RENDER__DELAY,
  ));
};

export { onFilterChangeSelect, QUANTITY__ELEMENTS};
