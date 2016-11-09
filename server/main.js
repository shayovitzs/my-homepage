//console.log(1+1)
var http = require('http');
console.log(http);

var server = http.createServer(handleRequest);
server.listen(9000);

function handleRequest (req,res){
    console.log(req.url);
}
