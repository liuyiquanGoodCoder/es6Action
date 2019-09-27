function factorial(num) {
    if (num <= 1) {
        return 1;
    } else {
        return num * factorial(num-1)
    }
}

function factorial1(num) {
    if (num <= 1) {
        return 1;
    } else {
        //arguments.callee 指向正在执行函数的指针，严格模式下失效
        return num * arguments.callee(num-1)
    }
}

let anotherFactoria = factorial;
//error 只是一个浅拷贝，anotherFactorial指向了factorial
factorial = null;
console.log(anotherFactoria(4));