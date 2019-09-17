let person1 = {
	toLocaleString:function(){
		return "Niko"
	},
	
	toString:function(){
		return "Nich"
	}
};

let person2 = {
	toLocaleString:function(){
		return "Grigo"
	},
	
	toString:function(){
		return "Greg"
	}
};

let people = [person1,person2];
console.log("people:"+people);
console.log("people.toString:"+people.toString());
console.log("people.toLocaleString:"+people.toLocaleString());