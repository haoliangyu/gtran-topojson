'use strict';

var promiseLib = require('./promise.js');
var topo = require('topojson');

var Promise, topology;

exports.setPromiseLib = setPromiseLib;;

exports.fromGeoJson = function(geojson) {
    if (!Promise) { setPromiseLib(); }

    var promise = new Promise(function(resolve,reject) {
        var topology = topo.topology({
            collection: geojson
        }, {
            "property-transform": function(object) { return object.properties; }
        });

        resolve(topology);
    });

    return promise;
};

function setPromiseLib(lib) {
    Promise = promiseLib.set(lib);
}
