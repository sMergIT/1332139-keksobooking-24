function getRandomInteger(min, max) {
  // случайное число от min до (max+1)
  const number = min + Math.random() * (max + 1 - min);
  return Math.floor(number);
}

function getRandomFractional(min, max, rate) {
  // случайное число от min до (max+1)
  const decimal = min + Math.random() * (max + 1 - min);
  return decimal.toFixed(rate);
  //убирает знаки после запятой
}

export {getRandomInteger,getRandomFractional};
