const http = require('http')
const fs = require('fs')
const server = http.createServer(function(req,res)
{
  
    const text = fs.readFileSync('./content/demo.txt',{highWaterMark:65536,encoding:'utf8'})
    res.end(text)
})
server.listen(5000,()=>
{
    console.log('Server is Listening on port 5000')
})

The code below will have better performance because it get the data from the file in the form of chunks instead of complete data directly into the memory
const http = require('http');
const fs = require('fs');

const server = http.createServer((req, res) => {
  const stream = fs.createReadStream('./content/big.txt', { highWaterMark: 100000, encoding: 'utf8' });
  stream.pipe(res);
});

server.listen(5000, () => {
  console.log('Server is listening on port 5000');
});