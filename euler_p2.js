const value = 10; //change the value
const numArray = [...Array(value).keys()];
const fibonacci = (ele)=> {
  if (ele <= 1) return ele;
  else return fibonacci(ele - 1) + fibonacci(ele - 2);
};

const sum = numArray.map(n=>fibonacci(n)).reduce(
	(sum, num)=> num % 2 === 0 ? sum + num : sum
);
console.log(sum);

/* note to self redo it with someother method, recursion hurts performance in here */
