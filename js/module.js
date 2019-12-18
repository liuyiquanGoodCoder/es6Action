// function CoolModule(){
//     var something = "cool";
//     var another = [1,2,3];

//     function doSomething(){
//         console.log(something)
//     }

//     function doAother(){
//         console.log(another.join("!"))
//     }

//     return{
//         doSomething:doSomething,
//         doAother:doAother
//     };
// }

// var foo = CoolModule();

var foo = (function CoolModule(){
    var something = "cool";
    var another = [1,2,3];

    function doSomething(){            
        console.log(something)
    }
        
    function doAother(){
        console.log(another.join("!"))
    }
                
    return{
        doSomething:doSomething,
        doAother:doAother
    };
})();

foo.doSomething();
foo.doAother();