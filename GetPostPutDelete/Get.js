const express = require('express');
const { people } = require('./data/products');
const app = express();

app.get('/api/employees',(req,res)=>
{
  res.status(201).json({success:true,data:people});
})

app.listen(3000,()=>{
  console.log('Server is Listening at port 3000')
})
