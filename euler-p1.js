var numArray = [...Array(1000).keys()];
var sum = numArray.filter((el)=> (el%3===0 || el%5===0) )
	        . reduce((total, num)=> total+num)

console.log(sum)

/*making it wihtout filter */
var ans = numArray.reduce(
	(total,num) => (num%3===0 || num%5 ===0)? num+total : total
)
