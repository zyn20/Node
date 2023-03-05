const http = require('http')
const fs= require('fs')
const server = http.createServer((req,res)=>
{
    const homePage= fs.readFileSync('./express-basics/index.html')
    
    const url = req.url;
    if(url==='/')
    {
        res.writeHead(200,{'content-type':'text/html'})
        res.write(homePage)
        res.end()

    }
    else if(url==='/contact')
    {
        res.writeHead(200,{'content-type':'text/html'})
        res.write('<h1>Contact us <br>03000096818</h1>')
        res.end()

    }
    else if(url==='/about')
    {
        res.writeHead(200,{'content-type':'text/html'})
        res.write('<h1>We are the Family</h1>')
        res.end()

    }
   else
   {
    res.writeHead(400,{'content-type':'text/html'})
    res.write('<h1>The page you are trying to access does not exist</h1>')
    res.write('<br> <a href = "/">Back to Main Page</a>')
    res.end()

   }
 
})

server.listen(5000,()=>{
    console.log('Server is listening on port 5000')
})