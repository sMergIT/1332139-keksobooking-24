const FILE_TYPES = ['jpg', 'jpeg', 'png'];

const avatarChooser = document.querySelector('.ad-form__field input[type=file]');
const avatarPreview = document.querySelector('.setup-user-pic');
const avatarPreviewClone = avatarPreview.cloneNode(true);
const fileChooser = document.querySelector('.ad-form__upload input[type=file]');
const filePreview = document.querySelector('.ad-form__photo');

avatarChooser.addEventListener('change', () => {
  const file = avatarChooser.files[0];
  const fileName = file.name.toLowerCase();
  const matches = FILE_TYPES.some((card) => fileName.endsWith(card));

  if (matches) {
    avatarPreview.src = URL.createObjectURL(file);
  }
});

fileChooser.addEventListener('change', () => {
  const file = fileChooser.files[0];
  const fileName = file.name.toLowerCase();
  const matches = FILE_TYPES.some((card) => fileName.endsWith(card));

  if (matches) {

    avatarPreviewClone.src = URL.createObjectURL(file);
    filePreview.append(avatarPreviewClone);
  }
});

const onClearPreview = () => {
  avatarPreview.src = 'img/muffin-grey.svg';
  avatarPreviewClone.remove();
};

export {
  onClearPreview
};
