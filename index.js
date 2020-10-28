const http = require('http')

var routes = {
    '/': function index (request, response) {
        response.writeHead(200);
        response.end('Bravo !');
    },
    '/info': function foo (request, response) {
        response.writeHead(200);
        response.end('Bravo ! tu es sur la route "info"');
    },
    '/contact': function foo (request, response) {
        response.writeHead(200);
        response.end('Bravo ! tu es sur la route "contact"');
    },
    '/blog': function foo (request, response) {
        response.writeHead(200);
        response.end('Bravo ! tu es sur la route "blog"');
    }
}

http.createServer(function (request, response) {

    if (request.url in routes) {
        return routes[request.url](request, response);
    }

    response.writeHead(404);
    response.end(http.STATUS_CODES[404]);

}).listen(7777,()=>{
    console.log(`Le serveur tourne sur :http://localhost:7777/`)
});