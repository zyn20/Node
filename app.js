const express = require('express');
const app = express();
// using the middlewares
// Request->Middleware->Response

const logger = () =>{
  const method = req.method;
  const url = req.url;
  const time = new Date().getFullYear();
  console.log(method,url,time);

}


app.get('/',logger,(req,res)=>
{
 

  res.send('Home')
})

app.get('/about',logger,(req,res)=>
{
  const method = req.method;
  const url = req.url;
  const time = new Date().getFullYear();
  console.log(method,url,time);

  res.send('About')
})
app.get('/contactus',logger,(req,res)=>{
  const method = req.method;
  const url = req.url;
  const time = new Date().getFullYear();
  console.log(method,url,time);

  res.send('Contact Us')
})
app.listen(3000,()=>{
  console.log('Server is Listening at port 3000')
})
