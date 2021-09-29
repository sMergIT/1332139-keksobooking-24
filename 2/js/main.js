function randomInteger(min,max) {
  // случайное число от min до (max+1)
  const number = min + Math.random() * (max + 1 - min);
  return Math.floor(number);
}
alert (randomInteger(0 , 99));

const decimal = 12345.789;
decimal.toFixed ( 3 );
alert (decimal);
