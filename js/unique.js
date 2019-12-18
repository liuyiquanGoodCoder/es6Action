var users = [{
    id:1,name:"a"
 },{
    id:2,name:"a"
 },{
    id:3,name:"b"
 },{
    id:4,name:"v"
 }]

 Array.prototype.unique = function(){
     var res;
     this.map(item => {
         this[item.id - 1] = item.name
     })

     res = new Set(this)
     console.log("new Set对象",res)

     res = Array.from(new Set(this));
     return res;
 }
 console.log(users.unique())