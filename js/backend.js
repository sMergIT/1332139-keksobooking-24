const getData = () =>
  fetch('https://24.javascript.pages.academy/keksobooking/data',
    {
      method: 'GET',
    },
  )
    .then((response) => {
      if (response.ok) {
        return response.json();
      }
      throw new Error('Ошибка загрузки');
    })
    .catch(() => {
      throw new Error('Ошибка загрузки');
    });

const sendData = (onSucces, onFail, body) => {
  fetch('https://24.javascript.pages.academy/keksobooking',
    {
      method: 'POST',
      body,
    })
    .then((response) => {
      if (response.ok) {
        onSucces();
      } else {
        onFail();
      }
    })
    .catch(onFail);
};

export { getData, sendData };
