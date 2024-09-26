const {createServer} = require('node:http');

const server = createServer((req, res) => {
    res.statusCode(200);

    res.end("Hi");
})

server.listen(3000, '127.0.0.1', ()=>{
    //log out that the server is running on 
    console.log('Server is running on port 3000');
    
})