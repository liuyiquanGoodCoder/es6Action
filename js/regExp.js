var re = null;
for (var i=0;i<10;i++) {
	re = /cat/g;
	var test = re.test('catastrophe');
	console.log(test);
}

for (var i=0;i<10;i++) {
	re = new RegExp('cat','g');
	var test = re.test('catastrophe');
	console.log(test);
}