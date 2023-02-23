const http = require('http')
const server = http.createServer((request,response)=>{
if(request.url=='/')
{
    response.write("Welcome to my first Node js Site");
response.end();
    
}
else if (request.url=='/about')
{
    response.write("Welcome to my about section");
    response.end();
}
else
{
    response.end(
        `
        <h1>The page you are trying to access does not exist</h1>
        <a href="/">Back to Home</a>

        `


    )

}


})

server.listen(5000);


