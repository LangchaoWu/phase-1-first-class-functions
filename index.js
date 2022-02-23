function receivesAFunction(callback){
    callback();
}

function returnsANamedFunction(){
        return cb;
    }


const cb =() => "thing";

function returnsAnAnonymousFunction(){
    return function(){
        return "thing"
    }
}