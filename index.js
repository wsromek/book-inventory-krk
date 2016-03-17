var stockRepo = require('./repositories/stockRepository');
var app = require('./app')(stockRepo(process.env.MONGOLAB_URI || 'mongodb://localhost:27017/book_inventory_store'));

app.listen(process.env.PORT || 3000, function() {
    console.log('Example app listening on port 3000!');
});
