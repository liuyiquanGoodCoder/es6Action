const PENDING = "pending";
const FULFLLED = "fulfilled";
const REJECTED = "rejected";

function Promise(excutor){
    let that = this;
    that.status = PENDING;
    that.value = undefined;
    that.reason = undefined;
    that.onFulfilledCallbacks = [];
    that.onRejectedCallbacks = [];

    function resolve(value){
        if(value instanceof Promise){
            return value.then(resolve,reject);
        }

        setTimeout(() => {
            if (that.status == PENDING) {
                that.status = FULFLLED;
                that.value = value;
                that.onRejectedCallbacks.forEach(Element => Element(that.value));
            }
        });
    }

    function reject(reason){
        setTimeout(() => {
            
        })
    }






}