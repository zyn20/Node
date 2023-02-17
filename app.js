// //return the filename
// console.log(__filename)
// var count=0;

// function fun()
// {
//     var stop=setInterval(fun,100)
//     count=count+1;
//     console.log('This is the Function');
//     clearInterval(stop)

// }
let names = require("./names");
let fun = require("./function");

fun(names.zain);
fun(names.hamza);

require("./display");
