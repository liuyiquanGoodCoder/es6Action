/* function bar(x=2,y=x){
	return [x,y];
}

bar(); */

//块级作用域
/* function f(){
	console.log('I am outside')
	
}

(function(){
	if(false){
		function f(){
			console.log('I am inside!')
		}
	}
	
	f();
}()) */

//es6大括号 下面代码报错，let只能出现在当前作用域的顶层
/* if(true) let x = 1;
console.log(x) */

//顶层对象属性
/* var a = 1;
// 如果在 Node 的 REPL 环境，可以写成 global.a
// 或者采用通用方法，写成 this.a
console.log(window.a)

let b = 1;

console.log(window.b) */