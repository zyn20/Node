const express = require('express');
const app = express();
const logger = require('./logger')
const auth = require('./goToauthorize')
const morgan = require('morgan')
// using the middlewares
// Request->Middleware->Response
// We can also add multiple middleware functions by just passing the array in app.use
// we have 3 options to setup middleware
// 1-on our own app.use([logger,auth]);
// 2.built in express app.use(express.static('./public'))
// 3.Third party
// app.use(express.static('./public'))
// app.use([logger,auth]);
app.use(morgan('tiny'));

app.get('/',(req,res)=>
{
  res.send('Home')
})

app.get('/about',(req,res)=>
{
  const method = req.method;
  const url = req.url;
  const time = new Date().getFullYear();
  console.log(method,url,time);

  res.send('About')
})
app.get('/contactus',(req,res)=>{
  const method = req.method;
  const url = req.url;
  const time = new Date().getFullYear();
  console.log(method,url,time);

  res.send('Contact Us')
})
app.listen(3000,()=>{
  console.log('Server is Listening at port 3000')
})
