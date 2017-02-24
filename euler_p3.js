const num = 600851475143;
let temp = num;
let factor = 0;

let counter = 2;
while (counter * counter <= temp) {
  if (temp % counter === 0) {
    temp = temp / counter;
    factor = counter;
  } else {
    counter = counter === 2 ? 3 : counter + 2;
  }
}

if (temp > factor) {
  factor = temp;
}

console.log(factor);
