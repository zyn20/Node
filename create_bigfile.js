const {writeFileSync}=require('fs');
for(let i=0;i<100000;i++)
{
    writeFileSync('./content/big.txt',`Zain is copy number ${i}\n`,{flag:'a'})
}
//The role of flag a is to append the the file instead of overwriting 
//with flag a output will be like this
// 1
// 2
// 3
// 3

// but with flag output will be like 
// 999



const { createReadStream } = require("fs");
const stream = createReadStream("./content/names.txt",{ highWaterMark:100000,encoding:'utf8'});
// default 64kb
// last buffer - remainder
stream.on("data", (result) => {
  console.log(result);
});

//The 'data' parameter is a predefined parameter name for the 'data' event that is emitted by Node.js when a chunk of data is read from a stream. The result parameter in your example code represents the actual data that is read from the file, and its value is determined by the Node.js runtime.
stream.on('error',(err)=>
{
    console.log(err);
})