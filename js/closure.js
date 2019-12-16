// var fn;
// function foo(){
//     var a = 2;

//     function baz(){
//         console.log(a)
//     }

//     fn = baz;
// }

// function bar(){
//     fn();
// }

// foo()
// bar()

for(var i=1;i<5;i++){
    (function(i){
        setTimeout(function(){
            console.log(i)
        },i*5000)
        console.log(i)
    })(i)
}