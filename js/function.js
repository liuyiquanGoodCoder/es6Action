// let createComparisonFunction = function (propertyName){
// 	return function(object1,object2){
// 		let value1 = object1[propertyName];
// 		let value2 = object2[propertyName];
		
// 		if (value1 < value2) {
// 			return -1
// 		} else if(value1 > value2){
// 			return 1;
// 		}else{
// 			return 0;
// 		}
// 	};
// }

// foo()

// var foo;

// function foo(){
// 	console.log(1);
// }

// foo = function(){
// 	console.log(2)
// }

// foo()

// var a = true;

// if (a) {
// 	function foo(){console.log('a')}
// }else{
// 	function foo(){console.log('b')}
// }

// var x = 1;
// test()

// function test(){
// 	console.log(x)
// 	var x = '-------------'
// 	console.log(x)
// }

function foo() {
	setTimeout(() => {
	  console.log('id:', this.id);
	}, 100);
}


	setTimeout(function(){
	  console.log('id:', this.id);
	}, 100);

  
	var id = 21;
  
foo.call({ id: 42 });

console.log(this.id);