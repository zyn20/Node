const express = require("express");
const app = express();
const product = require("./data/products");

app.get("/", (req, res) => {
  res.send(
    '<h1>Welcome to Home Page</h1> <a href="/api/products">Products</a>'
  );
});
app.get("/api/products/:productID", (req, res) => {
  // const newProducts = product.products.map((pro)=>
  // {
  //   const {id,title,price,stock}= pro;
  //   return {id,title,price,stock}

  // })
  console.log(req.params);
  //Getting value against id as parameter
  const { productID } = req.params;
  const singleproduct = product.products.find(
    (pro) => pro.id === Number(productID)
  );
  if (!singleproduct) {
    return res.status(404).send("Product does not exist");
  }

  res.json(singleproduct);
});
app.get("/api/products/:productID/reviews/:reviewID", (req, res) => {
  console.log(req.params);
  res.send("Welcome to review Page");

});
app.get("/api/v1/query",(req,res)=>
{
  const {search,limit} = req.query;
  // spread operator (...) allows us to quickly copy all or part of an existing array or object into another array or object.
  let sortedProduct = [...product.products]
  if(search)
  {
    sortedProduct = sortedProduct.filter((pro)=>
    {
      return pro.title.startsWith(search);
    })
  }
  console.log(req.query)
  if(limit)
  {
    sortedProduct = sortedProduct.slice(0,Number(limit))
  }
  if(sortedProduct.length < 1)
  {
    //res.status(200).send('No Product Found')
    return res.status(200).json({success:true,data:[]})
  }
 return  res.status(200).json(sortedProduct);
  
})
app.listen(5000, () => {
  console.log("Server is listening at port 5000");
});

