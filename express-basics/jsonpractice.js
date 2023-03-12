const express = require('express')
const app = express();
const stu = require('./data/products')

app.get('/',(req,res)=>{

 
  res.json(stu)


})


app.listen(5000,()=>{

console.log('Server is listening at port 5000')

})