

const http = require('http')
const server = http.createServer((request,response)=>{
    if(request.url=='/')
    {
        response.write('Welcome to home page')
        response.end();
    }
    else if (request.url==='/about')
    {
        
        response.write('Welcome to About page')
        response.end();
    }
    else if (request.url==='/contacts')
    {
        response.write('Welcome to About page')
        response.end();
    }
    else if (request.url==='/services')
    {
        response.write('Welcome to services page')
        response.end();
    }
    else{
        response.end(

            `
            <h1>This page not found</h1>
            <a href="/">Back to Home Page</a>
            
            `

        )
    }
})

server.listen(5000,()=>
{
    console.log('Server is listening on port 5000')
})







