let numbers = [1,2,3,4,5,4,3,2,1];

let everyResult = numbers.every(function(item,index,array){
	return (item > 2)
})

console.log(everyResult);

let someResult = numbers.some(function(item,index,array){
	return (item>2)
})

console.log(someResult);

let filterResult = numbers.filter(function(item,index,array){
	return (item >2)
})
console.log(filterResult);

let mapResult = numbers.map(function(item,index,array){
	return item * 2;
})

console.log(mapResult);

//归并方法
let values = [1,2,3,4,5,8];
let sum = values.reduce(function(prev,cur,index,array){
	return prev + cur
});

console.log(sum);