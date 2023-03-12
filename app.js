const express = require('express')
const app = express();
const product = require('./data/products')


app.get('/',(req,res)=>{

 
  res.send('<h1>Welcome to Home Page</h1> <a href="/api/products">Products</a>')

}) 
app.get('/api/products/:productID',(req,res)=>
{
  // const newProducts = product.products.map((pro)=>
  // {
  //   const {id,title,price,stock}= pro;
  //   return {id,title,price,stock}
    
  // })
  //console.log(req.params)
//Getting value against id as parameter
const {productID} = req.params;
const singleproduct = product.products.find((pro)=> pro.id ===Number(productID)) 
 res.json(singleproduct)


})


app.listen(5000,()=>{

console.log('Server is listening at port 5000')

})