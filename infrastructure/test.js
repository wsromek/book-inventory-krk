var merge = require('lodash').merge;
var baseConfig = require('./base').config;
var configurator = require('./base').configurator;

var test = {
    name: 'book-inventory-micro-krk-test',
    config_vars: {
        MONGOLAB_URI: process.env.MONGOLAB_URI,
        PORT: 80,
        NAME: 'test-edited-2'
    },
    addons: {},
    collaborators: [
        'krzysztof.rudowski@schibsted.pl',
        'michal.apanowicz@schibsted.pl',
        'wojciech.sromek@schibsted.pl'
    ]
};

var config = merge({}, baseConfig, test);

configurator(config);
