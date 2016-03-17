var stockRepo = require('./repositories/stockRepository');
var app = require('./app')(stockRepo);

app.listen(3000, function() {
    console.log('Example app listening on port 3000!');
});
