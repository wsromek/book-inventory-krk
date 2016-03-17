var MongoClient = require('mongodb').MongoClient;

module.exports = function(url) {
    var collectionPromise = MongoClient.connect(url).then(function(db) {
        return db.collection('books-wojtek-sromek');
    });

    return {
        findAll: function() {
            return collectionPromise.then(function(collection) {
                return collection.find({}).toArray();
            });
        },
        stockUp: function(isbn, count) {
            return collectionPromise.then(function(collection) {
                return collection.updateOne(
                    {
                        isbn: isbn
                    },
                    {
                        isbn: isbn,
                        count: count
                    },
                    {
                        upsert: true
                    }
                );
            });
        },
        getCount: function(isbn) {
            return collectionPromise.then(function(collection) {
                return collection.find({isbn: isbn}).limit(1).next();
            }).then(function(docs) {
                return docs !== null ? docs.count : null;
            });
        }
    };
};
