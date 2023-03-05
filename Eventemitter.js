
// const EventEmitter = require('events');
// const customEimtter = new EventEmitter();

// customEimtter.on('response',(name,id) =>{

// console.log(`data received as Name = ${name} and Id = ${id}`);

// })
// customEimtter.on('response',()=>{

// console.log('some other logic')


// })
// customEimtter.emit('response','Zain Ul abideen','20F-0277')

// //customEmitter contains 2 main methods 
// //on() and emit()
// //on()is used to register any event while emit is used to tigger that event that we have registered earlier



const http =  require('http');
const server = http.createServer();
server.on('request',(request,response)=>
{
    response.end('Welcome')
})

server.listen(5000,()=>
{
    console.log('Server is listening on port 5000')
})