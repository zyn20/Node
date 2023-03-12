const express = require('express')
const path = require('path')
const app = express()


const filepath=path.resolve(__dirname,'./express-basics/index.html')//path of my html file
//setting up statics and middleware
app.use(express.static('./public'))//just give  path where assets are present not file name
app.get('/',(req,res)=>
{
  res.sendFile(filepath)

})



//app.all it contain all the methods
app.all('*',(req,res)=>{
res.status(404).send('<h1>Resource not found</h1>')

})






app.listen(5000,()=>{
console.log('Server is Listening on port 5000...')

})

//Basic methods in express
//app.get (default)
//app.post
//app.put
//app.delete
//app.all
//app.use(responsible for middleware)
//app.listen

