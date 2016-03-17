var heroin = require('heroin-js');

var configurator = heroin(process.env.HEROKU_API_TOKEN, {
    debug: false
});

var prod = {
    name: 'book-inventory-micro-krk',
    region: 'eu',
    maintenance: false,
    stack: 'cedar-14',
    config_vars: {
        MONGOLAB_URI: process.env.MONGOLAB_URI,
        PORT: 80,
        NAME: 'test'
    },
    addons: {},
    collaborators: [
        'krzysztof.rudowski@schibsted.pl',
        'michal.apanowicz@schibsted.pl',
        'wojciech.sromek@schibsted.pl'
    ],
    features: {
        'runtime-dyno-metadata': {
            enabled: false
        },
        'log-runtime-metrics': {
            enabled: false
        },
        'http-session-affinity': {
            enabled: false
        },
        preboot: {
            enabled: false
        },
        'http-shard-header': {
            enabled: false
        },
        'http-end-to-end-continue': {
            enabled: false
        }
    },
    formation: [{
        process: 'web',
        quantity: 1,
        size: 'Free'
    }],
    log_drains: [],
    domains: ['book-inventory-micro-krk.herokuapp.com']
};

configurator(prod);
