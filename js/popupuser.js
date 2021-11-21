import { onSetFormReset } from './form.js';

const onEscKey = (evt) => evt.key === 'Escape' || evt.key === 'Esc';
const onClickAndKeydown = (messageType) => {
  messageType.addEventListener('click', () => {
    messageType.remove();
  });

  document.addEventListener('keydown', (evt) => {
    if (onEscKey(evt)) {
      messageType.remove();
    }
  });
};

const onShowPopupSuccess = () => {
  const successFormTemplate = document.querySelector('#success')
    .content
    .querySelector('.success');
  const successMessage = successFormTemplate.cloneNode(true);
  document.body.appendChild(successMessage);
  onClickAndKeydown(successMessage);
  onSetFormReset();
};

const onShowPopupError = () => {
  const errorFormTemplate = document.querySelector('#error')
    .content
    .querySelector('.error');
  const errorMessage = errorFormTemplate.cloneNode(true);
  document.body.appendChild(errorMessage);
  onClickAndKeydown(errorMessage);
};

export { onShowPopupSuccess, onShowPopupError };
