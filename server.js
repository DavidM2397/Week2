//import http module
var https = require('http');

function onRequest(request, response){
    response.writeHead(200, {'Content-Type':'text/plain'});
    response.write('Hello David Mollah 200402397');
    response.end();
}
//create server to run on port 8000
https.createServer(onRequest).listen(8000);