var merge = require('lodash').merge;
var baseConfig = require('./base').config;
var configurator = require('./base').configurator;

var prod = {
    name: 'book-inventory-micro-krk',
    config_vars: {
        MONGOLAB_URI: process.env.MONGOLAB_URI,
        PORT: 80,
        NAME: 'prod-edited'
    },
    addons: {},
    collaborators: [
        'krzysztof.rudowski@schibsted.pl',
        'michal.apanowicz@schibsted.pl',
        'wojciech.sromek@schibsted.pl'
    ],
    log_drains: ['syslog://data.logentries.com:13636']
};

var config = merge({}, baseConfig, prod);

configurator(config);
