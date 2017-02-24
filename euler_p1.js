const numArray = [...Array(1000).keys()];
const sum = numArray.filter((el)=> (el % 3 === 0 || el % 5 === 0))
	        					.reduce((total, num)=> total + num);

console.log(sum);

/*making it wihtout filter */
const ans = numArray.reduce(
	(total, num) => (num % 3 === 0 || num % 5 === 0) ? num + total : total
);
