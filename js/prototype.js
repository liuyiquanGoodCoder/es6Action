function Person(){

}
Person.prototype.name = "frontier";
Person.prototype.age = 29;
Person.prototype.job = "software engineer"
Person.prototype.sayName = function(){
    alert(this.name);
};

let keys = Object.keys(Person.prototype);
console.log(keys);
let p1 = new Person();
//p1.name = "Ted"
//p1.age = "000";
let p1keys = Object.keys(p1);
//let p1ProKeys = Object.keys(p1.prototype); error 访问不到prototype,只是一个指针（需深刻理解）
console.log(p1keys);
console.log(`p1ProKeys:$(p1ProKeys)`);
