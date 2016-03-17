var express = require('express');
var bodyParser = require('body-parser');
var middleware = require('./middleware');

module.exports = function(stockRepository) {
    var app = express();
    var routes = require('./routes')(stockRepository);

    app.use(bodyParser.json());

    app.get('/', (req, res, next) => res.send('Hello test world'));
    app.post('/stock', routes.putBook);
    app.get('/stock/:isbn', routes.getBookByISBN);
    app.get('/stock', routes.getBooks);

    app.use(middleware.clientError);
    app.use(middleware.serverError);

    return app;
};
