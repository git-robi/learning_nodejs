const http = require('http');

const server = http.createServer((req, res) => {

    res.setHeader('Content-Type', 'application/json');

    let message;
    switch(req.method)
    {
        case 'POST':
            message = '{"message" = "POST response"}';
            res.statusCode = 200;
            break;
        case 'GET':
            message = '{"message" = "GET response"}';
            res.statusCode = 200;
            break;
        case 'PATCH':
            message = '{"message" = "PATCH response"}';
            res.statusCode = 200;
            break;
        case 'DELETE':
            message = '{"message" = "DELETE response"}';
            res.statusCode = 200;
            break;
        default:
            message = '{"message" = "Unsupported request method"}';
            res.statusCode = 400;
            break;
    }
    res.write(message);
    res.end();
});

server.listen(3000, 'localhost', () => {

    console.log('listening for requests on port 3000');
});