var util = require('util');

module.exports = function(stockRepository) {
    return {
        helloWorld: function(req, res, next) {
            res.send('Hello World!');
        },
        putBook: function(req, res, next) {
            var isbn = req.body.isbn;
            var count = req.body.count;

            stockRepository.stockUp(isbn, count).then(function(result) {
                res.json({isbn: req.body.isbn, count: req.body.count});
            }).catch(next);
        },
        getBookByISBN: function(req, res, next) {
            stockRepository.getCount(req.params.isbn).then(function(result) {
                if (result !== null) {
                    res.format({
                        html: function() {
                            res.status(200).send(
                                util.format('<p class="copiesLeft">%s</p>', result)
                            );
                        },
                        json: function() {
                            res.json({count: result});
                        }
                    });
                } else {
                    next();
                    //res.status(404).json({error: 'No book with ISBN: ' + req.params.isbn});
                }
            }).catch(next);
        },
        getBooks: function(req, res, next) {
            stockRepository.findAll().then(function(docs) {
                res.json(docs);
            }).catch(next);
        }
    };
};
