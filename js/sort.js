let compare = function(value1,value2){
	if (value1 < value2) {
		return -1;
	} else if (value1 > value2) {
		return 1;
	} else{
		return 0;
	}
}

let values = [1,6,7,5,12,52,72,100];
values.sort(compare);
console.log(values);