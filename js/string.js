for (let codePoint of 'foo') {
	console.log(codePoint);
}

let text = String.fromCodePoint(0x20BB7);
for (let i = 0;i<test.length;i++) {
	console.log(text[i]);
}

for (let i of text) {
	console.log(i);
}