const adForm = document.querySelector('.ad-form');
const adFormElement = adForm.querySelectorAll('.ad-form__element');
const mapFilters = document.querySelector('.map__filters');
const mapFiltersElementAll = mapFilters.querySelectorAll('.map__filter');
const mapFiltersElementFeatures = mapFilters.querySelector('.map__features');
//Активация формы
const activatePopupForm = () => {
  adForm.classList.remove('ad-form--disabled');
  adFormElement.forEach((adFormElements) => {
    adFormElements.removeAttribute('disabled', '');
  });
};

const activateMapFilters = () => {
  mapFilters.classList.remove('map__filters--disabled');
  mapFiltersElementAll.forEach((mapFiltersElementAlls) => {
    mapFiltersElementAlls.removeAttribute('disabled', '');
  });
  mapFiltersElementFeatures.removeAttribute('disabled', '');
};

//Деактивация формы
const disablePopupForm = () => {
  adForm.classList.add('ad-form--disabled');
  adFormElement.forEach((adFormElements) => {
    adFormElements.setAttribute('disabled', '');
  });
};

const disableMapFilters = () => {
  mapFilters.classList.add('map__filters--disabled');
  mapFiltersElementAll.forEach((mapfiltersElementAlls) => {
    mapfiltersElementAlls.setAttribute('disabled', '');
  });
  mapFiltersElementFeatures.setAttribute('disabled', '');
};
export { activatePopupForm, activateMapFilters, disablePopupForm, disableMapFilters };
