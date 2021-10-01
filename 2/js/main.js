function randomInteger(min, max) {
  // случайное число от min до (max+1)
  const number = min + Math.random() * (max + 1 - min);
  return Math.floor(number);
}
alert(randomInteger(0, 99));


function randomFractional(min, max) {
  // случайное число от min до (max+1)
  const decimal =  min + Math.random() * (max + 1 - min);
  return decimal.toFixed(3);
  //убирает знаки после запятой
}
alert(randomFractional(0, 3.5))
