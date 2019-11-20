for (let codePoint of 'foo') {
	console.log(codePoint);
}

let text = String.fromCodePoint(0x20BB7);
for (let i = 0;i<text.length;i++) {
	console.log(text[i]);
}

for (let i of text) {
	console.log(i);
}

console.log(String.raw`Hi\n${2+3}!`)
console.log(String.raw`Hi\\n`)

String.raw = function(strings,...values){
	let output = '';
	let index;
	for(index = 0;index<values.length;index++){
		output += strings.raw[index] + values[index];
	}

	output += strings.raw[index]

	return output
}

let s = "𠮷";
console.log(s.length);

let matchWord = 'Hello world!';

//endsWith的行为与其他两个方法有所不同。它针对前n个字符，而其他两个方法针对从第n个位置直到字符串结束。
console.log(matchWord.length)
console.log(matchWord.includes('World'))
console.log(matchWord.startsWith('world',6))
console.log(matchWord.endsWith('world',11))

let padx = 'x';
console.log(padx.padStart(5,'ab'))
console.log(padx.padEnd(5,'ab'))
//如果用来补全的字符串与原字符串，两者的长度之和超过了最大长度，则会截去超出位数的补全字符串。
console.log('12'.padStart(10, 'YYYY-MM-DD'))

const trimS = '   abc   ';
console.log(trimS.trim());
//console.log(trimS.trimStart());
//console.log(trimS.trimEnd());

let regex = new RegExp('xyz','i');
var regexEs5 = new RegExp(/xyz/ig,'i')
