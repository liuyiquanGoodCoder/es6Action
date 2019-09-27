//combination inheritance
function SuperType(name){
    this.name = name;
    this.colors = ['red','blue','green'];
}

SuperType.prototype.sayName = function(){
    console.log(this.name);
};

function Subtype(name,age){
    //继承属性
    SuperType.call(this,name);
    this.age = age;
}

//继承方法
Subtype.prototype = new SuperType();
Subtype.prototype.constructor = Subtype;
Subtype.prototype.sayAge = function() {
    console.log(this.age);
};

let instance1 = new Subtype('Nico',29);
instance1.colors.push('black');
console.log('intance1 color:' + instance1.colors);
instance1.sayName()
instance1.sayAge();

let instance2 = new Subtype('Greg',98);
instance2.colors.pop();
console.log('intance2 color:' + instance2.colors);
instance2.sayName()
instance2.sayAge();