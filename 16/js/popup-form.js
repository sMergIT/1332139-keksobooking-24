const adForm = document.querySelector('.ad-form');
const adFormElement = adForm.querySelectorAll('.ad-form__element');
const mapFilters = document.querySelector('.map__filters');
const mapfiltersElementAll = mapFilters.querySelectorAll('.map__filter');
const mapFiltresElementFeatures = mapFilters.querySelector('.map__features');
//Активация формы
const activatePopupForm = () => {
  adForm.classList.remove('ad-form--disabled');
  mapFilters.classList.remove('map__filters--disabled');
  adFormElement.forEach((adFormElements) => {
    adFormElements.removeAttribute('disabled', '');
  });
  mapfiltersElementAll.forEach((mapFiltersElementAlls) => {
    mapFiltersElementAlls.removeAttribute('disabled', '');
  });
  mapFiltresElementFeatures.removeAttribute('disabled', '');
};
//Деактивация формы
const deactivatePopupForm = () => {
  adForm.classList.add('ad-form--disabled');
  mapFilters.classList.add('map__filters--disabled');
  adFormElement.forEach((adFormElements) => {
    adFormElements.setAttribute('disabled', '');
  });
  mapfiltersElementAll.forEach((mapfiltersElementAlls) => {
    mapfiltersElementAlls.setAttribute('disabled', '');
  });
  mapFiltresElementFeatures.setAttribute('disabled', '');
};

export { activatePopupForm, deactivatePopupForm };
